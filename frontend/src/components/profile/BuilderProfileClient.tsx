'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Calendar,
    Users,
    Briefcase,
    CheckCircle2,
    Star,
    Clock,
    Share,
    Banknote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StarRating } from '@/components/ui/StarRating';
import { Builder, Review, Project } from '@/types';
import { cn } from '@/lib/utils';
import { QuoteRequestForm } from '@/components/leads/QuoteRequestForm';
import { BuilderStats } from '@/components/profile/BuilderStats';

interface Section {
    id: string;
    label: string;
}

const PROFILE_SECTIONS: Section[] = [
    { id: 'about', label: 'About' },
    { id: 'photos', label: 'Photos' },
    { id: 'projects', label: 'Projects' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
    { id: 'services', label: 'Services' },
    { id: 'hours', label: 'Operating Hours' },
    { id: 'contact', label: 'Contact' },
    { id: 'quote', label: 'Request Quote' },
];

interface BuilderProfileClientProps {
    builder: Builder;
}

export function BuilderProfileClient({ builder }: BuilderProfileClientProps) {
    const [activeSection, setActiveSection] = useState<string>('about');
    const navRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Flag to prevent scroll handler from overriding click
    const isClickScrollingRef = useRef(false);

    // Handle scroll to update active section using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Skip if user just clicked a navigation item
                if (isClickScrollingRef.current) return;

                // Find the entry that's most visible
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                        const sectionId = entry.target.id;
                        if (PROFILE_SECTIONS.some(s => s.id === sectionId)) {
                            setActiveSection(sectionId);
                        }
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the upper portion of viewport
                threshold: [0.1, 0.2, 0.3, 0.5]
            }
        );

        // Observe all section elements
        PROFILE_SECTIONS.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Set active immediately on click
            setActiveSection(sectionId);

            // Prevent scroll handler from overriding for 1 second
            isClickScrollingRef.current = true;

            const headerOffset = 140;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Re-enable scroll detection after animation completes
            setTimeout(() => {
                isClickScrollingRef.current = false;
            }, 1000);
        }
    };

    // Scroll active pill into view
    useEffect(() => {
        const container = scrollContainerRef.current;
        const activeButton = container?.querySelector(`[data-section="${activeSection}"]`);
        if (container && activeButton) {
            (activeButton as HTMLElement).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [activeSection]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${builder.name} on Yobuildplus`,
                    text: `Check out ${builder.name} on Yobuildplus - South Africa's trusted builder directory.`,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    // Helper to get section card classes with active highlighting
    const getSectionClasses = (sectionId: string) => cn(
        "border-2 scroll-mt-36 transition-all duration-300",
        activeSection === sectionId
            ? "border-[#F97316] shadow-lg shadow-[#F97316]/10"
            : "border-slate-200"
    );

    return (
        <div className="min-h-screen bg-background">
            {/* Cover Image */}
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#0EA5E9]/20 to-[#F97316]/20">
                {builder.coverImage ? (
                    <Image
                        src={builder.coverImage}
                        alt={`${builder.name} cover`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7]" />
                )}
            </div>

            {/* Profile Header Card */}
            <div className="container mx-auto px-4">
                <div className="relative -mt-16 mb-4">
                    <Card className="border-2 border-slate-200">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Logo */}
                                <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-xl border-4 border-white bg-white shadow-lg overflow-hidden flex-shrink-0 -mt-16 md:-mt-20">
                                    {builder.logo ? (
                                        <Image
                                            src={builder.logo}
                                            alt={`${builder.name} logo`}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full w-full bg-[#0EA5E9]/10 text-4xl font-bold text-[#0EA5E9]">
                                            {builder.name.charAt(0)}
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                                                    {builder.name}
                                                </h1>
                                                {builder.verified && (
                                                    <Badge className="bg-[#0D9488] text-white gap-1">
                                                        <CheckCircle2 className="h-3 w-3" />
                                                        Verified
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 text-slate-500 mb-3">
                                                <MapPin className="h-4 w-4" />
                                                <span>{builder.address}</span>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <StarRating rating={builder.rating} size="md" />
                                                    <span className="font-semibold">{builder.rating.toFixed(1)}</span>
                                                    <span className="text-slate-500">
                                                        ({builder.reviewCount} reviews)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                className="bg-[#F97316] hover:bg-[#EA580C] text-white"
                                                onClick={() => scrollToSection('quote')}
                                            >
                                                Request Quote
                                            </Button>
                                            <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/5">
                                                <Phone className="h-4 w-4 mr-2" />
                                                Call Now
                                            </Button>
                                            <Button variant="outline" size="icon" onClick={handleShare} className="border-slate-200 text-slate-500 hover:text-[#0EA5E9] hover:bg-slate-50">
                                                <Share className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Section Navigation */}
            <div
                ref={navRef}
                className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm"
            >
                <div className="container mx-auto px-4">
                    <div
                        ref={scrollContainerRef}
                        className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {PROFILE_SECTIONS.map((section) => (
                            <button
                                key={section.id}
                                data-section={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={cn(
                                    'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0',
                                    activeSection === section.id
                                        ? 'bg-[#0EA5E9] text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                )}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <Card id="about" className={getSectionClasses('about')}>
                            <CardHeader>
                                <CardTitle className="text-xl">About Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 mb-6">{builder.description}</p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                                        <Calendar className="h-6 w-6 mx-auto mb-2 text-[#0EA5E9]" />
                                        <p className="text-2xl font-bold text-slate-800">{builder.yearStarted}</p>
                                        <p className="text-xs text-slate-500">Year Started</p>
                                    </div>
                                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                                        <Users className="h-6 w-6 mx-auto mb-2 text-[#0EA5E9]" />
                                        <p className="text-2xl font-bold text-slate-800">{builder.teamSize}</p>
                                        <p className="text-xs text-slate-500">Team Members</p>
                                    </div>
                                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                                        <Briefcase className="h-6 w-6 mx-auto mb-2 text-[#0EA5E9]" />
                                        <p className="text-2xl font-bold text-slate-800">{builder.projectsCompleted}</p>
                                        <p className="text-xs text-slate-500">Projects Completed</p>
                                    </div>
                                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                                        <Star className="h-6 w-6 mx-auto mb-2 text-[#F97316]" />
                                        <p className="text-2xl font-bold text-slate-800">{builder.rating}</p>
                                        <p className="text-xs text-slate-500">Avg Rating</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Photos Section */}
                        <Card id="photos" className={getSectionClasses('photos')}>
                            <CardHeader>
                                <CardTitle className="text-xl">Photos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {builder.photos.length > 0 ? (
                                        builder.photos.map((photo, index) => (
                                            <div
                                                key={index}
                                                className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 border-2 border-slate-200"
                                            >
                                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                                    <Briefcase className="h-8 w-8" />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-slate-500 col-span-4">No photos available</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Projects Section */}
                        <Card id="projects" className={getSectionClasses('projects')}>
                            <CardHeader>
                                <CardTitle className="text-xl">Projects</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="completed" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3 mb-4">
                                        <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                                        <TabsTrigger value="completed">Completed</TabsTrigger>
                                        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="ongoing">
                                        <div className="grid gap-4">
                                            {builder.projects
                                                .filter((p) => p.status === 'ongoing')
                                                .map((project) => (
                                                    <ProjectCard key={project.id} project={project} />
                                                ))}
                                            {builder.projects.filter((p) => p.status === 'ongoing').length === 0 && (
                                                <p className="text-slate-500 text-center py-8">
                                                    No ongoing projects
                                                </p>
                                            )}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="completed">
                                        <div className="grid gap-4">
                                            {builder.projects
                                                .filter((p) => p.status === 'completed')
                                                .map((project) => (
                                                    <ProjectCard key={project.id} project={project} />
                                                ))}
                                            {builder.projects.filter((p) => p.status === 'completed').length === 0 && (
                                                <p className="text-slate-500 text-center py-8">
                                                    No completed projects yet
                                                </p>
                                            )}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="cancelled">
                                        <div className="grid gap-4">
                                            {builder.projects
                                                .filter((p) => p.status === 'cancelled')
                                                .map((project) => (
                                                    <ProjectCard key={project.id} project={project} />
                                                ))}
                                            {builder.projects.filter((p) => p.status === 'cancelled').length === 0 && (
                                                <p className="text-slate-500 text-center py-8">
                                                    No cancelled projects
                                                </p>
                                            )}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        {/* Reviews Section */}
                        <Card id="reviews" className={getSectionClasses('reviews')}>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-xl">Reviews</CardTitle>
                                <Button variant="outline" size="sm" className="border-[#0EA5E9] text-[#0EA5E9]">
                                    Write a Review
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {builder.reviews.length > 0 ? (
                                        builder.reviews.map((review) => (
                                            <div key={review.id} className="border-b border-slate-200 pb-6 last:border-0">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <p className="font-semibold text-slate-800">{review.authorName}</p>
                                                        {review.projectType && (
                                                            <p className="text-sm text-slate-500">{review.projectType}</p>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <StarRating rating={review.rating} size="sm" />
                                                        <span className="text-sm text-slate-500">
                                                            {new Date(review.createdAt).toLocaleDateString('en-ZA', {
                                                                year: 'numeric',
                                                                month: 'short',
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-slate-600">{review.comment}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-slate-500 text-center py-8">
                                            No reviews yet. Be the first to review!
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Location Section - Moved from sidebar */}
                        <Card id="location" className={getSectionClasses('location')}>
                            <CardHeader>
                                <CardTitle className="text-xl">Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video rounded-lg bg-slate-100 flex items-center justify-center border-2 border-slate-200">
                                    <div className="text-center text-slate-400">
                                        <MapPin className="h-8 w-8 mx-auto mb-2" />
                                        <p className="text-sm">Map will load here</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-3">
                                    {builder.city}, {builder.provinces[0]}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Services Section - Moved from sidebar */}
                        <Card id="services" className={getSectionClasses('services')}>
                            <CardHeader>
                                <CardTitle className="text-xl">Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {builder.serviceAttributes.map((attr) => (
                                        <Badge
                                            key={attr}
                                            variant="outline"
                                            className="border-[#0EA5E9] text-slate-600"
                                        >
                                            {attr === '24/7 Emergency' && <Clock className="h-3 w-3 mr-1" />}
                                            {attr}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Operating Hours Section */}
                        <Card id="hours" className={getSectionClasses('hours')}>
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-[#0EA5E9]" />
                                    Operating Hours
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {builder.operatingHours ? (
                                    <div className="space-y-2">
                                        {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const).map((day) => {
                                            const hours = builder.operatingHours?.[day];
                                            const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() === day;
                                            const isClosed = hours?.closed;

                                            return (
                                                <div
                                                    key={day}
                                                    className={cn(
                                                        "flex items-center justify-between py-2 px-3 rounded-lg",
                                                        isToday ? "bg-[#0EA5E9]/5 border border-[#0EA5E9]/20" : ""
                                                    )}
                                                >
                                                    <span className={cn(
                                                        "capitalize text-sm font-medium",
                                                        isToday ? "text-[#0EA5E9]" : "text-slate-600"
                                                    )}>
                                                        {day}
                                                        {isToday && <span className="ml-2 text-xs">(Today)</span>}
                                                    </span>
                                                    {isClosed ? (
                                                        <span className="text-sm text-slate-400">Closed</span>
                                                    ) : hours ? (
                                                        <span className="text-sm text-slate-700">
                                                            {hours.open} - {hours.close}
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-slate-400">-</span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <p className="text-slate-500 text-center py-4">
                                        Operating hours not specified.
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Contact Details */}
                        <Card id="contact" className={getSectionClasses('contact')}>
                            <CardHeader>
                                <CardTitle className="text-lg">Contact Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <a
                                    href={`tel:${builder.phone}`}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                                >
                                    <Phone className="h-5 w-5 text-[#0EA5E9]" />
                                    <span className="text-slate-700">{builder.phone}</span>
                                </a>
                                <a
                                    href={`mailto:${builder.email}`}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                                >
                                    <Mail className="h-5 w-5 text-[#0EA5E9]" />
                                    <span className="text-slate-700">{builder.email}</span>
                                </a>
                                {builder.website && (
                                    <a
                                        href={builder.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                                    >
                                        <Globe className="h-5 w-5 text-[#0EA5E9]" />
                                        <span className="text-slate-700">Visit Website</span>
                                    </a>
                                )}
                            </CardContent>
                        </Card>

                        {/* Real-time Stats */}
                        <Card className="border-2 border-slate-200">
                            <CardHeader>
                                <CardTitle className="text-lg">Quote Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <BuilderStats builderId={builder.id} />
                            </CardContent>
                        </Card>

                        <Card id="quote" className={getSectionClasses('quote')}>
                            <CardHeader>
                                <CardTitle className="text-lg">Request a Quote</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <QuoteRequestForm
                                    builderId={builder.id}
                                    builderName={builder.name}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Project Card Component with Images for ongoing/completed projects
function ProjectCard({ project }: { project: Project }) {
    const showImages = project.status !== 'cancelled' && project.images && project.images.length > 0;

    return (
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-slate-800">{project.title}</h4>
                <Badge
                    variant={project.status === 'completed' ? 'default' : project.status === 'ongoing' ? 'secondary' : 'destructive'}
                    className={
                        project.status === 'completed'
                            ? 'bg-[#0D9488]'
                            : project.status === 'ongoing'
                                ? 'bg-[#0EA5E9]'
                                : ''
                    }
                >
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </Badge>
            </div>
            <p className="text-sm text-slate-500 mb-2">{project.description}</p>

            {/* Project Images - Only for ongoing/completed */}
            {showImages && (
                <div className="mb-3">
                    <div className="grid grid-cols-4 gap-2">
                        {project.images.slice(0, 4).map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-square rounded-lg overflow-hidden border border-slate-200"
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} photo ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform"
                                />
                                {index === 3 && project.images.length > 4 && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <span className="text-white font-semibold text-sm">
                                            +{project.images.length - 4}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin className="h-3 w-3" />
                {project.city}, {project.province}
            </div>
        </div>
    );
}
