'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Building2,
    Search,
    CheckCircle2,
    XCircle,
    Clock,
    Loader2,
    Eye,
    Mail,
    Phone,
    MapPin,
    Star,
    Trash2,
    Ban,
    PlayCircle
} from 'lucide-react';

interface Builder {
    id: string;
    name: string;
    slug: string;
    email: string;
    phone: string;
    city: string;
    approvalStatus: string;
    verified: boolean;
    rating: number;
    reviewCount: number;
    createdAt: string;
    _count: {
        quotes: number;
        reviews: number;
        projects: number;
    };
}

const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
};

export default function AdminContractorsPage() {
    const [builders, setBuilders] = useState<Builder[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchBuilders();
    }, [filter]);

    const fetchBuilders = async () => {
        setIsLoading(true);
        try {
            const params = filter !== 'all' ? `?status=${filter}` : '';
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/builders${params}`
            );
            if (response.ok) {
                const data = await response.json();
                setBuilders(data);
            }
        } catch (error) {
            console.error('Failed to fetch builders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApprove = async (id: string) => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/builders/${id}/approve`,
                { method: 'POST' }
            );
            fetchBuilders();
        } catch (error) {
            console.error('Failed to approve:', error);
        }
    };

    const handleReject = async (id: string) => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/builders/${id}/reject`,
                { method: 'POST', body: JSON.stringify({ reason: 'Rejected by admin' }) }
            );
            fetchBuilders();
        } catch (error) {
            console.error('Failed to reject:', error);
        }
    };

    const handleSuspend = async (id: string) => {
        if (!confirm('Are you sure you want to suspend this contractor?')) return;
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/builders/${id}/suspend`,
                { method: 'POST' }
            );
            fetchBuilders();
        } catch (error) {
            console.error('Failed to suspend:', error);
        }
    };

    const handleUnsuspend = async (id: string) => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/builders/${id}/unsuspend`,
                { method: 'POST' }
            );
            fetchBuilders();
        } catch (error) {
            console.error('Failed to unsuspend:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to DELETE this contractor? This action cannot be undone and will remove all associated quotes, projects, and reviews.')) return;
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/builders/${id}`,
                { method: 'DELETE' }
            );
            fetchBuilders();
        } catch (error) {
            console.error('Failed to delete:', error);
        }
    };

    const filteredBuilders = builders.filter(b =>
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.email.toLowerCase().includes(search.toLowerCase()) ||
        b.city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Contractors Management</h1>
                <p className="text-slate-500">View and manage all contractors on the platform.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by name, email, or city..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex gap-2">
                    {['all', 'pending', 'approved', 'rejected'].map((status) => (
                        <Button
                            key={status}
                            variant={filter === status ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilter(status)}
                            className={filter === status ? 'bg-[#0EA5E9]' : ''}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-yellow-400">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">Pending</p>
                            <p className="text-2xl font-bold">{builders.filter(b => b.approvalStatus === 'pending').length}</p>
                        </div>
                        <Clock className="h-8 w-8 text-yellow-400" />
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-400">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">Approved</p>
                            <p className="text-2xl font-bold">{builders.filter(b => b.approvalStatus === 'approved').length}</p>
                        </div>
                        <CheckCircle2 className="h-8 w-8 text-green-400" />
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-red-400">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">Rejected</p>
                            <p className="text-2xl font-bold">{builders.filter(b => b.approvalStatus === 'rejected').length}</p>
                        </div>
                        <XCircle className="h-8 w-8 text-red-400" />
                    </CardContent>
                </Card>
            </div>

            {/* Contractors List */}
            {isLoading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                </div>
            ) : filteredBuilders.length === 0 ? (
                <Card>
                    <CardContent className="p-8 text-center">
                        <Building2 className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                        <p className="text-slate-500">No contractors found.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-4">
                    {filteredBuilders.map((builder) => (
                        <Card key={builder.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-4 items-start">
                                    {/* Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-slate-900">{builder.name}</h3>
                                            <Badge className={statusColors[builder.approvalStatus] || 'bg-gray-100'}>
                                                {builder.approvalStatus}
                                            </Badge>
                                            {builder.verified && (
                                                <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
                                            <div className="flex items-center gap-1">
                                                <Mail className="h-4 w-4 text-slate-400" />
                                                {builder.email}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Phone className="h-4 w-4 text-slate-400" />
                                                {builder.phone}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4 text-slate-400" />
                                                {builder.city}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 text-yellow-400" />
                                                {builder.rating.toFixed(1)} ({builder.reviewCount} reviews)
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mt-3 text-xs text-slate-500">
                                            <span>{builder._count?.quotes || 0} quotes</span>
                                            <span>{builder._count?.projects || 0} projects</span>
                                            <span>Joined {new Date(builder.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-wrap gap-2">
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={`/contractors/${builder.slug}`} target="_blank">
                                                <Eye className="h-4 w-4 mr-1" /> View
                                            </a>
                                        </Button>
                                        {builder.approvalStatus === 'pending' && (
                                            <>
                                                <Button
                                                    size="sm"
                                                    className="bg-green-600 hover:bg-green-700"
                                                    onClick={() => handleApprove(builder.id)}
                                                >
                                                    <CheckCircle2 className="h-4 w-4 mr-1" /> Approve
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="text-red-600 border-red-200"
                                                    onClick={() => handleReject(builder.id)}
                                                >
                                                    <XCircle className="h-4 w-4 mr-1" /> Reject
                                                </Button>
                                            </>
                                        )}
                                        {builder.approvalStatus === 'approved' && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="text-orange-600 border-orange-200"
                                                onClick={() => handleSuspend(builder.id)}
                                            >
                                                <Ban className="h-4 w-4 mr-1" /> Suspend
                                            </Button>
                                        )}
                                        {builder.approvalStatus === 'suspended' && (
                                            <Button
                                                size="sm"
                                                className="bg-green-600 hover:bg-green-700"
                                                onClick={() => handleUnsuspend(builder.id)}
                                            >
                                                <PlayCircle className="h-4 w-4 mr-1" /> Reactivate
                                            </Button>
                                        )}
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="text-red-600 border-red-200 hover:bg-red-50"
                                            onClick={() => handleDelete(builder.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
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
