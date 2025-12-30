'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/StarRating';
import { Builder } from '@/types';
import { cn } from '@/lib/utils';

interface CompanyRowCardProps {
    builder: Builder;
    className?: string;
}

export function CompanyRowCard({ builder, className }: CompanyRowCardProps) {
    const [showAllProvinces, setShowAllProvinces] = useState(false);
    const maxVisibleProvinces = 1;
    const hasMoreProvinces = builder.provinces.length > maxVisibleProvinces;
    const visibleProvinces = showAllProvinces
        ? builder.provinces
        : builder.provinces.slice(0, maxVisibleProvinces);

    return (
        <div
            className={cn(
                'flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition-all hover:shadow-lg',
                'bg-white border-slate-200 hover:border-[#0EA5E9]',
                className
            )}
        >
            {/* Mobile: Company name and logo row */}
            <div className="flex items-center gap-3 md:hidden">
                {/* Logo */}
                <div className="relative h-10 w-10 rounded-lg flex-shrink-0 overflow-hidden border-2 border-[#0EA5E9] bg-slate-50">
                    {builder.logo ? (
                        <Image
                            src={builder.logo}
                            alt={`${builder.name} logo`}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full w-full text-base font-bold text-[#0EA5E9] bg-[#0EA5E9]/10">
                            {builder.name.charAt(0)}
                        </div>
                    )}
                </div>
                {/* Name */}
                <h3 className="font-semibold text-slate-800 truncate text-sm flex-1">
                    {builder.name}
                </h3>
            </div>

            {/* Desktop: Company Name - Fixed width for alignment */}
            <div className="hidden md:block w-[280px] lg:w-[320px] flex-shrink-0">
                <div className="bg-slate-50 rounded-lg px-4 py-3 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 truncate text-sm md:text-base">
                        {builder.name}
                    </h3>
                </div>
            </div>

            {/* Desktop: Logo - Fixed size with primary blue accent border */}
            <div className="hidden md:block relative h-12 w-12 rounded-lg flex-shrink-0 overflow-hidden border-2 border-[#0EA5E9] bg-slate-50">
                {builder.logo ? (
                    <Image
                        src={builder.logo}
                        alt={`${builder.name} logo`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full w-full text-lg font-bold text-[#0EA5E9] bg-[#0EA5E9]/10">
                        {builder.name.charAt(0)}
                    </div>
                )}
            </div>

            {/* Mobile: Rating + Provinces row */}
            <div className="flex items-center justify-between gap-2 md:hidden">
                <StarRating rating={builder.rating} size="sm" />
                <div className="flex items-center gap-1">
                    {visibleProvinces.slice(0, 1).map((province) => (
                        <Badge
                            key={province}
                            variant="outline"
                            className="bg-[#0EA5E9]/10 border-[#0EA5E9] text-slate-700 text-xs whitespace-nowrap font-medium"
                        >
                            {province}
                        </Badge>
                    ))}
                    {builder.provinces.length > 1 && (
                        <span className="text-xs text-[#0EA5E9]">+{builder.provinces.length - 1}</span>
                    )}
                </div>
            </div>

            {/* View Portfolio Button - Full width on mobile */}
            <Link href={`/builders/${builder.slug}`} className="flex-shrink-0 md:flex-shrink">
                <Button
                    size="sm"
                    className="w-full md:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-xs md:text-sm whitespace-nowrap rounded-lg shadow-sm"
                >
                    View Portfolio
                </Button>
            </Link>

            {/* Desktop: Rating - Fixed width for alignment */}
            <div className="hidden md:block flex-shrink-0 w-[100px]">
                <StarRating rating={builder.rating} size="md" />
            </div>

            {/* Desktop: Provinces - Blue badges */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0 relative min-w-[140px]">
                {visibleProvinces.map((province) => (
                    <Badge
                        key={province}
                        variant="outline"
                        className="bg-[#0EA5E9]/10 border-[#0EA5E9] text-slate-700 text-xs whitespace-nowrap font-medium"
                    >
                        {province}
                    </Badge>
                ))}

                {hasMoreProvinces && !showAllProvinces && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowAllProvinces(true);
                        }}
                        className="flex items-center gap-0.5 px-2 py-1 text-xs font-medium text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                    >
                        +{builder.provinces.length - maxVisibleProvinces} more
                        <ChevronDown className="h-3 w-3" />
                    </button>
                )}

                {/* Expanded provinces dropdown */}
                {showAllProvinces && hasMoreProvinces && (
                    <div
                        className="absolute top-full right-0 mt-1 z-10 bg-white rounded-lg shadow-lg border border-slate-200 p-3 min-w-36"
                        onMouseLeave={() => setShowAllProvinces(false)}
                    >
                        <p className="text-xs font-medium text-slate-500 mb-2">Operating in:</p>
                        <div className="flex flex-col gap-1.5">
                            {builder.provinces.map((province) => (
                                <Badge
                                    key={province}
                                    variant="outline"
                                    className="bg-[#0EA5E9]/5 border-[#0EA5E9] text-slate-700 text-xs justify-center"
                                >
                                    {province}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
