import Link from 'next/link';
import {
    LayoutDashboard,
    CheckSquare,
    Users,
    Settings,
    Menu,
    Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignOutButton } from '@/components/auth/SignOutButton';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed inset-y-0 border-r border-slate-800">
                <div className="p-6">
                    <Link href="/admin" className="flex items-center gap-2 font-bold text-xl text-white">
                        <div className="bg-red-600 h-8 w-8 rounded flex items-center justify-center">
                            <Shield className="h-5 w-5 text-white" />
                        </div>
                        <span>Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 py-4">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg text-slate-100 font-medium transition-colors">
                        <LayoutDashboard className="h-5 w-5" />
                        Overview
                    </Link>
                    <Link href="/admin/approvals" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <CheckSquare className="h-5 w-5" />
                        Approvals
                        <span className="ml-auto bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Users className="h-5 w-5" />
                        User Management
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <SignOutButton className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800" />
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 z-50 px-4 py-3 flex items-center justify-between">
                <Link href="/admin" className="flex items-center gap-2 font-bold text-white text-lg">
                    <Shield className="h-5 w-5 text-red-600" />
                    Admin Portal
                </Link>
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
