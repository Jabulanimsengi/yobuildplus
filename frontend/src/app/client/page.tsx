'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    FileText, Search, Clock, CheckCircle2,
    ArrowRight, Building2, Loader2, Sparkles
} from 'lucide-react';

interface QuoteSummary {
    id: string;
    status: string;
    builder: { name: string; slug: string };
    createdAt: string;
    totalAmount?: number;
}

const statusColors: Record<string, string> = {
    quote_requested: 'bg-yellow-100 text-yellow-800',
    request_accepted: 'bg-blue-100 text-blue-800',
    quoted: 'bg-purple-100 text-purple-800',
    quote_accepted: 'bg-green-100 text-green-800',
    quote_rejected: 'bg-red-100 text-red-800',
    project_created: 'bg-emerald-100 text-emerald-800',
};

const statusLabels: Record<string, string> = {
    quote_requested: 'Pending',
    request_accepted: 'Accepted',
    request_rejected: 'Declined',
    quoted: 'Quoted',
    quote_accepted: 'Accepted',
    quote_rejected: 'Declined',
    project_created: 'In Progress',
};

export default function ClientDashboard() {
    const { data: session } = useSession();
    const [quotes, setQuotes] = useState<QuoteSummary[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        quoted: 0,
        accepted: 0,
    });

    useEffect(() => {
        async function fetchQuotes() {
            if (!session?.accessToken) return;

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/my-quotes`,
                    { headers: { Authorization: `Bearer ${session.accessToken}` } }
                );

                if (response.ok) {
                    const data = await response.json();
                    setQuotes(data.slice(0, 5)); // Show only 5 recent

                    // Calculate stats
                    const pending = data.filter((q: any) =>
                        q.status === 'quote_requested' || q.status === 'request_accepted'
                    ).length;
                    const quoted = data.filter((q: any) => q.status === 'quoted').length;
                    const accepted = data.filter((q: any) =>
                        q.status === 'quote_accepted' || q.status === 'project_created'
                    ).length;

                    setStats({ total: data.length, pending, quoted, accepted });
                }
            } catch (error) {
                console.error('Failed to fetch quotes:', error);
            } finally {
                setIsLoading(false);
            }
        }

        if (session) fetchQuotes();
    }, [session]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-900">
                    Welcome back, {session?.user?.name?.split(' ')[0] || 'there'}!
                </h1>
                <p className="text-slate-500">
                    Manage your quote requests and find contractors for your projects.
                </p>
            </div>

            {/* Quick Action Banner */}
            <Card className="border-2 border-[#0EA5E9] bg-gradient-to-r from-[#0EA5E9]/5 to-[#F97316]/5">
                <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#0EA5E9] rounded-full">
                            <Sparkles className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Find a Contractor</h2>
                            <p className="text-slate-600 mt-1">
                                Browse verified contractors and request free quotes for your project.
                            </p>
                        </div>
                    </div>
                    <Link href="/contractors">
                        <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white whitespace-nowrap">
                            <Search className="h-5 w-5 mr-2" />
                            Browse Contractors
                        </Button>
                    </Link>
                </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="border-l-4 border-l-slate-400">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500">Total Requests</p>
                                <p className="text-2xl font-bold">{isLoading ? '-' : stats.total}</p>
                            </div>
                            <FileText className="h-8 w-8 text-slate-300" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-yellow-400">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500">Pending</p>
                                <p className="text-2xl font-bold">{isLoading ? '-' : stats.pending}</p>
                            </div>
                            <Clock className="h-8 w-8 text-yellow-300" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-400">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500">Quotes Received</p>
                                <p className="text-2xl font-bold">{isLoading ? '-' : stats.quoted}</p>
                            </div>
                            <FileText className="h-8 w-8 text-purple-300" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-400">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500">Accepted</p>
                                <p className="text-2xl font-bold">{isLoading ? '-' : stats.accepted}</p>
                            </div>
                            <CheckCircle2 className="h-8 w-8 text-green-300" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Quotes */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Quote Requests</CardTitle>
                    <Link href="/client/quotes">
                        <Button variant="ghost" size="sm">
                            View All <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="flex justify-center py-8">
                            <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
                        </div>
                    ) : quotes.length === 0 ? (
                        <div className="text-center py-12">
                            <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">No quotes yet</h3>
                            <p className="text-slate-500 mb-6">
                                Start by finding contractors and requesting quotes for your project.
                            </p>
                            <Link href="/contractors">
                                <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
                                    Find Contractors
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {quotes.map((quote) => (
                                <div
                                    key={quote.id}
                                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                                            <Building2 className="h-5 w-5 text-[#0EA5E9]" />
                                        </div>
                                        <div>
                                            <Link
                                                href={`/contractors/${quote.builder.slug}`}
                                                className="font-semibold text-slate-900 hover:text-[#0EA5E9]"
                                            >
                                                {quote.builder.name}
                                            </Link>
                                            <p className="text-sm text-slate-500">
                                                {new Date(quote.createdAt).toLocaleDateString('en-ZA')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {quote.totalAmount && (
                                            <span className="text-sm font-semibold text-slate-700">
                                                R {quote.totalAmount.toLocaleString()}
                                            </span>
                                        )}
                                        <Badge className={statusColors[quote.status] || 'bg-gray-100'}>
                                            {statusLabels[quote.status] || quote.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
