'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Users,
    UserPlus,
    FileEdit,
    Image as ImageIcon,
    ArrowRight,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import { adminApi } from '@/lib/api';

interface AdminStats {
    totalUsers: number;
    pendingSignups: number;
    pendingEdits: number;
    pendingMedia: number;
}

export default function AdminPage() {
    const [stats, setStats] = useState<AdminStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const data = await adminApi.getStats();
                setStats(data);
            } catch (error) {
                console.error('Failed to fetch admin stats:', error);
                // Fallback to zeros on error
                setStats({ totalUsers: 0, pendingSignups: 0, pendingEdits: 0, pendingMedia: 0 });
            } finally {
                setIsLoading(false);
            }
        }

        fetchStats();
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Admin Overview</h1>
                <p className="text-slate-500">System status and pending actions.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                        ) : (
                            <>
                                <div className="text-2xl font-bold">{stats?.totalUsers?.toLocaleString() || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">Registered builders</p>
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Pending Signups</CardTitle>
                        <UserPlus className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                        ) : (
                            <>
                                <div className="text-2xl font-bold">{stats?.pendingSignups || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">Require verification</p>
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Profile Edits</CardTitle>
                        <FileEdit className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                        ) : (
                            <>
                                <div className="text-2xl font-bold">{stats?.pendingEdits || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">Pending review</p>
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Media Uploads</CardTitle>
                        <ImageIcon className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                        ) : (
                            <>
                                <div className="text-2xl font-bold">{stats?.pendingMedia || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">Images to moderate</p>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Action Required Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Needs Attention</CardTitle>
                        <Link href="/admin/approvals">
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { type: 'signup', label: 'New Contractor Signup', name: 'BuildRite Construction', time: '10 mins ago', icon: UserPlus, color: 'text-orange-500', bg: 'bg-orange-50' },
                                { type: 'edit', label: 'Profile Update', name: 'Joe Pyle Plumbing', time: '2 hours ago', icon: FileEdit, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                                { type: 'media', label: 'New Project Photos', name: 'Elite Solar', time: '5 hours ago', icon: ImageIcon, color: 'text-purple-500', bg: 'bg-purple-50' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-10 w-10 rounded-full ${item.bg} flex items-center justify-center`}>
                                            <item.icon className={`h-5 w-5 ${item.color}`} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{item.name}</p>
                                            <p className="text-xs text-slate-500">{item.label}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-slate-400">{item.time}</span>
                                        <Button size="sm" variant="outline">Review</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* System Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { action: 'Approved User', desc: 'Apex Roofing verified by Admin', time: '1 hour ago' },
                                { action: 'Rejected Edit', desc: 'Spam content removed from Plumbing Pros', time: '3 hours ago' },
                                { action: 'System Update', desc: 'Sitemap regenerated successfully', time: '5 hours ago' },
                                { action: 'New User', desc: 'Solar Experts registered', time: '6 hours ago' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-baseline gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                                    <div className="h-2 w-2 rounded-full bg-slate-300 translate-y-1"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-800">{item.action}</p>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                    <span className="text-xs text-slate-400 whitespace-nowrap">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
