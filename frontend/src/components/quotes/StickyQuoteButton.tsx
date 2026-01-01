'use client';

import { useState } from 'react';
import { MessageSquarePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuickQuoteModal } from './QuickQuoteModal';
import { cn } from '@/lib/utils';

export function StickyQuoteButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Sticky Button - Mobile Only */}
            <div className="fixed bottom-4 right-4 z-40 md:hidden">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className={cn(
                        'h-14 w-14 rounded-full shadow-lg',
                        'bg-[#F97316] hover:bg-[#EA580C] text-white',
                        'animate-pulse hover:animate-none'
                    )}
                >
                    <MessageSquarePlus className="h-6 w-6" />
                </Button>
            </div>

            {/* Quick Quote Modal */}
            <QuickQuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
