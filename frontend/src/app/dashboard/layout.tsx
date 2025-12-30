import Link from 'next/link';
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
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed inset-y-0">
                <div className="p-6">
                    <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
                        <div className="bg-[#0EA5E9] h-8 w-8 rounded flex items-center justify-center">Y+</div>
                        <span>Contractor</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 py-4">
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

                <div className="p-4 border-t border-slate-800">
                    <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800">
                        <LogOut className="h-5 w-5 mr-3" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 z-50 px-4 py-3 flex items-center justify-between">
                <Link href="/dashboard" className="font-bold text-white text-lg">Y+ Contractor</Link>
                <Button size="icon" variant="ghost" className="text-white">
                    <Menu className="h-6 w-6" />
                </Button>
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8">
                {children}
            </main>
        </div>
    );
}
