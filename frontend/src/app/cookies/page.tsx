import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Cookie Policy | Yobuildplus',
    description: 'Learn about how Yobuildplus uses cookies and similar technologies.',
};

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
                    <p className="text-slate-500 mb-8">Last updated: December 2024</p>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">What Are Cookies?</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Types of Cookies We Use</h2>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-semibold text-slate-800 mb-2">Essential Cookies</h3>
                                    <p className="text-slate-600 text-sm">
                                        Required for the website to function properly. These cannot be disabled.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-semibold text-slate-800 mb-2">Analytics Cookies</h3>
                                    <p className="text-slate-600 text-sm">
                                        Help us understand how visitors interact with our website to improve user experience.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-semibold text-slate-800 mb-2">Functional Cookies</h3>
                                    <p className="text-slate-600 text-sm">
                                        Remember your preferences such as language, region, and display settings.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-semibold text-slate-800 mb-2">Marketing Cookies</h3>
                                    <p className="text-slate-600 text-sm">
                                        Used to deliver relevant advertisements and track campaign performance.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Managing Cookies</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You can control cookies through your browser settings. Most browsers allow you to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>View what cookies are stored on your device</li>
                                <li>Delete all or specific cookies</li>
                                <li>Block all or third-party cookies</li>
                                <li>Set preferences for certain websites</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                Note that disabling cookies may affect the functionality of our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Third-Party Cookies</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We use services from third parties that may set their own cookies, including Google Analytics, Facebook, and payment processors. These are governed by the respective third party's privacy policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Updates to This Policy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
                            <p className="text-slate-600 leading-relaxed">
                                If you have questions about our use of cookies, please contact us at:{' '}
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
