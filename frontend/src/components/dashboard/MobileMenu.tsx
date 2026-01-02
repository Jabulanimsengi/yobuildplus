'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { SignOutButton } from '@/components/auth/SignOutButton';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import {
    Menu,
    X,
    LayoutDashboard,
    MessageSquare,
    User,
    Settings,
    LogOut,
    Home,
    ChevronRight
} from 'lucide-react';

import { cn } from '@/lib/utils';

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="relative p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                    <div className="flex flex-col gap-1.5 w-5">
                        <span className={cn(
                            "block h-0.5 bg-white rounded-full transition-all duration-300",
                            isOpen && "rotate-45 translate-y-2"
                        )} />
                        <span className={cn(
                            "block h-0.5 bg-white rounded-full transition-all duration-300",
                            isOpen && "opacity-0"
                        )} />
                        <span className={cn(
                            "block h-0.5 bg-white rounded-full transition-all duration-300",
                            isOpen && "-rotate-45 -translate-y-2"
                        )} />
                    </div>
                    <span className="sr-only">Toggle menu</span>
                </button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[300px] p-0 flex flex-col border-l-0"
            >
                <VisuallyHidden.Root>
                    <SheetTitle>Dashboard Menu</SheetTitle>
                </VisuallyHidden.Root>

                {/* User Profile Header */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 pt-12">
                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {session?.user?.image ? (
                                <img
                                    src={session.user.image}
                                    alt="Profile"
                                    className="h-14 w-14 rounded-full object-cover"
                                />
                            ) : (
                                session?.user?.name?.charAt(0).toUpperCase() || 'U'
                            )}
                        </div>
                        <div className="flex-1 text-white">
                            <p className="font-semibold text-lg">{session?.user?.name || 'User'}</p>
                            <p className="text-xs text-white/70 truncate">{session?.user?.email}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-1 bg-white">
                    <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-[#0EA5E9]/5 text-slate-700 hover:text-[#0EA5E9] transition-all group"
                    >
                        <div className="h-10 w-10 rounded-lg bg-slate-100 group-hover:bg-[#0EA5E9]/10 flex items-center justify-center transition-colors">
                            <LayoutDashboard className="h-5 w-5 text-slate-500 group-hover:text-[#0EA5E9]" />
                        </div>
                        <span className="font-medium">Dashboard</span>
                        <ChevronRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-[#0EA5E9]" />
                    </Link>

                    <Link
                        href="/dashboard/leads"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-[#0EA5E9]/5 text-slate-700 hover:text-[#0EA5E9] transition-all group"
                    >
                        <div className="h-10 w-10 rounded-lg bg-slate-100 group-hover:bg-[#0EA5E9]/10 flex items-center justify-center transition-colors">
                            <MessageSquare className="h-5 w-5 text-slate-500 group-hover:text-[#0EA5E9]" />
                        </div>
                        <span className="font-medium">Leads & Requests</span>
                        <ChevronRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-[#0EA5E9]" />
                    </Link>

                    <Link
                        href="/dashboard/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-[#0EA5E9]/5 text-slate-700 hover:text-[#0EA5E9] transition-all group"
                    >
                        <div className="h-10 w-10 rounded-lg bg-slate-100 group-hover:bg-[#0EA5E9]/10 flex items-center justify-center transition-colors">
                            <User className="h-5 w-5 text-slate-500 group-hover:text-[#0EA5E9]" />
                        </div>
                        <span className="font-medium">My Profile</span>
                        <ChevronRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-[#0EA5E9]" />
                    </Link>

                    <Link
                        href="/dashboard/settings"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-[#0EA5E9]/5 text-slate-700 hover:text-[#0EA5E9] transition-all group"
                    >
                        <div className="h-10 w-10 rounded-lg bg-slate-100 group-hover:bg-[#0EA5E9]/10 flex items-center justify-center transition-colors">
                            <Settings className="h-5 w-5 text-slate-500 group-hover:text-[#0EA5E9]" />
                        </div>
                        <span className="font-medium">Settings</span>
                        <ChevronRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-[#0EA5E9]" />
                    </Link>

                    {/* Divider */}
                    <div className="my-3 border-t border-slate-100" />

                    {/* Back to Home */}
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all group"
                    >
                        <div className="h-10 w-10 rounded-lg bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center transition-colors">
                            <Home className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                        </div>
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </nav>

                {/* Bottom Sign Out */}
                <div className="p-4 bg-white border-t border-slate-100">
                    <SignOutButton
                        className="w-full justify-center bg-red-50 border-red-200 text-red-600 hover:bg-red-100 font-medium rounded-xl h-12"
                        variant="outline"
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
}
