'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await signIn('credentials', {
                email: credentials.email,
                password: credentials.password,
                redirect: false,
            });

            if (result?.error) {
                alert("Invalid credentials. Try admin@yobuild.co.za / Jabu2580$");
            } else {
                router.push('/dashboard');
                router.refresh();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0EA5E9] text-white font-bold text-xl">
                            Y+
                        </div>
                    </Link>
                    <h2 className="text-3xl font-bold text-slate-900">Welcome back</h2>
                    <p className="mt-2 text-slate-600">
                        Sign in to your account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="admin@yobuild.co.za"
                                className="bg-slate-50"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="/forgot-password" className="text-sm font-medium text-[#0EA5E9] hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                className="bg-slate-50"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>
                    </div>

                    <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] h-11 text-lg" disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="bg-blue-50 p-4 rounded text-xs text-blue-800">
                        <p className="font-bold mb-1">Demo Credentials:</p>
                        <p>Admin: admin@yobuild.co.za / Jabu2580$</p>
                        <p>Builder: builder@yobuild.co.za / Jabu2580$</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
