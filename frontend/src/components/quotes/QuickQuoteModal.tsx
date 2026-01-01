'use client';

import { useState } from 'react';
import { X, Send, Zap, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface QuickQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    prefilledData?: {
        name?: string;
        email?: string;
        phone?: string;
    };
    contractorName?: string;
}

export function QuickQuoteModal({ isOpen, onClose, prefilledData, contractorName }: QuickQuoteModalProps) {
    const [formData, setFormData] = useState({
        name: prefilledData?.name || '',
        email: prefilledData?.email || '',
        phone: prefilledData?.phone || '',
        description: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        setTimeout(() => {
            onClose();
            setIsSuccess(false);
            setFormData({ ...formData, description: '' });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 pt-16 md:pt-4 overflow-y-auto">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-4">
                {/* Header */}
                <div className="bg-slate-900 text-white p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5" />
                            <h2 className="text-lg font-bold">Quick Quote Request</h2>
                        </div>
                        <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    {contractorName && (
                        <p className="text-sm text-white/80 mt-1">Requesting quote from {contractorName}</p>
                    )}
                </div>

                {isSuccess ? (
                    <div className="p-8 text-center">
                        <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Request Sent!</h3>
                        <p className="text-slate-600">You'll receive quotes within 24 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                        {/* Trust Badge */}
                        <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                            <Shield className="h-4 w-4 text-emerald-600" />
                            <span className="text-xs text-emerald-700">Your payment will be protected by escrow</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-1 block">Name</label>
                                <Input
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your name"
                                    className="h-10"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                                <Input
                                    required
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="071 234 5678"
                                    className="h-10"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700 mb-1 block">Email</label>
                            <Input
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="you@example.com"
                                className="h-10"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700 mb-1 block">What do you need?</label>
                            <Textarea
                                required
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Briefly describe your project or problem..."
                                className="min-h-[80px] resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Send className="h-4 w-4" />
                                    Send Quote Request
                                </span>
                            )}
                        </Button>

                        <p className="text-xs text-slate-500 text-center">
                            We'll send your request to top-rated contractors in your area
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
