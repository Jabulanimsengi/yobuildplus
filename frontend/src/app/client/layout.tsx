'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    LayoutDashboard,
    FileText,
    Star,
    Heart,
    Settings,
    Loader2
} from 'lucide-react';
import { SignOutButton } from '@/components/auth/SignOutButton';

// Mobile Menu for Client Dashboard
function ClientMobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
                    <div className="fixed top-14 right-0 w-64 h-[calc(100%-3.5rem)] bg-slate-900 shadow-xl overflow-y-auto">
                        <nav className="p-4 space-y-2">
                            <Link
                                href="/client"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-slate-800 rounded-lg"
                            >
                                <LayoutDashboard className="h-5 w-5" />
                                Dashboard
                            </Link>
                            <Link
                                href="/client/quotes"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                            >
                                <FileText className="h-5 w-5" />
                                My Quotes
                            </Link>
                            <Link
                                href="/client/favorites"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                            >
                                <Heart className="h-5 w-5" />
                                Saved Contractors
                            </Link>
                            <Link
                                href="/client/reviews"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                            >
                                <Star className="h-5 w-5" />
                                My Reviews
                            </Link>
                            <Link
                                href="/client/settings"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                            >
                                <Settings className="h-5 w-5" />
                                Settings
                            </Link>
                            <div className="pt-2 border-t border-slate-800">
                                <SignOutButton className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800" />
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    // Role-based access control
    useEffect(() => {
        if (status === 'loading') return;

        if (!session) {
            router.push('/login');
            return;
        }

        // Redirect service providers to contractor dashboard
        if (session.user?.role === 'service_provider' || session.user?.builderId) {
            router.push('/dashboard');
            return;
        }

        setIsChecking(false);
    }, [session, status, router]);

    if (status === 'loading' || isChecking) {
        return (
            <div className="h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="h-8 w-8 animate-spin text-[#0EA5E9]" />
            </div>
        );
    }

    return (
        <div className="h-screen bg-slate-50 flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed inset-y-0 z-40">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-slate-800">
                    <Link href="/client" className="flex items-center gap-3">
                        <Image
                            src="/yobuild+.png"
                            alt="Yobuildplus"
                            width={40}
                            height={40}
                            className="rounded"
                        />
                        <div>
                            <span className="font-bold text-lg">Yobuild+</span>
                            <p className="text-xs text-slate-400">Homeowner Portal</p>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <Link href="/client" className="flex items-center gap-3 px-4 py-3 bg-[#0EA5E9] rounded-lg text-white font-medium">
                        <LayoutDashboard className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link href="/client/quotes" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <FileText className="h-5 w-5" />
                        My Quotes
                    </Link>
                    <Link href="/client/favorites" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Heart className="h-5 w-5" />
                        Saved Contractors
                    </Link>
                    <Link href="/client/reviews" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Star className="h-5 w-5" />
                        My Reviews
                    </Link>
                    <Link href="/client/settings" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-slate-800">
                    <SignOutButton className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800" />
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 z-50 px-4 py-2 flex items-center justify-between">
                <Link href="/client" className="flex items-center gap-2">
                    <Image
                        src="/yobuild+.png"
                        alt="Yobuildplus"
                        width={40}
                        height={40}
                        className="flex-shrink-0"
                    />
                    <span className="font-bold text-white text-sm">Homeowner Portal</span>
                </Link>
                <ClientMobileMenu />
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 overflow-y-auto bg-slate-50 relative z-10">
                <div className="p-4 md:p-8 pt-20 md:pt-8 min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
}
