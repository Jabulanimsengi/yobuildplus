module.exports = [
"[project]/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/src/data/mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterBuilders",
    ()=>filterBuilders,
    "getBuilderBySlug",
    ()=>getBuilderBySlug,
    "mockBuilders",
    ()=>mockBuilders
]);
// Sample photos - these would be real URLs in production
const samplePhotos = [
    '/images/sample-project-1.jpg',
    '/images/sample-project-2.jpg',
    '/images/sample-project-3.jpg',
    '/images/sample-project-4.jpg'
];
// Mock Reviews
const sampleReviews = [
    {
        id: 'rev-1',
        builderId: 'builder-1',
        authorName: 'John Mokoena',
        rating: 5,
        comment: 'Excellent work on our house extension. Professional team, completed on time and within budget. Highly recommend!',
        projectType: 'House Extension',
        createdAt: new Date('2024-11-15')
    },
    {
        id: 'rev-2',
        builderId: 'builder-1',
        authorName: 'Sarah van der Merwe',
        rating: 4,
        comment: 'Great quality workmanship. Communication could have been better but overall very satisfied with the result.',
        projectType: 'Bathroom Renovation',
        createdAt: new Date('2024-10-20')
    },
    {
        id: 'rev-3',
        builderId: 'builder-1',
        authorName: 'Thabo Ndlovu',
        rating: 5,
        comment: 'Built our dream home from scratch. The attention to detail was incredible. Will definitely use them again.',
        projectType: 'New Build',
        createdAt: new Date('2024-09-05')
    }
];
// Mock Projects
const sampleProjects = [
    {
        id: 'proj-1',
        title: 'Modern Family Home',
        description: 'Complete 4-bedroom home build with double garage in Sandton.',
        status: 'completed',
        images: samplePhotos,
        completedAt: new Date('2024-08-15'),
        province: 'Gauteng',
        city: 'Sandton'
    },
    {
        id: 'proj-2',
        title: 'Office Complex Renovation',
        description: 'Full renovation of a 3-story commercial building in Rosebank.',
        status: 'completed',
        images: samplePhotos,
        completedAt: new Date('2024-06-20'),
        province: 'Gauteng',
        city: 'Johannesburg'
    },
    {
        id: 'proj-3',
        title: 'Luxury Villa Extension',
        description: 'Adding a new wing with entertainment area and pool house.',
        status: 'ongoing',
        images: samplePhotos,
        province: 'Gauteng',
        city: 'Pretoria'
    }
];
const mockBuilders = [
    {
        id: 'builder-1',
        slug: 'apex-builders-sa',
        name: 'Apex Builders SA',
        logo: '/images/builders/apex-logo.png',
        coverImage: '/images/builders/apex-cover.jpg',
        description: 'Apex Builders SA is a leading construction company with over 15 years of experience in residential and commercial building. We specialize in new builds, renovations, and extensions across Gauteng. Our team of skilled professionals ensures quality workmanship and timely delivery on every project.',
        yearStarted: 2009,
        teamSize: 45,
        projectsCompleted: 230,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'North West',
            'Mpumalanga'
        ],
        city: 'Johannesburg',
        address: '123 Construction Ave, Sandton, 2196',
        phone: '+27 11 234 5678',
        email: 'info@apexbuilders.co.za',
        website: 'https://apexbuilders.co.za',
        rating: 4.8,
        reviewCount: 156,
        verified: true,
        serviceAttributes: [
            'Commercial',
            'Residential',
            'Insurance Approved',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: sampleProjects,
        reviews: sampleReviews,
        coordinates: {
            lat: -26.1076,
            lng: 28.0567
        },
        createdAt: new Date('2022-01-15'),
        updatedAt: new Date('2024-12-01')
    },
    {
        id: 'builder-2',
        slug: 'reliable-plumbing-solutions',
        name: 'Reliable Plumbing Solutions',
        logo: '/images/builders/reliable-logo.png',
        coverImage: '/images/builders/reliable-cover.jpg',
        description: 'Your trusted 24/7 plumbing experts in the Western Cape. From emergency repairs to full bathroom installations, we handle it all. Licensed, insured, and guaranteed quality work.',
        yearStarted: 2015,
        teamSize: 12,
        projectsCompleted: 1850,
        categories: [],
        subcategories: [],
        provinces: [
            'Western Cape'
        ],
        city: 'Cape Town',
        address: '45 Waterfront Rd, Sea Point, 8005',
        phone: '+27 21 987 6543',
        email: 'help@reliableplumbing.co.za',
        website: 'https://reliableplumbing.co.za',
        rating: 4.9,
        reviewCount: 342,
        verified: true,
        serviceAttributes: [
            '24/7 Emergency',
            'Residential',
            'Free Quotes',
            'Weekend Available'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -33.9062,
            lng: 18.3876
        },
        createdAt: new Date('2022-03-10'),
        updatedAt: new Date('2024-11-28')
    },
    {
        id: 'builder-3',
        slug: 'bright-spark-electrical',
        name: 'Bright Spark Electrical',
        logo: '/images/builders/brightspark-logo.png',
        coverImage: '/images/builders/brightspark-cover.jpg',
        description: 'Certified electricians providing COC certificates, solar installations, and all electrical services. We specialize in load shedding solutions including inverter and battery backup systems.',
        yearStarted: 2012,
        teamSize: 18,
        projectsCompleted: 2100,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'Limpopo'
        ],
        city: 'Pretoria',
        address: '78 Power Street, Centurion, 0157',
        phone: '+27 12 345 6789',
        email: 'info@brightsparksa.co.za',
        rating: 4.7,
        reviewCount: 289,
        verified: true,
        serviceAttributes: [
            '24/7 Emergency',
            'Commercial',
            'Residential',
            'Insurance Approved'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -25.8603,
            lng: 28.1894
        },
        createdAt: new Date('2022-02-20'),
        updatedAt: new Date('2024-12-05')
    },
    {
        id: 'builder-4',
        slug: 'mastercraft-renovations',
        name: 'MasterCraft Renovations',
        logo: '/images/builders/mastercraft-logo.png',
        coverImage: '/images/builders/mastercraft-cover.jpg',
        description: 'Specialists in kitchen and bathroom renovations. We transform spaces with custom cabinetry, tiling, and modern finishes. Free consultations and 3D design mockups available.',
        yearStarted: 2017,
        teamSize: 22,
        projectsCompleted: 450,
        categories: [],
        subcategories: [],
        provinces: [
            'KwaZulu-Natal',
            'Eastern Cape'
        ],
        city: 'Durban',
        address: '22 Beach Road, Umhlanga, 4320',
        phone: '+27 31 567 8901',
        email: 'design@mastercraftreno.co.za',
        rating: 4.6,
        reviewCount: 178,
        verified: true,
        serviceAttributes: [
            'Residential',
            'Free Quotes',
            'Weekend Available'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -29.7251,
            lng: 31.0681
        },
        createdAt: new Date('2022-05-01'),
        updatedAt: new Date('2024-11-15')
    },
    {
        id: 'builder-5',
        slug: 'securetech-systems',
        name: 'SecureTech Systems',
        logo: '/images/builders/securetech-logo.png',
        coverImage: '/images/builders/securetech-cover.jpg',
        description: 'Complete security solutions including CCTV installation, electric fencing, gate automation, and alarm systems. Protecting homes and businesses across South Africa.',
        yearStarted: 2010,
        teamSize: 35,
        projectsCompleted: 3200,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'Mpumalanga',
            'Limpopo',
            'North West'
        ],
        city: 'Johannesburg',
        address: '156 Security Lane, Midrand, 1685',
        phone: '+27 11 876 5432',
        email: 'sales@securetech.co.za',
        website: 'https://securetech.co.za',
        rating: 4.5,
        reviewCount: 421,
        verified: true,
        serviceAttributes: [
            '24/7 Emergency',
            'Commercial',
            'Residential',
            'Insurance Approved',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -25.9923,
            lng: 28.1361
        },
        createdAt: new Date('2022-01-05'),
        updatedAt: new Date('2024-12-10')
    },
    {
        id: 'builder-6',
        slug: 'green-gardens-landscaping',
        name: 'Green Gardens Landscaping',
        logo: '/images/builders/greengardens-logo.png',
        coverImage: '/images/builders/greengardens-cover.jpg',
        description: 'Transform your outdoor space with our expert landscaping services. From garden design to irrigation systems, we create beautiful, sustainable gardens.',
        yearStarted: 2014,
        teamSize: 28,
        projectsCompleted: 890,
        categories: [],
        subcategories: [],
        provinces: [
            'Eastern Cape'
        ],
        city: 'Port Elizabeth',
        address: '34 Garden Route, Summerstrand, 6001',
        phone: '+27 41 234 5678',
        email: 'hello@greengardenspe.co.za',
        rating: 4.8,
        reviewCount: 234,
        verified: true,
        serviceAttributes: [
            'Residential',
            'Commercial',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -33.9646,
            lng: 25.6115
        },
        createdAt: new Date('2022-04-15'),
        updatedAt: new Date('2024-11-20')
    },
    {
        id: 'builder-7',
        slug: 'precision-roofing',
        name: 'Precision Roofing',
        logo: '/images/builders/precision-logo.png',
        coverImage: '/images/builders/precision-cover.jpg',
        description: 'Expert roofing contractors specializing in tile, thatch, IBR, and flat roof installations. Waterproofing and repair services available.',
        yearStarted: 2008,
        teamSize: 40,
        projectsCompleted: 1560,
        categories: [],
        subcategories: [],
        provinces: [
            'Free State',
            'Northern Cape'
        ],
        city: 'Bloemfontein',
        address: '89 Roof Street, Westdene, 9301',
        phone: '+27 51 432 1098',
        email: 'quotes@precisionroofing.co.za',
        rating: 4.4,
        reviewCount: 187,
        verified: true,
        serviceAttributes: [
            'Commercial',
            'Residential',
            'Insurance Approved',
            'Free Quotes',
            'Weekend Available'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -29.1212,
            lng: 26.2166
        },
        createdAt: new Date('2022-02-01'),
        updatedAt: new Date('2024-10-30')
    },
    {
        id: 'builder-8',
        slug: 'solar-solutions-sa',
        name: 'Solar Solutions SA',
        logo: '/images/builders/solar-logo.png',
        coverImage: '/images/builders/solar-cover.jpg',
        description: 'Beat loadshedding with our premium solar and inverter solutions. We design, supply, and install complete off-grid and hybrid systems for homes and businesses.',
        yearStarted: 2018,
        teamSize: 25,
        projectsCompleted: 680,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'Western Cape',
            'KwaZulu-Natal'
        ],
        city: 'Johannesburg',
        address: '200 Sunshine Boulevard, Randburg, 2125',
        phone: '+27 11 456 7890',
        email: 'solar@solarsa.co.za',
        website: 'https://solarsolutionssa.co.za',
        rating: 4.9,
        reviewCount: 312,
        verified: true,
        serviceAttributes: [
            'Residential',
            'Commercial',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -26.0936,
            lng: 28.0061
        },
        createdAt: new Date('2022-06-01'),
        updatedAt: new Date('2024-12-15')
    }
];
function getBuilderBySlug(slug) {
    return mockBuilders.find((builder)=>builder.slug === slug);
}
function filterBuilders(filters) {
    let results = [
        ...mockBuilders
    ];
    if (filters.province) {
        results = results.filter((b)=>b.provinces.includes(filters.province));
    }
    if (filters.minRating) {
        results = results.filter((b)=>b.rating >= filters.minRating);
    }
    if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        results = results.filter((b)=>b.name.toLowerCase().includes(query) || b.description.toLowerCase().includes(query) || b.city.toLowerCase().includes(query));
    }
    return results;
}
}),
"[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyRowCard",
    ()=>CompanyRowCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CompanyRowCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CompanyRowCard() from the server but CompanyRowCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/cards/CompanyRowCard.tsx <module evaluation>", "CompanyRowCard");
}),
"[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyRowCard",
    ()=>CompanyRowCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CompanyRowCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CompanyRowCard() from the server but CompanyRowCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/src/components/cards/CompanyRowCard.tsx", "CompanyRowCard");
}),
"[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/frontend/src/app/category/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mock-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function generateStaticParams() {
    const paths = [];
    // Add main categories
    for (const category of __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"]){
        paths.push({
            slug: category.slug
        });
        // Add subcategories
        for (const sub of category.subcategories){
            paths.push({
                slug: sub.slug
            });
        }
    }
    return paths;
}
function generateMetadata({ params }) {
    const { slug } = params;
    // Find category or subcategory
    const category = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.slug === slug);
    if (category) {
        return {
            title: `${category.name} in South Africa | Yobuildplus`,
            description: `Find trusted ${category.name.toLowerCase()} contractors in South Africa. Compare quotes and reviews from verified professionals.`
        };
    }
    // Check subcategories
    for (const cat of __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"]){
        const sub = cat.subcategories.find((s)=>s.slug === slug);
        if (sub) {
            return {
                title: `${sub.name} in South Africa | Yobuildplus`,
                description: `Find trusted ${sub.name.toLowerCase()} contractors in South Africa. Compare quotes and reviews from verified professionals.`
            };
        }
    }
    return {
        title: 'Category Not Found'
    };
}
function CategoryPage({ params }) {
    const { slug } = params;
    // 1. Determine if it's a main category or subcategory
    let name = '';
    let description = '';
    let parentCategory = null;
    const category = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.slug === slug);
    if (category) {
        name = category.name;
        // Mock description based on name
        description = `Browse the best ${name.toLowerCase()} professionals in your area. verified, rated, and trusted.`;
    } else {
        // Check subcategories
        for (const cat of __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"]){
            const sub = cat.subcategories.find((s)=>s.slug === slug);
            if (sub) {
                name = sub.name;
                description = `Find expert ${sub.name.toLowerCase()} services. Get quotes from top-rated professionals.`;
                parentCategory = cat;
                break;
            }
        }
    }
    if (!name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // 2. Filter builders (Mock logic - in real app, we'd query DB)
    // For demo, we just return all builders or shuffle them to simulate results
    // We'll filter strictly if they have matching category tags in a real app
    // Here we'll just show all mock builders to populate the page
    const builders = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockBuilders"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-slate-500 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#0EA5E9]",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/builders",
                                    className: "hover:text-[#0EA5E9]",
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this),
                                parentCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/category/${parentCategory.slug}`,
                                            className: "hover:text-[#0EA5E9]",
                                            children: parentCategory.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-800 font-medium",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-600 max-w-3xl",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-64 flex-shrink-0 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg border border-slate-200 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-slate-800 mb-3",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Enter city or province",
                                            className: "w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:border-[#0EA5E9] focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg border border-slate-200 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-slate-800 mb-3",
                                            children: "Rating"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                4,
                                                3,
                                                2
                                            ].map((rating)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 text-sm text-slate-600 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            className: "rounded border-slate-300 text-[#0EA5E9] focus:ring-[#0EA5E9]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                rating,
                                                                "+ Stars"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, rating, true, {
                                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-600",
                                            children: [
                                                "Showing ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-900",
                                                    children: builders.length
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 41
                                                }, this),
                                                " results"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "border border-slate-300 rounded-md text-sm px-2 py-1 outline-none focus:border-[#0EA5E9]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Recommended"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Highest Rated"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Most Reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: builders.map((builder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CompanyRowCard"], {
                                            builder: builder
                                        }, builder.id, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            disabled: true,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "bg-[#0EA5E9] text-white hover:bg-[#0284C7] border-transparent",
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            children: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/category/[slug]/page.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/src/app/category/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/app/category/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d066bc39._.js.map