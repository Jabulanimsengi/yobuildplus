'use client';

import { useState, useMemo } from 'react';
import { DollarSign, Calculator, ArrowRight, Home, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// Base rates per service type (ZAR per m² or unit)
const SERVICE_RATES: Record<string, { min: number; max: number; unit: string }> = {
    'tiling': { min: 180, max: 350, unit: 'm²' },
    'painting': { min: 45, max: 120, unit: 'm²' },
    'roofing': { min: 450, max: 850, unit: 'm²' },
    'plumbing': { min: 500, max: 1500, unit: 'job' },
    'electrical': { min: 450, max: 1200, unit: 'job' },
    'flooring': { min: 200, max: 500, unit: 'm²' },
    'kitchen': { min: 25000, max: 80000, unit: 'project' },
    'bathroom': { min: 18000, max: 55000, unit: 'project' },
};

interface InstantEstimateModalProps {
    serviceType?: string;
    children?: React.ReactNode;
}

export function InstantEstimateModal({ serviceType, children }: InstantEstimateModalProps) {
    const [selectedService, setSelectedService] = useState(serviceType || 'tiling');
    const [areaSize, setAreaSize] = useState<number>(20);
    const [showEstimate, setShowEstimate] = useState(false);

    const estimate = useMemo(() => {
        const rate = SERVICE_RATES[selectedService];
        if (!rate) return null;

        if (rate.unit === 'project' || rate.unit === 'job') {
            return {
                min: rate.min,
                max: rate.max,
                unit: rate.unit
            };
        }

        return {
            min: rate.min * areaSize,
            max: rate.max * areaSize,
            unit: rate.unit
        };
    }, [selectedService, areaSize]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children || (
                    <Button variant="outline" className="gap-2">
                        <Calculator className="h-4 w-4" />
                        Get Instant Estimate
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
                <DialogHeader>
                    <div className="mx-auto bg-[#0EA5E9]/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                        <DollarSign className="h-6 w-6 text-[#0EA5E9]" />
                    </div>
                    <DialogTitle className="text-center text-xl">Instant Cost Estimate</DialogTitle>
                    <DialogDescription className="text-center">
                        Get an idea of what your project might cost before requesting quotes.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* Service Type */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Service Type</label>
                        <Select value={selectedService} onValueChange={(v) => { setSelectedService(v); setShowEstimate(false); }}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tiling">🔲 Tiling</SelectItem>
                                <SelectItem value="painting">🎨 Painting</SelectItem>
                                <SelectItem value="roofing">🏠 Roofing</SelectItem>
                                <SelectItem value="plumbing">🚿 Plumbing</SelectItem>
                                <SelectItem value="electrical">⚡ Electrical</SelectItem>
                                <SelectItem value="flooring">🪵 Flooring</SelectItem>
                                <SelectItem value="kitchen">🍳 Kitchen Renovation</SelectItem>
                                <SelectItem value="bathroom">🛁 Bathroom Renovation</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Area Size (for applicable services) */}
                    {SERVICE_RATES[selectedService]?.unit === 'm²' && (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <Ruler className="h-4 w-4" />
                                Area Size (m²)
                            </label>
                            <Input
                                type="number"
                                value={areaSize}
                                onChange={(e) => { setAreaSize(Number(e.target.value)); setShowEstimate(false); }}
                                min={1}
                                max={1000}
                                className="text-lg"
                            />
                        </div>
                    )}

                    {/* Calculate Button */}
                    {!showEstimate && (
                        <Button
                            className="w-full bg-[#F97316] hover:bg-[#EA580C]"
                            onClick={() => setShowEstimate(true)}
                        >
                            Calculate Estimate
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}

                    {/* Estimate Result */}
                    {showEstimate && estimate && (
                        <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#0EA5E9]/5 rounded-xl p-5 text-center border border-[#0EA5E9]/20">
                            <p className="text-sm text-slate-500 mb-1">Estimated Cost Range</p>
                            <p className="text-2xl font-bold text-slate-800">
                                {formatCurrency(estimate.min)} – {formatCurrency(estimate.max)}
                            </p>
                            <p className="text-xs text-slate-400 mt-2">
                                Based on average South African rates. Actual quotes may vary.
                            </p>
                        </div>
                    )}
                </div>

                <DialogFooter className="flex-col sm:flex-col gap-2">
                    <p className="text-xs text-center text-slate-500">
                        This is an estimate only. Request quotes from verified contractors for accurate pricing.
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
