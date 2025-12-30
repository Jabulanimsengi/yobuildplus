import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { categories } from '@/data/categories';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-800 text-slate-200">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                                Y+
                            </div>
                            <span className="font-bold text-xl text-white">
                                Yobuild<span className="text-secondary">plus</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm mb-4">
                            Connecting South African homeowners with trusted builders and contractors since 2024.
                        </p>
                        <div className="flex flex-col gap-2 text-sm">
                            <a href="mailto:info@yobuildplus.co.za" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="h-4 w-4" />
                                info@yobuildplus.co.za
                            </a>
                            <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="h-4 w-4" />
                                +27 12 345 6789
                            </a>
                            <span className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                Johannesburg, South Africa
                            </span>
                        </div>
                    </div>

                    {/* Categories - First Half */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            {categories.slice(0, 4).map((category) => (
                                <li key={category.id}>
                                    <Link
                                        href={`/category/${category.slug}`}
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <span>{category.icon}</span>
                                        <span>{category.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories - Second Half */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">More Services</h3>
                        <ul className="space-y-2 text-sm">
                            {categories.slice(4).map((category) => (
                                <li key={category.id}>
                                    <Link
                                        href={`/category/${category.slug}`}
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <span>{category.icon}</span>
                                        <span>{category.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/builders" className="hover:text-white transition-colors">
                                    Find Builders
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-listed" className="hover:text-white transition-colors">
                                    List Your Business
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
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
                        </ul>

                        {/* Provinces */}
                        <h3 className="font-semibold text-white mt-6 mb-3">By Province</h3>
                        <ul className="flex flex-wrap gap-2 text-xs">
                            <li>
                                <Link href="/builders?province=Gauteng" className="hover:text-white transition-colors">
                                    Gauteng
                                </Link>
                            </li>
                            <li>•</li>
                            <li>
                                <Link href="/builders?province=Western+Cape" className="hover:text-white transition-colors">
                                    Western Cape
                                </Link>
                            </li>
                            <li>•</li>
                            <li>
                                <Link href="/builders?province=KwaZulu-Natal" className="hover:text-white transition-colors">
                                    KZN
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                        <p>© {currentYear} Yobuildplus. All rights reserved.</p>
                        <p>
                            Built with ❤️ in South Africa
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
