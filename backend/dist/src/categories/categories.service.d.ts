import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        subcategories: {
            id: string;
            slug: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            searchTerms: string[];
            categoryId: string;
        }[];
        _count: {
            builders: number;
        };
    } & {
        id: string;
        slug: string;
        name: string;
        icon: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findBySlug(slug: string): Promise<{
        subcategories: {
            id: string;
            slug: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            searchTerms: string[];
            categoryId: string;
        }[];
        builders: ({
            categories: {
                id: string;
                slug: string;
                name: string;
                icon: string;
                description: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
        } & {
            id: string;
            slug: string;
            name: string;
            description: string;
            createdAt: Date;
            updatedAt: Date;
            logo: string | null;
            coverImage: string | null;
            yearStarted: number;
            teamSize: number;
            projectsCompleted: number;
            city: string;
            address: string;
            phone: string;
            email: string;
            website: string | null;
            rating: number;
            reviewCount: number;
            verified: boolean;
            serviceAttributes: string[];
            photos: string[];
            provinces: string[];
            latitude: number | null;
            longitude: number | null;
            callOutFee: number | null;
            hourlyRate: number | null;
            serviceAreas: string[];
            approvalStatus: string;
        })[];
    } & {
        id: string;
        slug: string;
        name: string;
        icon: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
