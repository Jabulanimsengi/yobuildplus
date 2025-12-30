import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

interface BuilderFilters {
    province?: string;
    category?: string;
    minRating?: number;
    search?: string;
}

@Injectable()
export class BuildersService {
    constructor(private prisma: PrismaService) { }

    async findAll(filters: BuilderFilters) {
        const where: any = {};

        // Province filter - check if province is in the provinces array
        if (filters.province) {
            where.provinces = {
                has: filters.province,
            };
        }

        // Category filter
        if (filters.category) {
            where.categories = {
                some: {
                    slug: filters.category,
                },
            };
        }

        // Rating filter
        if (filters.minRating) {
            where.rating = {
                gte: filters.minRating,
            };
        }

        // Search filter
        if (filters.search) {
            where.OR = [
                { name: { contains: filters.search, mode: 'insensitive' } },
                { description: { contains: filters.search, mode: 'insensitive' } },
                { city: { contains: filters.search, mode: 'insensitive' } },
            ];
        }

        return this.prisma.builder.findMany({
            where,
            include: {
                categories: true,
                subcategories: true,
            },
            orderBy: {
                rating: 'desc',
            },
        });
    }

    async findBySlug(slug: string) {
        const builder = await this.prisma.builder.findUnique({
            where: { slug },
            include: {
                categories: true,
                subcategories: true,
                projects: true,
                reviews: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
            },
        });

        if (!builder) {
            throw new NotFoundException(`Builder with slug "${slug}" not found`);
        }

        return builder;
    }

    async updateProfile(id: string, updateData: any) {
        const builder = await this.prisma.builder.findUnique({
            where: { id },
        });

        if (!builder) {
            throw new NotFoundException(`Builder with id "${id}" not found`);
        }

        // For approval workflow: if sensitive fields changed, set to pending
        const sensitiveFields = ['name', 'description', 'callOutFee', 'hourlyRate'];
        const needsApproval = sensitiveFields.some(field => updateData[field] !== undefined);

        return this.prisma.builder.update({
            where: { id },
            data: {
                ...updateData,
                // If sensitive fields changed, require re-approval
                ...(needsApproval && { approvalStatus: 'pending' }),
            },
        });
    }
}
