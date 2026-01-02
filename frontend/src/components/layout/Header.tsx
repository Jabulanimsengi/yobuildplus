'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
    Menu,
    Search,
    ChevronDown,
    ChevronRight,
    User,
    Bell,
    Home,
    Briefcase,
    Info,
    LogIn,
    Building2,
    LogOut,
    LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { categories } from '@/data/categories';
import { NotificationBell } from '@/components/notifications/NotificationBell';
import { SignOutButton } from '@/components/auth/SignOutButton';
import { cn } from '@/lib/utils';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const { data: session } = useSession();
    const pathname = usePathname();

    // Hide header on dashboard, client, and admin routes (they have their own navigation)
    const isDashboardRoute = pathname?.startsWith('/dashboard') ||
        pathname?.startsWith('/client') ||
        pathname?.startsWith('/admin');

    if (isDashboardRoute) {
        return null;
    }

    // Determine dashboard link based on user role
    const getDashboardLink = () => {
        if (session?.user?.role === 'client' && !session?.user?.builderId) {
            return '/client';
        }
        return '/dashboard';
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/contractors?search=${encodeURIComponent(searchQuery)}`;
            setIsOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/yobuild+.png"
                            alt="Yobuildplus"
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {/* Categories Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="gap-1 text-slate-700 hover:text-slate-900 hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0EA5E9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                                    Categories
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64" align="start">
                                {categories.map((category) => (
                                    <div key={category.id}>
                                        <DropdownMenuLabel className="flex items-center gap-2">
                                            <span>{category.icon}</span>
                                            <span>{category.name}</span>
                                        </DropdownMenuLabel>
                                        {category.subcategories.slice(0, 4).map((sub) => (
                                            <DropdownMenuItem key={sub.id} asChild>
                                                <Link href={`/category/${sub.slug}`} className="pl-8">
                                                    {sub.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                        {category.subcategories.length > 4 && (
                                            <DropdownMenuItem asChild>
                                                <Link href={`/category/${category.slug}`} className="pl-8 text-primary">
                                                    View all →
                                                </Link>
                                            </DropdownMenuItem>
                                        )}
                                        <DropdownMenuSeparator />
                                    </div>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/contractors" className="text-slate-700 hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0EA5E9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-medium">
                            Find Contractors
                        </Link>
                        <Link href="/pricing" className="text-slate-700 hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0EA5E9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-medium">
                            Pricing
                        </Link>
                        <Link href="/about" className="text-slate-700 hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0EA5E9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-medium">
                            About
                        </Link>
                    </nav>

                    {/* Search Bar - Desktop */}
                    <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                                type="search"
                                placeholder="Search builders, services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 w-64 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#0EA5E9]"
                            />
                        </div>
                        <Button type="submit" className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
                            Search
                        </Button>
                    </form>

                    {/* CTA Buttons - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <NotificationBell />
                        {session ? (
                            <>
                                <Button asChild variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/5">
                                    <Link href={getDashboardLink()}>
                                        <LayoutDashboard className="h-4 w-4 mr-2" />
                                        Dashboard
                                    </Link>
                                </Button>
                                <SignOutButton variant="ghost" className="text-slate-600 hover:text-slate-900" />
                            </>
                        ) : (
                            <>
                                <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                                    <Link href="/login">Sign In</Link>
                                </Button>
                                <Button asChild className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium border-0">
                                    <Link href="/get-listed">List Your Business</Link>
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile: Notification + Menu */}
                    <div className="flex items-center gap-2 md:hidden">
                        <NotificationBell />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className="relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">
                                    <div className="flex flex-col gap-1.5 w-5">
                                        <span className={cn(
                                            "block h-0.5 bg-slate-600 rounded-full transition-all duration-300",
                                            isOpen && "rotate-45 translate-y-2"
                                        )} />
                                        <span className={cn(
                                            "block h-0.5 bg-slate-600 rounded-full transition-all duration-300",
                                            isOpen && "opacity-0"
                                        )} />
                                        <span className={cn(
                                            "block h-0.5 bg-slate-600 rounded-full transition-all duration-300",
                                            isOpen && "-rotate-45 -translate-y-2"
                                        )} />
                                    </div>
                                    <span className="sr-only">Toggle menu</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] p-0 m-3 rounded-2xl border-0 shadow-2xl overflow-hidden"
                            >
                                <VisuallyHidden.Root>
                                    <SheetTitle>Navigation Menu</SheetTitle>
                                </VisuallyHidden.Root>
                                {/* Header Section with User Info */}
                                <div className="p-5 bg-slate-900 text-white rounded-t-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                            {session?.user?.image ? (
                                                <img
                                                    src={session.user.image}
                                                    alt="Profile"
                                                    className="h-12 w-12 rounded-full object-cover"
                                                />
                                            ) : (
                                                <User className="h-6 w-6 text-white" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            {session ? (
                                                <>
                                                    <p className="font-semibold">{session.user?.name || 'User'}</p>
                                                    <p className="text-xs text-white/70">{session.user?.email}</p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="font-semibold">Welcome to Yobuildplus</p>
                                                    <p className="text-xs text-white/70">Find trusted service providers</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Search */}
                                <div className="p-4 border-b border-slate-100">
                                    <form onSubmit={handleSearch}>
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                            <Input
                                                type="search"
                                                placeholder="Search builders, services..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="pl-10 bg-slate-50 border-slate-200 focus:border-[#0EA5E9] rounded-xl"
                                            />
                                        </div>
                                    </form>
                                </div>

                                {/* Navigation Links - Scrollable */}
                                <nav className="flex-1 overflow-y-auto p-4 space-y-1 pb-40">
                                    {/* Dashboard Link for Logged In Users */}
                                    {session && (
                                        <Link
                                            href={getDashboardLink()}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] transition-all group"
                                        >
                                            <div className="h-9 w-9 rounded-lg bg-[#0EA5E9]/20 flex items-center justify-center transition-colors">
                                                <LayoutDashboard className="h-5 w-5 text-[#0EA5E9]" />
                                            </div>
                                            <span className="font-medium">My Dashboard</span>
                                        </Link>
                                    )}

                                    {/* Main Links */}
                                    <Link
                                        href="/"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0EA5E9]/5 text-slate-700 hover:text-[#0EA5E9] transition-all group"
                                    >
                                        <div className="h-9 w-9 rounded-lg bg-slate-100 group-hover:bg-[#0EA5E9]/10 flex items-center justify-center transition-colors">
                                            <Home className="h-5 w-5 text-slate-500 group-hover:text-[#0EA5E9]" />
                                        </div>
                                        <span className="font-medium">Home</span>
                                    </Link>

                                    <Link
                                        href="/contractors"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0EA5E9]/5 text-slate-700 hover:text-[#0EA5E9] transition-all group"
                                    >
                                        <div className="h-9 w-9 rounded-lg bg-slate-100 group-hover:bg-[#0EA5E9]/10 flex items-center justify-center transition-colors">
                                            <Briefcase className="h-5 w-5 text-slate-500 group-hover:text-[#0EA5E9]" />
                                        </div>
                                        <span className="font-medium">Find Contractors</span>
                                    </Link>

                                    {/* Categories Accordion */}
                                    <div className="py-2">
                                        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                            Categories
                                        </p>
                                        <div className="space-y-1">
                                            {categories.map((category) => (
                                                <Collapsible
                                                    key={category.id}
                                                    open={expandedCategory === category.id}
                                                    onOpenChange={(open: boolean) => setExpandedCategory(open ? category.id : null)}
                                                >
                                                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors group">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-lg">{category.icon}</span>
                                                            <span className="font-medium text-sm">{category.name}</span>
                                                        </div>
                                                        <ChevronRight
                                                            className={cn(
                                                                "h-4 w-4 text-slate-400 transition-transform duration-200",
                                                                expandedCategory === category.id && "rotate-90"
                                                            )}
                                                        />
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent className="pl-8 pr-4 py-1 space-y-0.5">
                                                        {category.subcategories.slice(0, 5).map((sub) => (
                                                            <Link
                                                                key={sub.id}
                                                                href={`/category/${sub.slug}`}
                                                                onClick={() => setIsOpen(false)}
                                                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/5 transition-colors"
                                                            >
                                                                <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                        {category.subcategories.length > 5 && (
                                                            <Link
                                                                href={`/category/${category.slug}`}
                                                                onClick={() => setIsOpen(false)}
                                                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#0EA5E9] font-medium"
                                                            >
                                                                View all {category.subcategories.length} →
                                                            </Link>
                                                        )}
                                                    </CollapsibleContent>
                                                </Collapsible>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href="/about"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0EA5E9]/5 text-slate-700 hover:text-[#0EA5E9] transition-all group"
                                    >
                                        <div className="h-9 w-9 rounded-lg bg-slate-100 group-hover:bg-[#0EA5E9]/10 flex items-center justify-center transition-colors">
                                            <Info className="h-5 w-5 text-slate-500 group-hover:text-[#0EA5E9]" />
                                        </div>
                                        <span className="font-medium">About Us</span>
                                    </Link>
                                </nav>

                                {/* Bottom CTA Section */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 space-y-2">
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#DC2626] text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25"
                                    >
                                        <Link href="/get-listed" onClick={() => setIsOpen(false)}>
                                            <Building2 className="h-4 w-4 mr-2" />
                                            List Your Business
                                        </Link>
                                    </Button>
                                    {session ? (
                                        <SignOutButton
                                            className="w-full border-red-200 text-red-600 hover:bg-red-50 font-medium rounded-xl justify-center"
                                            variant="outline"
                                        />
                                    ) : (
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/5 font-medium rounded-xl"
                                        >
                                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                                <LogIn className="h-4 w-4 mr-2" />
                                                Sign In
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
