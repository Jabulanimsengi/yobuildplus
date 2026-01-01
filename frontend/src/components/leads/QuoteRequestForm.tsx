
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { MapboxAddressInput } from '@/components/ui/MapboxAddressInput';

const quoteSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    location: z.string().optional(),
    province: z.string().optional(),
    town: z.string().optional(),
    postalCode: z.string().optional(),
    message: z.string().min(10, 'Please provide more details about your project'),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteRequestFormProps {
    builderId: string;
    builderName: string;
    onSuccess?: () => void;
}

export function QuoteRequestForm({ builderId, builderName, onSuccess }: QuoteRequestFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<QuoteFormValues>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            location: '',
            province: '',
            town: '',
            postalCode: '',
            message: '',
        },
    });

    const handleAddressSelect = (address: {
        fullAddress: string;
        town: string;
        province: string;
        postalCode: string;
        coordinates: { lat: number; lng: number };
    }) => {
        form.setValue('location', address.fullAddress);
        form.setValue('province', address.province);
        form.setValue('town', address.town);
        form.setValue('postalCode', address.postalCode);
    };

    async function onSubmit(data: QuoteFormValues) {
        setIsSubmitting(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/quotes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    builderId,
                    ...data,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit quote request');
            }

            toast({
                title: 'Quote Request Sent!',
                description: `Your request has been sent to ${builderName}. They will contact you shortly.`,
            });
            form.reset();
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'Something went wrong. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="082 123 4567" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Address with Mapbox Autocomplete */}
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Location</FormLabel>
                            <FormControl>
                                <MapboxAddressInput
                                    value={field.value}
                                    onAddressSelect={handleAddressSelect}
                                    placeholder="Start typing your address..."
                                />
                            </FormControl>
                            <FormDescription>
                                Type your address and select from suggestions
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Auto-populated location details (read-only) */}
                {(form.watch('province') || form.watch('town')) && (
                    <div className="grid grid-cols-3 gap-2">
                        <FormField
                            control={form.control}
                            name="town"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs text-slate-500">Town</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            readOnly
                                            className="bg-slate-50 text-sm h-9"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="province"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs text-slate-500">Province</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            readOnly
                                            className="bg-slate-50 text-sm h-9"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="postalCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs text-slate-500">Code</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            readOnly
                                            className="bg-slate-50 text-sm h-9"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                )}

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Describe your project (e.g., Bathroom renovation, 20sqm, need tiling and plumbing...)"
                                    className="resize-none"
                                    rows={4}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        'Submit Request'
                    )}
                </Button>
            </form>
        </Form>
    );
}
