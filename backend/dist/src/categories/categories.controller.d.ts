import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
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
    findOne(slug: string): Promise<{
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
