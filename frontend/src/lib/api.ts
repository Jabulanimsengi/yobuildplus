// API Service Layer for Yobuildplus
// Centralizes all fetch calls to the backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

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

// ==========================================
// BUILDERS API
// ==========================================

export interface BuilderFilters {
    province?: string;
    category?: string;
    minRating?: number;
    search?: string;
}

export const buildersApi = {
    // Get all builders with optional filters
    getAll: (filters?: BuilderFilters) => {
        const params = new URLSearchParams();
        if (filters?.province) params.append('province', filters.province);
        if (filters?.category) params.append('category', filters.category);
        if (filters?.minRating) params.append('minRating', String(filters.minRating));
        if (filters?.search) params.append('search', filters.search);

        const query = params.toString() ? `?${params.toString()}` : '';
        return apiFetch<any[]>(`/api/builders${query}`);
    },

    // Get single builder by slug
    getBySlug: (slug: string) => {
        return apiFetch<any>(`/api/builders/${slug}`);
    },

    // Update builder profile
    updateProfile: (id: string, data: Partial<{
        name: string;
        description: string;
        phone: string;
        email: string;
        website: string;
        address: string;
        logo: string;
        coverImage: string;
        photos: string[];
        callOutFee: number;
        hourlyRate: number;
        serviceAreas: string[];
        serviceAttributes: string[];
    }>) => {
        return apiFetch<any>(`/api/builders/${id}`, {
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
        return apiFetch<any[]>('/api/admin/builders/pending');
    },

    // Approve a builder
    approveBuilder: (id: string) => {
        return apiFetch<any>(`/api/admin/builders/${id}/approve`, {
            method: 'POST',
        });
    },

    // Reject a builder
    rejectBuilder: (id: string, reason?: string) => {
        return apiFetch<any>(`/api/admin/builders/${id}/reject`, {
            method: 'POST',
            body: JSON.stringify({ reason }),
        });
    },

    // Get dashboard stats
    getStats: () => {
        return apiFetch<{
            totalUsers: number;
            pendingSignups: number;
            pendingEdits: number;
            pendingMedia: number;
        }>('/api/admin/stats');
    },
};

// ==========================================
// CATEGORIES API
// ==========================================

export interface Category {
    id: string;
    slug: string;
    name: string;
    icon: string;
    description: string;
    subcategories: Subcategory[];
}

export interface Subcategory {
    id: string;
    slug: string;
    name: string;
    searchTerms: string[];
}

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

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role: string;
    builderId?: string;
}

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
