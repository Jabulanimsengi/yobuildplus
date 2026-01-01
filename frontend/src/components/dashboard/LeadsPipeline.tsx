'use client';

import { useState } from 'react';
import {
    Clock, CheckCircle, MessageSquare, X, Phone,
    Mail, DollarSign, ChevronRight, GripVertical
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Lead status stages
type LeadStatus = 'new' | 'contacted' | 'quoted' | 'won' | 'lost';

interface Lead {
    id: string;
    clientName: string;
    clientEmail: string;
    clientPhone?: string;
    projectTitle: string;
    status: LeadStatus;
    amount?: number;
    createdAt: Date;
    lastActivity?: Date;
}

// Example data - in production this would come from API
const MOCK_LEADS: Lead[] = [
    { id: '1', clientName: 'John M.', clientEmail: 'john@email.com', clientPhone: '082 555 1234', projectTitle: 'Kitchen Renovation', status: 'new', createdAt: new Date() },
    { id: '2', clientName: 'Sarah L.', clientEmail: 'sarah@email.com', projectTitle: 'Bathroom Tiling', status: 'contacted', createdAt: new Date(Date.now() - 86400000) },
    { id: '3', clientName: 'Mike P.', clientEmail: 'mike@email.com', clientPhone: '083 444 5678', projectTitle: 'Roof Repair', status: 'quoted', amount: 15000, createdAt: new Date(Date.now() - 172800000) },
    { id: '4', clientName: 'Emma R.', clientEmail: 'emma@email.com', projectTitle: 'Full House Paint', status: 'won', amount: 28000, createdAt: new Date(Date.now() - 604800000) },
];

const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; icon: React.ReactNode }> = {
    new: { label: 'New', color: 'bg-blue-500', icon: <Clock className="h-3 w-3" /> },
    contacted: { label: 'Contacted', color: 'bg-amber-500', icon: <MessageSquare className="h-3 w-3" /> },
    quoted: { label: 'Quoted', color: 'bg-purple-500', icon: <DollarSign className="h-3 w-3" /> },
    won: { label: 'Won', color: 'bg-emerald-500', icon: <CheckCircle className="h-3 w-3" /> },
    lost: { label: 'Lost', color: 'bg-slate-400', icon: <X className="h-3 w-3" /> },
};

function LeadCard({ lead, onStatusChange }: { lead: Lead; onStatusChange: (id: string, status: LeadStatus) => void }) {
    const config = STATUS_CONFIG[lead.status];

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-medium text-sm text-slate-800 truncate">{lead.projectTitle}</h4>
                <Badge className={cn(config.color, 'text-white text-[10px] px-1.5 flex items-center gap-1')}>
                    {config.icon}
                    {config.label}
                </Badge>
            </div>

            <p className="text-xs text-slate-500 mb-2">{lead.clientName}</p>

            {lead.amount && (
                <p className="text-sm font-semibold text-emerald-600 mb-2">
                    R{lead.amount.toLocaleString()}
                </p>
            )}

            <div className="flex gap-1.5">
                {lead.clientPhone && (
                    <Button size="sm" variant="outline" className="h-7 text-xs px-2" asChild>
                        <a href={`tel:${lead.clientPhone}`}><Phone className="h-3 w-3" /></a>
                    </Button>
                )}
                <Button size="sm" variant="outline" className="h-7 text-xs px-2" asChild>
                    <a href={`mailto:${lead.clientEmail}`}><Mail className="h-3 w-3" /></a>
                </Button>
                {lead.status === 'new' && (
                    <Button
                        size="sm"
                        className="h-7 text-xs px-2 bg-[#0EA5E9] hover:bg-[#0284C7]"
                        onClick={() => onStatusChange(lead.id, 'contacted')}
                    >
                        Mark Contacted
                    </Button>
                )}
                {lead.status === 'contacted' && (
                    <Button
                        size="sm"
                        className="h-7 text-xs px-2 bg-purple-500 hover:bg-purple-600"
                        onClick={() => onStatusChange(lead.id, 'quoted')}
                    >
                        Send Quote
                    </Button>
                )}
            </div>
        </div>
    );
}

export function LeadsPipeline() {
    const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);

    const handleStatusChange = (id: string, newStatus: LeadStatus) => {
        setLeads(prev => prev.map(lead =>
            lead.id === id ? { ...lead, status: newStatus, lastActivity: new Date() } : lead
        ));
    };

    const getLeadsByStatus = (status: LeadStatus) => leads.filter(l => l.status === status);

    const columns: LeadStatus[] = ['new', 'contacted', 'quoted', 'won'];

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#0EA5E9]" />
                    Leads Pipeline
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {columns.map((status) => {
                        const config = STATUS_CONFIG[status];
                        const statusLeads = getLeadsByStatus(status);

                        return (
                            <div key={status} className="bg-slate-50 rounded-lg p-3 min-h-[200px]">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className={cn('h-2 w-2 rounded-full', config.color)} />
                                        <span className="text-sm font-medium text-slate-700">{config.label}</span>
                                    </div>
                                    <Badge variant="outline" className="text-xs">
                                        {statusLeads.length}
                                    </Badge>
                                </div>

                                <div className="space-y-2">
                                    {statusLeads.map(lead => (
                                        <LeadCard
                                            key={lead.id}
                                            lead={lead}
                                            onStatusChange={handleStatusChange}
                                        />
                                    ))}
                                    {statusLeads.length === 0 && (
                                        <p className="text-xs text-slate-400 text-center py-4">
                                            No leads
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
