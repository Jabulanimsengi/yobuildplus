
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Trash2, Calculator, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuotationItem {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    unit: string;
    totalPrice: number;
}

interface QuotationBuilderProps {
    quoteId: string;
    customerName: string;
    projectDescription: string;
    onSuccess?: () => void;
}

export function QuotationBuilder({ quoteId, customerName, projectDescription, onSuccess }: QuotationBuilderProps) {
    const { data: session } = useSession();
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notes, setNotes] = useState('');
    const [validDays, setValidDays] = useState(30);
    const [items, setItems] = useState<QuotationItem[]>([
        { id: crypto.randomUUID(), description: '', quantity: 1, unitPrice: 0, unit: 'each', totalPrice: 0 }
    ]);

    const addItem = () => {
        setItems([...items, {
            id: crypto.randomUUID(),
            description: '',
            quantity: 1,
            unitPrice: 0,
            unit: 'each',
            totalPrice: 0
        }]);
    };

    const removeItem = (id: string) => {
        if (items.length > 1) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    const updateItem = (id: string, field: keyof QuotationItem, value: any) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const updated = { ...item, [field]: value };
                // Recalculate total
                if (field === 'quantity' || field === 'unitPrice') {
                    updated.totalPrice = updated.quantity * updated.unitPrice;
                }
                return updated;
            }
            return item;
        }));
    };

    const getTotal = () => {
        return items.reduce((sum, item) => sum + item.totalPrice, 0);
    };

    const handleSubmit = async () => {
        // Validate
        const invalidItems = items.filter(item => !item.description.trim() || item.unitPrice <= 0);
        if (invalidItems.length > 0) {
            toast({ title: 'Please fill in all item details', variant: 'destructive' });
            return;
        }

        setIsSubmitting(true);

        try {
            const validUntil = new Date();
            validUntil.setDate(validUntil.getDate() + validDays);

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes/${quoteId}/quotation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.accessToken}`,
                },
                body: JSON.stringify({
                    items: items.map(({ id, ...item }) => item),
                    notes,
                    validUntil: validUntil.toISOString(),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send quotation');
            }

            toast({ title: 'Quotation sent successfully!' });
            setIsOpen(false);
            onSuccess?.();
        } catch (error) {
            console.error(error);
            toast({ title: 'Failed to send quotation', variant: 'destructive' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                    <Calculator className="h-4 w-4 mr-2" />
                    Create Quotation
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create Quotation for {customerName}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Project Summary */}
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <Label className="text-sm font-medium">Project Request:</Label>
                        <p className="text-sm text-slate-600 mt-1">{projectDescription}</p>
                    </div>

                    {/* Line Items */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold">Quotation Items</Label>
                            <Button type="button" variant="outline" size="sm" onClick={addItem}>
                                <Plus className="h-4 w-4 mr-1" /> Add Item
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {items.map((item, index) => (
                                <div key={item.id} className="grid grid-cols-12 gap-2 items-end p-3 bg-slate-50 rounded-lg">
                                    <div className="col-span-12 sm:col-span-4">
                                        <Label className="text-xs">Description</Label>
                                        <Input
                                            placeholder="e.g., Labour - Tiling"
                                            value={item.description}
                                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-4 sm:col-span-2">
                                        <Label className="text-xs">Qty</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={item.quantity}
                                            onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                                        />
                                    </div>
                                    <div className="col-span-4 sm:col-span-2">
                                        <Label className="text-xs">Unit</Label>
                                        <Input
                                            placeholder="sqm"
                                            value={item.unit}
                                            onChange={(e) => updateItem(item.id, 'unit', e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-4 sm:col-span-2">
                                        <Label className="text-xs">Unit Price (R)</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={item.unitPrice}
                                            onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                                        />
                                    </div>
                                    <div className="col-span-10 sm:col-span-1 text-right">
                                        <Label className="text-xs">Total</Label>
                                        <p className="font-semibold text-sm py-2">R {item.totalPrice.toLocaleString()}</p>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => removeItem(item.id)}
                                            disabled={items.length === 1}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="flex justify-end items-center gap-4 pt-4 border-t">
                            <span className="text-lg font-semibold">Grand Total:</span>
                            <span className="text-2xl font-bold text-[#0EA5E9]">R {getTotal().toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                        <Label>Additional Notes (Optional)</Label>
                        <Textarea
                            placeholder="Payment terms, conditions, or any additional information..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={3}
                        />
                    </div>

                    {/* Valid Until */}
                    <div>
                        <Label>Quote Valid For (Days)</Label>
                        <Input
                            type="number"
                            min="1"
                            max="90"
                            value={validDays}
                            onChange={(e) => setValidDays(parseInt(e.target.value) || 30)}
                            className="w-24"
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                        {isSubmitting ? (
                            <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...</>
                        ) : (
                            <><Send className="h-4 w-4 mr-2" /> Send Quotation</>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
