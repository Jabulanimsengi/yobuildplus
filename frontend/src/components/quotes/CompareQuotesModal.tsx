'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Star, MapPin, Building2, DollarSign, Clock, CheckCircle2 } from 'lucide-react';

interface QuoteForComparison {
    id: string;
    builder: {
        name: string;
        logo?: string;
        city: string;
        rating: number;
        verified: boolean;
    };
    totalAmount: number;
    items: { description: string; totalPrice: number }[];
    validUntil?: string;
    createdAt: string;
}

interface CompareQuotesModalProps {
    quotes: QuoteForComparison[];
    onClose: () => void;
}

export function CompareQuotesModal({ quotes, onClose }: CompareQuotesModalProps) {
    if (quotes.length < 2) return null;

    const lowestPrice = Math.min(...quotes.map(q => q.totalAmount));

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between border-b">
                    <CardTitle>Compare Quotes</CardTitle>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </CardHeader>
                <CardContent className="p-0 overflow-auto">
                    <div className="grid" style={{ gridTemplateColumns: `repeat(${quotes.length}, 1fr)` }}>
                        {quotes.map((quote) => (
                            <div key={quote.id} className="border-r last:border-r-0 p-6">
                                {/* Contractor Info */}
                                <div className="text-center border-b pb-4 mb-4">
                                    {quote.builder.logo ? (
                                        <img
                                            src={quote.builder.logo}
                                            alt={quote.builder.name}
                                            className="h-16 w-16 rounded-full object-cover mx-auto mb-3"
                                        />
                                    ) : (
                                        <div className="h-16 w-16 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold">
                                            {quote.builder.name.charAt(0)}
                                        </div>
                                    )}
                                    <h3 className="font-bold text-lg">{quote.builder.name}</h3>
                                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-1">
                                        <MapPin className="h-3 w-3" />
                                        {quote.builder.city}
                                    </div>
                                    <div className="flex items-center justify-center gap-1 mt-2">
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <span className="font-medium">{quote.builder.rating.toFixed(1)}</span>
                                        {quote.builder.verified && (
                                            <Badge className="ml-2 bg-blue-100 text-blue-700 text-xs">Verified</Badge>
                                        )}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-4 p-4 bg-slate-50 rounded-lg">
                                    <p className="text-sm text-slate-500 mb-1">Total Quote</p>
                                    <p className={`text-2xl font-bold ${quote.totalAmount === lowestPrice ? 'text-green-600' : 'text-slate-900'}`}>
                                        R {quote.totalAmount.toLocaleString()}
                                    </p>
                                    {quote.totalAmount === lowestPrice && (
                                        <Badge className="bg-green-100 text-green-700 mt-2">Lowest Price</Badge>
                                    )}
                                </div>

                                {/* Line Items */}
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-slate-700">Breakdown:</p>
                                    {quote.items.slice(0, 5).map((item, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-slate-600 truncate max-w-[60%]">{item.description}</span>
                                            <span className="font-medium">R {item.totalPrice.toLocaleString()}</span>
                                        </div>
                                    ))}
                                    {quote.items.length > 5 && (
                                        <p className="text-xs text-slate-400">+{quote.items.length - 5} more items</p>
                                    )}
                                </div>

                                {/* Valid Until */}
                                {quote.validUntil && (
                                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                        <Clock className="h-4 w-4" />
                                        Valid until {new Date(quote.validUntil).toLocaleDateString()}
                                    </div>
                                )}

                                {/* Action */}
                                <Button className="w-full mt-4 bg-[#0EA5E9] hover:bg-[#0284C7]">
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Accept Quote
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
