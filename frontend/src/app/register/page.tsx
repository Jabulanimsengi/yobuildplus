import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Create Account | Yobuildplus',
    description: 'Join Yobuildplus to find trusted builders or list your construction business.',
};

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0EA5E9] text-white font-bold text-xl">
                            Y+
                        </div>
                    </Link>
                    <h2 className="text-3xl font-bold text-slate-900">Create account</h2>
                    <p className="mt-2 text-slate-600">
                        Join the construction marketplace
                    </p>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input id="firstName" required placeholder="John" className="bg-slate-50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input id="lastName" required placeholder="Doe" className="bg-slate-50" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input id="email" type="email" required placeholder="you@example.com" className="bg-slate-50" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required className="bg-slate-50" />
                            <p className="text-xs text-slate-500">Must be at least 8 characters long</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="role">I am a...</Label>
                            <select id="role" className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                <option value="homeowner">Homeowner looking for builders</option>
                                <option value="builder">Builder / Contractor</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] h-11 text-lg">
                            Create Account
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <p className="text-center text-sm text-slate-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-[#0EA5E9] hover:underline">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
