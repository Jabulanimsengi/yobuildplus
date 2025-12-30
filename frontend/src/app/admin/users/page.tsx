'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Search,
    MoreHorizontal,
    LogIn,
    Shield,
    UserX,
    Filter
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function UserManagementPage() {
    const [users, setUsers] = useState([
        { id: '1', name: 'John Builder', company: 'BuildRite Construction', email: 'john@buildrite.co.za', risk: 'low', role: 'contractor', status: 'active', joined: 'Oct 24, 2024' },
        { id: '2', name: 'Sarah Connor', company: '-', email: 'sarah@gmail.com', risk: 'low', role: 'customer', status: 'active', joined: 'Oct 23, 2024' },
        { id: '3', name: 'Mike Plumber', company: 'Mike\'s Plumbing', email: 'mike@plumb.co.za', risk: 'medium', role: 'contractor', status: 'pending', joined: 'Oct 22, 2024' },
        { id: '4', name: 'Spam User', company: 'Cheap Loans', email: 'spam@loans.com', risk: 'high', role: 'customer', status: 'suspended', joined: 'Oct 21, 2024' },
    ]);

    const handleImpersonate = (userId: string) => {
        // Logic to set auth cookie as this user and redirect
        console.log(`Impersonating user ${userId}`);
        window.open('/dashboard', '_blank'); // Open their dashboard in new tab
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">User Management</h1>
                    <p className="text-slate-500">Manage all registered users and service providers.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </Button>
                    <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white">
                        Export Users
                    </Button>
                </div>
            </div>

            {/* Search and Filters */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search users by name, email, or company..." className="pl-10" />
                        </div>
                        <select className="px-3 py-2 rounded-md border border-input bg-background text-sm">
                            <option>All Roles</option>
                            <option>Contractors</option>
                            <option>Customers</option>
                            <option>Admins</option>
                        </select>
                        <select className="px-3 py-2 rounded-md border border-input bg-background text-sm">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Pending</option>
                            <option>Suspended</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
                <CardContent className="p-0">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3">User</th>
                                <th className="px-6 py-3">Role</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Risk</th>
                                <th className="px-6 py-3">Joined</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.map((user) => (
                                <tr key={user.id} className="bg-white hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-slate-900">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                                {user.company !== '-' && <div className="text-xs text-[#0EA5E9]">{user.company}</div>}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant="outline" className="capitalize">
                                            {user.role}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-800' :
                                                user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`capitalize font-medium ${user.risk === 'high' ? 'text-red-600' :
                                                user.risk === 'medium' ? 'text-yellow-600' :
                                                    'text-green-600'
                                            }`}>
                                            {user.risk}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">
                                        {user.joined}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => handleImpersonate(user.id)}>
                                                    <LogIn className="h-4 w-4 mr-2" />
                                                    Log in as User
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Shield className="h-4 w-4 mr-2" />
                                                    View Audit Log
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600">
                                                    <UserX className="h-4 w-4 mr-2" />
                                                    Suspend User
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
