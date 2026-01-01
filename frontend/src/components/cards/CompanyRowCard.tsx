'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { Briefcase, ChevronDown, Clock, Shield, Phone, Zap, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/StarRating';
import { PaymentProtectionModal } from '@/components/modals/PaymentProtectionModal';
import { Builder, OperatingHours } from '@/types';
import { cn } from '@/lib/utils';

// Check if contractor offers 24/7 emergency service
function hasEmergencyService(serviceAttributes: string[]): boolean {
    return serviceAttributes.some(attr =>
        attr.toLowerCase().includes('24/7') ||
        attr.toLowerCase().includes('emergency')
    );
}

// Helper function to check if business is currently open
function getOpenStatus(operatingHours?: OperatingHours): { isOpen: boolean; statusText: string } {
    if (!operatingHours) {
        return { isOpen: true, statusText: 'Open' }; // Default to open if no hours set
    }

    const now = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;
    const currentDay = days[now.getDay()];
    const todayHours = operatingHours[currentDay];

    if (todayHours.closed) {
        return { isOpen: false, statusText: 'Closed Today' };
    }

    const currentTime = now.getHours() * 60 + now.getMinutes();
    const [openHour, openMin] = todayHours.open.split(':').map(Number);
    const [closeHour, closeMin] = todayHours.close.split(':').map(Number);
    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;

    if (currentTime >= openTime && currentTime < closeTime) {
        // Check if closing soon (within 1 hour)
        if (closeTime - currentTime <= 60) {
            return { isOpen: true, statusText: 'Closing Soon' };
        }
        return { isOpen: true, statusText: 'Open Now' };
    }

    return { isOpen: false, statusText: 'Closed' };
}

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

    const { isOpen, statusText } = useMemo(
        () => getOpenStatus(builder.operatingHours),
        [builder.operatingHours]
    );

    const isEmergencyAvailable = hasEmergencyService(builder.serviceAttributes);

    return (
        <div
            id={`builder-${builder.id}`}
            className={cn(
                'flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition-all hover:shadow-lg',
                builder.verified
                    ? 'bg-sky-50/20 border-[#0EA5E9]/60 shadow-sm hover:border-[#0EA5E9]'
                    : 'bg-white border-slate-200 hover:border-[#0EA5E9]',
                isEmergencyAvailable && !builder.verified && 'ring-1 ring-red-100',
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
                {/* Name + Status */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="font-semibold text-slate-800 truncate text-sm">
                            {builder.name}
                        </h3>
                        {builder.verified && (
                            <CheckCircle className="h-3.5 w-3.5 text-[#0EA5E9]" />
                        )}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        <Badge
                            variant="outline"
                            className={cn(
                                'text-[10px] px-1.5 py-0',
                                isOpen
                                    ? statusText === 'Closing Soon'
                                        ? 'bg-amber-50 border-amber-400 text-amber-700'
                                        : 'bg-emerald-50 border-emerald-400 text-emerald-700'
                                    : 'bg-slate-100 border-slate-300 text-slate-500'
                            )}
                        >
                            <Clock className="h-2.5 w-2.5 mr-1" />
                            {statusText}
                        </Badge>
                        {isEmergencyAvailable && (
                            <Badge className="bg-red-500 text-white border-0 text-[9px] px-1.5 py-0 flex items-center">
                                <Zap className="h-2.5 w-2.5 mr-0.5" />
                                24/7
                            </Badge>
                        )}
                        {builder.escrowAvailable && (
                            <PaymentProtectionModal>
                                <Badge variant="outline" className="bg-emerald-50 border-emerald-200 text-emerald-700 text-[9px] px-1.5 py-0 flex items-center cursor-pointer hover:bg-emerald-100 transition-colors">
                                    <Shield className="h-2.5 w-2.5 mr-0.5" />
                                    Protected
                                </Badge>
                            </PaymentProtectionModal>
                        )}
                    </div>
                </div>
            </div>

            {/* Desktop: Company Name - Fixed width for alignment */}
            <div className="hidden md:block w-[280px] lg:w-[320px] flex-shrink-0">
                <div className={cn("rounded-lg px-4 py-3 border transition-colors", builder.verified ? "bg-white border-[#0EA5E9]/20" : "bg-slate-50 border-slate-200")}>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                            <h3 className="font-semibold text-slate-800 truncate text-sm md:text-base">
                                {builder.name}
                            </h3>
                            {builder.verified && (
                                <div className="text-[#0EA5E9]" title="Verified Contractor">
                                    <CheckCircle className="h-4 w-4" />
                                </div>
                            )}
                        </div>
                        <Badge
                            variant="outline"
                            className={cn(
                                'text-[10px] px-1.5 py-0 flex-shrink-0',
                                isOpen
                                    ? statusText === 'Closing Soon'
                                        ? 'bg-amber-50 border-amber-400 text-amber-700'
                                        : 'bg-emerald-50 border-emerald-400 text-emerald-700'
                                    : 'bg-slate-100 border-slate-300 text-slate-500'
                            )}
                        >
                            <Clock className="h-2.5 w-2.5 mr-1" />
                            {statusText}
                        </Badge>
                    </div>
                    {/* Trust Badges Row */}
                    <div className="flex items-center gap-1.5 mt-2">
                        {isEmergencyAvailable && (
                            <Badge className="bg-red-500 text-white border-0 text-[10px] px-1.5 py-0.5">
                                <Zap className="h-3 w-3 mr-0.5" />
                                24/7 Emergency
                            </Badge>
                        )}
                        {builder.verified && (
                            <Badge className="bg-[#0EA5E9] text-white border-0 text-[10px] px-1.5 py-0.5">
                                Verified
                            </Badge>
                        )}
                        {builder.escrowAvailable && (
                            <PaymentProtectionModal>
                                <Badge variant="outline" className="bg-emerald-50 border-emerald-200 text-emerald-700 text-[10px] px-1.5 py-0.5 font-medium cursor-pointer hover:bg-emerald-100 transition-colors">
                                    <Shield className="h-3 w-3 mr-0.5" />
                                    Escrow Protected
                                </Badge>
                            </PaymentProtectionModal>
                        )}
                    </div>
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
            <Link href={`/contractors/${builder.slug}`} className="flex-shrink-0 md:flex-shrink">
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
