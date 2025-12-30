"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Seeding database...');
    await prisma.user.deleteMany();
    await prisma.review.deleteMany();
    await prisma.project.deleteMany();
    await prisma.builder.deleteMany();
    await prisma.subcategory.deleteMany();
    await prisma.category.deleteMany();
    const categories = await Promise.all([
        prisma.category.create({
            data: {
                slug: 'structural-core-construction',
                name: 'Structural & Core Construction',
                icon: '🏗️',
                description: 'The shell - main structure and stability of buildings',
                subcategories: {
                    create: [
                        { slug: 'general-building', name: 'General Building & Contracting', searchTerms: ['builder', 'contractor', 'new builds', 'extensions', 'renovations'] },
                        { slug: 'bricklaying', name: 'Bricklaying & Masonry', searchTerms: ['brick', 'mason', 'stone work', 'block work'] },
                        { slug: 'roofing', name: 'Roofing', searchTerms: ['roof repair', 'thatch', 'tiles', 'sheeting', 'roof leak'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'electrical-plumbing-systems',
                name: 'Electrical, Plumbing & Systems',
                icon: '⚡',
                description: 'The guts - essential utilities and systems',
                subcategories: {
                    create: [
                        { slug: 'electricians', name: 'Electricians', searchTerms: ['electrical', 'wiring', 'power', 'lights', 'COC', 'certificate'] },
                        { slug: 'plumbing', name: 'Plumbing & Drainage', searchTerms: ['plumber', 'pipes', 'drain', 'blocked', 'leak', 'tap', 'toilet'] },
                        { slug: 'solar-inverter', name: 'Solar & Inverter Installation', searchTerms: ['solar panels', 'PV', 'battery backup', 'inverter', 'loadshedding'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'interiors-finishing',
                name: 'Interiors & Finishing',
                icon: '🎨',
                description: 'The look - aesthetics and usability of interiors',
                subcategories: {
                    create: [
                        { slug: 'painting', name: 'Painting & Decorating', searchTerms: ['painter', 'paint', 'interior paint', 'exterior paint', 'spray paint'] },
                        { slug: 'tiling', name: 'Tiling & Cladding', searchTerms: ['tiles', 'ceramic', 'porcelain', 'stone', 'cladding', 'backsplash'] },
                        { slug: 'kitchen-bathroom', name: 'Kitchen & Bathroom Renovations', searchTerms: ['kitchen renovation', 'bathroom renovation', 'remodel'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'security-exterior',
                name: 'Metalwork, Security & Exterior',
                icon: '🔒',
                description: 'The perimeter - security and external features',
                subcategories: {
                    create: [
                        { slug: 'welding', name: 'Welders & Metal Fabricators', searchTerms: ['welder', 'burglar bars', 'staircases', 'metal work', 'fabrication'] },
                        { slug: 'security-systems', name: 'Security Systems', searchTerms: ['CCTV', 'cameras', 'alarm', 'intercom', 'access control'] },
                        { slug: 'fencing', name: 'Fencing & Palisade', searchTerms: ['fence', 'palisade', 'electric fence', 'wall', 'boundary'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'landscaping-outdoor',
                name: 'Landscaping & Outdoor Living',
                icon: '🌿',
                description: 'The garden and leisure areas',
                subcategories: {
                    create: [
                        { slug: 'landscaping-design', name: 'Landscaping & Garden Design', searchTerms: ['landscaper', 'garden', 'lawn', 'plants', 'design'] },
                        { slug: 'swimming-pools', name: 'Swimming Pool Services', searchTerms: ['pool', 'swimming pool', 'pump', 'maintenance', 'marbelite'] },
                    ],
                },
            },
        }),
    ]);
    console.log(`✅ Created ${categories.length} categories`);
    const builders = await Promise.all([
        prisma.builder.create({
            data: {
                slug: 'apex-builders-sa',
                name: 'Apex Builders SA',
                description: 'Apex Builders SA is a leading construction company with over 15 years of experience in residential and commercial building.',
                yearStarted: 2009,
                teamSize: 45,
                projectsCompleted: 230,
                provinces: ['Gauteng', 'North West', 'Mpumalanga'],
                city: 'Johannesburg',
                address: '123 Construction Ave, Sandton, 2196',
                phone: '+27 11 234 5678',
                email: 'info@apexbuilders.co.za',
                website: 'https://apexbuilders.co.za',
                rating: 4.8,
                reviewCount: 156,
                verified: true,
                serviceAttributes: ['Commercial', 'Residential', 'Insurance Approved', 'Free Quotes'],
                photos: [],
            },
        }),
        prisma.builder.create({
            data: {
                slug: 'reliable-plumbing-solutions',
                name: 'Reliable Plumbing Solutions',
                description: 'Your trusted 24/7 plumbing experts in the Western Cape. From emergency repairs to full bathroom installations.',
                yearStarted: 2015,
                teamSize: 12,
                projectsCompleted: 1850,
                provinces: ['Western Cape'],
                city: 'Cape Town',
                address: '45 Waterfront Rd, Sea Point, 8005',
                phone: '+27 21 987 6543',
                email: 'help@reliableplumbing.co.za',
                website: 'https://reliableplumbing.co.za',
                rating: 4.9,
                reviewCount: 342,
                verified: true,
                serviceAttributes: ['24/7 Emergency', 'Residential', 'Free Quotes', 'Weekend Available'],
                photos: [],
            },
        }),
        prisma.builder.create({
            data: {
                slug: 'bright-spark-electrical',
                name: 'Bright Spark Electrical',
                description: 'Certified electricians providing COC certificates, solar installations, and all electrical services.',
                yearStarted: 2012,
                teamSize: 18,
                projectsCompleted: 2100,
                provinces: ['Gauteng', 'Limpopo'],
                city: 'Pretoria',
                address: '78 Power Street, Centurion, 0157',
                phone: '+27 12 345 6789',
                email: 'info@brightsparksa.co.za',
                rating: 4.7,
                reviewCount: 289,
                verified: true,
                serviceAttributes: ['24/7 Emergency', 'Commercial', 'Residential', 'Insurance Approved'],
                photos: [],
            },
        }),
        prisma.builder.create({
            data: {
                slug: 'mastercraft-renovations',
                name: 'MasterCraft Renovations',
                description: 'Specialists in kitchen and bathroom renovations. We transform spaces with custom cabinetry, tiling, and modern finishes.',
                yearStarted: 2017,
                teamSize: 22,
                projectsCompleted: 450,
                provinces: ['KwaZulu-Natal', 'Eastern Cape'],
                city: 'Durban',
                address: '22 Beach Road, Umhlanga, 4320',
                phone: '+27 31 567 8901',
                email: 'design@mastercraftreno.co.za',
                rating: 4.6,
                reviewCount: 178,
                verified: true,
                serviceAttributes: ['Residential', 'Free Quotes', 'Weekend Available'],
                photos: [],
            },
        }),
        prisma.builder.create({
            data: {
                slug: 'securetech-systems',
                name: 'SecureTech Systems',
                description: 'Complete security solutions including CCTV installation, electric fencing, gate automation, and alarm systems.',
                yearStarted: 2010,
                teamSize: 35,
                projectsCompleted: 3200,
                provinces: ['Gauteng', 'Mpumalanga', 'Limpopo', 'North West'],
                city: 'Johannesburg',
                address: '156 Security Lane, Midrand, 1685',
                phone: '+27 11 876 5432',
                email: 'sales@securetech.co.za',
                website: 'https://securetech.co.za',
                rating: 4.5,
                reviewCount: 421,
                verified: true,
                serviceAttributes: ['24/7 Emergency', 'Commercial', 'Residential', 'Insurance Approved', 'Free Quotes'],
                photos: [],
            },
        }),
        prisma.builder.create({
            data: {
                slug: 'solar-solutions-sa',
                name: 'Solar Solutions SA',
                description: 'Beat loadshedding with our premium solar and inverter solutions. We design, supply, and install complete systems.',
                yearStarted: 2018,
                teamSize: 25,
                projectsCompleted: 680,
                provinces: ['Gauteng', 'Western Cape', 'KwaZulu-Natal'],
                city: 'Johannesburg',
                address: '200 Sunshine Boulevard, Randburg, 2125',
                phone: '+27 11 456 7890',
                email: 'solar@solarsa.co.za',
                website: 'https://solarsolutionssa.co.za',
                rating: 4.9,
                reviewCount: 312,
                verified: true,
                serviceAttributes: ['Residential', 'Commercial', 'Free Quotes'],
                photos: [],
            },
        }),
    ]);
    console.log(`✅ Created ${builders.length} builders`);
    const passwordHash = await bcrypt.hash('Jabu2580$', 10);
    await prisma.user.create({
        data: {
            email: 'admin@yobuild.co.za',
            password: passwordHash,
            name: 'Admin User',
            role: 'admin',
        },
    });
    if (builders[0]) {
        await prisma.user.create({
            data: {
                email: 'builder@yobuild.co.za',
                password: passwordHash,
                name: 'John Builder',
                role: 'contractor',
                builderId: builders[0].id,
            },
        });
    }
    console.log('✅ Created users (password: Jabu2580$)');
    console.log('🎉 Seeding complete!');
}
main()
    .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map