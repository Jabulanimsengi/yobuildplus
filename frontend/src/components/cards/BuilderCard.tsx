import Link from 'next/link';
import Image from 'next/image';
import { MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/StarRating';
import { Builder } from '@/types';
import { cn } from '@/lib/utils';

interface BuilderCardProps {
    builder: Builder;
    className?: string;
}

export function BuilderCard({ builder, className }: BuilderCardProps) {
    return (
        <Link href={`/contractors/${builder.slug}`}>
            <Card
                className={cn(
                    'group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
                    'border border-slate-200 hover:border-[#0EA5E9] bg-white',
                    className
                )}
            >
                {/* Cover Image */}
                <div className="relative h-40 bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10">
                    {builder.coverImage ? (
                        <Image
                            src={builder.coverImage}
                            alt={builder.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Briefcase className="h-16 w-16 text-[#0EA5E9]/20" />
                        </div>
                    )}

                    {/* Verified Badge - Teal */}
                    {builder.verified && (
                        <div className="absolute top-3 right-3">
                            <Badge className="bg-[#0D9488] text-white gap-1 border-0">
                                <CheckCircle2 className="h-3 w-3" />
                                Verified
                            </Badge>
                        </div>
                    )}
                </div>

                <CardContent className="p-4 bg-white">
                    {/* Logo & Name */}
                    <div className="flex items-start gap-3 mb-3">
                        <div className="relative h-12 w-12 rounded-lg bg-slate-50 flex-shrink-0 overflow-hidden border-2 border-[#0EA5E9]">
                            {builder.logo ? (
                                <Image
                                    src={builder.logo}
                                    alt={`${builder.name} logo`}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full w-full text-xl font-bold text-[#0EA5E9]">
                                    {builder.name.charAt(0)}
                                </div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-800 group-hover:text-[#0EA5E9] transition-colors truncate">
                                {builder.name}
                            </h3>
                            <div className="flex items-center gap-1 text-slate-500 text-sm">
                                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                                <span className="truncate">{builder.city}, {builder.provinces[0]}</span>
                            </div>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <StarRating rating={builder.rating} size="sm" />
                            <span className="text-sm font-medium text-slate-800">
                                {builder.rating.toFixed(1)}
                            </span>
                            <span className="text-xs text-slate-500">
                                ({builder.reviewCount})
                            </span>
                        </div>
                    </div>

                    {/* Service Attributes - Blue badges */}
                    <div className="flex flex-wrap gap-1.5">
                        {builder.serviceAttributes.slice(0, 3).map((attr) => (
                            <Badge
                                key={attr}
                                variant="outline"
                                className="text-xs border-[#0EA5E9] text-slate-600 bg-[#0EA5E9]/5"
                            >
                                {attr}
                            </Badge>
                        ))}
                        {builder.serviceAttributes.length > 3 && (
                            <Badge
                                variant="outline"
                                className="text-xs border-[#0EA5E9] text-slate-600 bg-[#0EA5E9]/5"
                            >
                                +{builder.serviceAttributes.length - 3}
                            </Badge>
                        )}
                    </div>

                    {/* Portfolio Link - Orange accent */}
                    <div className="mt-3 pt-3 border-t border-slate-200">
                        <span className="text-sm text-[#F97316] font-medium group-hover:underline">
                            View Portfolio →
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
