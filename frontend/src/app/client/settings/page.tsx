'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, User, Mail, Phone, Bell, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ClientSettingsPage() {
    const { data: session } = useSession();
    const { toast } = useToast();
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const [profile, setProfile] = useState({
        name: session?.user?.name || '',
        email: session?.user?.email || '',
        phone: '',
    });

    const [notifications, setNotifications] = useState({
        emailQuoteUpdates: true,
        emailNewMessages: true,
        emailMarketing: false,
    });

    const handleSave = async () => {
        setIsSaving(true);
        // Simulate save
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
        setSaveSuccess(true);
        toast({ title: 'Settings saved successfully!' });
        setTimeout(() => setSaveSuccess(false), 3000);
    };

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
                <p className="text-slate-500">Manage your account preferences and notifications.</p>
            </div>

            {/* Profile Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-[#0EA5E9]" />
                        Profile Information
                    </CardTitle>
                    <CardDescription>Update your personal details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input
                                    id="name"
                                    value={profile.name}
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input
                                    id="phone"
                                    value={profile.phone}
                                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                    className="pl-10"
                                    placeholder="e.g. 083 123 4567"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                                id="email"
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                className="pl-10"
                                disabled
                            />
                        </div>
                        <p className="text-xs text-slate-500">Email cannot be changed.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-[#0EA5E9]" />
                        Notification Preferences
                    </CardTitle>
                    <CardDescription>Choose what updates you want to receive.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                        <div>
                            <p className="font-medium text-slate-900">Quote Updates</p>
                            <p className="text-sm text-slate-500">Get notified when contractors respond to your quotes.</p>
                        </div>
                        <Checkbox
                            checked={notifications.emailQuoteUpdates}
                            onCheckedChange={(checked) =>
                                setNotifications({ ...notifications, emailQuoteUpdates: checked === true })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                        <div>
                            <p className="font-medium text-slate-900">New Messages</p>
                            <p className="text-sm text-slate-500">Receive email when a contractor sends you a message.</p>
                        </div>
                        <Checkbox
                            checked={notifications.emailNewMessages}
                            onCheckedChange={(checked) =>
                                setNotifications({ ...notifications, emailNewMessages: checked === true })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <p className="font-medium text-slate-900">Marketing & Tips</p>
                            <p className="text-sm text-slate-500">Occasional tips and promotions from Yobuildplus.</p>
                        </div>
                        <Checkbox
                            checked={notifications.emailMarketing}
                            onCheckedChange={(checked) =>
                                setNotifications({ ...notifications, emailMarketing: checked === true })
                            }
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex items-center gap-4">
                <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white"
                >
                    {isSaving ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        'Save Changes'
                    )}
                </Button>
                {saveSuccess && (
                    <span className="flex items-center text-green-600 text-sm">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Saved!
                    </span>
                )}
            </div>
        </div>
    );
}
