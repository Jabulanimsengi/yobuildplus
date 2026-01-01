'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { MapPin, Loader2 } from 'lucide-react';

interface MapboxAddressAutocompleteProps {
    value: string;
    onChange: (address: string, coordinates?: { lat: number; lng: number }) => void;
    placeholder?: string;
    className?: string;
}

interface MapboxFeature {
    id: string;
    place_name: string;
    center: [number, number]; // [lng, lat]
    text: string;
    properties: {
        address?: string;
    };
}

export function MapboxAddressAutocomplete({
    value,
    onChange,
    placeholder = "Start typing an address...",
    className = "",
}: MapboxAddressAutocompleteProps) {
    const [inputValue, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState<MapboxFeature[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    // Sync external value changes
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const searchAddress = async (query: string) => {
        if (!mapboxToken || query.length < 3) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);
        try {
            // Focus search on South Africa
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
                `access_token=${mapboxToken}&` +
                `country=ZA&` +
                `types=address,place,locality,neighborhood&` +
                `limit=5`
            );

            const data = await response.json();
            setSuggestions(data.features || []);
            setShowSuggestions(true);
        } catch (error) {
            console.error('Mapbox geocoding error:', error);
            setSuggestions([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        // Debounce the API call
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            searchAddress(newValue);
        }, 300);
    };

    const handleSelectSuggestion = (feature: MapboxFeature) => {
        const address = feature.place_name;
        const coordinates = {
            lng: feature.center[0],
            lat: feature.center[1],
        };

        setInputValue(address);
        setShowSuggestions(false);
        setSuggestions([]);
        onChange(address, coordinates);
    };

    const handleBlur = () => {
        // Small delay to allow click on suggestion
        setTimeout(() => {
            setShowSuggestions(false);
        }, 200);
    };

    if (!mapboxToken) {
        // Fallback to regular input if no Mapbox token
        return (
            <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={placeholder}
                    className={`pl-10 ${className}`}
                />
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
            {isLoading && (
                <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 animate-spin" />
            )}
            <Input
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => inputValue.length >= 3 && suggestions.length > 0 && setShowSuggestions(true)}
                onBlur={handleBlur}
                placeholder={placeholder}
                className={`pl-10 ${isLoading ? 'pr-10' : ''} ${className}`}
            />

            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {suggestions.map((feature) => (
                        <button
                            key={feature.id}
                            type="button"
                            className="w-full px-4 py-3 text-left hover:bg-[#0EA5E9]/10 text-sm text-slate-700 border-b border-slate-100 last:border-0 flex items-start gap-3"
                            onClick={() => handleSelectSuggestion(feature)}
                        >
                            <MapPin className="h-4 w-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{feature.place_name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
