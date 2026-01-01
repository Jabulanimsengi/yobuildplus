'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { Builder } from '@/types';

interface ContractorMapProps {
    builders: Builder[];
    selectedBuilderId?: string;
    onSelectBuilder?: (builderId: string) => void;
}

export function ContractorMap({ builders, selectedBuilderId, onSelectBuilder }: ContractorMapProps) {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const [mapLoaded, setMapLoaded] = useState(false);

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    // Filter builders that have coordinates
    const buildersWithCoords = builders.filter(
        b => b.coordinates?.lat && b.coordinates?.lng
    );

    // Initialize map
    useEffect(() => {
        if (!token || !mapContainer.current || map.current) return;

        mapboxgl.accessToken = token;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [28.0473, -26.2041], // Johannesburg
            zoom: 10,
        });

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.current.on('load', () => {
            setMapLoaded(true);
        });

        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, [token]);

    // Add/update markers
    useEffect(() => {
        if (!map.current || !mapLoaded) return;

        // Clear existing markers
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];

        // Add new markers
        buildersWithCoords.forEach(builder => {
            const isSelected = selectedBuilderId === builder.id;

            // Create marker element
            const el = document.createElement('div');
            el.className = 'contractor-marker';
            el.innerHTML = `
                <div style="
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: ${isSelected ? '#0EA5E9' : 'white'};
                    border: 2px solid ${isSelected ? 'white' : '#0EA5E9'};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                    transition: transform 0.2s;
                ">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${isSelected ? 'white' : '#0EA5E9'}" stroke-width="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                </div>
            `;

            el.addEventListener('click', () => {
                onSelectBuilder?.(builder.id);
            });

            el.addEventListener('mouseenter', () => {
                el.style.transform = 'scale(1.2)';
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'scale(1)';
            });

            const marker = new mapboxgl.Marker(el)
                .setLngLat([builder.coordinates!.lng, builder.coordinates!.lat])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25, closeButton: false })
                        .setHTML(`
                            <div style="padding: 8px; min-width: 150px;">
                                <h4 style="font-weight: 600; margin-bottom: 4px;">${builder.name}</h4>
                                <p style="font-size: 12px; color: #64748b; margin-bottom: 4px;">${builder.city}, ${builder.provinces[0]}</p>
                                <div style="display: flex; align-items: center; gap: 4px;">
                                    <span style="color: #f59e0b;">★</span>
                                    <span style="font-weight: 500;">${builder.rating.toFixed(1)}</span>
                                    <span style="font-size: 11px; color: #94a3b8;">(${builder.reviewCount})</span>
                                </div>
                            </div>
                        `)
                )
                .addTo(map.current!);

            markersRef.current.push(marker);
        });

        // Fit bounds if there are builders
        if (buildersWithCoords.length > 0) {
            const bounds = new mapboxgl.LngLatBounds();
            buildersWithCoords.forEach(b => {
                bounds.extend([b.coordinates!.lng, b.coordinates!.lat]);
            });
            map.current.fitBounds(bounds, { padding: 50, maxZoom: 12 });
        }
    }, [buildersWithCoords, selectedBuilderId, mapLoaded, onSelectBuilder]);

    if (!token) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 p-6 text-center rounded-xl border-2 border-dashed border-slate-300">
                <MapPin className="mb-4 h-12 w-12 text-slate-300" />
                <h3 className="text-lg font-semibold text-slate-700">Map Unavailable</h3>
                <p className="max-w-xs text-sm text-slate-500">
                    Please configure <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-700">NEXT_PUBLIC_MAPBOX_TOKEN</code> in your environment variables.
                </p>
            </div>
        );
    }

    return (
        <div className="h-full w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <div ref={mapContainer} className="h-full w-full" />
        </div>
    );
}
