import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Phone, Mail, Calendar, MapPin } from 'lucide-react';

export default function LeadsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Leads & Requests</h1>
                    <p className="text-slate-500">Manage your incoming quote requests.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </Button>
                    <Button variant="default" className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                        Export CSV
                    </Button>
                </div>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search requests..." className="pl-10 max-w-md" />
            </div>

            {/* Leads List */}
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-lg text-slate-900">Bathroom Renovation</h3>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            New
                                        </span>
                                    </div>
                                    <p className="text-slate-600 mb-4 line-clamp-2">
                                        Hi, I'm looking to renovate my master bathroom. Need to replace the bathtub with a walk-in shower and update the tiling. Please provide a quote.
                                    </p>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>Today, 10:30 AM</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>Sandton, Johannesburg</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-64 bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-slate-200 h-10 w-10 rounded-full flex items-center justify-center font-bold text-slate-500">
                                            SC
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">Sarah Connor</p>
                                            <p className="text-xs text-slate-500">Residential Owner</p>
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Button size="sm" className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
                                            <Phone className="h-3 w-3 mr-2" />
                                            Call Customer
                                        </Button>
                                        <Button size="sm" variant="outline" className="w-full">
                                            <Mail className="h-3 w-3 mr-2" />
                                            Email
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
