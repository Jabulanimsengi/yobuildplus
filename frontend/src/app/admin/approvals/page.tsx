'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, XCircle, Eye, MapPin, Globe, Phone, Mail, Loader2 } from 'lucide-react';
import { adminApi } from '@/lib/api';

interface PendingBuilder {
    id: string;
    name: string;
    email: string;
    phone: string;
    website?: string;
    city: string;
    description: string;
    createdAt: Date;
}

export default function ApprovalQueuePage() {
    const [pendingBuilders, setPendingBuilders] = useState<PendingBuilder[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [processingId, setProcessingId] = useState<string | null>(null);

    // Fetch pending builders on mount
    useEffect(() => {
        fetchPendingBuilders();
    }, []);

    const fetchPendingBuilders = async () => {
        try {
            setIsLoading(true);
            const data = await adminApi.getPendingBuilders();
            setPendingBuilders(data);
        } catch (error) {
            console.error('Failed to fetch pending builders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApprove = async (id: string) => {
        try {
            setProcessingId(id);
            await adminApi.approveBuilder(id);
            // Remove from local state
            setPendingBuilders(pendingBuilders.filter(b => b.id !== id));
        } catch (error) {
            console.error('Failed to approve builder:', error);
            alert('Failed to approve. Please try again.');
        } finally {
            setProcessingId(null);
        }
    };

    const handleReject = async (id: string) => {
        try {
            setProcessingId(id);
            await adminApi.rejectBuilder(id, 'Rejected by admin');
            // Remove from local state
            setPendingBuilders(pendingBuilders.filter(b => b.id !== id));
        } catch (error) {
            console.error('Failed to reject builder:', error);
            alert('Failed to reject. Please try again.');
        } finally {
            setProcessingId(null);
        }
    };

    // Mock data for edits and media (would come from API in production)
    const pendingEdits = [
        { id: '1', name: 'Joe Pyle Plumbing', field: 'Hourly Rate', oldValue: 'R450', newValue: 'R550', date: '2 hours ago' },
        { id: '2', name: 'Joe Pyle Plumbing', field: 'Description', oldValue: 'Plumbing services...', newValue: 'Expert plumbing services focused on emergency repairs...', date: '2 hours ago' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Approval Queue</h1>
                <p className="text-slate-500">Review and moderate user submitted content.</p>
            </div>

            <Tabs defaultValue="signups" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="signups">Signups ({pendingBuilders.length})</TabsTrigger>
                    <TabsTrigger value="edits">Edits ({pendingEdits.length})</TabsTrigger>
                    <TabsTrigger value="media">Media (3)</TabsTrigger>
                </TabsList>

                {/* SIGNUPS TAB */}
                <TabsContent value="signups" className="space-y-4 mt-6">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            <span className="ml-3 text-muted-foreground">Loading pending builders...</span>
                        </div>
                    ) : pendingBuilders.length > 0 ? (
                        pendingBuilders.map((builder) => (
                            <Card key={builder.id}>
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-lg font-bold text-slate-900">{builder.name}</h3>
                                                <Badge variant="outline">Pending</Badge>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-slate-400" />
                                                    {builder.city}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4 text-slate-400" />
                                                    {builder.email}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4 text-slate-400" />
                                                    {builder.phone}
                                                </div>
                                                {builder.website && (
                                                    <div className="flex items-center gap-2">
                                                        <Globe className="h-4 w-4 text-slate-400" />
                                                        {builder.website}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded text-sm text-slate-500 italic">
                                                &quot;{builder.description?.slice(0, 150)}...&quot;
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:flex-col gap-2 justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                                            <Button
                                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                                                onClick={() => handleApprove(builder.id)}
                                                disabled={processingId === builder.id}
                                            >
                                                {processingId === builder.id ? (
                                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                ) : (
                                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                                )}
                                                Approve
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full text-red-600 hover:bg-red-50 border-red-200"
                                                onClick={() => handleReject(builder.id)}
                                                disabled={processingId === builder.id}
                                            >
                                                <XCircle className="h-4 w-4 mr-2" /> Reject
                                            </Button>
                                            <Button variant="ghost" className="w-full text-slate-500">
                                                <Eye className="h-4 w-4 mr-2" /> View Full
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                            No pending signups.
                        </div>
                    )}
                </TabsContent>

                {/* EDITS TAB */}
                <TabsContent value="edits" className="space-y-4 mt-6">
                    {pendingEdits.map((edit) => (
                        <Card key={edit.id}>
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 mb-1">{edit.name}</h3>
                                        <p className="text-sm text-slate-500 mb-4">Changed <span className="font-semibold text-slate-700">{edit.field}</span></p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-red-50 p-3 rounded border border-red-100">
                                                <p className="text-xs font-semibold text-red-600 mb-1 uppercase">Original</p>
                                                <p className="text-sm text-slate-700">{edit.oldValue}</p>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded border border-green-100">
                                                <p className="text-xs font-semibold text-green-600 mb-1 uppercase">New Value</p>
                                                <p className="text-sm text-slate-700">{edit.newValue}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="outline" className="text-red-600 border-red-200">
                                            <XCircle className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    {pendingEdits.length === 0 && (
                        <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                            No pending edits.
                        </div>
                    )}
                </TabsContent>

                {/* MEDIA TAB */}
                <TabsContent value="media" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="group relative overflow-hidden">
                                <div className="aspect-square bg-slate-200 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">Image {i}</div>
                                    <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform">
                                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 h-8 text-xs">Approve</Button>
                                        <Button size="sm" variant="destructive" className="flex-1 h-8 text-xs">Reject</Button>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="text-xs font-semibold text-slate-700 truncate">Kitchen Reno {i}</p>
                                    <p className="text-[10px] text-slate-500">By Apex Builders</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
