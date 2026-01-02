'use client';

import { useState, useEffect, useMemo } from 'react';
import { HorizontalCategoryBar } from '@/components/filters/HorizontalCategoryBar';
import { CompanyRowCard } from '@/components/cards/CompanyRowCard';
import { categories } from '@/data/categories';
import { buildersApi } from '@/lib/api';
import { Builder } from '@/types';
import { Loader2, Building2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CompanyListSection() {
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
    const [builders, setBuilders] = useState<Builder[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch builders from API
    useEffect(() => {
        async function fetchBuilders() {
            try {
                setIsLoading(true);
                setError(null);
                const data = await buildersApi.getAll({ category: selectedCategory });
                setBuilders(data);
            } catch (err) {
                console.error('Failed to fetch builders:', err);
                setError('Failed to load contractors');
                setBuilders([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBuilders();
    }, [selectedCategory]);

    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
                {/* Category Filter Bar */}
                <div className="mb-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-800 mb-3">
                            Find Companies by Category
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Browse our extensive directory of verified builders and contractors organized by service type.
                        </p>
                    </div>
                    <HorizontalCategoryBar
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        className="max-w-5xl mx-auto"
                    />
                </div>

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between max-w-5xl mx-auto px-2">
                    <p className="text-slate-500">
                        {isLoading ? (
                            'Loading...'
                        ) : (
                            <>
                                Showing <span className="font-semibold text-slate-800">{builders.length}</span> companies
                                {selectedCategory && (
                                    <span> in <span className="font-semibold text-[#0EA5E9]">
                                        {categories.find(c => c.slug === selectedCategory)?.name}
                                    </span></span>
                                )}
                            </>
                        )}
                    </p>
                </div>

                {/* Company Rows */}
                <div className="space-y-4 max-w-5xl mx-auto">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-16">
                            <Loader2 className="h-8 w-8 animate-spin text-[#0EA5E9]" />
                            <span className="ml-3 text-slate-500">Loading contractors...</span>
                        </div>
                    ) : error ? (
                        <div className="text-center py-16 bg-red-50 rounded-lg border border-red-200">
                            <p className="text-red-600">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-4 text-[#0EA5E9] font-medium hover:underline"
                            >
                                Try again
                            </button>
                        </div>
                    ) : builders.length > 0 ? (
                        builders.map((builder) => (
                            <CompanyRowCard key={builder.id} builder={builder} />
                        ))
                    ) : (
                        <div className="text-center py-16 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                            <Building2 className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                No contractors listed yet
                            </h3>
                            <p className="text-slate-500 max-w-md mx-auto mb-6">
                                {selectedCategory
                                    ? 'No companies found in this category. Be the first to list your business!'
                                    : 'Be the first to list your business on Yobuildplus and start receiving leads from customers.'}
                            </p>
                            <div className="flex gap-3 justify-center">
                                {selectedCategory && (
                                    <button
                                        onClick={() => setSelectedCategory(undefined)}
                                        className="text-[#0EA5E9] font-medium hover:underline"
                                    >
                                        View all categories
                                    </button>
                                )}
                                <Link href="/get-listed">
                                    <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
                                        List Your Business Free
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
