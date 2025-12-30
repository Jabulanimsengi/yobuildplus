import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
    category: Category;
    className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
    return (
        <Link href={`/category/${category.slug}`}>
            <Card
                className={cn(
                    'group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
                    'border-2 border-[#0EA5E9]/30 hover:border-[#0EA5E9] h-full',
                    className
                )}
            >
                <CardContent className="p-6 text-center">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                    </div>

                    {/* Name */}
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {category.description}
                    </p>

                    {/* Subcategory count */}
                    <div className="mt-3 text-xs text-primary font-medium">
                        {category.subcategories.length} services →
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

// Compact version for smaller displays
interface CategoryPillProps {
    category: Category;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
}

export function CategoryPill({ category, isActive, onClick, className }: CategoryPillProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200',
                'whitespace-nowrap text-sm font-medium',
                isActive
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-white border-[#0EA5E9]/50 text-foreground hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/5',
                className
            )}
        >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
        </button>
    );
}
