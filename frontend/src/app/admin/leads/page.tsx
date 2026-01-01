
'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Calendar, MapPin, User } from 'lucide-react';

interface AdminQuoteRequest {
    id: string;
    name: string;
    email: string;
    phone: string;
    location?: string;
    message: string;
    status: string;
    createdAt: string;
    builder: {
        name: string;
        slug: string;
    };
}

export default function AdminLeadsPage() {
    const { data: session } = useSession();
    const [leads, setLeads] = useState<AdminQuoteRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            if (!session?.accessToken) return;

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/admin`, {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setLeads(data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (session) fetchLeads();
    }, [session]);

    if (isLoading) return <div className="p-8"><Loader2 className="animate-spin" /></div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">All Quote Requests</h1>

            <div className="space-y-4">
                {leads.map((lead) => (
                    <Card key={lead.id}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold">{lead.builder.name}</h3>
                                    <p className="text-sm text-slate-500">Target Builder</p>
                                </div>
                                <Badge>{lead.status}</Badge>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-sm mb-2">Consumer</h4>
                                    <p className="flex items-center gap-2 text-sm"><User className="h-4 w-4" /> {lead.name}</p>
                                    <p className="text-sm text-slate-500 ml-6">{lead.email} • {lead.phone}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm mb-2">Project</h4>
                                    <p className="text-sm">{lead.message}</p>
                                    <p className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                                        <MapPin className="h-3 w-3" /> {lead.location || 'N/A'}
                                        <Calendar className="h-3 w-3 ml-2" /> {new Date(lead.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
