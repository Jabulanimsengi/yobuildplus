'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';

interface HorizontalCategoryBarProps {
    selectedCategory?: string;
    onCategoryChange: (categorySlug: string | undefined) => void;
    className?: string;
}

export function HorizontalCategoryBar({
    selectedCategory,
    onCategoryChange,
    className,
}: HorizontalCategoryBarProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 1
            );
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return () => {
                container.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 200;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={cn('relative', className)}>
            {/* Left Arrow */}
            {canScrollLeft && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow-lg hover:bg-slate-50:bg-slate-700 rounded-full border border-slate-200"
                >
                    <ChevronLeft className="h-5 w-5 text-slate-600" />
                </Button>
            )}

            {/* Scrollable Container */}
            <div
                ref={scrollContainerRef}
                className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-10 md:px-12 py-3"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* All Categories Button */}
                <button
                    onClick={() => onCategoryChange(undefined)}
                    className={cn(
                        'flex items-center gap-2 px-4 py-2 md:py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 border-2',
                        !selectedCategory
                            ? 'bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-lg'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]'
                    )}
                >
                    All
                </button>

                {/* Category Buttons */}
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onCategoryChange(category.slug)}
                        className={cn(
                            'flex items-center gap-2 px-4 py-2 md:py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 border-2',
                            selectedCategory === category.slug
                                ? 'bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-lg'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]'
                        )}
                    >
                        <span className="hidden md:inline text-lg">{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>

            {/* Right Arrow */}
            {canScrollRight && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow-lg hover:bg-slate-50:bg-slate-700 rounded-full border border-slate-200"
                >
                    <ChevronRight className="h-5 w-5 text-slate-600" />
                </Button>
            )}
        </div>
    );
}
