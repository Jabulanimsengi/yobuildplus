import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Clear existing category data only
    await prisma.subcategory.deleteMany();
    await prisma.category.deleteMany();

    // Seed Categories - These are required for the system to function
    const categories = await Promise.all([
        prisma.category.create({
            data: {
                slug: 'building-roofing',
                name: 'Building & Roofing',
                icon: '🏗️',
                description: 'Builders, roofers and general construction work',
                subcategories: {
                    create: [
                        { slug: 'general-building', name: 'General Building & Contracting', searchTerms: ['builder', 'contractor', 'new builds', 'extensions', 'renovations'] },
                        { slug: 'bricklaying', name: 'Bricklaying & Masonry', searchTerms: ['brick', 'mason', 'stone work', 'block work'] },
                        { slug: 'roofing', name: 'Roofing', searchTerms: ['roof repair', 'thatch', 'tiles', 'sheeting', 'roof leak'] },
                        { slug: 'waterproofing', name: 'Waterproofing', searchTerms: ['damp proofing', 'foundation seal', 'roof waterproof', 'leak prevention'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'electrical-plumbing-solar',
                name: 'Electrical, Plumbing & Solar',
                icon: '⚡',
                description: 'Electricians, plumbers and solar installers',
                subcategories: {
                    create: [
                        { slug: 'electricians', name: 'Electricians', searchTerms: ['electrical', 'wiring', 'power', 'lights', 'COC', 'certificate'] },
                        { slug: 'plumbing', name: 'Plumbing & Drainage', searchTerms: ['plumber', 'pipes', 'drain', 'blocked', 'leak', 'tap', 'toilet'] },
                        { slug: 'solar-inverter', name: 'Solar & Inverter Installation', searchTerms: ['solar panels', 'PV', 'battery backup', 'inverter', 'loadshedding'] },
                        { slug: 'hvac', name: 'HVAC', searchTerms: ['air conditioning', 'aircon', 'heating', 'ventilation', 'AC'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'renovations-interiors',
                name: 'Renovations & Interiors',
                icon: '🎨',
                description: 'Kitchen, bathroom and interior upgrades',
                subcategories: {
                    create: [
                        { slug: 'painting', name: 'Painting & Decorating', searchTerms: ['painter', 'paint', 'interior paint', 'exterior paint', 'spray paint'] },
                        { slug: 'tiling', name: 'Tiling & Cladding', searchTerms: ['tiles', 'ceramic', 'porcelain', 'stone', 'cladding', 'backsplash'] },
                        { slug: 'kitchen-bathroom', name: 'Kitchen & Bathroom Renovations', searchTerms: ['kitchen renovation', 'bathroom renovation', 'remodel'] },
                        { slug: 'flooring', name: 'Flooring Specialists', searchTerms: ['flooring', 'laminate', 'vinyl', 'wood floor', 'carpet'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'security-gates-fencing',
                name: 'Security, Gates & Fencing',
                icon: '🔒',
                description: 'CCTV, alarms, electric fencing and gate motors',
                subcategories: {
                    create: [
                        { slug: 'welding', name: 'Welders & Metal Fabricators', searchTerms: ['welder', 'burglar bars', 'staircases', 'metal work', 'fabrication'] },
                        { slug: 'security-systems', name: 'Security Systems', searchTerms: ['CCTV', 'cameras', 'alarm', 'intercom', 'access control'] },
                        { slug: 'fencing', name: 'Fencing & Palisade', searchTerms: ['fence', 'palisade', 'electric fence', 'wall', 'boundary'] },
                        { slug: 'gate-automation', name: 'Gate Automation & Garage Motors', searchTerms: ['gate motor', 'garage door', 'automation', 'remote'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'garden-pools',
                name: 'Garden & Pools',
                icon: '🌿',
                description: 'Landscaping, gardening and swimming pool services',
                subcategories: {
                    create: [
                        { slug: 'landscaping-design', name: 'Landscaping & Garden Design', searchTerms: ['landscaper', 'garden', 'lawn', 'plants', 'design'] },
                        { slug: 'swimming-pools', name: 'Swimming Pool Services', searchTerms: ['pool', 'swimming pool', 'pump', 'maintenance', 'marbelite'] },
                        { slug: 'irrigation', name: 'Irrigation Systems & Boreholes', searchTerms: ['irrigation', 'sprinkler', 'borehole', 'water'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'general-services',
                name: 'Handyman & Maintenance',
                icon: '🔧',
                description: 'Odd jobs, repairs and specialized services',
                subcategories: {
                    create: [
                        { slug: 'handyman', name: 'Handyman Services', searchTerms: ['handyman', 'odd jobs', 'repairs', 'maintenance', 'fix'] },
                        { slug: 'cleaning-services', name: 'Cleaning Services', searchTerms: ['cleaning', 'domestic', 'commercial', 'carpet', 'window cleaning'] },
                        { slug: 'pest-control', name: 'Pest Control & Fumigation', searchTerms: ['pest', 'fumigation', 'termites', 'rats', 'insects'] },
                    ],
                },
            },
        }),
        prisma.category.create({
            data: {
                slug: 'professional-planning',
                name: 'Architects & Designers',
                icon: '📐',
                description: 'Planning and design professionals',
                subcategories: {
                    create: [
                        { slug: 'architects', name: 'Architects & Draughting', searchTerms: ['architect', 'plans', 'design', 'draughting', 'drawing'] },
                        { slug: 'interior-designers', name: 'Interior Designers', searchTerms: ['interior design', 'decor', 'styling', 'space planning'] },
                        { slug: 'quantity-surveyors', name: 'Quantity Surveyors', searchTerms: ['QS', 'quantity surveyor', 'costing', 'BOQ'] },
                    ],
                },
            },
        }),
    ]);

    console.log(`✅ Created ${categories.length} categories with subcategories`);
    console.log('');
    console.log('📝 Note: No mock builders or users created.');
    console.log('   Service providers will create their own profiles after signing up.');
    console.log('');
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
