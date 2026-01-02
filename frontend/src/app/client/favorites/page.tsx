'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function ClientFavoritesPage() {
    // TODO: Implement saved contractors functionality
    // This would require a new backend endpoint and database table

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Saved Contractors</h1>
                <p className="text-slate-500">Quick access to your favorite contractors.</p>
            </div>

            <Card>
                <CardContent className="p-8 text-center">
                    <Heart className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-600 mb-2">No saved contractors yet</h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto">
                        When you find contractors you like, save them here for quick access later.
                        Look for the heart icon on contractor profiles.
                    </p>
                    <Button asChild className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                        <Link href="/contractors">Browse Contractors</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
