import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Yobuildplus',
    description: 'Learn how Yobuildplus collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
                    <p className="text-slate-500 mb-8">Last updated: December 2024</p>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Yobuildplus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
                            <h3 className="text-lg font-semibold text-slate-700 mb-2">Personal Information</h3>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                                <li>Name, email address, and phone number</li>
                                <li>Business information for service providers</li>
                                <li>Location data for service matching</li>
                                <li>Payment information for premium services</li>
                            </ul>
                            <h3 className="text-lg font-semibold text-slate-700 mb-2">Automatically Collected Information</h3>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Device and browser information</li>
                                <li>IP address and location data</li>
                                <li>Usage patterns and preferences</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>To provide and maintain our services</li>
                                <li>To connect clients with verified contractors</li>
                                <li>To process quote requests and communications</li>
                                <li>To send notifications and updates</li>
                                <li>To improve our platform and user experience</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Information Sharing</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Service providers you request quotes from</li>
                                <li>Third-party service providers who assist our operations</li>
                                <li>Legal authorities when required by law</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Under the Protection of Personal Information Act (POPIA), you have the right to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Contact Us</h2>
                            <p className="text-slate-600 leading-relaxed">
                                If you have questions about this Privacy Policy or your personal data, please contact us at:{' '}
                                <a href="mailto:privacy@yobuildplus.co.za" className="text-[#0EA5E9] hover:underline">
                                    privacy@yobuildplus.co.za
                                </a>
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/" className="text-[#0EA5E9] hover:underline font-medium">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
