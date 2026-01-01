import { notFound } from 'next/navigation';
import { BuilderProfileClient } from '@/components/profile/BuilderProfileClient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Fetch builder by slug from API
async function getBuilder(slug: string) {
    try {
        const res = await fetch(`${API_BASE_URL}/api/builders/${slug}`, {
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        if (!res.ok) {
            if (res.status === 404) {
                return null;
            }
            throw new Error('Failed to fetch builder');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching builder:', error);
        return null;
    }
}

// Fetch all builders for static generation
async function getAllBuilders() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/builders`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching builders:', error);
        return [];
    }
}

// Generate static paths for all builders
export async function generateStaticParams() {
    const builders = await getAllBuilders();
    return builders.map((builder: { slug: string }) => ({
        slug: builder.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const builder = await getBuilder(slug);

    if (!builder) {
        return { title: 'Contractor Not Found' };
    }

    return {
        title: `${builder.name} - Contractor Profile | Yobuildplus`,
        description: builder.description.slice(0, 160),
    };
}

export default async function BuilderProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const builder = await getBuilder(slug);

    if (!builder) {
        notFound();
    }

    // Transform API response to match frontend types
    const transformedBuilder = {
        ...builder,
        coordinates: builder.latitude && builder.longitude
            ? { lat: builder.latitude, lng: builder.longitude }
            : undefined,
        createdAt: new Date(builder.createdAt),
        updatedAt: new Date(builder.updatedAt),
    };

    return <BuilderProfileClient builder={transformedBuilder} />;
}
