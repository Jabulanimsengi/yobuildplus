import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, Trophy, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us | Yobuildplus',
    description: 'Learn about our mission to connect South Africans with trusted builders and contractors.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Building Trust in <span className="text-[#0EA5E9]">Construction</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Yobuildplus is South Africa's premier marketplace for finding, vetting, and hiring trusted construction professionals.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] font-medium text-sm mb-6">
                                <Target className="h-4 w-4" />
                                <span>Our Mission</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">
                                Simplifying Home Improvement
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                We believe that finding a reliable builder shouldn't be a gamble. Our mission is to bring transparency, accountability, and quality to the construction industry by connecting homeowners with verified professionals.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Founded in 2024, we've helped thousands of South Africans transform their homes and businesses with confidence.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Verified Professionals Only',
                                    'Transparent Reviews & Ratings',
                                    'Secure Project Management',
                                    'Customer Satisfaction Guarantee'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#0EA5E9]" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            {/* Placeholder for About Image - In a real app, use a real image */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                <Users className="h-16 w-16 text-slate-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Verified Builders', value: '500+', icon: Users },
                            { label: 'Projects Completed', value: '2,500+', icon: Trophy },
                            { label: 'Happy Clients', value: '98%', icon: Target },
                            { label: 'Provinces Covered', value: '9', icon: CheckCircle2 },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="h-8 w-8 text-[#0EA5E9] mx-auto mb-4" />
                                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                                <div className="text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12">Meet Our Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-800">Team Member {i}</h3>
                                <p className="text-[#0EA5E9] font-medium mb-4">Position</p>
                                <p className="text-slate-500 text-sm">Brief bio description about this team member and their role in the company.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        Join thousands of satisfied homeowners who found their perfect builder on Yobuildplus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-[#0EA5E9] hover:bg-slate-100 font-semibold h-12 px-8">
                            <Link href="/builders">Find a Builder</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold h-12 px-8">
                            <Link href="/get-listed">Join as a Pro</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
