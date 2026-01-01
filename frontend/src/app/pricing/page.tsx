'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Shield, Lock, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const plans = [
    {
        name: 'Free',
        price: 'R0',
        period: '/month',
        description: 'Pay only when you earn',
        commission: '25%',
        commissionNote: 'commission on projects',
        features: [
            'List your business',
            'Receive quote requests',
            'Basic profile',
            'Customer reviews',
        ],
        cta: 'Get Started Free',
        popular: false,
    },
    {
        name: 'Pro',
        price: 'R299',
        period: '/month',
        description: 'Keep 100% of earnings',
        commission: '0%',
        commissionNote: 'no commission fees',
        features: [
            'Everything in Free',
            'Priority listing',
            'Pro badge',
            'Analytics dashboard',
            'Priority support',
        ],
        cta: 'Start Pro Trial',
        popular: true,
    },
];

const faqs = [
    {
        q: 'When does the contractor get paid?',
        a: 'Contractors receive payment once you confirm the project is complete. For larger projects, we can arrange milestone payments as work progresses.',
    },
    {
        q: "What if there's a dispute?",
        a: 'Our team mediates all disputes. Funds remain in escrow until both parties reach an agreement or we make a fair decision.',
    },
    {
        q: 'Is my payment secure?',
        a: 'Absolutely. All payments are processed through secure banking channels and held in a dedicated trust account.',
    },
    {
        q: 'Can I cancel and get a refund?',
        a: "If work hasn't started, you can cancel for a full refund. Once work begins, refunds are handled on a case-by-case basis.",
    },
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-8">
                <div className="bg-slate-900 text-white py-12 px-6 md:px-8 rounded-2xl">
                    <div className="text-center">
                        <Badge className="bg-white/20 text-white border-0 mb-3">
                            For Service Providers
                        </Badge>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-lg text-slate-300 max-w-xl mx-auto">
                            Start free and upgrade when ready. No hidden fees.
                        </p>
                    </div>
                </div>
            </div>

            {/* Pricing Cards - Compact */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
                                plan.popular
                                    ? 'border-2 border-[#0EA5E9] ring-4 ring-[#0EA5E9]/10'
                                    : 'border border-slate-200'
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0">
                                    <Badge className="bg-[#F97316] text-white border-0 rounded-none rounded-bl-lg px-3 py-1 text-xs">
                                        Popular
                                    </Badge>
                                </div>
                            )}
                            <div className="p-5">
                                <div className="text-center mb-4">
                                    <h3 className="text-lg font-bold text-slate-800">{plan.name}</h3>
                                    <div className="mt-1">
                                        <span className="text-3xl font-bold text-slate-800">{plan.price}</span>
                                        <span className="text-slate-500 text-sm">{plan.period}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">{plan.description}</p>
                                </div>

                                {/* Commission Badge */}
                                <div className="text-center p-3 rounded-lg bg-slate-50 mb-4">
                                    <span className="text-2xl font-bold text-[#0EA5E9]">{plan.commission}</span>
                                    <span className="text-xs text-slate-500 block">{plan.commissionNote}</span>
                                </div>

                                <ul className="space-y-2 mb-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                                            <span className="text-slate-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    className={cn(
                                        "w-full",
                                        plan.popular
                                            ? 'bg-[#0EA5E9] hover:bg-[#0284C7]'
                                            : 'bg-slate-800 hover:bg-slate-700'
                                    )}
                                >
                                    <Link href="/register">
                                        {plan.cta}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment Protection Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <Badge className="bg-emerald-100 text-emerald-700 border-0 mb-3">
                            Client Protection
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                            Your Money is Protected
                        </h2>
                        <p className="text-slate-600 max-w-xl mx-auto">
                            We hold payments securely until the job is done right.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {[
                            { icon: Shield, color: 'emerald', title: 'Secure Escrow', desc: 'Pay to Yobuildplus, funds held safely' },
                            { icon: Lock, color: 'blue', title: 'Scam Protection', desc: 'Pay only for completed work' },
                            { icon: Clock, color: 'orange', title: 'Milestone Payments', desc: 'Release funds as work progresses' },
                        ].map((item) => (
                            <div key={item.title} className="bg-white p-5 rounded-xl border border-slate-100 text-center">
                                <div className={`h-12 w-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mx-auto mb-3`}>
                                    <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* How It Works - Horizontal */}
                    <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">How It Works</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { step: '1', title: 'Accept Quote' },
                                { step: '2', title: 'Pay Securely' },
                                { step: '3', title: 'Work Begins' },
                                { step: '4', title: 'Release Payment' },
                            ].map((item) => (
                                <div key={item.step} className="text-center">
                                    <div className="h-10 w-10 rounded-full bg-[#0EA5E9] text-white font-bold flex items-center justify-center mx-auto mb-2">
                                        {item.step}
                                    </div>
                                    <p className="text-sm font-medium text-slate-700">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section - Collapsible */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                                    >
                                        <span className="font-medium text-slate-800">{faq.q}</span>
                                        <ChevronDown
                                            className={cn(
                                                "h-5 w-5 text-slate-400 transition-transform flex-shrink-0",
                                                openFaq === i && "rotate-180"
                                            )}
                                        />
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-5 pb-4 text-slate-600 text-sm">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-3">
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto text-sm">
                        Join contractors already getting quality leads on Yobuildplus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#EA580C]">
                            <Link href="/register">
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                            <Link href="/contact">Contact Sales</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
