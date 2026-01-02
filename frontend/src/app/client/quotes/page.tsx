'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Building2, Calendar, MapPin, FileText, Check, X, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

interface QuotationItem {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    unit: string;
    totalPrice: number;
}

interface Quote {
    id: string;
    message: string;
    location?: string;
    status: string;
    totalAmount?: number;
    notes?: string;
    validUntil?: string;
    createdAt: string;
    respondedAt?: string;
    builder: {
        id: string;
        name: string;
        slug: string;
        logo?: string;
        phone?: string;
        email?: string;
    };
    items: QuotationItem[];
    project?: {
        id: string;
        title: string;
        status: string;
    };
}

const statusColors: Record<string, string> = {
    quote_requested: 'bg-yellow-100 text-yellow-800',
    request_accepted: 'bg-blue-100 text-blue-800',
    request_rejected: 'bg-red-100 text-red-800',
    request_considering: 'bg-slate-100 text-slate-800',
    quoted: 'bg-purple-100 text-purple-800',
    quote_accepted: 'bg-green-100 text-green-800',
    quote_rejected: 'bg-red-100 text-red-800',
    project_created: 'bg-emerald-100 text-emerald-800',
    completed: 'bg-teal-100 text-teal-800',
};

const statusLabels: Record<string, string> = {
    quote_requested: 'Awaiting Response',
    request_accepted: 'Request Accepted',
    request_rejected: 'Request Declined',
    request_considering: 'Under Review',
    quoted: 'Quote Received',
    quote_accepted: 'Quote Accepted',
    quote_rejected: 'Quote Declined',
    project_created: 'Project Started',
    completed: 'Completed',
};

