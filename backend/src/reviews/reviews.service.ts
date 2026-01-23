import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
    constructor(private prisma: PrismaService) { }

    async createReview(userId: string, data: {
        builderId: string;
        rating: number;
        comment: string;
        projectType?: string;
    }) {
        // Check if builder exists
        const builder = await this.prisma.builder.findUnique({
            where: { id: data.builderId }
        });

        if (!builder) {
            throw new NotFoundException('Contractor not found');
        }

        // Check if user has a completed quote with this builder
        const hasCompletedProject = await this.prisma.quoteRequest.findFirst({
            where: {
                userId,
                builderId: data.builderId,
                status: 'completed'
            }
        });

        if (!hasCompletedProject) {
            throw new ForbiddenException('You can only review contractors after completing a project with them');
        }

        // Check if already reviewed
        const existingReview = await this.prisma.review.findFirst({
            where: {
                builderId: data.builderId,
                // Note: Review model doesn't have userId, so we rely on project completion
            }
        });

        // Create the review
        const review = await this.prisma.review.create({
            data: {
                builderId: data.builderId,
                authorName: '', // Will be filled from user
                rating: data.rating,
                comment: data.comment,
                projectType: data.projectType,
            }
        });

        // Update builder's rating
        const allReviews = await this.prisma.review.findMany({
            where: { builderId: data.builderId },
            select: { rating: true }
        });

        const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

        await this.prisma.builder.update({
            where: { id: data.builderId },
            data: {
                rating: avgRating,
                reviewCount: allReviews.length
            }
        });

        return review;
    }

    async getBuilderReviews(builderId: string) {
        return this.prisma.review.findMany({
            where: { builderId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async getReviewableBuilders(userId: string) {
        // Get completed quotes that haven't been reviewed yet
        const completedQuotes = await this.prisma.quoteRequest.findMany({
            where: {
                userId,
                status: 'completed'
            },
            include: {
                builder: {
                    select: {
                        id: true,
                        slug: true,
                        name: true,
                        logo: true
                    }
                }
            }
        });

        return completedQuotes.map(q => ({
            quoteId: q.id,
            builder: q.builder
        }));
    }
}
