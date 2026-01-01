import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, Book, MessageSquare, FileText, Settings, Users, CreditCard, Shield, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
    title: 'Help Center | Yobuildplus',
    description: 'Get help with Yobuildplus. Browse guides, tutorials, and support resources.',
};

const helpCategories = [
    {
        icon: Book,
        title: 'Getting Started',
        description: 'New to Yobuildplus? Start here.',
        links: [
            { label: 'How to find a builder', href: '/faq' },
            { label: 'Requesting your first quote', href: '/faq' },
            { label: 'Understanding builder profiles', href: '/faq' },
        ]
    },
    {
        icon: Users,
        title: 'For Builders',
        description: 'Resources for service providers.',
        links: [
            { label: 'Listing your business', href: '/get-listed' },
            { label: 'Managing your profile', href: '/faq' },
            { label: 'Responding to quotes', href: '/faq' },
        ]
    },
    {
        icon: Settings,
        title: 'Account Settings',
        description: 'Manage your account and preferences.',
        links: [
            { label: 'Update your profile', href: '/dashboard/settings' },
            { label: 'Change password', href: '/forgot-password' },
            { label: 'Notification settings', href: '/dashboard/settings' },
        ]
    },
    {
        icon: CreditCard,
        title: 'Payments & Billing',
        description: 'Information about payments and subscriptions.',
        links: [
            { label: 'Premium plans', href: '/get-listed' },
            { label: 'Payment methods', href: '/faq' },
            { label: 'Refund policy', href: '/terms' },
        ]
    },
    {
        icon: Shield,
        title: 'Trust & Safety',
        description: 'Stay safe on our platform.',
        links: [
            { label: 'How we verify builders', href: '/about' },
            { label: 'Reporting a problem', href: '/contact' },
            { label: 'Privacy & data protection', href: '/privacy' },
        ]
    },
    {
        icon: FileText,
        title: 'Policies',
        description: 'Legal information and policies.',
        links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Cookie Policy', href: '/cookies' },
        ]
    },
];

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Help Center</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Find answers, browse guides, and get support
                    </p>

                    {/* Search */}
                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                            type="search"
                            placeholder="Search help articles..."
                            className="pl-12 h-12 bg-white text-slate-900 border-0 rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/faq" className="bg-white px-6 py-3 rounded-xl shadow-md border border-slate-100 font-medium text-slate-700 hover:shadow-lg transition-shadow flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-[#0EA5E9]" />
                        Browse FAQ
                    </Link>
                    <Link href="/contact" className="bg-white px-6 py-3 rounded-xl shadow-md border border-slate-100 font-medium text-slate-700 hover:shadow-lg transition-shadow flex items-center gap-2">
                        <Mail className="h-5 w-5 text-[#0EA5E9]" />
                        Contact Support
                    </Link>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Browse by Category</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {helpCategories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center mb-4">
                                <category.icon className="h-6 w-6 text-[#0EA5E9]" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-1">{category.title}</h3>
                            <p className="text-slate-500 text-sm mb-4">{category.description}</p>
                            <ul className="space-y-2">
                                {category.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[#0EA5E9] hover:underline flex items-center gap-1"
                                        >
                                            {link.label}
                                            <ExternalLink className="h-3 w-3" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Support Section */}
            <div className="container mx-auto px-4 pb-12">
                <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-2xl text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Can't Find What You're Looking For?</h2>
                    <p className="text-blue-100 mb-6">Our support team is available to help you</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild className="bg-white text-[#0EA5E9] hover:bg-slate-100 font-semibold rounded-xl">
                            <Link href="/contact">
                                <MessageSquare className="h-5 w-5 mr-2" />
                                Contact Support
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-semibold rounded-xl">
                            <a href="tel:+27123456789">
                                <Phone className="h-5 w-5 mr-2" />
                                Call Us
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
