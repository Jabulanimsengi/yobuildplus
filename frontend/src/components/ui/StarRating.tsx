'use client';

import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showValue?: boolean;
    className?: string;
}

export function StarRating({
    rating,
    maxRating = 5,
    size = 'md',
    showValue = false,
    className,
}: StarRatingProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

    const sizeClasses = {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
    };

    const starSize = sizeClasses[size];

    return (
        <div className={cn('flex items-center gap-0.5', className)}>
            {/* Full stars */}
            {Array.from({ length: fullStars }).map((_, i) => (
                <Star
                    key={`full-${i}`}
                    className={cn(starSize, 'fill-yellow-400 text-yellow-400')}
                />
            ))}

            {/* Half star */}
            {hasHalfStar && (
                <div className="relative">
                    <Star className={cn(starSize, 'text-gray-300')} />
                    <div className="absolute inset-0 overflow-hidden w-1/2">
                        <Star className={cn(starSize, 'fill-yellow-400 text-yellow-400')} />
                    </div>
                </div>
            )}

            {/* Empty stars */}
            {Array.from({ length: emptyStars }).map((_, i) => (
                <Star key={`empty-${i}`} className={cn(starSize, 'text-gray-300')} />
            ))}

            {/* Show numeric value */}
            {showValue && (
                <span className="ml-1.5 text-sm font-medium text-muted-foreground">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
}
