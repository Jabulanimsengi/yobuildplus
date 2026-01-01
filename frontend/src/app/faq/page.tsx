'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown, Search, HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const faqs = [
    {
        category: 'Getting Started',
        questions: [
            {
                q: 'How does Yobuildplus work?',
                a: 'Yobuildplus connects clients with verified contractors and service providers. Simply browse our directory, view contractor profiles and reviews, then request quotes directly from the contractors you\'re interested in. Contractors will respond with their quotes, and you can compare and choose the best option for your project.'
            },
            {
                q: 'Is it free to use Yobuildplus?',
                a: 'Yes! Browsing contractor profiles, reading reviews, and requesting quotes is completely free for clients. There are no hidden fees or charges for using our platform to find contractors.'
            },
            {
                q: 'How do I request a quote?',
                a: 'Visit any builder\'s profile page and click the "Request Quote" button. Fill in your project details, contact information, and any specific requirements. The builder will receive your request and respond with a quote.'
            },
        ]
    },
    {
        category: 'For Clients',
        questions: [
            {
                q: 'How do I know if a builder is trustworthy?',
                a: 'All builders on Yobuildplus go through a verification process. Look for the "Verified" badge on profiles. We also display real reviews from previous customers, ratings, and project portfolios to help you make informed decisions.'
            },
            {
                q: 'Can I see examples of a builder\'s previous work?',
                a: 'Yes! Each builder\'s profile includes a gallery of their completed projects. You can browse photos and project descriptions to get a sense of their work quality and style.'
            },
            {
                q: 'What if I have a dispute with a builder?',
                a: 'While Yobuildplus facilitates connections between clients and contractors, any agreements are directly between you and the contractor. We recommend documenting all agreements in writing. If you have concerns, you can report them to us and leave an honest review.'
            },
        ]
    },
    {
        category: 'For Builders',
        questions: [
            {
                q: 'How do I list my business on Yobuildplus?',
                a: 'Click "List Your Business" and complete the registration form with your business details, services, coverage areas, and portfolio. Our team will review your application and you\'ll be notified once approved.'
            },
            {
                q: 'What does it cost to be listed?',
                a: 'We offer both free and premium listing options. Free listings include basic profile features. Premium plans offer additional visibility, priority placement, and marketing tools. Contact us for pricing details.'
            },
            {
                q: 'How do I respond to quote requests?',
                a: 'Quote requests will appear in your dashboard. You can review the project details and respond with your quote, including pricing, timeline, and any questions for the client.'
            },
        ]
    },
    {
        category: 'Account & Security',
        questions: [
            {
                q: 'How do I reset my password?',
                a: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a link to reset your password. If you don\'t receive the email, check your spam folder or contact support.'
            },
            {
                q: 'How is my personal information protected?',
                a: 'We use industry-standard encryption and security measures to protect your data. Your personal information is never sold. See our Privacy Policy for full details on how we handle your data.'
            },
            {
                q: 'Can I delete my account?',
                a: 'Yes, you can request account deletion by contacting support. We\'ll process your request and remove your personal data in accordance with POPIA regulations.'
            },
        ]
    },
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const filteredFaqs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(
            q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Find answers to common questions about using Yobuildplus
                    </p>

                    {/* Search */}
                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                            type="search"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 bg-white text-slate-900 border-0 rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* FAQ Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto space-y-8">
                    {filteredFaqs.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">{category.category}</h2>
                            <div className="space-y-3">
                                {category.questions.map((faq, qIndex) => {
                                    const id = `${catIndex}-${qIndex}`;
                                    const isOpen = openItems.includes(id);

                                    return (
                                        <div
                                            key={qIndex}
                                            className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleItem(id)}
                                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                                            >
                                                <span className="font-medium text-slate-800">{faq.q}</span>
                                                <ChevronDown className={cn(
                                                    "h-5 w-5 text-slate-400 transition-transform",
                                                    isOpen && "rotate-180"
                                                )} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-12">
                            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                            <p className="text-slate-500">No questions found matching your search.</p>
                        </div>
                    )}
                </div>

                {/* Still Need Help */}
                <div className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Still Have Questions?</h2>
                    <p className="text-slate-600 text-center mb-6">Our support team is here to help</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a href="/contact" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                            <MessageSquare className="h-6 w-6 text-[#0EA5E9]" />
                            <div>
                                <p className="font-medium text-slate-800">Live Chat</p>
                                <p className="text-sm text-slate-500">Chat with us</p>
                            </div>
                        </a>
                        <a href="mailto:support@yobuildplus.co.za" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                            <Mail className="h-6 w-6 text-[#0EA5E9]" />
                            <div>
                                <p className="font-medium text-slate-800">Email</p>
                                <p className="text-sm text-slate-500">support@yobuildplus.co.za</p>
                            </div>
                        </a>
                        <a href="tel:+27123456789" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                            <Phone className="h-6 w-6 text-[#0EA5E9]" />
                            <div>
                                <p className="font-medium text-slate-800">Phone</p>
                                <p className="text-sm text-slate-500">+27 12 345 6789</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
