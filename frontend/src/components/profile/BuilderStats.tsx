
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, CheckCircle, TrendingUp } from 'lucide-react';

interface Stats {
    totalRequests: number;
    todayRequests: number;
    acceptedQuotes: number;
}

export function BuilderStats({ builderId }: { builderId: string }) {
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/builder/${builderId}/stats`);
                if (response.ok) {
                    const data = await response.json();
                    setStats(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchStats();
        // Refresh every 60 seconds
        const interval = setInterval(fetchStats, 60000);
        return () => clearInterval(interval);
    }, [builderId]);

    if (!stats) return null;

    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gradient-to-br from-[#0EA5E9]/10 to-[#0EA5E9]/5 rounded-lg border border-[#0EA5E9]/20">
                <FileText className="h-5 w-5 mx-auto mb-1 text-[#0EA5E9]" />
                <p className="text-xl font-bold text-slate-800">{stats.totalRequests}</p>
                <p className="text-xs text-slate-500">Total Requests</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 rounded-lg border border-[#F97316]/20">
                <TrendingUp className="h-5 w-5 mx-auto mb-1 text-[#F97316]" />
                <p className="text-xl font-bold text-slate-800">{stats.todayRequests}</p>
                <p className="text-xs text-slate-500">Today</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
                <CheckCircle className="h-5 w-5 mx-auto mb-1 text-green-500" />
                <p className="text-xl font-bold text-slate-800">{stats.acceptedQuotes}</p>
                <p className="text-xs text-slate-500">Accepted</p>
            </div>
        </div>
    );
}
