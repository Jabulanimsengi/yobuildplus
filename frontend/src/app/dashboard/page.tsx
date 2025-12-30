import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, MessageSquare, Eye, MousePointer } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, John! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-[#0EA5E9]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Total Leads</CardTitle>
                        <MessageSquare className="h-4 w-4 text-[#0EA5E9]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-slate-500 mt-1">+2 from yesterday</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#F97316]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Profile Views</CardTitle>
                        <Eye className="h-4 w-4 text-[#F97316]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,245</div>
                        <p className="text-xs text-slate-500 mt-1">+18% vs last month</p>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#0D9488]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Click-throughs</CardTitle>
                        <MousePointer className="h-4 w-4 text-[#0D9488]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">84</div>
                        <p className="text-xs text-slate-500 mt-1">Contact Details Revealed</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Requests */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Leads & Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3">Customer</th>
                                    <th className="px-4 py-3">Service</th>
                                    <th className="px-4 py-3">Location</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i} className="bg-white hover:bg-slate-50">
                                        <td className="px-4 py-3 font-medium text-slate-900">Sarah Connor</td>
                                        <td className="px-4 py-3">Bathroom Renovation</td>
                                        <td className="px-4 py-3">Sandton, JHB</td>
                                        <td className="px-4 py-3 text-slate-500">Today, 10:30 AM</td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                New
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <button className="text-[#0EA5E9] hover:underline font-medium flex items-center justify-end gap-1 ml-auto">
                                                View <ArrowUpRight className="h-3 w-3" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
