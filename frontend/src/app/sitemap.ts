import { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { locationsData, getAllLocations } from '@/data/locations';
import { seoKeywords } from '@/data/seo-keywords';
import { buildersApi } from '@/lib/api';

const BASE_URL = 'https://yobuildplus.co.za';

// Limits per sitemap
// Google limit is 50,000. 
// We use a safe chunk size for Keywords (which multiply by ~650 locations)
// 50 keywords * 650 locations = 32,500 URLs per sitemap
const KEYWORDS_PER_CHUNK = 50;

export async function generateSitemaps() {
    // 1. Static ID
    const sitemaps = [{ id: 'static' }];

    // 2. Province IDs (Service x Location)
    // One sitemap per province for standard category pages
    const provinces = Object.keys(locationsData);
    for (const province of provinces) {
        sitemaps.push({ id: `prov-${province.replace(/ /g, '-').toLowerCase()}` });
    }

    // 3. Keyword IDs (Keyword x Location)
    // Chunked by keyword count
    const keywordChunkCount = Math.ceil(seoKeywords.length / KEYWORDS_PER_CHUNK);
    for (let i = 0; i < keywordChunkCount; i++) {
        sitemaps.push({ id: `kw-${i}` });
    }

    return sitemaps;
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    // === 1. STATIC ACTIONS ===
    if (id === 'static') {
        // Base static routes
        const routes = [
            '',
            '/about',
            '/contact',
            '/builders',              // Directory search page
            '/services',              // HTML Sitemap / All Services
            '/get-listed',
            '/login',
            '/register',
        ].map((route) => ({
            url: `${BASE_URL}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        }));

        // Base Category Routes (No Locations)
        const categoryRoutes = categories.flatMap((cat) => {
            const main = {
                url: `${BASE_URL}/category/${cat.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            };
            const subs = cat.subcategories.map((sub) => ({
                url: `${BASE_URL}/category/${sub.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            }));
            return [main, ...subs];
        });

        // Builder Routes - fetch from API
        let builderRoutes: MetadataRoute.Sitemap = [];
        try {
            const builders = await buildersApi.getAll();
            builderRoutes = builders.map((builder) => ({
                url: `${BASE_URL}/builders/${builder.slug}`,
                lastModified: builder.updatedAt ? new Date(builder.updatedAt) : new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.9,
            }));
        } catch (error) {
            console.error('Failed to fetch builders for sitemap:', error);
            // Continue without builder routes if API fails
        }

        // Base Keyword Routes (No Locations)
        const keywordRoutes = seoKeywords.map((kw) => ({
            url: `${BASE_URL}/category/${kw.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        return [...routes, ...categoryRoutes, ...builderRoutes, ...keywordRoutes];
    }

    // === 2. PROVINCE ACTIONS (Service x Location) ===
    if (id.startsWith('prov-')) {
        const provinceSlug = id.replace('prov-', '');
        // Find the province key matching this slug
        const provinceKey = Object.keys(locationsData).find(
            k => k.replace(/ /g, '-').toLowerCase() === provinceSlug
        );

        if (!provinceKey) return [];

        const provinceCities = locationsData[provinceKey] || [];

        // Generate ALL Category x This Province's Cities
        // Flattening logic: For each Category (Main & Sub) -> For each City in This Province
        return categories.flatMap((cat) => {
            // Main Category x Cities
            const mainLocs = provinceCities.map(city => ({
                url: `${BASE_URL}/category/${cat.slug}/${city.toLowerCase().replace(/ /g, '-')}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            }));

            // Sub Categories x Cities
            const subLocs = cat.subcategories.flatMap(sub =>
                provinceCities.map(city => ({
                    url: `${BASE_URL}/category/${sub.slug}/${city.toLowerCase().replace(/ /g, '-')}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.5,
                }))
            );

            return [...mainLocs, ...subLocs];
        });
    }

    // === 3. KEYWORD ACTIONS (Keyword x Location) ===
    if (id.startsWith('kw-')) {
        const chunkIndex = parseInt(id.replace('kw-', ''), 10);
        const start = chunkIndex * KEYWORDS_PER_CHUNK;
        const end = start + KEYWORDS_PER_CHUNK;
        const keywordsSlice = seoKeywords.slice(start, end);
        const allLocs = getAllLocations();

        // Generate: Slice of Keywords x ALL Locations
        return keywordsSlice.flatMap(kw =>
            allLocs.map(loc => ({
                url: `${BASE_URL}/category/${kw.slug}/${loc.toLowerCase().replace(/ /g, '-')}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            }))
        );
    }

    return [];
}
