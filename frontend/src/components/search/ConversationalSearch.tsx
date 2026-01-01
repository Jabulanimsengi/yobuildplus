'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Zap, Droplets, Plug, Home, Wrench, Shield, Palette, Trees, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const popularProblems = [
    { icon: Droplets, label: 'Burst pipe', query: 'plumber burst pipe', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: Plug, label: 'No electricity', query: 'electrician power outage', color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { icon: Home, label: 'Roof leak', query: 'roofing leak repair', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: Wrench, label: 'Blocked drain', query: 'plumber blocked drain', color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { icon: Shield, label: 'Security install', query: 'security CCTV alarm', color: 'text-red-500', bg: 'bg-red-50' },
    { icon: Zap, label: 'Solar backup', query: 'solar inverter installation', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: Palette, label: 'Paint job', query: 'painting interior exterior', color: 'text-purple-500', bg: 'bg-purple-50' },
    { icon: Trees, label: 'Garden work', query: 'landscaping garden', color: 'text-green-500', bg: 'bg-green-50' },
];

interface ConversationalSearchProps {
    className?: string;
}

export function ConversationalSearch({ className }: ConversationalSearchProps) {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [showAllProblems, setShowAllProblems] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/contractors?search=${encodeURIComponent(query)}`);
        }
    };

    const handleProblemClick = (problemQuery: string) => {
        router.push(`/contractors?search=${encodeURIComponent(problemQuery)}`);
    };

    // Show 4 on mobile initially, all on desktop
    const visibleProblems = showAllProblems ? popularProblems : popularProblems.slice(0, 4);

    return (
        <div className={cn('w-full max-w-2xl mx-auto', className)}>
            {/* Main Question */}
            <h2 className="text-xl md:text-3xl font-bold text-white text-center mb-4">
                What do you need help with?
            </h2>

            {/* Search Input */}
            <form onSubmit={handleSearch} className="relative mb-4 md:mb-6">
                <div className={cn(
                    'relative transition-all duration-300',
                    isFocused && 'transform scale-[1.02]'
                )}>
                    <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-slate-400" />
                    <Input
                        type="text"
                        placeholder="e.g., 'My geyser is leaking'"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="pl-10 md:pl-12 pr-20 md:pr-24 h-11 md:h-14 text-slate-800 text-sm md:text-base rounded-xl shadow-lg border-2 border-white/20 bg-white focus:border-white focus:ring-4 focus:ring-white/20"
                    />
                    <Button
                        type="submit"
                        className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg h-8 md:h-10 px-3 md:px-4 text-sm"
                    >
                        Search
                    </Button>
                </div>
            </form>

            {/* Popular Problems */}
            <div className="text-center">
                <p className="text-white/70 text-xs md:text-sm mb-2 md:mb-3">Popular problems:</p>

                {/* Mobile: Compact grid */}
                <div className="md:hidden">
                    <div className="flex flex-wrap justify-center gap-1.5">
                        {visibleProblems.map((problem) => (
                            <button
                                key={problem.label}
                                onClick={() => handleProblemClick(problem.query)}
                                className={cn(
                                    'flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all',
                                    'bg-white/10 hover:bg-white/20 text-white',
                                    'border border-white/20 hover:border-white/40'
                                )}
                            >
                                <problem.icon className="h-3 w-3" />
                                {problem.label}
                            </button>
                        ))}
                    </div>
                    {!showAllProblems && (
                        <button
                            onClick={() => setShowAllProblems(true)}
                            className="mt-2 text-xs text-white/60 hover:text-white flex items-center gap-1 mx-auto"
                        >
                            <ChevronDown className="h-3 w-3" />
                            Show more
                        </button>
                    )}
                    {showAllProblems && (
                        <button
                            onClick={() => setShowAllProblems(false)}
                            className="mt-2 text-xs text-white/60 hover:text-white flex items-center gap-1 mx-auto"
                        >
                            <ChevronUp className="h-3 w-3" />
                            Show less
                        </button>
                    )}
                </div>

                {/* Desktop: All visible */}
                <div className="hidden md:flex flex-wrap justify-center gap-2">
                    {popularProblems.map((problem) => (
                        <button
                            key={problem.label}
                            onClick={() => handleProblemClick(problem.query)}
                            className={cn(
                                'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                                'bg-white/10 hover:bg-white/20 text-white hover:scale-105',
                                'border border-white/20 hover:border-white/40'
                            )}
                        >
                            <problem.icon className="h-4 w-4" />
                            {problem.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

