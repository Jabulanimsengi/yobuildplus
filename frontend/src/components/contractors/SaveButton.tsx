'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';

interface SaveButtonProps {
    builderId: string;
    className?: string;
    size?: 'sm' | 'default' | 'lg' | 'icon';
}

export function SaveButton({ builderId, className, size = 'icon' }: SaveButtonProps) {
    const { data: session } = useSession();
    const [isSaved, setIsSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.user) {
            checkIfSaved();
        }
    }, [session, builderId]);

    const checkIfSaved = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/saved/${builderId}/check`,
                {
                    headers: {
                        'Authorization': `Bearer ${(session as any)?.accessToken}`
                    }
                }
            );
            if (response.ok) {
                const data = await response.json();
                setIsSaved(data.isSaved);
            }
        } catch (error) {
            console.error('Failed to check saved status:', error);
        }
    };

    const handleToggleSave = async () => {
        if (!session?.user) {
            // Redirect to login or show modal
            window.location.href = '/login';
            return;
        }

        setIsLoading(true);
        try {
            const method = isSaved ? 'DELETE' : 'POST';
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/saved/${builderId}`,
                {
                    method,
                    headers: {
                        'Authorization': `Bearer ${(session as any)?.accessToken}`
                    }
                }
            );

            if (response.ok) {
                setIsSaved(!isSaved);
            }
        } catch (error) {
            console.error('Failed to toggle save:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            variant="ghost"
            size={size}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggleSave();
            }}
            disabled={isLoading}
            className={cn(
                'transition-all',
                isSaved ? 'text-red-500 hover:text-red-600' : 'text-slate-400 hover:text-red-500',
                className
            )}
            title={isSaved ? 'Remove from saved' : 'Save contractor'}
        >
            <Heart
                className={cn(
                    'h-5 w-5 transition-all',
                    isSaved && 'fill-current'
                )}
            />
        </Button>
    );
}
