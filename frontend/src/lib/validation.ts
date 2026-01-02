// Validation utilities for profile form

export interface ValidationErrors {
    name?: string;
    email?: string;
    phone?: string;
    description?: string;
    serviceAreas?: string;
    serviceAttributes?: string;
    website?: string;
    general?: string;
}

export interface ProfileData {
    name: string;
    email: string;
    phone: string;
    description: string;
    serviceAreas: string[];
    serviceAttributes: string[];
    website?: string;
}

// Validate profile form data
export function validateProfile(data: ProfileData): ValidationErrors {
    const errors: ValidationErrors = {};

    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Business name is required (minimum 2 characters)';
    }

    if (!data.email || !data.email.includes('@')) {
        errors.email = 'Please enter a valid email address';
    }

    if (!data.phone || data.phone.trim().length < 10) {
        errors.phone = 'Please enter a valid phone number (minimum 10 digits)';
    }

    if (!data.description || data.description.trim().length < 50) {
        errors.description = 'Please provide a description (minimum 50 characters)';
    }

    if (!data.serviceAreas || data.serviceAreas.length === 0) {
        errors.serviceAreas = 'Please add at least one service area';
    }

    if (!data.serviceAttributes || data.serviceAttributes.length === 0) {
        errors.serviceAttributes = 'Please add at least one skill or service';
    }

    if (data.website && data.website.trim() !== '') {
        // Only validate if website is provided
        try {
            new URL(data.website.startsWith('http') ? data.website : `https://${data.website}`);
        } catch {
            errors.website = 'Please enter a valid website URL (e.g., https://example.com)';
        }
    }

    return errors;
}

// Map backend error messages to user-friendly messages
export function mapBackendError(errorMessage: string): string {
    const errorMappings: Record<string, string> = {
        'property operatingHours should not exist': 'Unable to save operating hours. Please try again.',
        'website must be a URL address': 'Please enter a valid website URL (e.g., https://example.com)',
        'email must be an email': 'Please enter a valid email address',
        'Unauthorized': 'Your session has expired. Please sign out and sign in again.',
        'You must be logged in': 'Please sign in to continue',
        'You already have a builder profile': 'You already have a profile. Your changes have been saved.',
        'Network error': 'Unable to connect to the server. Please check your internet connection.',
    };

    // Check for exact matches first
    if (errorMappings[errorMessage]) {
        return errorMappings[errorMessage];
    }

    // Check for partial matches
    for (const [key, value] of Object.entries(errorMappings)) {
        if (errorMessage.toLowerCase().includes(key.toLowerCase())) {
            return value;
        }
    }

    // Default friendly message
    return `Something went wrong: ${errorMessage}. Please try again or contact support.`;
}

// Check if there are any validation errors
export function hasErrors(errors: ValidationErrors): boolean {
    return Object.keys(errors).length > 0;
}

// Get first error message for display
export function getFirstError(errors: ValidationErrors): string | null {
    const firstKey = Object.keys(errors)[0] as keyof ValidationErrors;
    return firstKey ? errors[firstKey] || null : null;
}
