
import { Injectable, Logger } from '@nestjs/common';
import sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);
    private isConfigured = false;
    private readonly frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

    constructor() {
        const apiKey = process.env.SENDGRID_API_KEY;
        if (apiKey) {
            sgMail.setApiKey(apiKey);
            this.isConfigured = true;
            this.logger.log('SendGrid configured successfully');
        } else {
            this.logger.warn('SENDGRID_API_KEY not set - emails will be logged only');
        }
    }

    async sendEmail(to: string, subject: string, html: string, text?: string): Promise<boolean> {
        const msg = {
            to,
            from: process.env.SENDGRID_FROM_EMAIL || 'noreply@yobuildplus.co.za',
            subject,
            text: text || html.replace(/<[^>]*>/g, ''),
            html,
        };

        if (!this.isConfigured) {
            this.logger.log(`[EMAIL MOCK] To: ${to}, Subject: ${subject}`);
            this.logger.debug(`[EMAIL MOCK] Content: ${html}`);
            return true;
        }

        try {
            await sgMail.send(msg);
            this.logger.log(`Email sent to ${to}`);
            return true;
        } catch (error: any) {
            this.logger.error(`Failed to send email to ${to}`, error?.response?.body || error);
            return false;
        }
    }

    // Quote Request Notification - To Builder
    async sendQuoteRequestNotification(
        builderEmail: string,
        builderName: string,
        customerName: string,
        projectDetails: string,
        quoteId: string,
    ) {
        const subject = `New Quote Request from ${customerName}`;
        const html = `
            <h2>Hello ${builderName},</h2>
            <p>You have received a new quote request on Yobuildplus!</p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Customer Details:</h3>
                <p><strong>Name:</strong> ${customerName}</p>
                <h3>Project Details:</h3>
                <p>${projectDetails}</p>
            </div>
            <p>You can <strong>Accept</strong>, <strong>Reject</strong>, or mark this request as <strong>Under Consideration</strong>.</p>
            <p style="margin: 20px 0;">
                <a href="${this.frontendUrl}/dashboard/leads" 
                   style="background: #0EA5E9; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                    View in Dashboard
                </a>
            </p>
            <hr>
            <p>Best regards,<br>The Yobuildplus Team</p>
        `;
        return this.sendEmail(builderEmail, subject, html);
    }

    // Quote Request Confirmation - To Consumer
    async sendQuoteRequestConfirmation(
        customerEmail: string,
        customerName: string,
        builderName: string,
        projectDetails: string,
    ) {
        const subject = `Your Quote Request to ${builderName} - Confirmed`;
        const html = `
            <h2>Hi ${customerName},</h2>
            <p>Your quote request has been sent to <strong>${builderName}</strong>!</p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">What you requested:</h3>
                <p>${projectDetails}</p>
            </div>
            <p>The service provider will review your request and get back to you soon. You'll receive notifications when:</p>
            <ul>
                <li>They accept or decline your request</li>
                <li>They send you a detailed quotation</li>
            </ul>
            <p style="margin: 20px 0;">
                <a href="${this.frontendUrl}/dashboard/my-quotes" 
                   style="background: #0EA5E9; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                    Track Your Requests
                </a>
            </p>
            <hr>
            <p>Best regards,<br>The Yobuildplus Team</p>
        `;
        return this.sendEmail(customerEmail, subject, html);
    }

    // Builder Response to Request - To Consumer
    async sendRequestResponseNotification(
        customerEmail: string,
        customerName: string,
        builderName: string,
        response: 'accept' | 'reject' | 'consider',
        quoteId: string,
    ) {
        const responseInfo = {
            accept: {
                subject: `Great News! ${builderName} Accepted Your Request`,
                message: 'has accepted your quote request and will send you a detailed quotation soon.',
                color: '#10B981',
            },
            reject: {
                subject: `Update: ${builderName} Declined Your Request`,
                message: 'has declined your quote request. Don\'t worry - browse our directory to find other qualified professionals.',
                color: '#EF4444',
            },
            consider: {
                subject: `${builderName} is Reviewing Your Request`,
                message: 'is currently reviewing your quote request and will get back to you shortly.',
                color: '#F59E0B',
            },
        };

        const info = responseInfo[response];
        const html = `
            <h2>Hi ${customerName},</h2>
            <div style="background: ${info.color}20; border-left: 4px solid ${info.color}; padding: 15px; margin: 20px 0;">
                <p style="margin: 0;"><strong>${builderName}</strong> ${info.message}</p>
            </div>
            ${response === 'accept' ? `
            <p>What happens next:</p>
            <ol>
                <li>The builder will prepare a detailed quotation with line items</li>
                <li>You'll receive the quotation via email and in-app notification</li>
                <li>You can accept, reject, or propose a different amount</li>
            </ol>
            ` : ''}
            <p style="margin: 20px 0;">
                <a href="${this.frontendUrl}/dashboard/my-quotes" 
                   style="background: #0EA5E9; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                    View Details
                </a>
            </p>
            <hr>
            <p>Best regards,<br>The Yobuildplus Team</p>
        `;
        return this.sendEmail(customerEmail, info.subject, html);
    }

    // Quotation Sent - To Consumer
    async sendQuotationNotification(
        customerEmail: string,
        customerName: string,
        builderName: string,
        totalAmount: number,
        quoteId: string,
    ) {
        const subject = `Quotation Received from ${builderName}`;
        const html = `
            <h2>Hi ${customerName},</h2>
            <p><strong>${builderName}</strong> has sent you a quotation!</p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                <h3 style="margin-top: 0; color: #64748b;">Total Amount</h3>
                <p style="font-size: 32px; font-weight: bold; color: #0EA5E9; margin: 0;">
                    R ${totalAmount.toLocaleString()}
                </p>
            </div>
            <p>Review the detailed breakdown and choose to:</p>
            <ul>
                <li><strong>Accept</strong> - Start the project</li>
                <li><strong>Reject</strong> - Decline this offer</li>
                <li><strong>Counter-Propose</strong> - Suggest a different amount</li>
            </ul>
            <p style="margin: 20px 0;">
                <a href="${this.frontendUrl}/dashboard/my-quotes/${quoteId}" 
                   style="background: #0EA5E9; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                    View Full Quotation
                </a>
            </p>
            <hr>
            <p>Best regards,<br>The Yobuildplus Team</p>
        `;
        return this.sendEmail(customerEmail, subject, html);
    }

    // Counter-Proposal - To Builder
    async sendCounterProposalNotification(
        builderEmail: string,
        builderName: string,
        customerName: string,
        proposedAmount: number,
        quoteId: string,
    ) {
        const subject = `Counter-Proposal from ${customerName}`;
        const html = `
            <h2>Hello ${builderName},</h2>
            <p><strong>${customerName}</strong> has submitted a counter-proposal!</p>
            <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 20px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Proposed Amount</h3>
                <p style="font-size: 28px; font-weight: bold; color: #D97706; margin: 0;">
                    R ${proposedAmount.toLocaleString()}
                </p>
            </div>
            <p>You can <strong>Accept</strong>, <strong>Reject</strong>, or <strong>Consider</strong> this proposal.</p>
            <p style="margin: 20px 0;">
                <a href="${this.frontendUrl}/dashboard/leads" 
                   style="background: #0EA5E9; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                    View in Dashboard
                </a>
            </p>
            <hr>
            <p>Best regards,<br>The Yobuildplus Team</p>
        `;
        return this.sendEmail(builderEmail, subject, html);
    }

    // Quotation Response - To Builder
    async sendQuotationResponseNotification(
        builderEmail: string,
        builderName: string,
        customerName: string,
        status: 'accepted' | 'rejected' | 'considering',
        quoteId: string,
    ) {
        const statusInfo = {
            accepted: {
                subject: `🎉 Great News! ${customerName} Accepted Your Quotation`,
                message: 'accepted your quotation! The project will now be added to your ongoing projects.',
                color: '#10B981',
            },
            rejected: {
                subject: `Update: ${customerName} Declined Your Quotation`,
                message: 'declined your quotation.',
                color: '#EF4444',
            },
            considering: {
                subject: `${customerName} is Reviewing Your Quotation`,
                message: 'is considering your quotation and will respond soon.',
                color: '#F59E0B',
            },
        };

        const info = statusInfo[status];
        const html = `
            <h2>Hello ${builderName},</h2>
            <div style="background: ${info.color}20; border-left: 4px solid ${info.color}; padding: 15px; margin: 20px 0;">
                <p style="margin: 0;"><strong>${customerName}</strong> ${info.message}</p>
            </div>
            <p style="margin: 20px 0;">
                <a href="${this.frontendUrl}/dashboard/leads" 
                   style="background: #0EA5E9; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                    View Details
                </a>
            </p>
            <hr>
            <p>Best regards,<br>The Yobuildplus Team</p>
        `;
        return this.sendEmail(builderEmail, info.subject, html);
    }

    // Project Created - To Both Parties
    async sendProjectCreatedNotification(
        email: string,
        name: string,
        otherPartyName: string,
        projectTitle: string,
        projectId: string,
    ) {
        const subject = `🏗️ Project Started: ${projectTitle}`;
        const html = `
            <h2>Hi ${name},</h2>
            <p>Great news! Your project has officially started!</p>
            <div style="background: #ECFDF5; border-left: 4px solid #10B981; padding: 20px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #059669;">Project: ${projectTitle}</h3>
                <p style="margin: 0;">Working with: <strong>${otherPartyName}</strong></p>
            </div>
            <p>You can now:</p>
            <ul>
                <li>Track project progress</li>
                <li>View updates and photos</li>
                <li>Communicate about the project</li>
            </ul>
            <p style="margin: 20px 0;">
                <a href="${this.frontendUrl}/dashboard" 
                   style="background: #10B981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                    View Project
                </a>
            </p>
            <hr>
            <p>Best regards,<br>The Yobuildplus Team</p>
        `;
        return this.sendEmail(email, subject, html);
    }
}
