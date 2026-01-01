
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { CreateQuoteDto, CreateQuotationDto, QUOTE_STATUS, RespondToRequestDto, RespondToQuotationDto } from './dto/quote.dto';

@Injectable()
export class QuotesService {
    constructor(
        private prisma: PrismaService,
        private notificationsService: NotificationsService,
    ) { }

    // Consumer creates a quote request
    async create(createQuoteDto: CreateQuoteDto, userId?: string) {
        // Verify builder exists
        const builder = await this.prisma.builder.findUnique({
            where: { id: createQuoteDto.builderId },
        });

        if (!builder) {
            throw new NotFoundException('Builder not found');
        }

        const quote = await this.prisma.quoteRequest.create({
            data: {
                builderId: createQuoteDto.builderId,
                name: createQuoteDto.name,
                email: createQuoteDto.email,
                phone: createQuoteDto.phone,
                location: createQuoteDto.location,
                title: createQuoteDto.title,
                message: createQuoteDto.message,
                status: QUOTE_STATUS.QUOTE_REQUESTED,
                userId: userId || null,
            },
        });

        // Notify builder (email + in-app)
        await this.notificationsService.notifyQuoteRequest(
            quote.id,
            createQuoteDto.builderId,
            createQuoteDto.name,
            createQuoteDto.message,
        );

        // Notify consumer (confirmation email)
        await this.notificationsService.notifyQuoteRequestConfirmation(
            quote.id,
            createQuoteDto.email,
            createQuoteDto.name,
            builder.name,
            createQuoteDto.message,
        );

        return quote;
    }

