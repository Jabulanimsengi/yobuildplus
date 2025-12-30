import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.category.findMany({
            include: {
                subcategories: true,
                _count: {
                    select: { builders: true },
                },
            },
            orderBy: {
                name: 'asc',
            },
        });
    }

    async findBySlug(slug: string) {
        const category = await this.prisma.category.findUnique({
            where: { slug },
            include: {
                subcategories: true,
                builders: {
                    include: {
                        categories: true,
                    },
                    orderBy: {
                        rating: 'desc',
                    },
                },
            },
        });

        if (!category) {
            throw new NotFoundException(`Category with slug "${slug}" not found`);
        }

        return category;
    }
}
