"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPendingBuilders() {
        return this.prisma.builder.findMany({
            where: { approvalStatus: 'pending' },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getAllBuilders(status) {
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
    async approveBuilder(id) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });
        if (!builder) {
            throw new common_1.NotFoundException(`Builder with id "${id}" not found`);
        }
        return this.prisma.builder.update({
            where: { id },
            data: {
                approvalStatus: 'approved',
                verified: true,
            },
        });
    }
    async rejectBuilder(id, reason) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });
        if (!builder) {
            throw new common_1.NotFoundException(`Builder with id "${id}" not found`);
        }
        return this.prisma.builder.update({
            where: { id },
            data: {
                approvalStatus: 'rejected',
            },
        });
    }
    async getAllUsers(role) {
        const where = role ? { role: role } : {};
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
    async getAllQuotes(status) {
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
    async getRecentActivity(limit = 50) {
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
        const [totalUsers, totalClients, totalContractors, pendingSignups, totalQuotes, activeQuotes, completedProjects] = await Promise.all([
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
    async deleteUser(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id "${id}" not found`);
        }
        await this.prisma.notification.deleteMany({ where: { userId: id } });
        await this.prisma.quoteRequest.deleteMany({ where: { userId: id } });
        return this.prisma.user.delete({ where: { id } });
    }
    async updateUser(id, data) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id "${id}" not found`);
        }
        const updateData = { ...data };
        if (data.role) {
            updateData.role = data.role;
        }
        return this.prisma.user.update({
            where: { id },
            data: updateData,
        });
    }
    async deleteBuilder(id) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });
        if (!builder) {
            throw new common_1.NotFoundException(`Builder with id "${id}" not found`);
        }
        await this.prisma.review.deleteMany({ where: { builderId: id } });
        await this.prisma.project.deleteMany({ where: { builderId: id } });
        await this.prisma.quoteRequest.deleteMany({ where: { builderId: id } });
        return this.prisma.builder.delete({ where: { id } });
    }
    async updateBuilder(id, data) {
        const builder = await this.prisma.builder.findUnique({ where: { id } });
        if (!builder) {
            throw new common_1.NotFoundException(`Builder with id "${id}" not found`);
        }
        return this.prisma.builder.update({
            where: { id },
            data,
        });
    }
    async suspendBuilder(id) {
        return this.updateBuilder(id, { approvalStatus: 'suspended', verified: false });
    }
    async unsuspendBuilder(id) {
        return this.updateBuilder(id, { approvalStatus: 'approved', verified: true });
    }
    async getQuoteById(id) {
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
            throw new common_1.NotFoundException(`Quote with id "${id}" not found`);
        }
        return quote;
    }
    async deleteQuote(id) {
        const quote = await this.prisma.quoteRequest.findUnique({ where: { id } });
        if (!quote) {
            throw new common_1.NotFoundException(`Quote with id "${id}" not found`);
        }
        await this.prisma.quotationItem.deleteMany({ where: { quoteId: id } });
        await this.prisma.notification.deleteMany({ where: { quoteId: id } });
        await this.prisma.payment.deleteMany({ where: { quoteId: id } });
        return this.prisma.quoteRequest.delete({ where: { id } });
    }
    async updateQuoteStatus(id, status) {
        const quote = await this.prisma.quoteRequest.findUnique({ where: { id } });
        if (!quote) {
            throw new common_1.NotFoundException(`Quote with id "${id}" not found`);
        }
        return this.prisma.quoteRequest.update({
            where: { id },
            data: { status },
        });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map