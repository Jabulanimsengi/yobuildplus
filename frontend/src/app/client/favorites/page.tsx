'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, MapPin, Loader2, Search, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface SavedContractor {
    id: string;
    slug: string;
    name: string;
    logo: string | null;
    description: string;
    city: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    serviceAttributes: string[];
    savedAt: string;
}

export default function ClientFavoritesPage() {
    const { data: session } = useSession();
    const [contractors, setContractors] = useState<SavedContractor[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (session?.user) {
            fetchSavedContractors();
        }
    }, [session]);

    const fetchSavedContractors = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/saved`,
                {
                    headers: {
                        'Authorization': `Bearer ${(session as any)?.accessToken}`
                    }
                }
            );
            if (response.ok) {
                const data = await response.json();
                setContractors(data);
            }
        } catch (error) {
            console.error('Failed to fetch saved contractors:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRemove = async (builderId: string) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/saved/${builderId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${(session as any)?.accessToken}`
                    }
                }
            );
            if (response.ok) {
                setContractors(contractors.filter(c => c.id !== builderId));
            }
        } catch (error) {
            console.error('Failed to remove contractor:', error);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Saved Contractors</h1>
                <p className="text-slate-500">Your favorite contractors for quick access.</p>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center py-16">
                    <Loader2 className="h-8 w-8 animate-spin text-[#0EA5E9]" />
                </div>
            ) : contractors.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Heart className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">No Saved Contractors</h3>
                        <p className="text-slate-500 max-w-md mb-6">
                            Save contractors you like by clicking the heart icon on their profile. They&apos;ll appear here for quick access.
                        </p>
                        <Link href="/contractors">
                            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                                <Search className="h-4 w-4 mr-2" />
                                Find Contractors
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {contractors.map((contractor) => (
                        <Card key={contractor.id} className="group hover:shadow-lg transition-all">
                            <CardContent className="p-0">
                                <Link href={`/contractors/${contractor.slug}`}>
                                    <div className="p-5">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                {contractor.logo ? (
                                                    <img
                                                        src={contractor.logo}
                                                        alt={contractor.name}
                                                        className="h-12 w-12 rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <div className="h-12 w-12 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                                        {contractor.name.charAt(0)}
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="font-bold text-slate-900 group-hover:text-[#0EA5E9] transition-colors">
                                                        {contractor.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                                        <MapPin className="h-3 w-3" />
                                                        {contractor.city}
                                                    </div>
                                                </div>
                                            </div>
                                            {contractor.verified && (
                                                <Badge className="bg-blue-100 text-blue-700">Verified</Badge>
                                            )}
                                        </div>

                                        <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                                            {contractor.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                                <span className="font-medium">{contractor.rating.toFixed(1)}</span>
                                                <span className="text-slate-400 text-sm">({contractor.reviewCount})</span>
                                            </div>
                                            <div className="flex gap-2">
                                                {contractor.serviceAttributes.slice(0, 2).map((attr) => (
                                                    <Badge key={attr} variant="outline" className="text-xs">
                                                        {attr}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <div className="border-t px-5 py-3 flex justify-between items-center bg-slate-50">
                                    <span className="text-xs text-slate-400">
                                        Saved {new Date(contractor.savedAt).toLocaleDateString()}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleRemove(contractor.id);
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4 mr-1" />
                                        Remove
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
