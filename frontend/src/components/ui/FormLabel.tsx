'use client';

import { cn } from '@/lib/utils';

interface FormLabelProps {
    children: React.ReactNode;
    required?: boolean;
    optional?: boolean;
    htmlFor?: string;
    className?: string;
}

export function FormLabel({
    children,
    required = false,
    optional = false,
    htmlFor,
    className
}: FormLabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={cn("block text-sm font-medium text-slate-700 mb-1", className)}
        >
            {children}
            {required && (
                <span className="text-red-500 ml-0.5" title="Required field">*</span>
            )}
            {optional && (
                <span className="text-slate-400 text-xs ml-1.5 font-normal">(Optional)</span>
            )}
        </label>
    );
}

// Error message component for form fields
interface FormErrorProps {
    message?: string;
    className?: string;
}

export function FormError({ message, className }: FormErrorProps) {
    if (!message) return null;

    return (
        <p className={cn("text-sm text-red-500 mt-1 flex items-center gap-1", className)}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {message}
        </p>
    );
}