    // Builder responds to request (accept/reject/consider)
    async respondToRequest(id: string, builderId: string, data: RespondToRequestDto) {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id },
            include: { builder: true },
        });

        if (!quote) {
            throw new NotFoundException('Quote request not found');
        }

        if (quote.builderId !== builderId) {
            throw new ForbiddenException('You can only respond to your own quote requests');
        }

        const statusMap = {
            accept: QUOTE_STATUS.REQUEST_ACCEPTED,
            reject: QUOTE_STATUS.REQUEST_REJECTED,
            consider: QUOTE_STATUS.REQUEST_CONSIDERING,
        };

        const updatedQuote = await this.prisma.quoteRequest.update({
            where: { id },
            data: {
                status: statusMap[data.response],
                notes: data.notes,
                respondedAt: new Date(),
            },
        });

        // Notify consumer about builder's response
        await this.notificationsService.notifyRequestResponse(
            quote.id,
            quote.email,
            quote.name,
            quote.builder.name,
            data.response,
        );

        return updatedQuote;
    }

    async findAllForBuilder(builderId: string) {
        return this.prisma.quoteRequest.findMany({
            where: { builderId },
            include: {
                items: true,
                user: { select: { id: true, name: true, email: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    // Get quotes grouped by client
    async findAllForBuilderGroupedByClient(builderId: string) {
        const quotes = await this.prisma.quoteRequest.findMany({
            where: { builderId },
            include: {
                items: true,
                user: { select: { id: true, name: true, email: true } },
            },
            orderBy: { createdAt: 'desc' },
        });

        // Group by email (client identifier)
        const grouped = quotes.reduce((acc, quote) => {
            const clientKey = quote.email;
            if (!acc[clientKey]) {
                acc[clientKey] = {
                    clientEmail: quote.email,
                    clientName: quote.name,
                    userId: quote.userId,
                    quotes: [],
                    totalQuotes: 0,
                    acceptedQuotes: 0,
                };
            }
            acc[clientKey].quotes.push(quote);
            acc[clientKey].totalQuotes++;
            if (quote.status === QUOTE_STATUS.QUOTE_ACCEPTED || quote.status === QUOTE_STATUS.PROJECT_CREATED) {
                acc[clientKey].acceptedQuotes++;
            }
            return acc;
        }, {} as Record<string, any>);

        return Object.values(grouped);
    }

    async findAllForUser(userId: string) {
        return this.prisma.quoteRequest.findMany({
            where: { userId },
            include: {
                builder: {
                    select: { id: true, name: true, slug: true, logo: true },
                },
                items: true,
                project: { select: { id: true, title: true, status: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.quoteRequest.findUnique({
            where: { id },
            include: {
                builder: {
                    select: { id: true, name: true, slug: true, logo: true, phone: true, email: true },
                },
                items: true,
                project: true,
                counterProposals: true,
                parentQuote: true,
            },
        });
    }

    async findAllForAdmin() {
        return this.prisma.quoteRequest.findMany({
            include: {
                builder: {
                    select: { name: true, slug: true },
                },
                items: true,
                user: { select: { id: true, name: true, email: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async updateStatus(id: string, status: string) {
        return this.prisma.quoteRequest.update({
            where: { id },
            data: { status },
        });
    }

    // Builder sends quotation with items
    async createQuotation(id: string, builderId: string, data: CreateQuotationDto) {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id },
            include: { builder: true },
        });

        if (!quote) {
            throw new NotFoundException('Quote request not found');
        }

        if (quote.builderId !== builderId) {
            throw new ForbiddenException('You can only respond to your own quote requests');
        }

        // Delete existing items and create new ones
        await this.prisma.quotationItem.deleteMany({
            where: { quoteId: id },
        });

        // Calculate total
        const totalAmount = data.items.reduce((sum, item) => sum + item.totalPrice, 0);

        // Create items
        await this.prisma.quotationItem.createMany({
            data: data.items.map(item => ({
                quoteId: id,
                description: item.description,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                unit: item.unit,
                totalPrice: item.totalPrice,
            })),
        });

        // Update quote request with title and status
        const updatedQuote = await this.prisma.quoteRequest.update({
            where: { id },
            data: {
                status: QUOTE_STATUS.QUOTED,
                title: data.title || quote.title,
                totalAmount,
                notes: data.notes,
                validUntil: data.validUntil ? new Date(data.validUntil) : null,
                respondedAt: new Date(),
            },
            include: { items: true },
        });

        // Notify consumer
        await this.notificationsService.notifyQuotationSent(id, totalAmount);

        return updatedQuote;
    }

    // Consumer responds to quotation (accept/reject/counter-proposal)
    async respondToQuotation(id: string, userId: string, data: RespondToQuotationDto) {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id },
            include: { builder: true },
        });

        if (!quote) {
            throw new NotFoundException('Quote not found');
        }

        if (quote.userId !== userId) {
            throw new ForbiddenException('You can only respond to your own quote requests');
        }

        if (data.status === 'counter_proposal') {
            // Create a new quote request as counter-proposal
            const counterProposal = await this.prisma.quoteRequest.create({
                data: {
                    builderId: quote.builderId,
                    name: quote.name,
                    email: quote.email,
                    phone: quote.phone,
                    location: quote.location,
                    title: quote.title,
                    message: `Counter-proposal for: ${quote.message}`,
                    status: QUOTE_STATUS.QUOTE_REQUESTED,
                    userId: quote.userId,
                    proposedAmount: data.proposedAmount,
                    proposalNotes: data.proposalNotes,
                    parentQuoteId: quote.id,
                },
            });

            // Update original quote
            await this.prisma.quoteRequest.update({
                where: { id },
                data: { status: QUOTE_STATUS.COUNTER_PROPOSAL },
            });

            // Notify builder about counter-proposal
            await this.notificationsService.notifyCounterProposal(
                counterProposal.id,
                quote.builder.email,
                quote.builder.name,
                quote.name,
                data.proposedAmount!,
            );

            return counterProposal;
        }

        // Accept or reject
        const statusMap = {
            accepted: QUOTE_STATUS.QUOTE_ACCEPTED,
            rejected: QUOTE_STATUS.QUOTE_REJECTED,
        };

        const updated = await this.prisma.quoteRequest.update({
            where: { id },
            data: { status: statusMap[data.status as 'accepted' | 'rejected'] },
        });

        // Notify builder
        await this.notificationsService.notifyQuotationResponse(id, data.status as 'accepted' | 'rejected' | 'considering');

        // If accepted, create project
        if (data.status === 'accepted') {
            await this.createProjectFromQuote(id);
        }

        return updated;
    }

    // Create project from accepted quote
    async createProjectFromQuote(quoteId: string) {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id: quoteId },
            include: { builder: true },
        });

        if (!quote) {
            throw new NotFoundException('Quote not found');
        }

        // Create project
        const project = await this.prisma.project.create({
            data: {
                title: quote.title || `Project for ${quote.name}`,
                description: quote.message,
                status: 'ongoing',
                province: quote.location?.split(',')[1]?.trim() || 'Unknown',
                city: quote.location?.split(',')[0]?.trim() || 'Unknown',
                builderId: quote.builderId,
                quoteId: quote.id,
                images: [],
            },
        });

        // Update quote status
        await this.prisma.quoteRequest.update({
            where: { id: quoteId },
            data: { status: QUOTE_STATUS.PROJECT_CREATED },
        });

        // Notify both parties
        await this.notificationsService.notifyProjectCreated(
            project.id,
            quote.builder.email,
            quote.builder.name,
            quote.email,
            quote.name,
            project.title,
        );

        return project;
    }

    // Stats for builder profile
    async getBuilderStats(builderId: string) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const [totalRequests, todayRequests, acceptedQuotes, ongoingProjects] = await Promise.all([
            this.prisma.quoteRequest.count({ where: { builderId } }),
            this.prisma.quoteRequest.count({
                where: {
                    builderId,
                    createdAt: { gte: today },
                },
            }),
            this.prisma.quoteRequest.count({
                where: {
                    builderId,
                    status: { in: [QUOTE_STATUS.QUOTE_ACCEPTED, QUOTE_STATUS.PROJECT_CREATED, QUOTE_STATUS.COMPLETED] }
                },
            }),
            this.prisma.project.count({
                where: { builderId, status: 'ongoing' },
            }),
        ]);

        return { totalRequests, todayRequests, acceptedQuotes, ongoingProjects };
    }

    // Global stats for hero section
    async getGlobalStats() {
        const [totalQuotations, quotationsThisMonth] = await Promise.all([
            this.prisma.quoteRequest.count(),
            this.prisma.quoteRequest.count({
                where: {
                    createdAt: {
                        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    },
                },
            }),
        ]);

        return { totalQuotations, quotationsThisMonth };
    }
}
