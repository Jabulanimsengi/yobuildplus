'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, X, Sun, BatteryCharging } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LoadSheddingBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if user has dismissed the banner before
        const dismissed = localStorage.getItem('loadshedding-banner-dismissed');
        if (!dismissed) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        localStorage.setItem('loadshedding-banner-dismissed', 'true');
    };

    if (!isVisible || isDismissed) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-40 animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Zap className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">Tired of Load Shedding?</h3>
                            <p className="text-xs text-white/80">Get solar backup installed</p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="flex items-center gap-4 mb-3 text-xs">
                        <span className="flex items-center gap-1">
                            <Sun className="h-3 w-3" /> Solar Panels
                        </span>
                        <span className="flex items-center gap-1">
                            <BatteryCharging className="h-3 w-3" /> Inverters
                        </span>
                    </div>

                    {/* CTA */}
                    <Link href="/category/solar-inverter">
                        <Button
                            className="w-full bg-white text-orange-600 hover:bg-white/90 font-semibold h-10"
                        >
                            Find Solar Installers
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
