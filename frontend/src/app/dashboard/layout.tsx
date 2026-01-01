import Link from 'next/link';
import Image from 'next/image';
import {
    LayoutDashboard,
    MessageSquare,
    User,
    Settings,
    LogOut,
    Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen bg-slate-50 flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed inset-y-0 z-40">
                {/* Sidebar Header - Fixed */}
                <div className="p-6 border-b border-slate-800">
                    <Link href="/dashboard" className="flex items-center gap-3">
                        <Image
                            src="/yobuild+.png"
                            alt="Yobuildplus"
                            width={40}
                            height={40}
                            className="rounded"
                        />
                        <div>
                            <span className="font-bold text-lg">Yobuild+</span>
                            <p className="text-xs text-slate-400">Contractor Portal</p>
                        </div>
                    </Link>
                </div>

                {/* Navigation - Scrollable if needed */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#0EA5E9] rounded-lg text-white font-medium">
                        <LayoutDashboard className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link href="/dashboard/leads" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <MessageSquare className="h-5 w-5" />
                        Leads & Requests
                    </Link>
                    <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <User className="h-5 w-5" />
                        My Profile
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>

                {/* Sidebar Footer - Fixed */}
                <div className="p-4 border-t border-slate-800">
                    <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800">
                        <LogOut className="h-5 w-5 mr-3" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 z-50 px-4 py-3 flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <Image
                        src="/yobuild+.png"
                        alt="Yobuildplus"
                        width={32}
                        height={32}
                        className="rounded"
                    />
                    <span className="font-bold text-white">Contractor Portal</span>
                </Link>
                <Button size="icon" variant="ghost" className="text-white">
                    <Menu className="h-6 w-6" />
                </Button>
            </div>

            {/* Main Content - Scrollable with opaque background */}
            <main className="flex-1 md:ml-64 overflow-y-auto bg-slate-50 relative z-10">
                <div className="p-4 md:p-8 pt-20 md:pt-8 min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
}