export default function ClientQuotesPage() {
    const { data: session } = useSession();
    const { toast } = useToast();
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [respondingId, setRespondingId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('all');

    const fetchQuotes = async () => {
        if (!session?.accessToken) return;

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/my-quotes`,
                { headers: { Authorization: `Bearer ${session.accessToken}` } }
            );

            if (response.ok) {
                const data = await response.json();
                setQuotes(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (session) fetchQuotes();
    }, [session]);

    const respondToQuote = async (quoteId: string, status: 'accepted' | 'rejected' | 'considering') => {
        setRespondingId(quoteId);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/${quoteId}/respond`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                    body: JSON.stringify({ status }),
                }
            );

            if (!response.ok) throw new Error('Failed to respond');

            const statusMessages = {
                accepted: 'Quote accepted! The contractor will be notified.',
                rejected: 'Quote declined.',
                considering: 'Marked as considering.',
            };

            toast({ title: statusMessages[status] });
            fetchQuotes();
        } catch (error) {
            console.error(error);
            toast({ title: 'Failed to respond', variant: 'destructive' });
        } finally {
            setRespondingId(null);
        }
    };

    const filteredQuotes = quotes.filter((quote) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'pending') return ['quote_requested', 'request_accepted', 'request_considering'].includes(quote.status);
        if (activeTab === 'quoted') return quote.status === 'quoted';
        if (activeTab === 'active') return ['quote_accepted', 'project_created'].includes(quote.status);
        if (activeTab === 'completed') return quote.status === 'completed';
        return true;
    });

    if (isLoading) {
        return (
            <div className="p-8 flex justify-center">
                <Loader2 className="animate-spin h-8 w-8 text-slate-400" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">My Quote Requests</h1>
                <p className="text-slate-500">Track and manage your quotation requests.</p>
            </div>

            {/* Filter Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-slate-100">
                    <TabsTrigger value="all">All ({quotes.length})</TabsTrigger>
                    <TabsTrigger value="pending">
                        Pending ({quotes.filter(q => ['quote_requested', 'request_accepted', 'request_considering'].includes(q.status)).length})
                    </TabsTrigger>
                    <TabsTrigger value="quoted">
                        Quoted ({quotes.filter(q => q.status === 'quoted').length})
                    </TabsTrigger>
                    <TabsTrigger value="active">
                        Active ({quotes.filter(q => ['quote_accepted', 'project_created'].includes(q.status)).length})
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            {/* Quote List */}
            {filteredQuotes.length === 0 ? (
                <Card>
                    <CardContent className="p-8 text-center">
                        <FileText className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                        <h3 className="text-lg font-medium text-slate-600 mb-2">
                            {activeTab === 'all' ? 'No quote requests yet' : `No ${activeTab} quotes`}
                        </h3>
                        <p className="text-slate-500 mb-4">Start by requesting quotes from service providers.</p>
                        <Button asChild className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                            <Link href="/contractors">Find Contractors</Link>
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {filteredQuotes.map((quote) => (
                        <Card key={quote.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    {/* Left - Quote Details */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-[#0EA5E9]/10 h-12 w-12 rounded-lg flex items-center justify-center">
                                                    <Building2 className="h-6 w-6 text-[#0EA5E9]" />
                                                </div>
                                                <div>
                                                    <Link
                                                        href={`/contractors/${quote.builder.slug}`}
                                                        className="font-bold text-lg text-slate-900 hover:text-[#0EA5E9]"
                                                    >
                                                        {quote.builder.name}
                                                    </Link>
                                                    <p className="text-sm text-slate-500">Service Provider</p>
                                                </div>
                                            </div>
                                            <Badge className={statusColors[quote.status] || 'bg-gray-100'}>
                                                {statusLabels[quote.status] || quote.status}
                                            </Badge>
                                        </div>

                                        <p className="text-slate-600 mb-4">{quote.message}</p>

                                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>Requested: {new Date(quote.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            {quote.location && (
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{quote.location}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Contact Info for Accepted Quotes */}
                                        {(quote.status === 'quote_accepted' || quote.status === 'project_created') && quote.builder.phone && (
                                            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                                                <p className="text-sm text-green-800 font-medium mb-1">Contact Contractor:</p>
                                                <p className="text-sm text-green-700">
                                                    📞 {quote.builder.phone} • ✉️ {quote.builder.email}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right - Quotation Details */}
                                    {quote.status === 'quoted' || quote.totalAmount ? (
                                        <div className="w-full lg:w-80 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                            <h4 className="font-semibold mb-3">Quotation {quote.status === 'quoted' ? 'Received' : 'Details'}</h4>

                                            {quote.items && quote.items.length > 0 && (
                                                <div className="space-y-2 mb-4 text-sm">
                                                    {quote.items.map((item) => (
                                                        <div key={item.id} className="flex justify-between">
                                                            <span className="text-slate-600">{item.description}</span>
                                                            <span className="font-medium">R {item.totalPrice.toLocaleString()}</span>
                                                        </div>
                                                    ))}
                                                    <div className="border-t border-slate-200 pt-2 flex justify-between font-bold">
                                                        <span>Total</span>
                                                        <span className="text-[#0EA5E9]">R {quote.totalAmount?.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {quote.notes && (
                                                <p className="text-xs text-slate-500 mb-3 italic">{quote.notes}</p>
                                            )}

                                            {quote.validUntil && (
                                                <p className="text-xs text-slate-400 mb-4">
                                                    Valid until: {new Date(quote.validUntil).toLocaleDateString()}
                                                </p>
                                            )}

                                            {/* Response Buttons */}
                                            {quote.status === 'quoted' && (
                                                <div className="grid grid-cols-3 gap-2">
                                                    <Button
                                                        size="sm"
                                                        className="bg-green-600 hover:bg-green-700"
                                                        onClick={() => respondToQuote(quote.id, 'accepted')}
                                                        disabled={respondingId === quote.id}
                                                    >
                                                        {respondingId === quote.id ? (
                                                            <Loader2 className="h-3 w-3 animate-spin" />
                                                        ) : (
                                                            <>
                                                                <Check className="h-3 w-3 mr-1" /> Accept
                                                            </>
                                                        )}
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="border-blue-500 text-blue-500 hover:bg-blue-50"
                                                        onClick={() => respondToQuote(quote.id, 'considering')}
                                                        disabled={respondingId === quote.id}
                                                    >
                                                        <Clock className="h-3 w-3 mr-1" /> Maybe
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="border-red-500 text-red-500 hover:bg-red-50"
                                                        onClick={() => respondToQuote(quote.id, 'rejected')}
                                                        disabled={respondingId === quote.id}
                                                    >
                                                        <X className="h-3 w-3 mr-1" /> Decline
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="w-full lg:w-64 bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-center justify-center">
                                            <p className="text-yellow-700 text-center">
                                                <Clock className="h-5 w-5 mx-auto mb-2" />
                                                Awaiting quotation from provider
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
