// API Service Layer for Yobuildplus
// Centralizes all fetch calls to the backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Generic fetch wrapper with error handling
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        ...options,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Network error' }));
        throw new Error(error.message || `HTTP error ${response.status}`);
    }

    return response.json();
}

// Authenticated fetch wrapper - includes Authorization header
async function authenticatedApiFetch<T>(endpoint: string, token: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options?.headers,
        },
        ...options,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Network error' }));
        throw new Error(error.message || `HTTP error ${response.status}`);
    }

    return response.json();
}

// ==========================================
// BUILDERS API
// ==========================================

import { Builder, BuilderFilters, Category, LoginCredentials, AuthUser, AdminStats } from '@/types';

// ... (existing helper function)

export const buildersApi = {
    // Get all builders with optional filters
    getAll: (filters?: BuilderFilters) => {
        const params = new URLSearchParams();
        if (filters?.province) params.append('province', filters.province);
        if (filters?.category) params.append('category', filters.category);
        if (filters?.minRating) params.append('minRating', String(filters.minRating));
        if (filters?.searchQuery) params.append('search', filters.searchQuery);

        const query = params.toString() ? `?${params.toString()}` : '';
        return apiFetch<Builder[]>(`/api/builders${query}`);
    },

    // Get single builder by slug
    getBySlug: (slug: string) => {
        return apiFetch<Builder>(`/api/builders/${slug}`);
    },

    // Create new builder profile (requires authentication)
    createProfile: (data: Partial<Builder>, token: string) => {
        return authenticatedApiFetch<Builder>(`/api/builders`, token, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    // Update builder profile (requires authentication)
    updateProfile: (id: string, data: Partial<Builder>, token?: string) => {
        if (token) {
            return authenticatedApiFetch<Builder>(`/api/builders/${id}`, token, {
                method: 'PATCH',
                body: JSON.stringify(data),
            });
        }
        // Fallback to unauthenticated (will fail if backend requires auth)
        return apiFetch<Builder>(`/api/builders/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    },
};

// ==========================================
// ADMIN API
// ==========================================

export const adminApi = {
    // Get pending approvals
    getPendingBuilders: () => {
        return apiFetch<Builder[]>('/api/admin/builders/pending');
    },

    // Approve a builder
    approveBuilder: (id: string) => {
        return apiFetch<{ success: boolean; message: string }>(`/api/admin/builders/${id}/approve`, {
            method: 'POST',
        });
    },

    // Reject a builder
    rejectBuilder: (id: string, reason?: string) => {
        return apiFetch<{ success: boolean; message: string }>(`/api/admin/builders/${id}/reject`, {
            method: 'POST',
            body: JSON.stringify({ reason }),
        });
    },

    // Get dashboard stats
    getStats: () => {
        return apiFetch<AdminStats>('/api/admin/stats');
    },
};

// ==========================================
// CATEGORIES API
// ==========================================

// ==========================================
// CATEGORIES API
// ==========================================

export const categoriesApi = {
    // Get all categories with subcategories
    getAll: () => {
        return apiFetch<Category[]>('/api/categories');
    },

    // Get single category by slug
    getBySlug: (slug: string) => {
        return apiFetch<Category>(`/api/categories/${slug}`);
    },
};

// ==========================================
// AUTH API
// ==========================================

export const authApi = {
    // Login with email/password
    login: (credentials: LoginCredentials) => {
        return apiFetch<{ user: AuthUser; token: string }>('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    },

    // Register new user
    register: (data: { email: string; password: string; name: string }) => {
        return apiFetch<{ user: AuthUser; token: string }>('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    // Get current user
    me: (token: string) => {
        return apiFetch<AuthUser>('/api/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};

export default { builders: buildersApi, admin: adminApi, categories: categoriesApi, auth: authApi };
