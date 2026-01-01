import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | Yobuildplus',
    description: 'Read the terms and conditions for using the Yobuildplus platform.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
                    <p className="text-slate-500 mb-8">Last updated: December 2024</p>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                By accessing or using Yobuildplus, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Description of Service</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Yobuildplus is an online marketplace that connects clients with verified contractors and service providers. We facilitate the connection but are not a party to any agreements between users and service providers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. User Accounts</h2>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>You must provide accurate and complete registration information</li>
                                <li>You are responsible for maintaining the confidentiality of your account</li>
                                <li>You must be at least 18 years old to use our services</li>
                                <li>One person may not maintain multiple accounts</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Service Provider Terms</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Service providers listed on Yobuildplus agree to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Provide accurate business information</li>
                                <li>Maintain valid licenses and insurance where required</li>
                                <li>Respond to quote requests in a timely manner</li>
                                <li>Deliver services as agreed with customers</li>
                                <li>Comply with all applicable laws and regulations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. User Conduct</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">You agree not to:</p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Use the platform for any unlawful purpose</li>
                                <li>Submit false or misleading information</li>
                                <li>Harass, abuse, or harm other users</li>
                                <li>Attempt to circumvent our platform's security</li>
                                <li>Use our platform to spam or send unsolicited messages</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Reviews and Ratings</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Reviews must be honest and based on actual experiences. We reserve the right to remove reviews that violate our guidelines, contain inappropriate content, or appear to be fraudulent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Limitation of Liability</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Yobuildplus acts as a platform connecting users with service providers. We do not guarantee the quality of work performed by any service provider. We are not liable for any damages arising from disputes between users and service providers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Termination</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to suspend or terminate accounts that violate these terms or for any other reason at our discretion. Users may also close their accounts at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Changes to Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Contact</h2>
                            <p className="text-slate-600 leading-relaxed">
                                For questions about these Terms, please contact us at:{' '}
                                <a href="mailto:legal@yobuildplus.co.za" className="text-[#0EA5E9] hover:underline">
                                    legal@yobuildplus.co.za
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
