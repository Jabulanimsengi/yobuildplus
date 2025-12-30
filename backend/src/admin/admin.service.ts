import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }

    async getPendingBuilders() {
        return this.prisma.builder.findMany({
            where: { approvalStatus: 'pending' },
            orderBy: { createdAt: 'desc' },
        });
    }

    async approveBuilder(id: string) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });

        if (!builder) {
            throw new NotFoundException(`Builder with id "${id}" not found`);
        }

        return this.prisma.builder.update({
            where: { id },
            data: {
                approvalStatus: 'approved',
                verified: true,
            },
        });
    }

    async rejectBuilder(id: string, reason?: string) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });

        if (!builder) {
            throw new NotFoundException(`Builder with id "${id}" not found`);
        }

        return this.prisma.builder.update({
            where: { id },
            data: {
                approvalStatus: 'rejected',
                // Could store rejection reason in a separate table if needed
            },
        });
    }

    async getPendingEdits() {
        // This would query a separate ProfileEdit table if we had one
        // For now, return pending builders
        return this.prisma.builder.findMany({
            where: { approvalStatus: 'pending' },
            select: {
                id: true,
                name: true,
                updatedAt: true,
            },
        });
    }

    async getStats() {
        const [totalUsers, pendingSignups, pendingEdits] = await Promise.all([
            this.prisma.builder.count(),
            this.prisma.builder.count({ where: { approvalStatus: 'pending' } }),
            this.prisma.builder.count({ where: { approvalStatus: 'pending' } }), // Same for now
        ]);

        return {
            totalUsers,
            pendingSignups,
            pendingEdits,
            pendingMedia: 0, // Would be from a Media table
        };
    }
}
