'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    FileText,
    Search,
    Loader2,
    Building2,
    User,
    Calendar,
    DollarSign,
    Eye
} from 'lucide-react';
import Link from 'next/link';

interface Quote {
    id: string;
    message: string;
    status: string;
    totalAmount?: number;
    createdAt: string;
    builder: {
        id: string;
        name: string;
        slug: string;
        email: string;
    };
    user?: {
        id: string;
        name: string;
        email: string;
    };
    _count: {
        items: number;
    };
}

const statusColors: Record<string, string> = {
    quote_requested: 'bg-yellow-100 text-yellow-800',
    request_accepted: 'bg-blue-100 text-blue-800',
    request_rejected: 'bg-red-100 text-red-800',
    quoted: 'bg-purple-100 text-purple-800',
    quote_accepted: 'bg-green-100 text-green-800',
    quote_rejected: 'bg-red-100 text-red-800',
    project_created: 'bg-emerald-100 text-emerald-800',
    completed: 'bg-teal-100 text-teal-800',
};

const statusLabels: Record<string, string> = {
    quote_requested: 'Requested',
    request_accepted: 'Accepted',
    request_rejected: 'Declined',
    quoted: 'Quoted',
    quote_accepted: 'Quote Accepted',
    quote_rejected: 'Quote Declined',
    project_created: 'In Progress',
    completed: 'Completed',
};

export default function AdminQuotesPage() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');
    const [search, setSearch] = useState('');
    const [stats, setStats] = useState({ total: 0, requested: 0, accepted: 0, quoted: 0, completed: 0 });

    useEffect(() => {
        fetchQuotes();
        fetchStats();
    }, [filter]);

    const fetchQuotes = async () => {
        setIsLoading(true);
        try {
            const params = filter !== 'all' ? `?status=${filter}` : '';
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/quotes${params}`
            );
            if (response.ok) {
                const data = await response.json();
                setQuotes(data);
            }
        } catch (error) {
            console.error('Failed to fetch quotes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchStats = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/quotes/stats`
            );
            if (response.ok) {
                const data = await response.json();
                setStats(data);
            }
        } catch (error) {
            console.error('Failed to fetch stats:', error);
        }
    };

    const filteredQuotes = quotes.filter(q =>
        q.builder?.name?.toLowerCase().includes(search.toLowerCase()) ||
        q.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
        q.message?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Quotes Management</h1>
                <p className="text-slate-500">Monitor all quote requests on the platform.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-5 gap-4">
                <Card className="border-l-4 border-l-slate-400">
                    <CardContent className="p-4">
                        <p className="text-sm text-slate-500">Total</p>
                        <p className="text-2xl font-bold">{stats.total}</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-yellow-400">
                    <CardContent className="p-4">
                        <p className="text-sm text-slate-500">Requested</p>
                        <p className="text-2xl font-bold">{stats.requested}</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-400">
                    <CardContent className="p-4">
                        <p className="text-sm text-slate-500">Quoted</p>
                        <p className="text-2xl font-bold">{stats.quoted}</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-400">
                    <CardContent className="p-4">
                        <p className="text-sm text-slate-500">Accepted</p>
                        <p className="text-2xl font-bold">{stats.accepted}</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-teal-400">
                    <CardContent className="p-4">
                        <p className="text-sm text-slate-500">Completed</p>
                        <p className="text-2xl font-bold">{stats.completed}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by contractor, client, or message..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex gap-2 flex-wrap">
                    {['all', 'quote_requested', 'quoted', 'quote_accepted', 'completed'].map((status) => (
                        <Button
                            key={status}
                            variant={filter === status ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilter(status)}
                            className={filter === status ? 'bg-[#0EA5E9]' : ''}
                        >
                            {status === 'all' ? 'All' : statusLabels[status] || status}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Quotes List */}
            {isLoading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                </div>
            ) : filteredQuotes.length === 0 ? (
                <Card>
                    <CardContent className="p-8 text-center">
                        <FileText className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                        <p className="text-slate-500">No quotes found.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {filteredQuotes.map((quote) => (
                        <Card key={quote.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-4 items-start">
                                    {/* Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Badge className={statusColors[quote.status] || 'bg-gray-100'}>
                                                {statusLabels[quote.status] || quote.status}
                                            </Badge>
                                            {quote.totalAmount && (
                                                <span className="text-lg font-bold text-[#0EA5E9]">
                                                    R {quote.totalAmount.toLocaleString()}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-slate-600 mb-3 line-clamp-2">{quote.message}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <Building2 className="h-4 w-4" />
                                                <Link href={`/contractors/${quote.builder.slug}`} className="hover:text-[#0EA5E9]">
                                                    {quote.builder.name}
                                                </Link>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                {quote.user?.name || 'Guest Client'}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {new Date(quote.createdAt).toLocaleDateString()}
                                            </div>
                                            {quote._count?.items > 0 && (
                                                <div className="flex items-center gap-1">
                                                    <DollarSign className="h-4 w-4" />
                                                    {quote._count.items} line items
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">
                                            <Eye className="h-4 w-4 mr-1" /> View Details
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
