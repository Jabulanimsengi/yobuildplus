'use client';

import { useState, useEffect, useRef } from 'react';
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

interface ProfileSectionNavProps {
    className?: string;
}

export function ProfileSectionNav({ className }: ProfileSectionNavProps) {
    const [activeSection, setActiveSection] = useState<string>('about');
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            // Check if nav should be sticky
            const navElement = navRef.current;
            if (navElement) {
                const rect = navElement.getBoundingClientRect();
                setIsSticky(rect.top <= 64); // 64px = height of header
            }

            // Find which section is currently in view
            const sections = PROFILE_SECTIONS.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200; // Offset for better UX

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(PROFILE_SECTIONS[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to section on click
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 140; // Header + nav height
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
            const buttonRect = (activeButton as HTMLElement).getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
                (activeButton as HTMLElement).scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeSection]);

    return (
        <div
            ref={navRef}
            className={cn(
                'bg-white border-b border-slate-200 transition-shadow duration-200',
                isSticky && 'sticky top-16 z-40 shadow-md',
                className
            )}
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
    );
}
