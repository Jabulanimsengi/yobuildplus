'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function ClientReviewsPage() {
    // TODO: Implement reviews functionality
    // This would fetch reviews written by the current user

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">My Reviews</h1>
                <p className="text-slate-500">Reviews you&apos;ve written for contractors.</p>
            </div>

            <Card>
                <CardContent className="p-8 text-center">
                    <Star className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-600 mb-2">No reviews yet</h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto">
                        After completing a project with a contractor, you can leave a review
                        to help other homeowners make informed decisions.
                    </p>
                    <Button asChild className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                        <Link href="/client/quotes">View My Projects</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
