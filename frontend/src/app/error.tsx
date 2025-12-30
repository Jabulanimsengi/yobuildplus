'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCcw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-red-50 p-6 rounded-full mb-6">
                <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Something went wrong!</h2>
            <p className="text-slate-600 mb-8 max-w-md">
                We apologize for the inconvenience. An unexpected error occurred while loading this page.
            </p>
            <div className="flex gap-4">
                <Button onClick={() => window.location.href = '/'} variant="outline">
                    Go Home
                </Button>
                <Button onClick={() => reset()} className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
            </div>
        </div>
    );
}
