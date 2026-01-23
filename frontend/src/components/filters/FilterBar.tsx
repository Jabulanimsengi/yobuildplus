'use client';

import { useState } from 'react';
import { Filter, X, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { categories } from '@/data/categories';
import { PROVINCES, SERVICE_ATTRIBUTES, Province, ServiceAttribute } from '@/types';
import { cn } from '@/lib/utils';

interface FilterBarProps {
    selectedCategory?: string;
    selectedProvince?: Province;
    selectedRating?: number;
    selectedAttributes: ServiceAttribute[];
    verifiedOnly?: boolean;
    onCategoryChange: (category: string | undefined) => void;
    onProvinceChange: (province: Province | undefined) => void;
    onRatingChange: (rating: number | undefined) => void;
    onAttributeToggle: (attribute: ServiceAttribute) => void;
    onVerifiedOnlyChange?: (verified: boolean) => void;
    onClearFilters: () => void;
    className?: string;
}

export function FilterBar({
    selectedCategory,
    selectedProvince,
    selectedRating,
    selectedAttributes,
    verifiedOnly = false,
    onCategoryChange,
    onProvinceChange,
    onRatingChange,
    onAttributeToggle,
    onVerifiedOnlyChange,
    onClearFilters,
    className,
}: FilterBarProps) {
    const [showAllCategories, setShowAllCategories] = useState(false);

    const hasActiveFilters =
        selectedCategory ||
        selectedProvince ||
        selectedRating ||
        selectedAttributes.length > 0 ||
        verifiedOnly;

    const displayedCategories = showAllCategories ? categories : categories.slice(0, 4);

    return (
        <div className={cn('bg-white border-2 border-[#0EA5E9]/30 rounded-lg p-4', className)}>
            {/* Category Pills */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Categories</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onCategoryChange(undefined)}
                        className={cn(
                            'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                            !selectedCategory
                                ? 'bg-primary text-white'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        )}
                    >
                        All
                    </button>
                    {displayedCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onCategoryChange(category.slug)}
                            className={cn(
                                'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                                selectedCategory === category.slug
                                    ? 'bg-primary text-white'
                                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            )}
                        >
                            <span className="hidden sm:inline">{category.icon}</span>
                            <span>{category.name}</span>
                        </button>
                    ))}
                    {!showAllCategories && categories.length > 4 && (
                        <button
                            onClick={() => setShowAllCategories(true)}
                            className="px-3 py-1.5 rounded-full text-sm font-medium text-primary hover:bg-sky-50 transition-all border border-primary/30"
                        >
                            View more
                        </button>
                    )}
                    {showAllCategories && (
                        <button
                            onClick={() => setShowAllCategories(false)}
                            className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:bg-slate-50 transition-all"
                        >
                            Show less
                        </button>
                    )}
                </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center gap-3">
                {/* Province Select */}
                <Select
                    value={selectedProvince || 'all'}
                    onValueChange={(value) =>
                        onProvinceChange(value === 'all' ? undefined : (value as Province))
                    }
                >
                    <SelectTrigger className="w-40 border-[#0EA5E9]/50">
                        <SelectValue placeholder="Province" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Provinces</SelectItem>
                        {PROVINCES.map((province) => (
                            <SelectItem key={province} value={province}>
                                {province}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* Rating Select */}
                <Select
                    value={selectedRating?.toString() || 'all'}
                    onValueChange={(value) =>
                        onRatingChange(value === 'all' ? undefined : Number(value))
                    }
                >
                    <SelectTrigger className="w-36 border-[#0EA5E9]/50">
                        <SelectValue placeholder="Min Rating" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Any Rating</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
                        <SelectItem value="3">3+ Stars</SelectItem>
                    </SelectContent>
                </Select>

                {/* Verified Only Toggle */}
                {onVerifiedOnlyChange && (
                    <Button
                        variant={verifiedOnly ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => onVerifiedOnlyChange(!verifiedOnly)}
                        className={cn(
                            'flex items-center gap-1.5',
                            verifiedOnly
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                        )}
                    >
                        <BadgeCheck className="h-4 w-4" />
                        Verified Only
                    </Button>
                )}

                {/* Service Attributes */}
                <div className="flex flex-wrap gap-2">
                    {SERVICE_ATTRIBUTES.slice(0, 4).map((attr) => (
                        <Badge
                            key={attr}
                            variant={selectedAttributes.includes(attr) ? 'default' : 'outline'}
                            className={cn(
                                'cursor-pointer transition-all',
                                selectedAttributes.includes(attr)
                                    ? 'bg-secondary hover:bg-secondary/90'
                                    : 'border-[#0EA5E9]/50 hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/5'
                            )}
                            onClick={() => onAttributeToggle(attr)}
                        >
                            {attr}
                        </Badge>
                    ))}
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearFilters}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <X className="h-4 w-4 mr-1" />
                        Clear all
                    </Button>
                )}
            </div>
        </div>
    );
}
