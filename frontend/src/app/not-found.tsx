import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Construction, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full">
                <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0EA5E9]">
                    <Construction className="h-10 w-10" />
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-2">Page Not Found</h1>
                <p className="text-xl text-slate-500 font-medium mb-6">404 Error</p>

                <p className="text-slate-600 mb-8 leading-relaxed">
                    Oops! The page you're looking for seems to have been moved or deleted.
                    Let's help you get back on track.
                </p>

                <div className="space-y-3">
                    <Button asChild className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] h-12 text-lg">
                        <Link href="/">
                            <Home className="mr-2 h-5 w-5" />
                            Return Home
                        </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 h-12 text-lg">
                        <Link href="/contractors">
                            <Search className="mr-2 h-5 w-5" />
                            Find Contractors
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
