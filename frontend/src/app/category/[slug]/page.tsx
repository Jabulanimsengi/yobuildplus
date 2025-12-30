import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { CompanyRowCard } from '@/components/cards/CompanyRowCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Builder } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

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

// Generate static params for all categories and subcategories
export function generateStaticParams() {
    const paths = [];

    // Add main categories
    for (const category of categories) {
        paths.push({ slug: category.slug });

        // Add subcategories
        for (const sub of category.subcategories) {
            paths.push({ slug: sub.slug });
        }
    }

    return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find category or subcategory
    const category = categories.find(c => c.slug === slug);
    if (category) {
        return {
            title: `${category.name} in South Africa | Yobuildplus`,
            description: `Find trusted ${category.name.toLowerCase()} contractors in South Africa. Compare quotes and reviews from verified professionals.`,
        };
    }

    // Check subcategories
    for (const cat of categories) {
        const sub = cat.subcategories.find(s => s.slug === slug);
        if (sub) {
            return {
                title: `${sub.name} in South Africa | Yobuildplus`,
                description: `Find trusted ${sub.name.toLowerCase()} contractors in South Africa. Compare quotes and reviews from verified professionals.`,
            };
        }
    }

    return { title: 'Category Not Found' };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // 1. Determine if it's a main category or subcategory
    let name = '';
    let description = '';
    let parentCategory = null;

    const category = categories.find(c => c.slug === slug);
    if (category) {
        name = category.name;
        // Mock description based on name
        description = `Browse the best ${name.toLowerCase()} professionals in your area. verified, rated, and trusted.`;
    } else {
        // Check subcategories
        for (const cat of categories) {
            const sub = cat.subcategories.find(s => s.slug === slug);
            if (sub) {
                name = sub.name;
                description = `Find expert ${sub.name.toLowerCase()} services. Get quotes from top-rated professionals.`;
                parentCategory = cat;
                break;
            }
        }
    }

    if (!name) {
        notFound();
    }

    // 2. Fetch builders from API with category filter
    const builders = await getBuilders(slug);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <Link href="/" className="hover:text-[#0EA5E9]">Home</Link>
                        <span>/</span>
                        <Link href="/builders" className="hover:text-[#0EA5E9]">Categories</Link>
                        <span>/</span>
                        {parentCategory && (
                            <>
                                <Link href={`/category/${parentCategory.slug}`} className="hover:text-[#0EA5E9]">
                                    {parentCategory.name}
                                </Link>
                                <span>/</span>
                            </>
                        )}
                        <span className="text-slate-800 font-medium">{name}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{name}</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">{description}</p>
                </div>
            </div>

            {/* Results Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar (Mock) */}
                    <div className="w-full md:w-64 flex-shrink-0 space-y-6">
                        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                            <h3 className="font-semibold text-slate-800 mb-3">Location</h3>
                            <input
                                type="text"
                                placeholder="Enter city or province"
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
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-slate-600">
                                Showing <span className="font-bold text-slate-900">{builders.length}</span> results
                            </p>
                            <select className="border border-slate-300 rounded-md text-sm px-2 py-1 outline-none focus:border-[#0EA5E9]">
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
                                <Link href="/builders" className="text-[#0EA5E9] hover:underline font-medium">
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
                                <Button variant="outline" size="sm">3</Button>
                                <Button variant="outline" size="sm">Next</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
