import Link from 'next/link';
import { categories } from '@/data/categories';
import { ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'All Services & Categories | Yobuildplus',
    description: 'Browse our complete list of construction, renovation, and home improvement services across South Africa.',
};

export default function ServicesIndexPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">All Services</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">
                        Explore our comprehensive directory of professionals. From emergency repairs to major renovations, find the right expert for every job.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl">{category.icon}</span>
                                    <h2 className="text-xl font-bold text-slate-900">
                                        <Link href={`/category/${category.slug}`} className="hover:text-[#0EA5E9] transition-colors">
                                            {category.name}
                                        </Link>
                                    </h2>
                                </div>
                                <p className="text-sm text-slate-500 pl-11">{category.description}</p>
                            </div>

                            <div className="p-6">
                                <ul className="space-y-3">
                                    {category.subcategories.map((sub) => (
                                        <li key={sub.id}>
                                            <Link
                                                href={`/category/${sub.slug}`}
                                                className="group flex items-center justify-between text-slate-600 hover:text-[#0EA5E9] transition-colors"
                                            >
                                                <span className="font-medium group-hover:translate-x-1 transition-transform">{sub.name}</span>
                                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
