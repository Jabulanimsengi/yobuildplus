'use client';

import { useMemo } from 'react';
import { TrendingUp, Eye, MessageSquare, Star, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Mock analytics data - in production this would come from API
interface AnalyticsData {
    profileViews: number[];
    quoteRequests: number[];
    labels: string[];
}

const MOCK_DATA: AnalyticsData = {
    profileViews: [45, 52, 38, 65, 72, 58, 89],
    quoteRequests: [3, 5, 2, 7, 4, 6, 8],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

interface StatCardProps {
    title: string;
    value: string | number;
    change?: number;
    icon: React.ReactNode;
    color: string;
}

function StatCard({ title, value, change, icon, color }: StatCardProps) {
    return (
        <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
                <div className={cn('p-2 rounded-lg', color)}>
                    {icon}
                </div>
                {change !== undefined && (
                    <span className={cn(
                        'text-xs font-medium px-2 py-0.5 rounded-full',
                        change >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    )}>
                        {change >= 0 ? '+' : ''}{change}%
                    </span>
                )}
            </div>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
            <p className="text-xs text-slate-500">{title}</p>
        </div>
    );
}

function MiniBarChart({ data, color }: { data: number[]; color: string }) {
    const max = Math.max(...data);

    return (
        <div className="flex items-end gap-1 h-16">
            {data.map((value, i) => (
                <div
                    key={i}
                    className={cn('flex-1 rounded-t transition-all hover:opacity-80', color)}
                    style={{ height: `${(value / max) * 100}%` }}
                    title={`${value}`}
                />
            ))}
        </div>
    );
}

export function ProfileAnalytics() {
    const stats = useMemo(() => {
        const totalViews = MOCK_DATA.profileViews.reduce((a, b) => a + b, 0);
        const totalQuotes = MOCK_DATA.quoteRequests.reduce((a, b) => a + b, 0);
        const avgRating = 4.8;

        return { totalViews, totalQuotes, avgRating };
    }, []);

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#0EA5E9]" />
                    Profile Analytics
                    <span className="text-xs text-slate-400 font-normal ml-auto">Last 7 days</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <StatCard
                        title="Profile Views"
                        value={stats.totalViews}
                        change={12}
                        icon={<Eye className="h-4 w-4 text-[#0EA5E9]" />}
                        color="bg-[#0EA5E9]/10"
                    />
                    <StatCard
                        title="Quote Requests"
                        value={stats.totalQuotes}
                        change={8}
                        icon={<MessageSquare className="h-4 w-4 text-purple-500" />}
                        color="bg-purple-100"
                    />
                    <StatCard
                        title="Avg Rating"
                        value={stats.avgRating}
                        icon={<Star className="h-4 w-4 text-amber-500" />}
                        color="bg-amber-100"
                    />
                    <StatCard
                        title="Response Time"
                        value="2.4h"
                        change={-15}
                        icon={<Calendar className="h-4 w-4 text-emerald-500" />}
                        color="bg-emerald-100"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-slate-700 mb-3">Profile Views</p>
                        <MiniBarChart data={MOCK_DATA.profileViews} color="bg-[#0EA5E9]" />
                        <div className="flex justify-between mt-2">
                            {MOCK_DATA.labels.map((label, i) => (
                                <span key={i} className="text-[10px] text-slate-400">{label}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-slate-700 mb-3">Quote Requests</p>
                        <MiniBarChart data={MOCK_DATA.quoteRequests} color="bg-purple-500" />
                        <div className="flex justify-between mt-2">
                            {MOCK_DATA.labels.map((label, i) => (
                                <span key={i} className="text-[10px] text-slate-400">{label}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
