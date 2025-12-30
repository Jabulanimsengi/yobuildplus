'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
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
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { categories } from '@/data/categories';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/builders?search=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-[#0EA5E9]/30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                            Y+
                        </div>
                        <span className="font-bold text-xl text-foreground hidden sm:block">
                            Yobuild<span className="text-secondary">plus</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {/* Categories Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="gap-1">
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

                        <Link href="/builders" className="text-muted-foreground hover:text-foreground transition-colors">
                            Find Builders
                        </Link>
                        <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </Link>
                    </nav>

                    {/* Search Bar - Desktop */}
                    <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search builders, services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 w-64 border-[#0EA5E9]/50 focus:border-[#0EA5E9]"
                            />
                        </div>
                        <Button type="submit" className="bg-primary hover:bg-primary/90">
                            Search
                        </Button>
                    </form>


                    {/* CTA Buttons - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button asChild variant="outline" className="border-2 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white font-medium">
                            <Link href="/get-listed">List Your Business</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-bold">
                                        Y+
                                    </div>
                                    Yobuildplus
                                </SheetTitle>
                            </SheetHeader>

                            {/* Mobile Search */}
                            <form onSubmit={handleSearch} className="mt-6">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-9 border-[#0EA5E9]/50"
                                    />
                                </div>
                            </form>

                            {/* Mobile Navigation */}
                            <nav className="mt-6 flex flex-col gap-4">
                                <Link
                                    href="/builders"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    Find Builders
                                </Link>

                                <div className="border-t border-border pt-4">
                                    <p className="text-sm font-medium text-muted-foreground mb-3">Categories</p>
                                    <div className="flex flex-col gap-2">
                                        {categories.map((category) => (
                                            <Link
                                                key={category.id}
                                                href={`/category/${category.slug}`}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                                            >
                                                <span>{category.icon}</span>
                                                <span>{category.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href="/about"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    About
                                </Link>

                                <div className="border-t border-border pt-4 mt-2">
                                    <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                                        <Link href="/get-listed" onClick={() => setIsOpen(false)}>
                                            List Your Business
                                        </Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    );
}
