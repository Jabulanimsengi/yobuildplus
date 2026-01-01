'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { MapPin, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddressResult {
    id: string;
    place_name: string;
    text: string;
    center: [number, number]; // [lng, lat]
    context?: Array<{
        id: string;
        text: string;
        short_code?: string;
    }>;
}

interface ParsedAddress {
    fullAddress: string;
    town: string;
    province: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
}

interface MapboxAddressInputProps {
    value?: string;
    onAddressSelect: (address: ParsedAddress) => void;
    placeholder?: string;
    className?: string;
}

// Map short codes to full province names
const PROVINCE_MAP: Record<string, string> = {
    'gp': 'Gauteng',
    'wc': 'Western Cape',
    'kzn': 'KwaZulu-Natal',
    'ec': 'Eastern Cape',
    'fs': 'Free State',
    'lp': 'Limpopo',
    'mp': 'Mpumalanga',
    'nw': 'North West',
    'nc': 'Northern Cape',
};

export function MapboxAddressInput({
    value = '',
    onAddressSelect,
    placeholder = 'Start typing your address...',
    className,
}: MapboxAddressInputProps) {
    const [query, setQuery] = useState(value);
    const [results, setResults] = useState<AddressResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    // Debounced search
    const searchAddresses = useCallback(async (searchQuery: string) => {
        if (!searchQuery || searchQuery.length < 3 || !mapboxToken) {
            setResults([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?` +
                `access_token=${mapboxToken}&country=za&types=address,place,locality,neighborhood`
            );
            const data = await response.json();
            setResults(data.features || []);
            setIsOpen(true);
        } catch (error) {
            console.error('Geocoding error:', error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    }, [mapboxToken]);

    // Handle input change with debounce
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setQuery(newValue);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            searchAddresses(newValue);
        }, 300);
    };

    // Parse address components from Mapbox result
    const parseAddress = (result: AddressResult): ParsedAddress => {
        let town = '';
        let province = '';
        let postalCode = '';

        if (result.context) {
            for (const ctx of result.context) {
                if (ctx.id.startsWith('place')) {
                    town = ctx.text;
                } else if (ctx.id.startsWith('locality')) {
                    if (!town) town = ctx.text;
                } else if (ctx.id.startsWith('region')) {
                    // Try to map short code to full name
                    const shortCode = ctx.short_code?.replace('ZA-', '').toLowerCase();
                    province = shortCode && PROVINCE_MAP[shortCode] ? PROVINCE_MAP[shortCode] : ctx.text;
                } else if (ctx.id.startsWith('postcode')) {
                    postalCode = ctx.text;
                }
            }
        }

        return {
            fullAddress: result.place_name,
            town,
            province,
            postalCode,
            coordinates: {
                lat: result.center[1],
                lng: result.center[0],
            },
        };
    };

    // Handle address selection
    const handleSelect = (result: AddressResult) => {
        const parsed = parseAddress(result);
        setQuery(parsed.fullAddress);
        setSelectedCoords(result.center);
        setIsOpen(false);
        onAddressSelect(parsed);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className={cn('relative', className)}>
            {/* Search Input */}
            <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => results.length > 0 && setIsOpen(true)}
                    placeholder={placeholder}
                    className="pl-10 pr-10"
                />
                {isLoading && (
                    <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-slate-400" />
                )}
            </div>

            {/* Dropdown Results */}
            {isOpen && results.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-slate-200 max-h-60 overflow-y-auto">
                    {results.map((result) => (
                        <button
                            key={result.id}
                            type="button"
                            onClick={() => handleSelect(result)}
                            className="w-full px-4 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-0 transition-colors"
                        >
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 text-[#0EA5E9] flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-slate-800">
                                        {result.text}
                                    </p>
                                    <p className="text-xs text-slate-500 line-clamp-1">
                                        {result.place_name}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {/* Mini Map Preview */}
            {selectedCoords && mapboxToken && (
                <div className="mt-3 rounded-lg overflow-hidden border-2 border-slate-200">
                    <img
                        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l+0EA5E9(${selectedCoords[0]},${selectedCoords[1]})/${selectedCoords[0]},${selectedCoords[1]},14,0/400x150@2x?access_token=${mapboxToken}`}
                        alt="Location preview"
                        className="w-full h-[150px] object-cover"
                    />
                </div>
            )}
        </div>
    );
}
