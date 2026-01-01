
'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Bell, X, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Notification {
    id: string;
    type: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
    quote?: { id: string };
}

export function NotificationBell() {
    const { data: session } = useSession();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const fetchNotifications = async () => {
        if (!session?.accessToken) return;

        try {
            const [notifRes, countRes] = await Promise.all([
                fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/notifications`, {
                    headers: { Authorization: `Bearer ${session.accessToken}` },
                }),
                fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/notifications/unread-count`, {
                    headers: { Authorization: `Bearer ${session.accessToken}` },
                }),
            ]);

            if (notifRes.ok) {
                const data = await notifRes.json();
                setNotifications(data.slice(0, 10)); // Show latest 10
            }
            if (countRes.ok) {
                const { count } = await countRes.json();
                setUnreadCount(count);
            }
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        }
    };

    useEffect(() => {
        if (session) {
            fetchNotifications();
            // Poll every 30 seconds
            const interval = setInterval(fetchNotifications, 30000);
            return () => clearInterval(interval);
        }
    }, [session]);

    const markAsRead = async (id: string) => {
        if (!session?.accessToken) return;

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/notifications/${id}/read`, {
                method: 'PATCH',
                headers: { Authorization: `Bearer ${session.accessToken}` },
            });
            setNotifications(notifications.map(n =>
                n.id === id ? { ...n, read: true } : n
            ));
            setUnreadCount(Math.max(0, unreadCount - 1));
        } catch (error) {
            console.error('Failed to mark as read:', error);
        }
    };

    const markAllAsRead = async () => {
        if (!session?.accessToken) return;

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/notifications/read-all`, {
                method: 'PATCH',
                headers: { Authorization: `Bearer ${session.accessToken}` },
            });
            setNotifications(notifications.map(n => ({ ...n, read: true })));
            setUnreadCount(0);
        } catch (error) {
            console.error('Failed to mark all as read:', error);
        }
    };

    const deleteNotification = async (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!session?.accessToken) return;

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/notifications/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${session.accessToken}` },
            });
            const notification = notifications.find(n => n.id === id);
            setNotifications(notifications.filter(n => n.id !== id));
            if (notification && !notification.read) {
                setUnreadCount(Math.max(0, unreadCount - 1));
            }
        } catch (error) {
            console.error('Failed to delete notification:', error);
        }
    };

    const clearAllNotifications = async () => {
        if (!session?.accessToken) return;

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/notifications`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${session.accessToken}` },
            });
            setNotifications([]);
            setUnreadCount(0);
        } catch (error) {
            console.error('Failed to clear notifications:', error);
        }
    };

    const getNotificationLink = (notification: Notification) => {
        if (notification.type === 'quote_request' || notification.type === 'quote_accepted' ||
            notification.type === 'quote_rejected' || notification.type === 'quote_considering') {
            return '/dashboard/leads';
        }
        if (notification.type === 'quote_response') {
            return notification.quote ? `/dashboard/my-quotes/${notification.quote.id}` : '/dashboard/my-quotes';
        }
        return '/dashboard';
    };

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${diffDays}d ago`;
    };

    if (!session) return null;

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                            {unreadCount > 9 ? '9+' : unreadCount}
                        </Badge>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 max-h-[70vh] overflow-hidden flex flex-col">
                <DropdownMenuLabel className="flex items-center justify-between py-3">
                    <span className="font-semibold">Notifications</span>
                    <div className="flex items-center gap-1">
                        {notifications.length > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs h-7 px-2 text-slate-500 hover:text-red-500"
                                onClick={clearAllNotifications}
                            >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Clear all
                            </Button>
                        )}
                        {unreadCount > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs h-7 px-2 text-[#0EA5E9]"
                                onClick={markAllAsRead}
                            >
                                Mark all read
                            </Button>
                        )}
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="overflow-y-auto flex-1 max-h-[50vh]">
                    {notifications.length === 0 ? (
                        <div className="p-6 text-center">
                            <Bell className="h-10 w-10 mx-auto mb-2 text-slate-200" />
                            <p className="text-sm text-slate-500">No notifications yet</p>
                        </div>
                    ) : (
                        notifications.map((notification) => (
                            <DropdownMenuItem key={notification.id} asChild className="p-0 focus:bg-transparent">
                                <div className="relative group">
                                    <Link
                                        href={getNotificationLink(notification)}
                                        className={cn(
                                            'flex flex-col gap-1 p-3 cursor-pointer transition-colors',
                                            !notification.read
                                                ? 'bg-blue-50 hover:bg-blue-100'
                                                : 'hover:bg-slate-50'
                                        )}
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        <div className="flex items-start justify-between gap-2 pr-6">
                                            <div className="flex items-start gap-2 flex-1">
                                                {!notification.read && (
                                                    <div className="h-2 w-2 rounded-full bg-[#0EA5E9] mt-1.5 flex-shrink-0" />
                                                )}
                                                <div className="flex-1">
                                                    <span className="font-medium text-sm text-slate-800">
                                                        {notification.title}
                                                    </span>
                                                    <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                                                        {notification.message}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-slate-400 flex-shrink-0">
                                                {formatTime(notification.createdAt)}
                                            </span>
                                        </div>
                                    </Link>
                                    {/* Delete button */}
                                    <button
                                        onClick={(e) => deleteNotification(notification.id, e)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-100 text-slate-400 hover:text-red-500 transition-all"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </DropdownMenuItem>
                        ))
                    )}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="py-3">
                    <Link href="/dashboard/notifications" className="w-full text-center text-sm text-[#0EA5E9] font-medium">
                        View all notifications
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
