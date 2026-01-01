'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/categories';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNewsletter = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubscribed(true);
        setIsSubmitting(false);
        setEmail('');
    };

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex flex-col items-start gap-1 mb-4">
                            <img
                                src="/yobuild+.png"
                                alt="Yobuildplus"
                                className="h-16 w-auto brightness-0 invert"
                            />
                            <span className="text-sm text-slate-400 italic">we build it. we fix it</span>
                        </Link>
                        <p className="text-slate-400 text-sm mb-6 max-w-sm">
                            South Africa's trusted marketplace for finding verified contractors and service providers. Connecting clients with quality professionals since 2024.
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-3 text-sm mb-6">
                            <a href="mailto:info@yobuildplus.co.za" className="flex items-center gap-3 hover:text-white transition-colors group">
                                <div className="h-8 w-8 rounded-lg bg-slate-800 group-hover:bg-[#0EA5E9]/20 flex items-center justify-center transition-colors">
                                    <Mail className="h-4 w-4" />
                                </div>
                                info@yobuildplus.co.za
                            </a>
                            <a href="tel:+27123456789" className="flex items-center gap-3 hover:text-white transition-colors group">
                                <div className="h-8 w-8 rounded-lg bg-slate-800 group-hover:bg-[#0EA5E9]/20 flex items-center justify-center transition-colors">
                                    <Phone className="h-4 w-4" />
                                </div>
                                +27 12 345 6789
                            </a>
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                Johannesburg, South Africa
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://facebook.com/yobuildplus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-lg bg-slate-800 hover:bg-[#1877F2] flex items-center justify-center transition-all hover:-translate-y-1"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com/yobuildplus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-lg bg-slate-800 hover:bg-[#1DA1F2] flex items-center justify-center transition-all hover:-translate-y-1"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com/yobuildplus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] flex items-center justify-center transition-all hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/yobuildplus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-lg bg-slate-800 hover:bg-[#0077B5] flex items-center justify-center transition-all hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                            Categories
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            {categories.slice(0, 6).map((category) => (
                                <li key={category.id}>
                                    <Link
                                        href={`/category/${category.slug}`}
                                        className="flex items-center gap-2 hover:text-white transition-colors group"
                                    >
                                        <span className="opacity-70 group-hover:opacity-100">{category.icon}</span>
                                        <span>{category.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/contractors" className="hover:text-white transition-colors flex items-center gap-1 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Find Contractors
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-listed" className="hover:text-white transition-colors flex items-center gap-1 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    List Your Business
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-white transition-colors flex items-center gap-1 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="hover:text-white transition-colors flex items-center gap-1 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Support */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal & Support</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:text-white transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="hover:text-white transition-colors">
                                    Help Center
                                </Link>
                            </li>
                        </ul>

                        {/* Provinces */}
                        <h3 className="font-semibold text-white mt-6 mb-3">By Province</h3>
                        <div className="flex flex-wrap gap-1.5 text-xs">
                            {['Gauteng', 'Western Cape', 'KZN', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape'].map((province, i) => (
                                <Link
                                    key={province}
                                    href={`/contractors?province=${encodeURIComponent(province)}`}
                                    className="px-2 py-1 rounded bg-slate-800 hover:bg-[#0EA5E9]/20 hover:text-white transition-colors"
                                >
                                    {province}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section - Moved to bottom */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Stay Updated with Yobuildplus
                            </h3>
                            <p className="text-slate-400 text-sm">
                                Get the latest construction tips, featured builders, and exclusive deals.
                            </p>
                        </div>
                        {subscribed ? (
                            <div className="flex items-center gap-2 text-emerald-400">
                                <CheckCircle className="h-5 w-5" />
                                <span className="font-medium">Thanks for subscribing!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleNewsletter} className="flex gap-2 w-full lg:w-auto max-w-md">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#0EA5E9]"
                                />
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 whitespace-nowrap"
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">...</span>
                                    ) : (
                                        <>
                                            Subscribe
                                            <Send className="h-4 w-4 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>© {currentYear} Yobuildplus. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <span className="text-slate-600">Built with ❤️ in South Africa</span>
                            <span className="hidden md:inline text-slate-700">•</span>
                            <span className="hidden md:inline text-slate-600">Powered by Next.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
