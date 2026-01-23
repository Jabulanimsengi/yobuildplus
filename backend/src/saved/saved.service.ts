import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SavedService {
    constructor(private prisma: PrismaService) { }

    async getSavedContractors(userId: string) {
        const saved = await this.prisma.savedContractor.findMany({
            where: { userId },
            include: {
                builder: {
                    select: {
                        id: true,
                        slug: true,
                        name: true,
                        logo: true,
                        description: true,
                        city: true,
                        rating: true,
                        reviewCount: true,
                        verified: true,
                        serviceAttributes: true,
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return saved.map(s => ({
            ...s.builder,
            savedAt: s.createdAt
        }));
    }

    async saveContractor(userId: string, builderId: string) {
        // Check if builder exists
        const builder = await this.prisma.builder.findUnique({
            where: { id: builderId }
        });

        if (!builder) {
            throw new NotFoundException('Contractor not found');
        }

        // Check if already saved
        const existing = await this.prisma.savedContractor.findUnique({
            where: {
                userId_builderId: { userId, builderId }
            }
        });

        if (existing) {
            throw new ConflictException('Contractor already saved');
        }

        return this.prisma.savedContractor.create({
            data: { userId, builderId }
        });
    }

    async unsaveContractor(userId: string, builderId: string) {
        const saved = await this.prisma.savedContractor.findUnique({
            where: {
                userId_builderId: { userId, builderId }
            }
        });

        if (!saved) {
            throw new NotFoundException('Saved contractor not found');
        }

        return this.prisma.savedContractor.delete({
            where: {
                userId_builderId: { userId, builderId }
            }
        });
    }

    async isSaved(userId: string, builderId: string): Promise<boolean> {
        const saved = await this.prisma.savedContractor.findUnique({
            where: {
                userId_builderId: { userId, builderId }
            }
        });
        return !!saved;
    }

    async getSavedIds(userId: string): Promise<string[]> {
        const saved = await this.prisma.savedContractor.findMany({
            where: { userId },
            select: { builderId: true }
        });
        return saved.map(s => s.builderId);
    }
}
