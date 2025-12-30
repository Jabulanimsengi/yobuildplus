'use client';

import { useState, useMemo } from 'react';
import { HorizontalCategoryBar } from '@/components/filters/HorizontalCategoryBar';
import { CompanyRowCard } from '@/components/cards/CompanyRowCard';
import { mockBuilders } from '@/data/mock-data';
import { categories } from '@/data/categories';

export function CompanyListSection() {
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

    // Filter builders based on selected category
    // In a real app, this would filter by category association
    // For now, we'll show all builders and simulate filtering
    const filteredBuilders = useMemo(() => {
        if (!selectedCategory) {
            return mockBuilders;
        }

        // Get the selected category
        const category = categories.find(c => c.slug === selectedCategory);
        if (!category) {
            return mockBuilders;
        }

        // For demo purposes, we'll distribute builders across categories
        // In a real app, builders would have category associations
        const categoryIndex = categories.findIndex(c => c.slug === selectedCategory);
        const buildersPerCategory = Math.ceil(mockBuilders.length / categories.length);
        const startIndex = categoryIndex * buildersPerCategory;
        const endIndex = Math.min(startIndex + buildersPerCategory, mockBuilders.length);

        // If no specific builders for this category, return first few
        if (startIndex >= mockBuilders.length) {
            return mockBuilders.slice(0, 2);
        }

        return mockBuilders.slice(startIndex, endIndex);
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
                        Showing <span className="font-semibold text-slate-800">{filteredBuilders.length}</span> companies
                        {selectedCategory && (
                            <span> in <span className="font-semibold text-[#0EA5E9]">
                                {categories.find(c => c.slug === selectedCategory)?.name}
                            </span></span>
                        )}
                    </p>
                </div>

                {/* Company Rows */}
                <div className="space-y-4 max-w-5xl mx-auto">
                    {filteredBuilders.length > 0 ? (
                        filteredBuilders.map((builder) => (
                            <CompanyRowCard key={builder.id} builder={builder} />
                        ))
                    ) : (
                        <div className="text-center py-16 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                            <p className="text-slate-500 text-lg">No companies found in this category.</p>
                            <button
                                onClick={() => setSelectedCategory(undefined)}
                                className="mt-4 text-[#0EA5E9] font-medium hover:underline"
                            >
                                View all companies
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
