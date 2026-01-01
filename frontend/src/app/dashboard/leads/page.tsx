
'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar, MapPin, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { QuotationBuilder } from '@/components/leads/QuotationBuilder';

interface QuotationItem {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    unit: string;
    totalPrice: number;
}

interface QuoteRequest {
    id: string;
    name: string;
    email: string;
    phone: string;
    location?: string;
    message: string;
    status: string;
    totalAmount?: number;
    createdAt: string;
    items?: QuotationItem[];
}

const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    quoted: 'bg-purple-100 text-purple-800',
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    considering: 'bg-blue-100 text-blue-800',
    completed: 'bg-emerald-100 text-emerald-800',
};

export default function LeadsPage() {
    const { data: session } = useSession();
    const [leads, setLeads] = useState<QuoteRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    const fetchLeads = async () => {
        if (!session?.accessToken) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/builder/leads`, {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch leads');
            }

            const data = await response.json();
            setLeads(data);
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'Failed to load leads',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (session?.accessToken) {
            fetchLeads();
        }
    }, [session]);

    if (isLoading) {
        return <div className="p-8 flex justify-center"><Loader2 className="animate-spin" /></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Leads & Requests</h1>
                    <p className="text-slate-500">Manage your incoming quote requests.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="default" className="bg-[#0EA5E9] hover:bg-[#0284C7]" onClick={fetchLeads}>
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Leads List */}
            <div className="space-y-4">
                {leads.length === 0 ? (
                    <p className="text-center text-slate-500 py-8">No leads found yet.</p>
                ) : (
                    leads.map((lead) => (
                        <Card key={lead.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-lg text-slate-900">{lead.location || 'New Lead'}</h3>
                                            <Badge className={statusColors[lead.status] || 'bg-gray-100 text-gray-800'}>
                                                {lead.status.toUpperCase()}
                                            </Badge>
                                        </div>
                                        <p className="text-slate-600 mb-4 whitespace-pre-wrap">
                                            {lead.message}
                                        </p>

                                        {lead.totalAmount && (
                                            <p className="text-lg font-bold text-[#0EA5E9] mb-2">
                                                Quoted: R {lead.totalAmount.toLocaleString()}
                                            </p>
                                        )}

                                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            {lead.location && (
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{lead.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-72 bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-slate-200 h-10 w-10 rounded-full flex items-center justify-center font-bold text-slate-500">
                                                {lead.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900">{lead.name}</p>
                                                <p className="text-xs text-slate-500">Consumer</p>
                                            </div>
                                        </div>

                                        <div className="grid gap-2">
                                            <Button size="sm" className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white" asChild>
                                                <a href={`tel:${lead.phone}`}>
                                                    <Phone className="h-3 w-3 mr-2" />
                                                    Call {lead.phone}
                                                </a>
                                            </Button>
                                            <Button size="sm" variant="outline" className="w-full" asChild>
                                                <a href={`mailto:${lead.email}`}>
                                                    <Mail className="h-3 w-3 mr-2" />
                                                    Email
                                                </a>
                                            </Button>

                                            {/* Show Quotation Builder for pending leads */}
                                            {lead.status === 'pending' && (
                                                <QuotationBuilder
                                                    quoteId={lead.id}
                                                    customerName={lead.name}
                                                    projectDescription={lead.message}
                                                    onSuccess={fetchLeads}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}

