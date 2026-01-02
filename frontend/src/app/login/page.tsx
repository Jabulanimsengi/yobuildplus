'use client';

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Loader2, AlertCircle, Eye, EyeOff, Mail, Lock, User, Briefcase, X, Check, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const LAST_SIGNIN_KEY = 'yobuildplus_last_signin_method';

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [lastSignInMethod, setLastSignInMethod] = useState<'google' | 'email' | null>(null);

    // Role selection state
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState<'client' | 'service_provider' | null>(null);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    // Load last sign-in method on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(LAST_SIGNIN_KEY);
            if (stored === 'google' || stored === 'email') {
                setLastSignInMethod(stored);
            }
        }
    }, []);

    const handleGoogleSignIn = () => {
        setShowRoleModal(true);
    };

    const confirmGoogleSignIn = async () => {
        if (!selectedRole) return;

        setIsGoogleLoading(true);
        // Store selected role in cookie accessible to server
        document.cookie = `pendingRole=${selectedRole}; path=/; max-age=3600`; // 1 hour expiration
        // Store last sign-in method
        localStorage.setItem(LAST_SIGNIN_KEY, 'google');

        // Role-based redirect
        const redirectUrl = selectedRole === 'client' ? '/client' : '/dashboard';
        await signIn('google', { callbackUrl: redirectUrl });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await signIn('credentials', {
                email: credentials.email,
                password: credentials.password,
                redirect: false,
            });

            if (result?.error) {
                setError('Invalid email or password. Please try again.');
            } else {
                // Store last sign-in method
                localStorage.setItem(LAST_SIGNIN_KEY, 'email');
                router.push(callbackUrl);
                router.refresh();
            }
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Side - Form */}
                <div className="w-full bg-white rounded-2xl shadow-xl p-5 sm:p-6 flex items-center justify-center">
                    <div className="w-full max-w-md space-y-4">
                        {/* Logo & Header */}
                        <div className="text-center">
                            <Link href="/" className="inline-block mb-4">
                                <img
                                    src="/yobuild+.png"
                                    alt="Yobuildplus"
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <h1 className="text-2xl font-bold text-slate-900 mb-1">Welcome back</h1>
                            <p className="text-sm text-slate-500">
                                Sign in to access your dashboard
                            </p>
                        </div>

                        {/* Error Alert */}
                        {error && (
                            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                <p className="text-sm">{error}</p>
                            </div>
                        )}

                        {/* Google Sign In Button */}
                        <div className="relative">
                            {lastSignInMethod === 'google' && (
                                <div className="absolute -top-2 right-2 bg-[#0EA5E9] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm z-10">
                                    <Clock className="h-3 w-3" />
                                    Last used
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className={cn(
                                    "w-full flex items-center justify-center gap-2 h-10 px-4 bg-white border rounded-lg text-sm font-medium text-slate-700 transition-all",
                                    lastSignInMethod === 'google'
                                        ? "border-[#0EA5E9] ring-2 ring-[#0EA5E9]/20"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                )}
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-slate-500">or continue with email</span>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-3">
                                {/* Email Field */}
                                <div className="space-y-1">
                                    <Label htmlFor="email" className="text-sm text-slate-700 font-medium">
                                        Email address
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className={cn(
                                                "pl-10 h-10 text-sm bg-slate-50 border-slate-200 rounded-lg focus:border-[#0EA5E9] focus:ring-[#0EA5E9]/20",
                                                error && "border-red-300 focus:border-red-400"
                                            )}
                                            value={credentials.email}
                                            onChange={(e) => {
                                                setCredentials({ ...credentials, email: e.target.value });
                                                setError(null);
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-sm text-slate-700 font-medium">
                                            Password
                                        </Label>
                                        <Link
                                            href="/forgot-password"
                                            className="text-xs font-medium text-[#0EA5E9] hover:text-[#0284C7] hover:underline"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            className={cn(
                                                "pl-10 pr-10 h-10 text-sm bg-slate-50 border-slate-200 rounded-lg focus:border-[#0EA5E9] focus:ring-[#0EA5E9]/20",
                                                error && "border-red-300 focus:border-red-400"
                                            )}
                                            value={credentials.password}
                                            onChange={(e) => {
                                                setCredentials({ ...credentials, password: e.target.value });
                                                setError(null);
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="remember"
                                    checked={rememberMe}
                                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                                />
                                <Label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">
                                    Remember me for 30 days
                                </Label>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-10 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm rounded-lg shadow-md transition-all"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>

                            {/* Register Link */}
                            <p className="text-center text-slate-600">
                                Don't have an account?{' '}
                                <Link href="/register" className="font-semibold text-[#0EA5E9] hover:text-[#0284C7] hover:underline">
                                    Create one
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Right Side - Decorative */}
                <div className="hidden lg:flex bg-slate-900 rounded-2xl shadow-xl p-8 lg:p-10 items-center justify-center">
                    <div className="text-center text-white max-w-lg">
                        <div className="mb-6">
                            <img
                                src="/yobuild+.png"
                                alt="Yobuildplus"
                                className="h-16 w-auto mx-auto brightness-0 invert mb-4"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">
                            Find Trusted Builders
                        </h2>
                        <p className="text-base text-slate-300 mb-6 leading-relaxed">
                            Connect with verified professionals across South Africa. Request quotes, manage projects, and build with confidence.
                        </p>
                        <div className="flex justify-center gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-xs text-slate-400">Verified Pros</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">2.5k+</div>
                                <div className="text-xs text-slate-400">Projects</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">98%</div>
                                <div className="text-xs text-slate-400">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Role Selection Modal */}
            {showRoleModal && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in slide-in-from-bottom sm:zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Choose your account type</h2>
                                <p className="text-sm text-slate-500 mt-1">Select how you want to use Yobuildplus</p>
                            </div>
                            <button
                                onClick={() => setShowRoleModal(false)}
                                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            {/* Consumer Option */}
                            <button
                                onClick={() => setSelectedRole('client')}
                                className={cn(
                                    "w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left group",
                                    selectedRole === 'client'
                                        ? "border-[#0EA5E9] bg-[#0EA5E9]/5"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                )}
                            >
                                <div className={cn(
                                    "h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                                    selectedRole === 'client' ? "bg-[#0EA5E9] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                                )}>
                                    <User className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className={cn("font-semibold", selectedRole === 'client' ? "text-[#0EA5E9]" : "text-slate-900")}>
                                            Homeowner
                                        </h3>
                                        {selectedRole === 'client' && <Check className="h-5 w-5 text-[#0EA5E9]" />}
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">
                                        I want to find contractors, request quotes, and manage my renovation projects.
                                    </p>
                                </div>
                            </button>

                            {/* Service Provider Option */}
                            <button
                                onClick={() => setSelectedRole('service_provider')}
                                className={cn(
                                    "w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left group",
                                    selectedRole === 'service_provider'
                                        ? "border-[#F97316] bg-[#F97316]/5"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                )}
                            >
                                <div className={cn(
                                    "h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                                    selectedRole === 'service_provider' ? "bg-[#F97316] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                                )}>
                                    <Briefcase className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className={cn("font-semibold", selectedRole === 'service_provider' ? "text-[#F97316]" : "text-slate-900")}>
                                            Service Provider
                                        </h3>
                                        {selectedRole === 'service_provider' && <Check className="h-5 w-5 text-[#F97316]" />}
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">
                                        I want to list my business, receive leads, and grow my client base.
                                    </p>
                                </div>
                            </button>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 pt-2 pb-8 sm:pb-6">
                            <Button
                                onClick={confirmGoogleSignIn}
                                disabled={!selectedRole || isGoogleLoading}
                                className={cn(
                                    "w-full h-12 text-base font-semibold rounded-xl text-white shadow-lg transition-all",
                                    selectedRole === 'service_provider'
                                        ? "bg-[#F97316] hover:bg-[#EA580C]"
                                        : selectedRole === 'client'
                                            ? "bg-[#0EA5E9] hover:bg-[#0284C7]"
                                            : "bg-slate-300 cursor-not-allowed"
                                )}
                            >
                                {isGoogleLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Redirecting to Google...
                                    </>
                                ) : (
                                    "Continue with Google"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
