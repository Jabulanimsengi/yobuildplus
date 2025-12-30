import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, TrendingUp, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'List Your Business | Yobuildplus',
    description: 'Join South Africa\'s fastest growing construction marketplace. Get more leads and grow your business today.',
};

export default function GetListedPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                </div>
                <div className="container relative mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 text-[#F97316] font-medium text-sm border border-[#F97316]/30">
                                <TrendingUp className="h-4 w-4" />
                                <span>Grow Your Business</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Get More Qualified Leads with <span className="text-[#0EA5E9]">Yobuildplus</span>
                            </h1>
                            <p className="text-lg text-slate-300 max-w-xl">
                                Join thousands of top-rated builders and contractors winning better jobs. Showcase your work, build your reputation, and grow your revenue.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    'No commission fees on jobs',
                                    'Direct client communication',
                                    'SEO-optimized business profile',
                                    'Verified badge for trusted pros'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Registration Form Card */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-200 lg:max-w-md ml-auto w-full">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-slate-900">Create Your Profile</h2>
                                <p className="text-slate-600">Start getting leads in minutes.</p>
                            </div>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" className="bg-slate-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" className="bg-slate-50" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="businessName">Business Name</Label>
                                    <Input id="businessName" placeholder="JD Construction" className="bg-slate-50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" placeholder="082 123 4567" className="bg-slate-50" />
                                </div>

                                <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] h-12 text-lg font-semibold mt-2">
                                    Get Started Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <p className="text-xs text-slate-500 text-center mt-4">
                                    By joining, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Professionals Choose Yobuildplus</h2>
                        <p className="text-slate-600">We provide the tools and visibility you need to take your construction business to the next level.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'High-Quality Leads',
                                description: 'Stop chasing tire kickers. Our platform attracts serious homeowners ready to hire for their projects.',
                                icon: (wrapper: React.ReactNode) => <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">{wrapper}</div>,
                                iconComp: <TrendingUp className="h-7 w-7" />
                            },
                            {
                                title: 'Build Trust Online',
                                description: 'Showcase your portfolio, collect 5-star reviews, and get a Verified Badge to stand out from the competition.',
                                icon: (wrapper: React.ReactNode) => <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4">{wrapper}</div>,
                                iconComp: <ShieldCheck className="h-7 w-7" />
                            },
                            {
                                title: 'Dedicated Support',
                                description: 'Our team is here to help you optimize your profile and succeed. We succeed when you succeed.',
                                icon: (wrapper: React.ReactNode) => <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">{wrapper}</div>,
                                iconComp: <Users className="h-7 w-7" />
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#0EA5E9]/30 transition-colors">
                                {benefit.icon(benefit.iconComp)}
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Teaser */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Start for free with our Basic plan, or upgrade to Pro for unlimited leads and premium features.
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 w-full max-w-sm">
                            <h3 className="text-xl font-bold mb-2">Basic</h3>
                            <p className="text-3xl font-bold mb-4">Free</p>
                            <ul className="text-left space-y-2 mb-6 text-slate-400">
                                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" /> 1 Active Listing</li>
                                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" /> Receive 5 Leads/mo</li>
                            </ul>
                            <Button variant="outline" className="w-full text-white bg-transparent border-slate-600">Current Plan</Button>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] border border-blue-400 w-full max-w-sm relative transform scale-105 shadow-2xl">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
                            <h3 className="text-xl font-bold mb-2">Pro Partner</h3>
                            <p className="text-3xl font-bold mb-4">R499<span className="text-lg font-normal text-blue-100">/mo</span></p>
                            <ul className="text-left space-y-2 mb-6 text-blue-50">
                                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white" /> Unlimited Listings</li>
                                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white" /> Unlimited Leads</li>
                                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white" /> Verified Badge</li>
                            </ul>
                            <Button className="w-full bg-white text-[#0EA5E9] hover:bg-white/90">Upgrade Now</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
