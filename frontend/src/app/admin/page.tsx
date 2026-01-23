'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Users,
    Building2,
    FileText,
    CheckCircle2,
    ArrowRight,
    Loader2,
    Clock,
    Activity
} from 'lucide-react';
import Link from 'next/link';

interface AdminStats {
    totalUsers: number;
    totalClients: number;
    totalContractors: number;
    pendingSignups: number;
    pendingEdits: number;
    pendingMedia: number;
    totalQuotes: number;
    activeQuotes: number;
    completedProjects: number;
}

interface ActivityItem {
    type: string;
    action: string;
    description: string;
    createdAt: string;
}

export default function AdminPage() {
    const [stats, setStats] = useState<AdminStats | null>(null);
    const [activity, setActivity] = useState<ActivityItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [statsRes, activityRes] = await Promise.all([
                    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/stats`),
                    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/activity?limit=10`)
                ]);

                if (statsRes.ok) {
                    setStats(await statsRes.json());
                }
                if (activityRes.ok) {
                    setActivity(await activityRes.json());
                }
            } catch (error) {
                console.error('Failed to fetch admin data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);

        if (hours < 1) return 'Just now';
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return date.toLocaleDateString();
    };

    const getActivityIcon = (type: string) => {
        switch (type) {
            case 'quote': return <FileText className="h-4 w-4 text-purple-500" />;
            case 'user': return <Users className="h-4 w-4 text-blue-500" />;
            case 'builder': return <Building2 className="h-4 w-4 text-orange-500" />;
            default: return <Activity className="h-4 w-4 text-slate-500" />;
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Admin Overview</h1>
                <p className="text-slate-500">Platform status and insights.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                                <div className="text-2xl font-bold">{stats?.totalUsers || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">
                                    {stats?.totalClients || 0} clients, {stats?.totalContractors || 0} contractors
                                </p>
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Pending Approval</CardTitle>
                        <Clock className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                        ) : (
                            <>
                                <div className="text-2xl font-bold">{stats?.pendingSignups || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">Contractors awaiting review</p>
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Total Quotes</CardTitle>
                        <FileText className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                        ) : (
                            <>
                                <div className="text-2xl font-bold">{stats?.totalQuotes || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">{stats?.activeQuotes || 0} active</p>
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Completed</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                        ) : (
                            <>
                                <div className="text-2xl font-bold">{stats?.completedProjects || 0}</div>
                                <p className="text-xs text-slate-500 mt-1">Projects finished</p>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions & Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Link href="/admin/approvals" className="flex items-center justify-between p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center">
                                    <Clock className="h-5 w-5 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">Review Pending Signups</p>
                                    <p className="text-sm text-slate-500">{stats?.pendingSignups || 0} awaiting action</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400" />
                        </Link>

                        <Link href="/admin/contractors" className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                                    <Building2 className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">Manage Contractors</p>
                                    <p className="text-sm text-slate-500">{stats?.totalContractors || 0} active contractors</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400" />
                        </Link>

                        <Link href="/admin/quotes" className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">Monitor Quotes</p>
                                    <p className="text-sm text-slate-500">{stats?.totalQuotes || 0} total quotes</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400" />
                        </Link>

                        <Link href="/admin/users" className="flex items-center justify-between p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                                    <Users className="h-5 w-5 text-slate-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">All Users</p>
                                    <p className="text-sm text-slate-500">{stats?.totalUsers || 0} registered users</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400" />
                        </Link>
                    </CardContent>
                </Card>

                {/* Real Activity Feed */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Activity</CardTitle>
                        <Button variant="ghost" size="sm" className="text-blue-600">
                            View All <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <div className="flex justify-center py-8">
                                <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
                            </div>
                        ) : activity.length === 0 ? (
                            <div className="text-center py-8 text-slate-500">
                                <Activity className="h-8 w-8 mx-auto mb-2 text-slate-300" />
                                No recent activity
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {activity.slice(0, 8).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                            {getActivityIcon(item.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-slate-800 truncate">{item.action}</p>
                                            <p className="text-xs text-slate-500 truncate">{item.description}</p>
                                        </div>
                                        <span className="text-xs text-slate-400 whitespace-nowrap">{formatTime(item.createdAt)}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
