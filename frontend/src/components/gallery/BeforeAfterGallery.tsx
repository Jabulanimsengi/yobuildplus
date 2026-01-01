'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BeforeAfterItem {
    id: string;
    title: string;
    beforeImage: string;
    afterImage: string;
    description?: string;
}

interface BeforeAfterGalleryProps {
    items: BeforeAfterItem[];
    className?: string;
}

export function BeforeAfterGallery({ items, className }: BeforeAfterGalleryProps) {
    const [selectedItem, setSelectedItem] = useState<BeforeAfterItem | null>(null);
    const [showAfter, setShowAfter] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    if (items.length === 0) return null;

    return (
        <>
            {/* Gallery Grid */}
            <div className={cn('grid grid-cols-2 md:grid-cols-3 gap-4', className)}>
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            setSelectedItem(item);
                            setSliderPosition(50);
                        }}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-slate-200 hover:border-[#0EA5E9] transition-all"
                    >
                        {/* Before Image */}
                        <Image
                            src={item.beforeImage}
                            alt={`${item.title} - Before`}
                            fill
                            className="object-cover"
                        />

                        {/* After Overlay on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Image
                                src={item.afterImage}
                                alt={`${item.title} - After`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Labels */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-medium">{item.title}</p>
                            <p className="text-white/70 text-xs group-hover:hidden">Before</p>
                            <p className="text-emerald-400 text-xs hidden group-hover:block">After ✨</p>
                        </div>

                        {/* Badge */}
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-2 py-1 rounded-full">
                            Hover to compare
                        </div>
                    </button>
                ))}
            </div>

            {/* Full Screen Comparison Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Comparison Slider */}
                    <div className="w-full max-w-4xl">
                        <h3 className="text-white text-xl font-bold text-center mb-4">{selectedItem.title}</h3>

                        <div
                            className="relative aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize"
                            onMouseMove={handleSliderChange}
                        >
                            {/* After Image (Full) */}
                            <Image
                                src={selectedItem.afterImage}
                                alt="After"
                                fill
                                className="object-cover"
                            />

                            {/* Before Image (Clipped) */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: `${sliderPosition}%` }}
                            >
                                <Image
                                    src={selectedItem.beforeImage}
                                    alt="Before"
                                    fill
                                    className="object-cover"
                                    style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                                />
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <ChevronLeft className="h-4 w-4 text-slate-600 -mr-1" />
                                    <ChevronRight className="h-4 w-4 text-slate-600 -ml-1" />
                                </div>
                            </div>

                            {/* Labels */}
                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                                Before
                            </div>
                            <div className="absolute top-4 right-4 bg-emerald-500/80 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                                After
                            </div>
                        </div>

                        {selectedItem.description && (
                            <p className="text-white/70 text-center mt-4">{selectedItem.description}</p>
                        )}

                        <p className="text-white/50 text-sm text-center mt-2">
                            Drag the slider to compare before and after
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
