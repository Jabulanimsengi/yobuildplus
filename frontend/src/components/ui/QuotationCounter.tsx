'use client';

import { useState, useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';

interface QuotationCounterProps {
    className?: string;
}

export function QuotationCounter({ className }: QuotationCounterProps) {
    const [count, setCount] = useState<number>(0);
    const [displayCount, setDisplayCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const animationRef = useRef<NodeJS.Timeout | null>(null);

    // Fetch the count from API
    const fetchCount = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/stats/global`
            );
            if (response.ok) {
                const data = await response.json();
                setCount(data.totalQuotations || 0);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Failed to fetch quotation count:', error);
            // Set a fallback number for demo purposes
            setCount(1247);
            setIsLoading(false);
        }
    };

    // Initial fetch and polling
    useEffect(() => {
        fetchCount();
        // Poll every 30 seconds for updates
        const interval = setInterval(fetchCount, 30000);
        return () => clearInterval(interval);
    }, []);

    // Animate the counter
    useEffect(() => {
        if (isLoading) return;

        const duration = 2000; // 2 seconds animation
        const steps = 60;
        const increment = count / steps;
        let current = 0;
        let step = 0;

        if (animationRef.current) {
            clearInterval(animationRef.current);
        }

        animationRef.current = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), count);
            setDisplayCount(current);

            if (step >= steps) {
                if (animationRef.current) {
                    clearInterval(animationRef.current);
                }
                setDisplayCount(count);
            }
        }, duration / steps);

        return () => {
            if (animationRef.current) {
                clearInterval(animationRef.current);
            }
        };
    }, [count, isLoading]);

    return (
        <div className={className}>
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#F97316]" />
                </div>
                <div className="text-left">
                    <p className="font-bold text-2xl text-foreground">
                        {isLoading ? (
                            <span className="inline-block w-16 h-6 bg-slate-200 animate-pulse rounded" />
                        ) : (
                            displayCount.toLocaleString()
                        )}
                    </p>
                    <p className="text-sm text-muted-foreground">Quotes Requested</p>
                </div>
            </div>
        </div>
    );
}
