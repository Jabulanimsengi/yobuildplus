'use client';

import { useState, useMemo, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CompanyRowCard } from '@/components/cards/CompanyRowCard';
import { FilterBar } from '@/components/filters/FilterBar';
import { buildersApi } from '@/lib/api';
import { Builder, Province, ServiceAttribute } from '@/types';

export default function BuildersPage() {
    const [builders, setBuilders] = useState<Builder[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
    const [selectedProvince, setSelectedProvince] = useState<Province | undefined>();
    const [selectedRating, setSelectedRating] = useState<number | undefined>();
    const [selectedAttributes, setSelectedAttributes] = useState<ServiceAttribute[]>([]);

    // Fetch builders from API
    useEffect(() => {
        async function fetchBuilders() {
            try {
                setIsLoading(true);
                setError(null);
                const data = await buildersApi.getAll();
                setBuilders(data);
            } catch (err) {
                console.error('Failed to fetch builders:', err);
                setError('Failed to load builders. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }

        fetchBuilders();
    }, []);

    // Filter builders based on criteria (client-side for responsiveness)
    const filteredBuilders = useMemo(() => {
        let results = [...builders];

        // Search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            results = results.filter(
                (b) =>
                    b.name.toLowerCase().includes(query) ||
                    b.description.toLowerCase().includes(query) ||
                    b.city.toLowerCase().includes(query)
            );
        }

        // Province filter
        if (selectedProvince) {
            results = results.filter((b) => b.provinces.includes(selectedProvince));
        }

        // Rating filter
        if (selectedRating) {
            results = results.filter((b) => b.rating >= selectedRating);
        }

        // Service attributes filter
        if (selectedAttributes.length > 0) {
            results = results.filter((b) =>
                selectedAttributes.every((attr) => b.serviceAttributes.includes(attr))
            );
        }

        return results;
    }, [builders, searchQuery, selectedCategory, selectedProvince, selectedRating, selectedAttributes]);

    const handleAttributeToggle = (attribute: ServiceAttribute) => {
        setSelectedAttributes((prev) =>
            prev.includes(attribute)
                ? prev.filter((a) => a !== attribute)
                : [...prev, attribute]
        );
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedCategory(undefined);
        setSelectedProvince(undefined);
        setSelectedRating(undefined);
        setSelectedAttributes([]);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <div className="container mx-auto px-4 pt-8">
                <div className="bg-slate-900 text-white py-12 px-6 md:px-8 rounded-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Contractors & Service Providers</h1>
                    <p className="text-slate-300 max-w-2xl">
                        Browse our directory of verified professionals across South Africa.
                        Use the filters below to find the perfect match for your project.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Search Bar */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search by name, service, or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 h-12 text-base border-2 border-[#0EA5E9]/50 focus:border-[#0EA5E9]"
                    />
                </div>

                {/* Filter Bar */}
                <FilterBar
                    selectedCategory={selectedCategory}
                    selectedProvince={selectedProvince}
                    selectedRating={selectedRating}
                    selectedAttributes={selectedAttributes}
                    onCategoryChange={setSelectedCategory}
                    onProvinceChange={setSelectedProvince}
                    onRatingChange={setSelectedRating}
                    onAttributeToggle={handleAttributeToggle}
                    onClearFilters={handleClearFilters}
                    className="mb-8"
                />

                {/* Loading State */}
                {isLoading && (
                    <div className="flex items-center justify-center py-16">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <span className="ml-3 text-muted-foreground">Loading contractors...</span>
                    </div>
                )}

                {/* Error State */}
                {error && !isLoading && (
                    <div className="text-center py-16 bg-red-50 rounded-lg border-2 border-red-200">
                        <div className="text-4xl mb-4">⚠️</div>
                        <h3 className="text-xl font-semibold text-red-800 mb-2">Error Loading Contractors</h3>
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-primary hover:underline font-medium"
                        >
                            Try again
                        </button>
                    </div>
                )}

                {/* Results */}
                {!isLoading && !error && (
                    <>
                        {/* Results Count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-muted-foreground">
                                Showing <span className="font-semibold text-foreground">{filteredBuilders.length}</span> contractors
                            </p>
                        </div>

                        {/* Builder Grid */}
                        {filteredBuilders.length > 0 ? (
                            <div className="flex flex-col gap-4">
                                {filteredBuilders.map((builder) => (
                                    <CompanyRowCard key={builder.id} builder={builder} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-white rounded-lg border-2 border-[#0EA5E9]/30">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">No contractors found</h3>
                                <p className="text-muted-foreground mb-4">
                                    Try adjusting your filters or search terms
                                </p>
                                <button
                                    onClick={handleClearFilters}
                                    className="text-primary hover:underline font-medium"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
