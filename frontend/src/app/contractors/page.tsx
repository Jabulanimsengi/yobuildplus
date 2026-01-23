'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Search, Loader2, Zap, Map as MapIcon, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CompanyRowCard } from '@/components/cards/CompanyRowCard';
import { FilterBar } from '@/components/filters/FilterBar';
import { buildersApi } from '@/lib/api';
import { Builder, Province, ServiceAttribute } from '@/types';
import { cn } from '@/lib/utils';

// Dynamic import to avoid SSR issues with mapbox-gl WebGL
const ContractorMap = dynamic(
    () => import('@/components/map/ContractorMap').then(mod => mod.ContractorMap),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 rounded-xl">
                <Loader2 className="h-8 w-8 animate-spin text-[#0EA5E9]" />
            </div>
        )
    }
);

export default function BuildersPage() {
    const [builders, setBuilders] = useState<Builder[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
    const [selectedProvince, setSelectedProvince] = useState<Province | undefined>();
    const [selectedRating, setSelectedRating] = useState<number | undefined>();
    const [selectedAttributes, setSelectedAttributes] = useState<ServiceAttribute[]>([]);
    const [verifiedOnly, setVerifiedOnly] = useState(false);
    const [emergencyOnly, setEmergencyOnly] = useState(false);
    const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
    const [selectedBuilderId, setSelectedBuilderId] = useState<string | undefined>();

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

        // Emergency filter - show 24/7 services first/only
        if (emergencyOnly) {
            results = results.filter((b) =>
                b.serviceAttributes.some(attr =>
                    attr.toLowerCase().includes('24/7') ||
                    attr.toLowerCase().includes('emergency')
                )
            );
        }

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

        // Verified filter
        if (verifiedOnly) {
            results = results.filter((b) => b.verified);
        }

        // Service attributes filter
        if (selectedAttributes.length > 0) {
            results = results.filter((b) =>
                selectedAttributes.every((attr) => b.serviceAttributes.includes(attr))
            );
        }

        return results;
    }, [builders, searchQuery, selectedCategory, selectedProvince, selectedRating, selectedAttributes, verifiedOnly, emergencyOnly]);

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
        setVerifiedOnly(false);
        setEmergencyOnly(false);
    };

    const scrollToBuilder = (id: string) => {
        setSelectedBuilderId(id);
        const element = document.getElementById(`builder-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Page Header */}
            <div className="container mx-auto px-4 pt-8 shrink-0">
                <div className="bg-slate-900 text-white py-8 md:py-12 px-6 md:px-8 rounded-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Contractors & Service Providers</h1>
                    <p className="text-slate-300 max-w-2xl">
                        Browse our directory of verified professionals across South Africa.
                    </p>
                </div>
            </div>

            <div className={cn("container mx-auto px-4 py-8 flex-1 flex flex-col", viewMode === 'map' ? 'max-w-none px-0 py-0' : '')}>

                {/* Search & Controls Container */}
                <div className={cn("mb-6 transition-all", viewMode === 'map' ? 'p-4 border-b bg-white z-10 sticky top-0' : '')}>
                    {/* Top Row: Emergency + Search + View Toggle */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex gap-2 flex-1">
                            <Button
                                onClick={() => setEmergencyOnly(!emergencyOnly)}
                                variant={emergencyOnly ? "default" : "outline"}
                                className={cn(
                                    "flex items-center gap-2 h-12 px-4 whitespace-nowrap",
                                    emergencyOnly
                                        ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                                        : "border-red-300 text-red-600 hover:bg-red-50"
                                )}
                            >
                                <Zap className="h-5 w-5" />
                                <span className="hidden sm:inline">24/7 Emergency</span>
                                <span className="sm:hidden">24/7</span>
                                {emergencyOnly && <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">ON</span>}
                            </Button>

                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search contractors..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 h-12 text-base border-2 border-[#0EA5E9]/50 focus:border-[#0EA5E9]"
                                />
                            </div>
                        </div>

                        {/* View Toggle */}
                        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                            <button
                                onClick={() => setViewMode('list')}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium",
                                    viewMode === 'list'
                                        ? "bg-white text-primary shadow-sm"
                                        : "text-slate-500 hover:text-slate-700"
                                )}
                            >
                                <List className="h-4 w-4" />
                                List
                            </button>
                            <button
                                onClick={() => setViewMode('map')}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium",
                                    viewMode === 'map'
                                        ? "bg-white text-primary shadow-sm"
                                        : "text-slate-500 hover:text-slate-700"
                                )}
                            >
                                <MapIcon className="h-4 w-4" />
                                Map
                            </button>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="mt-4">
                        <FilterBar
                            selectedCategory={selectedCategory}
                            selectedProvince={selectedProvince}
                            selectedRating={selectedRating}
                            selectedAttributes={selectedAttributes}
                            verifiedOnly={verifiedOnly}
                            onCategoryChange={setSelectedCategory}
                            onProvinceChange={setSelectedProvince}
                            onRatingChange={setSelectedRating}
                            onAttributeToggle={handleAttributeToggle}
                            onVerifiedOnlyChange={setVerifiedOnly}
                            onClearFilters={handleClearFilters}
                            className={viewMode === 'map' ? 'border-none shadow-none p-0 bg-transparent' : ''}
                        />
                    </div>
                </div>

                {/* Main Content Area */}
                {viewMode === 'list' ? (
                    /* LIST VIEW */
                    <div className="space-y-6">
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
                                <h3 className="text-xl font-semibold text-red-800 mb-2">Error Loading Contractors</h3>
                                <p className="text-red-600">{error}</p>
                            </div>
                        )}

                        {/* Results */}
                        {!isLoading && !error && (
                            <>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-muted-foreground">
                                        Showing <span className="font-semibold text-foreground">{filteredBuilders.length}</span> contractors
                                    </p>
                                </div>

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
                                        <button onClick={handleClearFilters} className="text-primary hover:underline">Clear filters</button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ) : (
                    /* MAP VIEW */
                    <div className="flex flex-col md:flex-row flex-1 min-h-[400px] h-[calc(100vh-320px)] md:h-[calc(100vh-250px)] overflow-hidden">
                        {/* Left: Scrollable List - hidden on mobile, visible on desktop */}
                        <div className="hidden md:flex md:w-1/2 lg:w-3/5 overflow-y-auto border-r border-slate-200 bg-slate-50 custom-scrollbar p-4 flex-col gap-4">
                            <p className="text-sm font-medium text-slate-500 mb-2">
                                {filteredBuilders.length} Results
                            </p>

                            {filteredBuilders.map(builder => (
                                <div
                                    key={builder.id}
                                    id={`builder-${builder.id}`}
                                    className={cn(
                                        "transition-all duration-300",
                                        selectedBuilderId === builder.id ? 'ring-2 ring-primary ring-offset-2 rounded-xl' : ''
                                    )}
                                >
                                    <CompanyRowCard builder={builder} className="bg-white shadow-sm" />
                                </div>
                            ))}

                            {filteredBuilders.length === 0 && (
                                <div className="text-center py-10 text-slate-500">
                                    No contractors found in this area matching your filters.
                                </div>
                            )}
                        </div>

                        {/* Right: Map - full width on mobile, partial on desktop */}
                        <div className="w-full h-[50vh] md:h-full md:w-1/2 lg:w-2/5 bg-slate-100 relative">
                            <ContractorMap
                                builders={filteredBuilders}
                                selectedBuilderId={selectedBuilderId}
                                onSelectBuilder={scrollToBuilder}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

