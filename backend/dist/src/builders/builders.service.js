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
exports.BuildersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BuildersService = class BuildersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters) {
        const where = {};
        if (filters.province) {
            where.provinces = {
                has: filters.province,
            };
        }
        if (filters.category) {
            where.categories = {
                some: {
                    slug: filters.category,
                },
            };
        }
        if (filters.minRating) {
            where.rating = {
                gte: filters.minRating,
            };
        }
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
    async findBySlug(slug) {
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
            throw new common_1.NotFoundException(`Builder with slug "${slug}" not found`);
        }
        return builder;
    }
    async updateProfile(id, updateData) {
        const builder = await this.prisma.builder.findUnique({
            where: { id },
        });
        if (!builder) {
            throw new common_1.NotFoundException(`Builder with id "${id}" not found`);
        }
        const sensitiveFields = ['name', 'description', 'callOutFee', 'hourlyRate'];
        const needsApproval = sensitiveFields.some(field => updateData[field] !== undefined);
        return this.prisma.builder.update({
            where: { id },
            data: {
                ...updateData,
                ...(needsApproval && { approvalStatus: 'pending' }),
            },
        });
    }
    async createProfile(userId, createData) {
        const baseSlug = (createData.name || 'builder')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        let slug = baseSlug;
        let counter = 1;
        while (await this.prisma.builder.findUnique({ where: { slug } })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
        const builder = await this.prisma.builder.create({
            data: {
                ...createData,
                slug,
                approvalStatus: 'pending',
                verified: false,
                rating: 0,
                reviewCount: 0,
                isAvailable: true,
                user: {
                    connect: { id: userId },
                },
            },
        });
        return builder;
    }
};
exports.BuildersService = BuildersService;
exports.BuildersService = BuildersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BuildersService);
//# sourceMappingURL=builders.service.js.map