'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, MessageSquare, Eye, MousePointer, UserCog, AlertTriangle, Sparkles } from 'lucide-react';

export default function DashboardPage() {
    const { data: session } = useSession();
    const hasProfile = !!session?.user?.builderId;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, {session?.user?.name || 'there'}! Here's what's happening today.</p>
            </div>

            {/* Profile Setup Banner - Show if user doesn't have a profile */}
            {!hasProfile && (
                <Card className="border-2 border-[#0EA5E9] bg-gradient-to-r from-[#0EA5E9]/5 to-[#F97316]/5">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#0EA5E9] rounded-full">
                                <Sparkles className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Complete Your Profile</h2>
                                <p className="text-slate-600 mt-1">
                                    Set up your business profile to start receiving leads and appearing in search results.
                                </p>
                            </div>
                        </div>
                        <Link href="/dashboard/profile">
                            <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white whitespace-nowrap">
                                <UserCog className="h-5 w-5 mr-2" />
                                Create Profile
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-[#0EA5E9]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Total Leads</CardTitle>
                        <MessageSquare className="h-4 w-4 text-[#0EA5E9]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{hasProfile ? '0' : '--'}</div>
                        <p className="text-xs text-slate-500 mt-1">
                            {hasProfile ? 'No leads yet' : 'Complete profile to receive leads'}
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#F97316]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Profile Views</CardTitle>
                        <Eye className="h-4 w-4 text-[#F97316]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{hasProfile ? '0' : '--'}</div>
                        <p className="text-xs text-slate-500 mt-1">
                            {hasProfile ? 'No views yet' : 'Create profile to be visible'}
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#0D9488]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Click-throughs</CardTitle>
                        <MousePointer className="h-4 w-4 text-[#0D9488]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{hasProfile ? '0' : '--'}</div>
                        <p className="text-xs text-slate-500 mt-1">Contact Details Revealed</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Requests or Empty State */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Leads & Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    {!hasProfile ? (
                        <div className="text-center py-12">
                            <AlertTriangle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Profile Required</h3>
                            <p className="text-slate-500 max-w-md mx-auto mb-6">
                                You need to create your business profile before you can receive leads from potential customers.
                            </p>
                            <Link href="/dashboard/profile">
                                <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
                                    Create Your Profile
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <MessageSquare className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">No Leads Yet</h3>
                            <p className="text-slate-500 max-w-md mx-auto">
                                Once customers find your profile and send requests, they'll appear here.
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
