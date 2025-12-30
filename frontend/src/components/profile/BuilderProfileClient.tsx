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

interface Section {
    id: string;
    label: string;
}

const PROFILE_SECTIONS: Section[] = [
    { id: 'about', label: 'About' },
    { id: 'photos', label: 'Photos' },
    { id: 'projects', label: 'Projects' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
    { id: 'services', label: 'Services' },
];

interface BuilderProfileClientProps {
    builder: Builder;
}

export function BuilderProfileClient({ builder }: BuilderProfileClientProps) {
    const [activeSection, setActiveSection] = useState<string>('about');
    const navRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = PROFILE_SECTIONS.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(PROFILE_SECTIONS[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 140;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
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
                                            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">
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
                        <Card id="about" className="border-2 border-slate-200 scroll-mt-36">
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
                        <Card id="photos" className="border-2 border-slate-200 scroll-mt-36">
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
                        <Card id="projects" className="border-2 border-slate-200 scroll-mt-36">
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
                        <Card id="reviews" className="border-2 border-slate-200 scroll-mt-36">
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
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Contact Details */}
                        <Card id="contact" className="border-2 border-slate-200 scroll-mt-36">
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

                        {/* Request Quote Form */}
                        <Card className="border-2 border-slate-200">
                            <CardHeader>
                                <CardTitle className="text-lg">Request a Quote</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">What do you need?</label>
                                        <textarea
                                            placeholder="Describe your project..."
                                            className="w-full min-h-24 px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-[#0EA5E9] focus:outline-none resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Property Type</label>
                                        <select className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-[#0EA5E9] focus:outline-none">
                                            <option>Residential</option>
                                            <option>Commercial</option>
                                            <option>Industrial</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Your Location</label>
                                        <input
                                            type="text"
                                            placeholder="City, Province"
                                            className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 focus:border-[#0EA5E9] focus:outline-none"
                                        />
                                    </div>
                                    <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white">
                                        Submit Request
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Location Map Placeholder */}
                        <Card className="border-2 border-slate-200">
                            <CardHeader>
                                <CardTitle className="text-lg">Location</CardTitle>
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



                        {/* Pricing Section (New) */}
                        {(builder.callOutFee || builder.hourlyRate) && (
                            <Card className="border-2 border-slate-200">
                                <CardHeader>
                                    <CardTitle className="text-lg">Rates & Pricing</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {builder.callOutFee && (
                                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                                            <div className="flex items-center gap-2 text-slate-600 font-medium">
                                                <Banknote className="h-4 w-4 text-[#0EA5E9]" />
                                                Call Out Fee
                                            </div>
                                            <span className="font-bold text-slate-800">R {builder.callOutFee}</span>
                                        </div>
                                    )}
                                    {builder.hourlyRate && (
                                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                                            <div className="flex items-center gap-2 text-slate-600 font-medium">
                                                <Clock className="h-4 w-4 text-[#0EA5E9]" />
                                                Hourly Rate
                                            </div>
                                            <span className="font-bold text-slate-800">R {builder.hourlyRate}/hr</span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* Services Section */}
                        <Card id="services" className="border-2 border-slate-200 scroll-mt-36">
                            <CardHeader>
                                <CardTitle className="text-lg">Services</CardTitle>
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
                    </div>
                </div>
            </div >
        </div >
    );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
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
            <div className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin className="h-3 w-3" />
                {project.city}, {project.province}
            </div>
        </div>
    );
}
