import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role, Prisma } from '@prisma/client';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }

    // ============================================
    // BUILDERS / CONTRACTORS
    // ============================================

    async getPendingBuilders() {
        return this.prisma.builder.findMany({
            where: { approvalStatus: 'pending' },
            orderBy: { createdAt: 'desc' },
        });
    }

    async getAllBuilders(status?: string) {
        const where = status ? { approvalStatus: status } : {};
        return this.prisma.builder.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: { email: true, createdAt: true }
                },
                _count: {
                    select: { quotes: true, reviews: true, projects: true }
                }
            }
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
            },
        });
    }

    // ============================================
    // USERS
    // ============================================

    async getAllUsers(role?: string) {
        const where = role ? { role: role as Role } : {};
        return this.prisma.user.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                builderId: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: { quoteRequests: true, notifications: true }
                }
            }
        });
    }

    // ============================================
    // QUOTES
    // ============================================

    async getAllQuotes(status?: string) {
        const where = status ? { status } : {};
        return this.prisma.quoteRequest.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            include: {
                builder: {
                    select: { id: true, name: true, slug: true, email: true }
                },
                user: {
                    select: { id: true, name: true, email: true }
                },
                _count: {
                    select: { items: true }
                }
            }
        });
    }

    async getQuoteStats() {
        const [total, requested, accepted, quoted, completed] = await Promise.all([
            this.prisma.quoteRequest.count(),
            this.prisma.quoteRequest.count({ where: { status: 'quote_requested' } }),
            this.prisma.quoteRequest.count({ where: { status: 'quote_accepted' } }),
            this.prisma.quoteRequest.count({ where: { status: 'quoted' } }),
            this.prisma.quoteRequest.count({ where: { status: 'completed' } }),
        ]);

        return { total, requested, accepted, quoted, completed };
    }

    // ============================================
    // ACTIVITY & STATS
    // ============================================

    async getRecentActivity(limit: number = 50) {
        // Get recent quotes, users, builders combined
        const [recentQuotes, recentUsers, recentBuilders] = await Promise.all([
            this.prisma.quoteRequest.findMany({
                take: 20,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    status: true,
                    createdAt: true,
                    builder: { select: { name: true } },
                    user: { select: { name: true } }
                }
            }),
            this.prisma.user.findMany({
                take: 15,
                orderBy: { createdAt: 'desc' },
                select: { id: true, name: true, role: true, createdAt: true }
            }),
            this.prisma.builder.findMany({
                take: 15,
                orderBy: { createdAt: 'desc' },
                select: { id: true, name: true, approvalStatus: true, createdAt: true }
            })
        ]);

        // Combine into activity feed
        const activities = [
            ...recentQuotes.map(q => ({
                type: 'quote',
                action: `Quote ${q.status.replace('_', ' ')}`,
                description: `${q.user?.name || 'Client'} → ${q.builder?.name || 'Contractor'}`,
                createdAt: q.createdAt
            })),
            ...recentUsers.map(u => ({
                type: 'user',
                action: 'User registered',
                description: `${u.name} (${u.role})`,
                createdAt: u.createdAt
            })),
            ...recentBuilders.map(b => ({
                type: 'builder',
                action: `Contractor ${b.approvalStatus}`,
                description: b.name,
                createdAt: b.createdAt
            }))
        ];

        // Sort by date and limit
        return activities
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, limit);
    }

    async getPendingEdits() {
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
        const [
            totalUsers,
            totalClients,
            totalContractors,
            pendingSignups,
            totalQuotes,
            activeQuotes,
            completedProjects
        ] = await Promise.all([
            this.prisma.user.count(),
            this.prisma.user.count({ where: { role: 'client' } }),
            this.prisma.builder.count({ where: { approvalStatus: 'approved' } }),
            this.prisma.builder.count({ where: { approvalStatus: 'pending' } }),
            this.prisma.quoteRequest.count(),
            this.prisma.quoteRequest.count({
                where: {
                    status: { in: ['quote_requested', 'request_accepted', 'quoted'] }
                }
            }),
            this.prisma.project.count({ where: { status: 'completed' } }),
        ]);

        return {
            totalUsers,
            totalClients,
            totalContractors,
            pendingSignups,
            pendingEdits: pendingSignups,
            pendingMedia: 0,
            totalQuotes,
            activeQuotes,
            completedProjects
        };
    }

    // ============================================
    // USER CRUD OPERATIONS
    // ============================================

    async deleteUser(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with id "${id}" not found`);
        }

        // Delete associated data first
        await this.prisma.notification.deleteMany({ where: { userId: id } });
        await this.prisma.quoteRequest.deleteMany({ where: { userId: id } });

        return this.prisma.user.delete({ where: { id } });
    }

    async updateUser(id: string, data: { name?: string; role?: string; email?: string }) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with id "${id}" not found`);
        }

        const updateData: any = { ...data };
        if (data.role) {
            updateData.role = data.role as Role;
        }

        return this.prisma.user.update({
            where: { id },
            data: updateData,
        });
    }


    // ============================================
    // BUILDER CRUD OPERATIONS
    // ============================================

    async deleteBuilder(id: string) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });
        if (!builder) {
            throw new NotFoundException(`Builder with id "${id}" not found`);
        }

        // Delete associated data
        await this.prisma.review.deleteMany({ where: { builderId: id } });
        await this.prisma.project.deleteMany({ where: { builderId: id } });
        await this.prisma.quoteRequest.deleteMany({ where: { builderId: id } });

        return this.prisma.builder.delete({ where: { id } });
    }

    async updateBuilder(id: string, data: {
        name?: string;
        email?: string;
        phone?: string;
        verified?: boolean;
        approvalStatus?: string;
    }) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });
        if (!builder) {
            throw new NotFoundException(`Builder with id "${id}" not found`);
        }

        return this.prisma.builder.update({
            where: { id },
            data,
        });
    }

    async suspendBuilder(id: string) {
        return this.updateBuilder(id, { approvalStatus: 'suspended', verified: false });
    }

    async unsuspendBuilder(id: string) {
        return this.updateBuilder(id, { approvalStatus: 'approved', verified: true });
    }

    // ============================================
    // QUOTE CRUD OPERATIONS
    // ============================================

    async getQuoteById(id: string) {
        const quote = await this.prisma.quoteRequest.findUnique({
            where: { id },
            include: {
                builder: true,
                user: true,
                items: true,
                project: true,
            }
        });

        if (!quote) {
            throw new NotFoundException(`Quote with id "${id}" not found`);
        }

        return quote;
    }

    async deleteQuote(id: string) {
        const quote = await this.prisma.quoteRequest.findUnique({ where: { id } });
        if (!quote) {
            throw new NotFoundException(`Quote with id "${id}" not found`);
        }

        // Delete associated items and notifications
        await this.prisma.quotationItem.deleteMany({ where: { quoteId: id } });
        await this.prisma.notification.deleteMany({ where: { quoteId: id } });
        await this.prisma.payment.deleteMany({ where: { quoteId: id } });

        return this.prisma.quoteRequest.delete({ where: { id } });
    }

    async updateQuoteStatus(id: string, status: string) {
        const quote = await this.prisma.quoteRequest.findUnique({ where: { id } });
        if (!quote) {
            throw new NotFoundException(`Quote with id "${id}" not found`);
        }

        return this.prisma.quoteRequest.update({
            where: { id },
            data: { status },
        });
    }
}

