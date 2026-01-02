'use client';

import { useState, useEffect, useCallback } from 'react';

const DRAFT_KEY = 'yobuildplus_profile_draft';
const DEBOUNCE_MS = 2000;

interface DraftOptions {
    onRestore?: () => void;
}

export function useDraftProfile<T>(initialData: T, options?: DraftOptions) {
    const [draftLoaded, setDraftLoaded] = useState(false);
    const [hasDraft, setHasDraft] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

    // Load draft from localStorage on mount
    const loadDraft = useCallback((): T | null => {
        if (typeof window === 'undefined') return null;

        try {
            const stored = localStorage.getItem(DRAFT_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                setHasDraft(true);
                return parsed.data as T;
            }
        } catch (error) {
            console.error('Failed to load draft:', error);
        }
        return null;
    }, []);

    // Save draft to localStorage
    const saveDraft = useCallback((data: T) => {
        if (typeof window === 'undefined') return;

        try {
            const draftData = {
                data,
                savedAt: new Date().toISOString(),
            };
            localStorage.setItem(DRAFT_KEY, JSON.stringify(draftData));
            setLastSaved(new Date());
            setHasDraft(true);
        } catch (error) {
            console.error('Failed to save draft:', error);
        }
    }, []);

    // Clear draft from localStorage
    const clearDraft = useCallback(() => {
        if (typeof window === 'undefined') return;

        try {
            localStorage.removeItem(DRAFT_KEY);
            setHasDraft(false);
            setLastSaved(null);
        } catch (error) {
            console.error('Failed to clear draft:', error);
        }
    }, []);

    // Check if draft exists on mount
    useEffect(() => {
        const draft = loadDraft();
        setDraftLoaded(true);
        if (draft) {
            setHasDraft(true);
        }
    }, [loadDraft]);

    return {
        loadDraft,
        saveDraft,
        clearDraft,
        hasDraft,
        draftLoaded,
        lastSaved,
    };
}

// Helper to format time ago
export function formatTimeAgo(date: Date | null): string {
    if (!date) return '';

    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    return date.toLocaleDateString();
}
