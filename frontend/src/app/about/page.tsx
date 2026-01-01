import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, Trophy, Target, Shield, Zap, Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | Yobuildplus',
    description: 'Learn about our mission to connect South Africans with trusted builders and contractors. Discover why thousands trust us for their construction needs.',
};

const teamMembers = [
    {
        name: 'Jabu Msengi',
        role: 'Founder & CEO',
        bio: 'With 15+ years in construction, Jabu founded Yobuildplus to bridge the gap between quality contractors and clients.',
        initials: 'JM',
        color: 'from-[#0EA5E9] to-[#0284C7]',
    },
    {
        name: 'Sarah Ndlovu',
        role: 'Head of Operations',
        bio: 'Sarah ensures every builder on our platform meets our quality standards and delivers exceptional service.',
        initials: 'SN',
        color: 'from-[#F97316] to-[#EA580C]',
    },
    {
        name: 'Thabo Mokoena',
        role: 'Technology Lead',
        bio: 'Thabo leads our tech team, building the tools that make finding and working with builders seamless.',
        initials: 'TM',
        color: 'from-[#0D9488] to-[#0F766E]',
    },
];

const values = [
    {
        icon: Shield,
        title: 'Trust & Transparency',
        description: 'Every builder is verified. Every review is real. We believe in complete transparency.',
    },
    {
        icon: Zap,
        title: 'Speed & Efficiency',
        description: 'Get quotes fast, compare options easily, and start your project without delays.',
    },
    {
        icon: Award,
        title: 'Quality First',
        description: 'We only work with builders who meet our high standards of workmanship.',
    },
    {
        icon: Heart,
        title: 'Customer Focus',
        description: 'Your satisfaction is our priority. We support you from first quote to final inspection.',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-8">
                <div className="py-20 bg-slate-900 rounded-2xl">
                    <div className="px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
                            <span>🏗️</span>
                            <span>Established 2024</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Building Trust in <span className="text-[#0EA5E9]">Construction</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Yobuildplus is South Africa's premier marketplace for finding, vetting, and hiring trusted construction professionals.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#0EA5E9] hover:bg-[#0284C7] h-12 px-8 rounded-xl">
                                <Link href="/contractors">Find a Contractor</Link>
                            </Button>
                            <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white h-12 px-8 rounded-xl">
                                <Link href="/get-listed">Join as a Pro</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] font-semibold text-sm mb-6">
                                <Target className="h-4 w-4" />
                                <span>Our Mission</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                Simplifying Home Improvement Across South Africa
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                We believe that finding a reliable contractor shouldn't be a gamble. Our mission is to bring transparency, accountability, and quality to the service industry by connecting clients with verified professionals.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                Founded in 2024, we've already helped thousands of South Africans transform their homes and businesses with confidence, knowing they're working with vetted, reviewed, and trusted builders.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    'Verified Professionals Only',
                                    'Transparent Reviews',
                                    'Secure Quote Requests',
                                    'Quality Guarantee',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                                            <CheckCircle2 className="h-4 w-4 text-[#0EA5E9]" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#0EA5E9]/10 to-[#F97316]/10 border-2 border-slate-100 shadow-xl">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <img
                                            src="/yobuild+.png"
                                            alt="Yobuildplus"
                                            className="h-32 w-auto mx-auto mb-4"
                                        />
                                        <p className="text-slate-600 font-medium italic">we build it. we fix it</p>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                                <div className="text-2xl font-bold text-[#0EA5E9]">500+</div>
                                <div className="text-sm text-slate-500">Verified Builders</div>
                            </div>
                            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                                <div className="text-2xl font-bold text-[#F97316]">98%</div>
                                <div className="text-sm text-slate-500">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            These principles guide everything we do at Yobuildplus
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow group">
                                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon className="h-7 w-7 text-[#0EA5E9]" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{value.title}</h3>
                                <p className="text-slate-500 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-8">
                <div className="py-16 bg-slate-900 text-white rounded-2xl">
                    <div className="px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: 'Verified Builders', value: '500+', icon: Users },
                                { label: 'Projects Completed', value: '2,500+', icon: Trophy },
                                { label: 'Happy Clients', value: '98%', icon: Target },
                                { label: 'Provinces Covered', value: '9', icon: CheckCircle2 },
                            ].map((stat, index) => (
                                <div key={index}>
                                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-[#0EA5E9]" />
                                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-slate-300 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Our Leadership</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            The passionate team behind Yobuildplus, dedicated to transforming how South Africans find contractors.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group">
                                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform`}>
                                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                                <p className="text-[#0EA5E9] font-medium mb-3">{member.role}</p>
                                <p className="text-slate-500 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Join thousands of satisfied clients who found their perfect contractor on Yobuildplus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-[#0EA5E9] hover:bg-[#0284C7] font-semibold h-14 px-10 rounded-xl shadow-lg">
                            <Link href="/contractors">Find a Contractor</Link>
                        </Button>
                        <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#EA580C] font-semibold h-14 px-10 rounded-xl shadow-lg">
                            <Link href="/get-listed">Join as a Pro</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
