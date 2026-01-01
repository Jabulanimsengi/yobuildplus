'use client';

import { CheckCircle, Circle, Clock, MessageSquare, AlertTriangle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectStep {
    id: string;
    label: string;
    status: 'completed' | 'current' | 'pending';
    date?: string;
}

interface ProjectProgressProps {
    projectName: string;
    contractorName: string;
    totalAmount: number;
    steps: ProjectStep[];
    currentDay?: number;
    totalDays?: number;
    onMessage?: () => void;
    onReportIssue?: () => void;
}

export function ProjectProgressTracker({
    projectName,
    contractorName,
    totalAmount,
    steps,
    currentDay,
    totalDays,
    onMessage,
    onReportIssue,
}: ProjectProgressProps) {
    const completedSteps = steps.filter(s => s.status === 'completed').length;
    const progress = (completedSteps / steps.length) * 100;

    return (
        <Card className="border-2 border-slate-100 overflow-hidden">
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white pb-4">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-lg font-bold">{projectName}</CardTitle>
                        <p className="text-sm text-white/80">{contractorName}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold">R{totalAmount.toLocaleString()}</div>
                        {currentDay && totalDays && (
                            <Badge className="bg-white/20 text-white border-0 mt-1">
                                Day {currentDay} of {totalDays}
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-xs text-white/70 mt-1">{completedSteps} of {steps.length} milestones complete</p>
                </div>
            </CardHeader>

            <CardContent className="p-4">
                {/* Timeline */}
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-start gap-3">
                            {/* Icon */}
                            <div className="relative">
                                <div className={cn(
                                    'h-8 w-8 rounded-full flex items-center justify-center',
                                    step.status === 'completed' && 'bg-emerald-100 text-emerald-600',
                                    step.status === 'current' && 'bg-[#0EA5E9] text-white animate-pulse',
                                    step.status === 'pending' && 'bg-slate-100 text-slate-400'
                                )}>
                                    {step.status === 'completed' ? (
                                        <CheckCircle className="h-5 w-5" />
                                    ) : step.status === 'current' ? (
                                        <Clock className="h-5 w-5" />
                                    ) : (
                                        <Circle className="h-5 w-5" />
                                    )}
                                </div>
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className={cn(
                                        'absolute left-1/2 top-8 w-0.5 h-6 -translate-x-1/2',
                                        step.status === 'completed' ? 'bg-emerald-300' : 'bg-slate-200'
                                    )} />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-4">
                                <div className="flex items-center justify-between">
                                    <span className={cn(
                                        'font-medium',
                                        step.status === 'completed' && 'text-slate-800',
                                        step.status === 'current' && 'text-[#0EA5E9] font-semibold',
                                        step.status === 'pending' && 'text-slate-400'
                                    )}>
                                        {step.label}
                                    </span>
                                    {step.date && (
                                        <span className="text-xs text-slate-500">{step.date}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                    <Button
                        variant="outline"
                        className="flex-1 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/5"
                        onClick={onMessage}
                    >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                        onClick={onReportIssue}
                    >
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Report Issue
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

// Example usage data
export const exampleProjectSteps: ProjectStep[] = [
    { id: '1', label: 'Quote Accepted', status: 'completed', date: 'Dec 28' },
    { id: '2', label: 'Payment Held in Escrow', status: 'completed', date: 'Dec 28' },
    { id: '3', label: 'Work in Progress', status: 'current' },
    { id: '4', label: 'Awaiting Your Approval', status: 'pending' },
    { id: '5', label: 'Payment Released', status: 'pending' },
];
