
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from './email.service';

@Injectable()
export class NotificationsService {
    constructor(
        private prisma: PrismaService,
        private emailService: EmailService,
    ) { }

    // Create in-app notification
    async create(data: {
        userId: string;
        type: string;
        title: string;
        message: string;
        quoteId?: string;
    }) {
        return this.prisma.notification.create({
            data: {
                userId: data.userId,
                type: data.type,
                title: data.title,
                message: data.message,
                quoteId: data.quoteId,
            },
        });
    }

    // Get all notifications for user
    async findAllForUser(userId: string) {
        return this.prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 50,
            include: {
                quote: {
                    select: { id: true, status: true },
                },
            },
        });
    }

    // Get unread count
    async getUnreadCount(userId: string) {
        return this.prisma.notification.count({
            where: { userId, read: false },
        });
    }

    // Mark as read
    async markAsRead(id: string, userId: string) {
        return this.prisma.notification.updateMany({
            where: { id, userId },
            data: { read: true },
        });
    }

    // Mark all as read
    async markAllAsRead(userId: string) {
        return this.prisma.notification.updateMany({
            where: { userId, read: false },
            data: { read: true },
        });
    }

    // Delete single notification
    async delete(id: string, userId: string) {
        return this.prisma.notification.deleteMany({
            where: { id, userId },
        });
    }

    // Delete all notifications for user
    async deleteAll(userId: string) {
        return this.prisma.notification.deleteMany({
            where: { userId },
        });
    }

    // === Notification Triggers ===

    // When consumer requests quote - notify builder
    async notifyQuoteRequest(quoteId: string, builderId: string, consumerName: string, message: string) {
        const builder = await this.prisma.builder.findUnique({
            where: { id: builderId },
            include: { user: true },
        });

        if (!builder) return;

        // In-app notification
        if (builder.user) {
            await this.create({
                userId: builder.user.id,
                type: 'quote_request',
                title: 'New Quote Request',
                message: `${consumerName} has requested a quote for: ${message.substring(0, 100)}...`,
                quoteId,
            });
        }

        // Email notification to builder
        await this.emailService.sendQuoteRequestNotification(
            builder.email,
            builder.name,
            consumerName,
            message,
            quoteId,
        );
    }

    // When consumer submits request - confirmation to consumer
    async notifyQuoteRequestConfirmation(
        quoteId: string,
        consumerEmail: string,
        consumerName: string,
        builderName: string,
        message: string,
    ) {
        // Email confirmation to consumer
        await this.emailService.sendQuoteRequestConfirmation(
            consumerEmail,
            consumerName,
            builderName,
            message,
        );
    }

    // When builder responds to request (accept/reject/consider)
    async notifyRequestResponse(
        quoteId: string,
        consumerEmail: string,
        consumerName: string,
        builderName: string,
        response: 'accept' | 'reject' | 'consider',
    ) {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id: quoteId },
            include: { user: true },
        });

        const responseMessages = {
            accept: 'accepted your quote request! They will send you a detailed quotation soon.',
            reject: 'declined your quote request.',
            consider: 'is reviewing your quote request and will get back to you soon.',
        };

        // In-app notification to consumer
        if (quote?.user) {
            await this.create({
                userId: quote.user.id,
                type: `request_${response}ed`,
                title: `Quote Request ${response === 'accept' ? 'Accepted' : response === 'reject' ? 'Declined' : 'Under Review'}`,
                message: `${builderName} ${responseMessages[response]}`,
                quoteId,
            });
        }

        // Email to consumer
        await this.emailService.sendRequestResponseNotification(
            consumerEmail,
            consumerName,
            builderName,
            response,
            quoteId,
        );
    }

    // When builder sends quotation
    async notifyQuotationSent(quoteId: string, totalAmount: number) {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id: quoteId },
            include: { builder: true, user: true },
        });

        if (!quote) return;

        // In-app notification to consumer
        if (quote.user) {
            await this.create({
                userId: quote.user.id,
                type: 'quote_response',
                title: 'Quotation Received',
                message: `${quote.builder.name} has sent you a quotation for R ${totalAmount.toLocaleString()}`,
                quoteId,
            });
        }

        // Email to consumer
        await this.emailService.sendQuotationNotification(
            quote.email,
            quote.name,
            quote.builder.name,
            totalAmount,
            quoteId,
        );

        // Email to builder (confirmation)
        await this.emailService.sendEmail(
            quote.builder.email,
            'Quotation Sent Successfully',
            `<p>Your quotation of R ${totalAmount.toLocaleString()} has been sent to ${quote.name}.</p>`,
        );
    }

    // When consumer makes counter-proposal
    async notifyCounterProposal(
        quoteId: string,
        builderEmail: string,
        builderName: string,
        consumerName: string,
        proposedAmount: number,
    ) {
        const builder = await this.prisma.builder.findFirst({
            where: { email: builderEmail },
            include: { user: true },
        });

        // In-app notification to builder
        if (builder?.user) {
            await this.create({
                userId: builder.user.id,
                type: 'counter_proposal',
                title: 'Counter-Proposal Received',
                message: `${consumerName} has proposed R ${proposedAmount.toLocaleString()} for the project.`,
                quoteId,
            });
        }

        // Email to builder
        await this.emailService.sendCounterProposalNotification(
            builderEmail,
            builderName,
            consumerName,
            proposedAmount,
            quoteId,
        );
    }

    // When consumer responds to quotation
    async notifyQuotationResponse(quoteId: string, status: 'accepted' | 'rejected' | 'considering') {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id: quoteId },
            include: { builder: { include: { user: true } } },
        });

        if (!quote) return;

        // In-app notification to builder
        if (quote.builder.user) {
            const statusMessages = {
                accepted: 'accepted your quotation! 🎉',
                rejected: 'declined your quotation.',
                considering: 'is considering your quotation.',
            };
            await this.create({
                userId: quote.builder.user.id,
                type: `quote_${status}`,
                title: `Quotation ${status.charAt(0).toUpperCase() + status.slice(1)}`,
                message: `${quote.name} ${statusMessages[status]}`,
                quoteId,
            });
        }

        // Email to builder
        await this.emailService.sendQuotationResponseNotification(
            quote.builder.email,
            quote.builder.name,
            quote.name,
            status,
            quoteId,
        );
    }

    // When project is created from accepted quote
    async notifyProjectCreated(
        projectId: string,
        builderEmail: string,
        builderName: string,
        consumerEmail: string,
        consumerName: string,
        projectTitle: string,
    ) {
        const builder = await this.prisma.builder.findFirst({
            where: { email: builderEmail },
            include: { user: true },
        });

        // In-app notification to builder
        if (builder?.user) {
            await this.create({
                userId: builder.user.id,
                type: 'project_created',
                title: 'New Project Started!',
                message: `Project "${projectTitle}" has been created with ${consumerName}.`,
            });
        }

        // Email to builder
        await this.emailService.sendProjectCreatedNotification(
            builderEmail,
            builderName,
            consumerName,
            projectTitle,
            projectId,
        );

        // Email to consumer
        await this.emailService.sendProjectCreatedNotification(
            consumerEmail,
            consumerName,
            builderName,
            projectTitle,
            projectId,
        );
    }
}
