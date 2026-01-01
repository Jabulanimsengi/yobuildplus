import { generateSeoContent } from '@/utils/seo-content-generator';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug, getSubcategoryBySlug } from '@/data/categories';
import { findLocation } from '@/data/locations';
import { CompanyRowCard } from '@/components/cards/CompanyRowCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';
import { Builder } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Fetch builders from API with optional category filter
async function getBuilders(categorySlug?: string): Promise<Builder[]> {
    try {
        const params = categorySlug ? `?category=${categorySlug}` : '';
        const res = await fetch(`${API_BASE_URL}/api/builders${params}`, {
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching builders:', error);
        return [];
    }
}

// Generate static params for just the base categories to keep build fast
// In a full static build, we would generate combinations here
export function generateStaticParams() {
    const paths = [];

    // Add main categories
    for (const category of categories) {
        paths.push({ slug: [category.slug] });

        // Add subcategories
        for (const sub of category.subcategories) {
            paths.push({ slug: [sub.slug] });
        }
    }

    return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const [serviceSlug, locationSlug] = slug;

    // 1. Identify Service (Category or Subcategory)
    let serviceName = '';
    const mainCat = getCategoryBySlug(serviceSlug);
    if (mainCat) {
        serviceName = mainCat.name;
    } else {
        const subCat = getSubcategoryBySlug(serviceSlug);
        if (subCat) {
            serviceName = subCat.subcategory.name;
        }
    }

    if (!serviceName) return { title: 'Not Found' };

    // 2. Identify Location (if present)
    let locationName = '';
    if (locationSlug) {
        // Simple check - in production we'd slugify and check against locations.ts
        // For now, we assume the slug is the name or close to it
        // We'll capitalize it for the title
        locationName = locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    // 3. Construct Title
    const title = locationName
        ? `Top 10 Best ${serviceName} in ${locationName}, South Africa | Yobuildplus`
        : `${serviceName} in South Africa | Yobuildplus`;

    const description = locationName
        ? `Find trusted ${serviceName.toLowerCase()} in ${locationName}. Compare quotes, read reviews, and hire the best professionals in ${locationName}.`
        : `Find trusted ${serviceName.toLowerCase()} contractors in South Africa. Compare quotes and reviews from verified professionals.`;

    return {
        title,
        description,
        alternates: {
            canonical: locationName
                ? `https://yobuildplus.co.za/category/${serviceSlug}/${locationSlug}`
                : `https://yobuildplus.co.za/category/${serviceSlug}`,
        }
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Parse URL segments
    const [serviceSlug, locationSlug] = slug;

    // 1. Resolve Service
    let name = '';
    let description = '';
    let parentCategory = null;

    const mainCat = getCategoryBySlug(serviceSlug);
    if (mainCat) {
        name = mainCat.name;
        description = `Browse the best ${name.toLowerCase()} professionals in your area. verified, rated, and trusted.`;
    } else {
        const subResult = getSubcategoryBySlug(serviceSlug);
        if (subResult) {
            name = subResult.subcategory.name;
            parentCategory = subResult.category;
            description = `Find expert ${name.toLowerCase()} services. Get quotes from top-rated professionals.`;
        }
    }

    if (!name) {
        notFound();
    }

    // 2. Resolve Location
    let locationName = '';
    let formattedLocation = '';

    if (locationSlug) {
        // Try to match against our DB
        // Converting slug back to potential name logic or searching via slug if we had slugs in DB
        // For this demo, we can search partially or just format the slug
        const possibleName = locationSlug.replace(/-/g, ' ');
        const locationMatch = findLocation(possibleName);

        if (locationMatch) {
            locationName = locationMatch.city;
            formattedLocation = `${locationMatch.city}, ${locationMatch.province}`;
        } else {
            // Fallback formatting if not found in our simplified list but is a valid URL pattern
            locationName = locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            formattedLocation = locationName;
        }

        // Update description for local SEO
        description = `Looking for ${name.toLowerCase()} in ${locationName}? Get free quotes from trusted professionals in ${formattedLocation}.`;
    }

    // 3. Fetch Builders from API with category filter
    const builders = await getBuilders(serviceSlug);

    // Dynamic H1
    const finalH1 = locationName ? `${name} in ${locationName}` : name;

    // Structured Data (LocalBusiness / Service)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': finalH1,
        'description': description,
        'areaServed': locationName ? {
            '@type': 'City',
            'name': locationName
        } : {
            '@type': 'Country',
            'name': 'South Africa'
        },
        'provider': {
            '@type': 'Organization',
            'name': 'Yobuildplus'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1250'
        }
    };

    // 4. Generate SEO Content (Unique Text)
    const seoContent = generateSeoContent(serviceSlug, locationSlug);

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4 md:py-8">
                    {/* Breadcrumb - Horizontal scrollable on mobile */}
                    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 mb-3 md:mb-4">
                        <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-slate-500 whitespace-nowrap">
                            <Link href="/" className="hover:text-[#0EA5E9]">Home</Link>
                            <span>/</span>
                            <Link href="/contractors" className="hover:text-[#0EA5E9]">Categories</Link>
                            {parentCategory && (
                                <>
                                    <span>/</span>
                                    <Link href={`/category/${parentCategory.slug}`} className="hover:text-[#0EA5E9]">
                                        {parentCategory.name}
                                    </Link>
                                </>
                            )}
                            <span>/</span>
                            <span className={locationName ? "hover:text-[#0EA5E9]" : "text-slate-800 font-medium"}>
                                {name}
                            </span>
                            {locationName && (
                                <>
                                    <span>/</span>
                                    <span className="text-slate-800 font-medium">{locationName}</span>
                                </>
                            )}
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">{finalH1}</h1>
                    <p className="text-base md:text-xl text-slate-600 max-w-3xl leading-relaxed">
                        {seoContent?.intro || description}
                    </p>
                </div>
            </div>

            {/* Results Section */}
            <div className="container mx-auto px-4 py-4 md:py-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {/* Filters Sidebar - Hidden on mobile, visible on desktop */}
                    <div className="hidden md:block w-64 flex-shrink-0 space-y-6">
                        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                            <h3 className="font-semibold text-slate-800 mb-3">Location</h3>
                            <input
                                type="text"
                                placeholder="Enter city or province"
                                defaultValue={locationName}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:border-[#0EA5E9] focus:outline-none"
                            />
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                            <h3 className="font-semibold text-slate-800 mb-3">Rating</h3>
                            <div className="space-y-2">
                                {[4, 3, 2].map(rating => (
                                    <label key={rating} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                        <input type="checkbox" className="rounded border-slate-300 text-[#0EA5E9] focus:ring-[#0EA5E9]" />
                                        <span>{rating}+ Stars</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Listings */}
                    <div className="flex-1">
                        <div className="mb-3 md:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <p className="text-sm md:text-base text-slate-600">
                                <span className="font-bold text-slate-900">{builders.length}</span> results in {locationName || 'South Africa'}
                            </p>
                            <select className="border border-slate-300 rounded-md text-sm px-2 py-1.5 outline-none focus:border-[#0EA5E9] w-full sm:w-auto">
                                <option>Recommended</option>
                                <option>Highest Rated</option>
                                <option>Most Reviews</option>
                            </select>
                        </div>

                        {builders.length > 0 ? (
                            <div className="space-y-4">
                                {builders.map(builder => (
                                    <CompanyRowCard key={builder.id} builder={builder} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
                                <div className="text-4xl mb-4">🔍</div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">No builders found</h3>
                                <p className="text-slate-600 mb-4">
                                    We don&apos;t have any builders in this category yet.
                                </p>
                                <Link href="/contractors" className="text-[#0EA5E9] hover:underline font-medium">
                                    Browse all builders
                                </Link>
                            </div>
                        )}

                        {/* Pagination Mock */}
                        {builders.length > 0 && (
                            <div className="mt-8 flex justify-center gap-2">
                                <Button variant="outline" size="sm" disabled>Previous</Button>
                                <Button variant="outline" size="sm" className="bg-[#0EA5E9] text-white hover:bg-[#0284C7] border-transparent">1</Button>
                                <Button variant="outline" size="sm">2</Button>
                                <Button variant="outline" size="sm">Next</Button>
                            </div>
                        )}

                        {/* === SEO CONTENT BLOCKS (Unique Content) === */}
                        {seoContent && (
                            <div className="mt-16 space-y-12">
                                {/* FAQs */}
                                <section className="bg-white rounded-xl border border-slate-200 p-8">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions about {seoContent.serviceName} in {seoContent.locationName}</h2>
                                    <div className="space-y-6">
                                        {seoContent.faqs.map((faq, i) => (
                                            <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                                                <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Related Locations (Internal Linking) */}
                                {seoContent.nearbyLocations.length > 0 && (
                                    <section>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Find {seoContent.serviceName} in nearby areas</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {seoContent.nearbyLocations.map(city => (
                                                <Link
                                                    key={city}
                                                    href={`/category/${serviceSlug}/${city.toLowerCase().replace(/ /g, '-')}`}
                                                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm transition-colors"
                                                >
                                                    {city}
                                                </Link>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* Related Services */}
                                <section>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Services</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {seoContent.relatedServices.map(srv => (
                                            <Link
                                                key={srv.slug}
                                                href={`/category/${srv.slug}/${locationSlug || ''}`}
                                                className="px-3 py-1.5 border border-slate-200 hover:border-[#0EA5E9] text-slate-600 hover:text-[#0EA5E9] rounded-full text-sm transition-colors"
                                            >
                                                {srv.name}
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
