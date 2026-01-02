'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { LogOut, X } from 'lucide-react';

interface SignOutButtonProps {
    className?: string;
    variant?: 'default' | 'ghost' | 'outline';
}

export function SignOutButton({ className, variant = 'ghost' }: SignOutButtonProps) {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSignOut = async () => {
        setIsSigningOut(true);
        try {
            await signOut({ callbackUrl: '/' });
        } catch (error) {
            console.error('Sign out failed:', error);
            setIsSigningOut(false);
        }
    };

    const modal = showConfirmModal && mounted ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900">Sign Out</h2>
                    <button
                        onClick={() => setShowConfirmModal(false)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content */}
                <p className="text-slate-600 mb-6">
                    Are you sure you want to sign out of your account? You&apos;ll need to sign in again to access your dashboard.
                </p>

                {/* Actions */}
                <div className="flex gap-3 justify-end">
                    <Button
                        onClick={() => setShowConfirmModal(false)}
                        disabled={isSigningOut}
                        className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSignOut}
                        disabled={isSigningOut}
                        className="bg-[#F97316] hover:bg-[#EA580C] text-white"
                    >
                        {isSigningOut ? (
                            <>
                                <span className="animate-spin mr-2">⏳</span>
                                Signing Out...
                            </>
                        ) : (
                            <>
                                <LogOut className="h-4 w-4 mr-2" />
                                Sign Out
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            <Button
                variant={variant}
                className={className}
                onClick={() => setShowConfirmModal(true)}
            >
                <LogOut className="h-5 w-5 mr-3" />
                Sign Out
            </Button>

            {/* Render modal using portal to body for correct positioning */}
            {mounted && modal && createPortal(modal, document.body)}
        </>
    );
}
