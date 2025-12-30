import { PrismaService } from '../prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: any): Promise<{
        builder: {
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
        } | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        role: string;
        builderId: string | null;
    }>;
}
export {};
