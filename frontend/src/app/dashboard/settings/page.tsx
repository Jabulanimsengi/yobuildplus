import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch'; // Assuming you have a Switch component, if not I'll use a checkbox logic or similar. actually let's standard checkbox for now to be safe.

export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <h1 className="text-3xl font-bold text-slate-900">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900">Email Notifications</p>
                            <p className="text-sm text-slate-500">Receive emails about new leads</p>
                        </div>
                        <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900">Marketing Updates</p>
                            <p className="text-sm text-slate-500">Receive news and special offers</p>
                        </div>
                        <input type="checkbox" className="toggle" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                        <Input type="password" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                        <Input type="password" />
                    </div>
                    <Button variant="secondary">Update Password</Button>
                </CardContent>
            </Card>
        </div>
    );
}
