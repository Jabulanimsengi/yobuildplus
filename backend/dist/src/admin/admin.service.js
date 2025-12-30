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
        const [totalUsers, pendingSignups, pendingEdits] = await Promise.all([
            this.prisma.builder.count(),
            this.prisma.builder.count({ where: { approvalStatus: 'pending' } }),
            this.prisma.builder.count({ where: { approvalStatus: 'pending' } }),
        ]);
        return {
            totalUsers,
            pendingSignups,
            pendingEdits,
            pendingMedia: 0,
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map