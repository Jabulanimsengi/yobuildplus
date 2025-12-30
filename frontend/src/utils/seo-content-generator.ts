import { categories, getCategoryBySlug, getSubcategoryBySlug } from '@/data/categories';
import { locationsData, findLocation } from '@/data/locations';
import { getSeoKeywordBySlug } from '@/data/seo-keywords';

// Data Banks for Random Variation
const INTRO_TEMPLATES = [
    "Looking for reliable {{service}} in {{location}}? At Yobuildplus, we connect you with verified, rated, and background-checked professionals in your area.",
    "Need {{service}} services in {{location}}? Don't risk it with unvetted contractors. Compare quotes from {{location}}'s top-rated experts today.",
    "Find the best {{service}} in {{location}}, South Africa. Our directory allows you to view profiles, read reviews, and request free quotes."
];

const FAQ_TEMPLATES = [
    {
        q: "How much does {{service}} cost in {{location}}?",
        a: "The cost of {{service}} in {{location}} varies by project size. Typically, hourly rates range from R450 to R850, while project-based work depends on materials and labor. We recommend getting 3 quotes to compare."
    },
    {
        q: "Are the specialized {{service}} contractors in {{location}} verified?",
        a: "Yes! At Yobuildplus, we prioritize safety. All listed professionals in {{location}} undergo basic verification, and many carry full background checks for your peace of mind."
    },
    {
        q: "Can I get an emergency {{service}} in {{location}}?",
        a: "Absolutely. Many of our listed providers offer 24/7 emergency services in {{location}} and surrounding suburbs. Look for the 'Emergency available' tag on their profile."
    }
];

export function generateSeoContent(serviceSlug: string, locationSlug: string | undefined) {
    // 1. Resolve Names
    let serviceName = '';
    let locationName = 'South Africa';
    let province = '';

    const mainCat = getCategoryBySlug(serviceSlug);
    const subCat = getSubcategoryBySlug(serviceSlug);
    const seoKw = getSeoKeywordBySlug(serviceSlug);

    if (mainCat) serviceName = mainCat.name;
    else if (subCat) serviceName = subCat.subcategory.name;
    else if (seoKw) serviceName = seoKw.keyword;

    if (locationSlug) {
        // Simple formatter
        const rawLoc = locationSlug.replace(/-/g, ' ');
        const locMatch = findLocation(rawLoc);
        if (locMatch) {
            locationName = locMatch.city;
            province = locMatch.province;
        } else {
            locationName = rawLoc.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
    }

    if (!serviceName) return null;

    // 2. Generate Intro (Randomized for variety)
    const templateIndex = (serviceName.length + (locationName?.length || 0)) % INTRO_TEMPLATES.length;
    const intro = INTRO_TEMPLATES[templateIndex]
        .replace(/{{service}}/g, serviceName)
        .replace(/{{location}}/g, locationName);

    // 3. Generate FAQs
    const faqs = FAQ_TEMPLATES.map(t => ({
        question: t.q.replace(/{{service}}/g, serviceName).replace(/{{location}}/g, locationName),
        answer: t.a.replace(/{{service}}/g, serviceName).replace(/{{location}}/g, locationName)
    }));

    // 4. Generate Nearby Locations (Internal Linking)
    let nearbyLocations: string[] = [];
    if (province && locationsData[province]) {
        // Get 10 random other locations in the same province
        // Using a pseudo-random slice to be consistent per page rebuild but "random" enough
        const allCities = locationsData[province];
        const start = (serviceName.length) % Math.max(1, allCities.length - 10);
        nearbyLocations = allCities.slice(start, start + 10).filter(c => c !== locationName);
    }

    // 5. Generate Related Services (Internal Linking)
    // Link to other subcategories in the same parent category or random popular ones
    let relatedServices: { name: string, slug: string }[] = [];
    if (subCat) {
        relatedServices = subCat.category.subcategories
            .filter(s => s.slug !== serviceSlug)
            .map(s => ({ name: s.name, slug: s.slug }))
            .slice(0, 6);
    } else {
        // Random mix for main categories / keywords
        relatedServices = categories[0].subcategories.slice(0, 6).map(s => ({ name: s.name, slug: s.slug }));
    }

    return {
        titleH1: `${serviceName} in ${locationName}`,
        intro,
        faqs,
        nearbyLocations,
        relatedServices,
        locationName,
        serviceName
    };
}
