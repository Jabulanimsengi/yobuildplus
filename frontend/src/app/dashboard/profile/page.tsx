'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Save, Building2, Phone, Mail, Globe, MapPin, Clock,
    X, ImageIcon, Banknote, Plus, Briefcase, Trash2, Loader2, CheckCircle2
} from 'lucide-react';
import { buildersApi } from '@/lib/api';
import CloudinaryUploadWidget from '@/components/ui/cloudinary-upload-widget';
import { OperatingHours, DayHours } from '@/types';
import { getAllSubcategories } from '@/data/categories';
import { locationsData } from '@/data/locations';
import { MapboxAddressAutocomplete } from '@/components/ui/mapbox-address-autocomplete';
import { FormLabel, FormError } from '@/components/ui/FormLabel';
import { useDraftProfile, formatTimeAgo } from '@/hooks/useDraftProfile';
import { validateProfile, mapBackendError, ValidationErrors, hasErrors } from '@/lib/validation';

const DEFAULT_HOURS: DayHours = { open: '08:00', close: '17:00', closed: false };
const DEFAULT_OPERATING_HOURS: OperatingHours = {
    monday: { ...DEFAULT_HOURS },
    tuesday: { ...DEFAULT_HOURS },
    wednesday: { ...DEFAULT_HOURS },
    thursday: { ...DEFAULT_HOURS },
    friday: { ...DEFAULT_HOURS },
    saturday: { open: '08:00', close: '13:00', closed: false },
    sunday: { open: '00:00', close: '00:00', closed: true },
};

interface ProfileData {
    name: string;
    yearStarted: number;
    teamSize: number;
    projectsCompleted: number;
    description: string;
    phone: string;
    email: string;
    website: string;
    address: string;
    callOutFee: number;
    hourlyRate: number;
    serviceAreas: string[];
    serviceAttributes: string[];
    logo: string | null;
    coverImage: string | null;
    photos: string[];
    operatingHours: OperatingHours;
}

export default function ProfileEditorPage() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isSavingDraft, setIsSavingDraft] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [builderId, setBuilderId] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

    // Form State
    const [formData, setFormData] = useState<ProfileData>({
        name: '',
        yearStarted: 2020,
        teamSize: 1,
        projectsCompleted: 0,
        description: '',
        phone: '',
        email: '',
        website: '',
        address: '',
        callOutFee: 0,
        hourlyRate: 0,
        serviceAreas: [],
        serviceAttributes: [],
        logo: null,
        coverImage: null,
        photos: [],
        operatingHours: DEFAULT_OPERATING_HOURS,
    });

    const [newService, setNewService] = useState('');
    const [newArea, setNewArea] = useState('');

    // Autocomplete state
    const [showServiceSuggestions, setShowServiceSuggestions] = useState(false);
    const [showAreaSuggestions, setShowAreaSuggestions] = useState(false);
    const serviceInputRef = useRef<HTMLDivElement>(null);
    const areaInputRef = useRef<HTMLDivElement>(null);

    // Get all available services from categories
    const allServices = getAllSubcategories().map(sub => sub.name);

    // Get all available locations flattened
    const allLocations = Object.values(locationsData).flat();

    // Filter suggestions based on input
    const serviceSuggestions = newService.length >= 2
        ? allServices.filter(s =>
            s.toLowerCase().includes(newService.toLowerCase()) &&
            !formData.serviceAttributes.includes(s)
        ).slice(0, 8)
        : [];

    const areaSuggestions = newArea.length >= 2
        ? allLocations.filter(loc =>
            loc.toLowerCase().includes(newArea.toLowerCase()) &&
            !formData.serviceAreas.includes(loc)
        ).slice(0, 8)
        : [];

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (serviceInputRef.current && !serviceInputRef.current.contains(event.target as Node)) {
                setShowServiceSuggestions(false);
            }
            if (areaInputRef.current && !areaInputRef.current.contains(event.target as Node)) {
                setShowAreaSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Fetch builder data on mount - uses session.user.builderId
    useEffect(() => {
        async function fetchBuilderData() {
            // Wait for session to load
            if (!session?.user) {
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);

                // Check if user has an existing builder profile
                const userBuilderId = session.user.builderId;

                if (userBuilderId) {
                    // User has an existing profile - fetch it
                    try {
                        const builder = await buildersApi.getBySlug(userBuilderId);
                        setBuilderId(builder.id);
                        setFormData({
                            name: builder.name || '',
                            yearStarted: builder.yearStarted || 2020,
                            teamSize: builder.teamSize || 1,
                            projectsCompleted: builder.projectsCompleted || 0,
                            description: builder.description || '',
                            phone: builder.phone || '',
                            email: builder.email || '',
                            website: builder.website || '',
                            address: builder.address || '',
                            callOutFee: builder.callOutFee || 0,
                            hourlyRate: builder.hourlyRate || 0,
                            serviceAreas: builder.serviceAreas || [],
                            serviceAttributes: (builder.serviceAttributes as string[]) || [],
                            logo: builder.logo || null,
                            coverImage: builder.coverImage || null,
                            photos: builder.photos || [],
                            operatingHours: builder.operatingHours || DEFAULT_OPERATING_HOURS,
                        });
                    } catch (err) {
                        console.error('Failed to fetch existing profile:', err);
                        // Profile doesn't exist yet - user will create one
                    }
                } else {
                    // New user - pre-fill email and name from session
                    setFormData(prev => ({
                        ...prev,
                        email: session.user?.email || '',
                        name: session.user?.name || '',
                    }));
                }
            } catch (error) {
                console.error('Failed to fetch builder data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBuilderData();
    }, [session]);

    // Handle save with confirmation
    const handleSaveClick = () => {
        setShowConfirmDialog(true);
    };

    const confirmSave = async () => {
        setShowConfirmDialog(false);
        setSaveError(null);

        // Validate form before saving
        const errors = validateProfile({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            description: formData.description,
            serviceAreas: formData.serviceAreas,
            serviceAttributes: formData.serviceAttributes,
            website: formData.website,
        });

        if (hasErrors(errors)) {
            setValidationErrors(errors);
            const firstError = Object.values(errors)[0];
            setSaveError(firstError || 'Please fix the errors above before saving.');
            return;
        }

        setValidationErrors({});

        try {
            setIsSaving(true);
            setSaveSuccess(false);

            const profileData = {
                name: formData.name,
                description: formData.description,
                phone: formData.phone,
                email: formData.email,
                website: formData.website || undefined,
                address: formData.address,
                logo: formData.logo || undefined,
                coverImage: formData.coverImage || undefined,
                photos: formData.photos,
                callOutFee: formData.callOutFee,
                hourlyRate: formData.hourlyRate,
                serviceAreas: formData.serviceAreas,
                serviceAttributes: formData.serviceAttributes as any,
                operatingHours: formData.operatingHours,
            };

            if (builderId) {
                // Update existing profile
                await buildersApi.updateProfile(builderId, profileData, session?.accessToken);
            } else {
                // Create new profile
                if (!session?.accessToken) {
                    setSaveError('Please sign out and sign back in to continue.');
                    return;
                }
                const newBuilder = await buildersApi.createProfile(profileData, session.accessToken);
                setBuilderId(newBuilder.id);
            }

            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (error: any) {
            console.error('Failed to save profile:', error);
            const friendlyMessage = mapBackendError(error.message || 'Unknown error');
            setSaveError(friendlyMessage);
        } finally {
            setIsSaving(false);
        }
    };

    // Save draft handler
    const handleSaveDraft = () => {
        setIsSavingDraft(true);
        try {
            if (typeof window !== 'undefined') {
                const draftData = {
                    data: formData,
                    savedAt: new Date().toISOString(),
                };
                localStorage.setItem('yobuildplus_profile_draft', JSON.stringify(draftData));
            }
            setTimeout(() => setIsSavingDraft(false), 500);
        } catch (error) {
            console.error('Failed to save draft:', error);
            setIsSavingDraft(false);
        }
    };

    // Load draft on mount
    useEffect(() => {
        if (typeof window !== 'undefined' && !builderId) {
            try {
                const stored = localStorage.getItem('yobuildplus_profile_draft');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (parsed.data) {
                        setFormData(prev => ({ ...prev, ...parsed.data }));
                    }
                }
            } catch (error) {
                console.error('Failed to load draft:', error);
            }
        }
    }, [builderId]);

    // Handlers
    const handleAddService = (e: React.FormEvent) => {
        e.preventDefault();
        if (newService && !formData.serviceAttributes.includes(newService)) {
            setFormData({ ...formData, serviceAttributes: [...formData.serviceAttributes, newService] });
            setNewService('');
            setShowServiceSuggestions(false);
        }
    };

    const selectService = (service: string) => {
        if (!formData.serviceAttributes.includes(service)) {
            setFormData({ ...formData, serviceAttributes: [...formData.serviceAttributes, service] });
        }
        setNewService('');
        setShowServiceSuggestions(false);
    };

    const removeService = (item: string) => {
        setFormData({ ...formData, serviceAttributes: formData.serviceAttributes.filter(s => s !== item) });
    };

    const handleAddArea = (e: React.FormEvent) => {
        e.preventDefault();
        if (newArea && !formData.serviceAreas.includes(newArea)) {
            setFormData({ ...formData, serviceAreas: [...formData.serviceAreas, newArea] });
            setNewArea('');
            setShowAreaSuggestions(false);
        }
    };

    const selectArea = (area: string) => {
        if (!formData.serviceAreas.includes(area)) {
            setFormData({ ...formData, serviceAreas: [...formData.serviceAreas, area] });
        }
        setNewArea('');
        setShowAreaSuggestions(false);
    };

    const removeArea = (item: string) => {
        setFormData({ ...formData, serviceAreas: formData.serviceAreas.filter(s => s !== item) });
    };

    const handlePhotoUpload = (result: any) => {
        if (formData.photos.length < 12) {
            setFormData({ ...formData, photos: [...formData.photos, result.secure_url] });
        }
    };

    const removePhoto = (url: string) => {
        setFormData({ ...formData, photos: formData.photos.filter(p => p !== url) });
    };

    const updateHours = (day: keyof OperatingHours, field: keyof DayHours, value: string | boolean) => {
        setFormData({
            ...formData,
            operatingHours: {
                ...formData.operatingHours,
                [day]: {
                    ...formData.operatingHours[day],
                    [field]: value
                }
            }
        });
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-3 text-muted-foreground">Loading profile...</span>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-5xl mx-auto pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        {builderId ? 'Edit Profile' : 'Create Your Profile'}
                    </h1>
                    <p className="text-slate-500">
                        {builderId
                            ? 'Manage your complete public listing information.'
                            : 'Fill in your business details to start receiving leads from customers.'}
                    </p>
                </div>
                <div className="flex gap-3 items-center">
                    {saveSuccess && (
                        <span className="flex items-center text-green-600 text-sm">
                            <CheckCircle2 className="h-4 w-4 mr-1" /> Saved!
                        </span>
                    )}
                    {builderId && (
                        <Button variant="outline" onClick={() => window.open(`/contractors/${formData.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}>
                            View Public Profile
                        </Button>
                    )}
                </div>
            </div>

            {/* Error Alert */}
            {saveError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <div className="text-red-500 mt-0.5">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-800">Unable to save profile</p>
                        <p className="text-sm text-red-600 mt-1">{saveError}</p>
                    </div>
                    <button
                        onClick={() => setSaveError(null)}
                        className="text-red-400 hover:text-red-600"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            <Tabs defaultValue="general" className="w-full">
                {/* Tab Navigation with scroll indicators */}
                <div className="relative mb-6">
                    {/* Gradient fade on right to indicate more content */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none md:hidden" />

                    <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
                        <TabsList className="inline-flex w-max gap-1 bg-slate-100 p-1 rounded-lg">
                            <TabsTrigger value="general" className="flex-shrink-0 px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium">
                                Details
                            </TabsTrigger>
                            <TabsTrigger value="rates" className="flex-shrink-0 px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium">
                                Services
                            </TabsTrigger>
                            <TabsTrigger value="hours" className="flex-shrink-0 px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium">
                                Hours
                            </TabsTrigger>
                            <TabsTrigger value="media" className="flex-shrink-0 px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium">
                                Media
                            </TabsTrigger>
                            <TabsTrigger value="projects" className="flex-shrink-0 px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium">
                                Projects
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Swipe hint for mobile */}
                    <p className="text-xs text-slate-400 mt-2 text-center md:hidden">
                        ← Swipe to see more sections →
                    </p>
                </div>

                {/* === GENERAL TAB === */}
                <TabsContent value="general" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Company Details</CardTitle>
                            <CardDescription>Basic information about your business.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <FormLabel required>Business Name</FormLabel>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormLabel optional>Year Established</FormLabel>
                                    <Input
                                        value={formData.yearStarted}
                                        onChange={(e) => setFormData({ ...formData, yearStarted: parseInt(e.target.value) || 2020 })}
                                        type="number"
                                    />
                                </div>
                            </div>

                            <div>
                                <FormLabel required>Description</FormLabel>
                                <textarea
                                    className="w-full min-h-[120px] px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:border-[#0EA5E9] text-sm"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                                <p className="text-xs text-slate-500 mt-1">Tell customers what makes you unique. Min 100 characters.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <FormLabel optional>Team Size</FormLabel>
                                    <Input
                                        value={formData.teamSize}
                                        onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) || 1 })}
                                        type="number"
                                    />
                                </div>
                                <div>
                                    <FormLabel optional>Projects Completed</FormLabel>
                                    <Input
                                        value={formData.projectsCompleted}
                                        onChange={(e) => setFormData({ ...formData, projectsCompleted: parseInt(e.target.value) || 0 })}
                                        type="number"
                                    />
                                </div>
                                <div>
                                    <FormLabel optional>Business Reg No.</FormLabel>
                                    <Input placeholder="Optional" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>How customers can reach you.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <FormLabel required>Email Address</FormLabel>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormLabel required>Phone Number</FormLabel>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <FormLabel optional>Website URL</FormLabel>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            value={formData.website}
                                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormLabel optional>Physical Address / Headquarters</FormLabel>
                                    <MapboxAddressAutocomplete
                                        value={formData.address}
                                        onChange={(address) => setFormData({ ...formData, address })}
                                        placeholder="Start typing your address..."
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* === SERVICES & RATES TAB === */}
                <TabsContent value="rates" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pricing & Rates</CardTitle>
                            <CardDescription>Transparent pricing helps build trust with customers.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <FormLabel optional>Call Out Fee (R)</FormLabel>
                                    <div className="relative">
                                        <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            type="number"
                                            value={formData.callOutFee}
                                            onChange={(e) => setFormData({ ...formData, callOutFee: parseFloat(e.target.value) || 0 })}
                                            className="pl-10"
                                            placeholder="e.g. 500"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">Flat rate for visiting a site.</p>
                                </div>
                                <div>
                                    <FormLabel optional>Standard Hourly Rate (R)</FormLabel>
                                    <div className="relative">
                                        <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            type="number"
                                            value={formData.hourlyRate}
                                            onChange={(e) => setFormData({ ...formData, hourlyRate: parseFloat(e.target.value) || 0 })}
                                            className="pl-10"
                                            placeholder="e.g. 850"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">Starting rate for labor.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Service Offerings</CardTitle>
                            <CardDescription>Categories and tags that match customer searches.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Skills */}
                            <div>
                                <FormLabel required>Skills & Services</FormLabel>
                                <div className="flex flex-wrap gap-2 mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    {formData.serviceAttributes.map(service => (
                                        <Badge key={service} variant="secondary" className="gap-1 pl-3 pr-2 py-1.5 text-sm bg-white border border-slate-200 text-slate-700">
                                            {service}
                                            <button type="button" onClick={() => removeService(service)} className="hover:text-red-500 text-slate-400 ml-1">
                                                <X className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                    {formData.serviceAttributes.length === 0 && <span className="text-slate-400 text-sm italic">No services added yet.</span>}
                                </div>
                                <div ref={serviceInputRef} className="relative max-w-md">
                                    <form onSubmit={handleAddService} className="flex gap-2">
                                        <Input
                                            placeholder="Type to search services (e.g. Waterproofing)"
                                            value={newService}
                                            onChange={(e) => setNewService(e.target.value)}
                                            onFocus={() => setShowServiceSuggestions(true)}
                                        />
                                        <Button type="submit" variant="outline" disabled={!newService}><Plus className="h-4 w-4" /></Button>
                                    </form>
                                    {showServiceSuggestions && serviceSuggestions.length > 0 && (
                                        <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                            {serviceSuggestions.map((service, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className="w-full px-4 py-2 text-left hover:bg-[#0EA5E9]/10 text-sm text-slate-700 border-b border-slate-100 last:border-0"
                                                    onClick={() => selectService(service)}
                                                >
                                                    <Briefcase className="inline h-4 w-4 mr-2 text-slate-400" />
                                                    {service}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <p className="text-xs text-slate-500 mt-2">Start typing to see suggestions or add your own</p>
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div>
                                <FormLabel required>Service Areas (Suburbs/Cities)</FormLabel>
                                <div className="flex flex-wrap gap-2 mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    {formData.serviceAreas.map(area => (
                                        <Badge key={area} variant="secondary" className="gap-1 pl-3 pr-2 py-1.5 text-sm bg-white border border-slate-200 text-slate-700">
                                            <MapPin className="h-3 w-3 text-slate-400" />
                                            {area}
                                            <button type="button" onClick={() => removeArea(area)} className="hover:text-red-500 text-slate-400 ml-1">
                                                <X className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                    {formData.serviceAreas.length === 0 && <span className="text-slate-400 text-sm italic">No areas added yet.</span>}
                                </div>
                                <div ref={areaInputRef} className="relative max-w-md">
                                    <form onSubmit={handleAddArea} className="flex gap-2">
                                        <Input
                                            placeholder="Type to search suburbs/cities (e.g. Sandton)"
                                            value={newArea}
                                            onChange={(e) => setNewArea(e.target.value)}
                                            onFocus={() => setShowAreaSuggestions(true)}
                                        />
                                        <Button type="submit" variant="outline" disabled={!newArea}><Plus className="h-4 w-4" /></Button>
                                    </form>
                                    {showAreaSuggestions && areaSuggestions.length > 0 && (
                                        <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                            {areaSuggestions.map((area, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className="w-full px-4 py-2 text-left hover:bg-[#0EA5E9]/10 text-sm text-slate-700 border-b border-slate-100 last:border-0"
                                                    onClick={() => selectArea(area)}
                                                >
                                                    <MapPin className="inline h-4 w-4 mr-2 text-slate-400" />
                                                    {area}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <p className="text-xs text-slate-500 mt-2">Start typing to see South African suburbs and cities</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* === OPERATING HOURS TAB === */}
                <TabsContent value="hours" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-[#0EA5E9]" />
                                Operating Hours
                            </CardTitle>
                            <CardDescription>Set your business hours for each day of the week.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const).map((day) => (
                                <div key={day} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-slate-100 last:border-0">
                                    <div className="flex items-center justify-between sm:justify-start sm:w-28">
                                        <span className="font-medium capitalize text-slate-700">{day}</span>
                                        <div className="flex items-center gap-2 sm:hidden">
                                            <Checkbox
                                                id={`${day}-closed-mobile`}
                                                checked={formData.operatingHours[day].closed}
                                                onCheckedChange={(checked) => updateHours(day, 'closed', checked === true)}
                                            />
                                            <label htmlFor={`${day}-closed-mobile`} className="text-sm text-slate-600 cursor-pointer">
                                                Closed
                                            </label>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2">
                                        <Checkbox
                                            id={`${day}-closed`}
                                            checked={formData.operatingHours[day].closed}
                                            onCheckedChange={(checked) => updateHours(day, 'closed', checked === true)}
                                        />
                                        <label htmlFor={`${day}-closed`} className="text-sm text-slate-600 cursor-pointer">
                                            Closed
                                        </label>
                                    </div>
                                    {!formData.operatingHours[day].closed && (
                                        <div className="flex items-center gap-2 flex-1">
                                            <Input
                                                type="time"
                                                value={formData.operatingHours[day].open}
                                                onChange={(e) => updateHours(day, 'open', e.target.value)}
                                                className="flex-1 sm:w-32 sm:flex-none"
                                            />
                                            <span className="text-slate-400 text-sm">to</span>
                                            <Input
                                                type="time"
                                                value={formData.operatingHours[day].close}
                                                onChange={(e) => updateHours(day, 'close', e.target.value)}
                                                className="flex-1 sm:w-32 sm:flex-none"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* === MEDIA TAB === */}
                <TabsContent value="media" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Branding</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Logo</label>
                                    <div className="flex items-center gap-4">
                                        <CloudinaryUploadWidget onUpload={(res) => setFormData({ ...formData, logo: res.secure_url })}>
                                            <div className="h-24 w-24 rounded-lg bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 transition-colors overflow-hidden">
                                                {formData.logo ? (
                                                    <img src={formData.logo} alt="Logo" className="h-full w-full object-cover" />
                                                ) : (
                                                    <ImageIcon className="h-8 w-8" />
                                                )}
                                            </div>
                                        </CloudinaryUploadWidget>
                                        <div className="space-y-2">
                                            <p className="text-xs text-slate-500">Click image to upload. Recommended 500x500px.</p>
                                            {formData.logo && <p className="text-xs text-green-600">✓ Logo uploaded</p>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Cover Image</label>
                                    <CloudinaryUploadWidget onUpload={(res) => setFormData({ ...formData, coverImage: res.secure_url })}>
                                        <div className="h-32 w-full rounded-lg bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 transition-colors overflow-hidden">
                                            {formData.coverImage ? (
                                                <img src={formData.coverImage} alt="Cover" className="h-full w-full object-cover" />
                                            ) : (
                                                <div className="text-center">
                                                    <ImageIcon className="h-8 w-8 mx-auto mb-2" />
                                                    <span className="text-sm">Click to upload cover photo</span>
                                                </div>
                                            )}
                                        </div>
                                    </CloudinaryUploadWidget>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Gallery Photos</CardTitle>
                                <CardDescription>Showcase your best work (Max 12).</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {formData.photos.map((url, i) => (
                                        <div key={i} className="aspect-square bg-slate-100 rounded-md relative group overflow-hidden">
                                            <img src={url} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button onClick={() => removePhoto(url)} className="text-white hover:text-red-400"><Trash2 className="h-5 w-5" /></button>
                                            </div>
                                        </div>
                                    ))}
                                    {formData.photos.length < 12 && (
                                        <CloudinaryUploadWidget onUpload={handlePhotoUpload}>
                                            <div className="aspect-square border-2 border-dashed border-slate-300 rounded-md flex flex-col items-center justify-center text-slate-400 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors cursor-pointer">
                                                <Plus className="h-6 w-6 mb-1" />
                                                <span className="text-xs font-medium">Add Photo</span>
                                            </div>
                                        </CloudinaryUploadWidget>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* === PROJECTS TAB === */}
                <TabsContent value="projects" className="space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>My Projects</CardTitle>
                                <CardDescription>Keep track of your portfolio projects.</CardDescription>
                            </div>
                            <Button size="sm" className="bg-[#0EA5E9] text-white">
                                <Plus className="h-4 w-4 mr-2" />
                                Add Project
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Mock Project Item */}
                                <div className="p-4 border border-slate-200 rounded-lg hover:border-[#0EA5E9] transition-colors bg-white">
                                    <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 sm:h-12 sm:w-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                                            <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <div>
                                                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Kitchen Renovation - Sandton</h4>
                                                    <p className="text-xs sm:text-sm text-slate-500">Completed Mar 2024 • Residential</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 text-xs">Completed</Badge>
                                                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm h-8 px-2">Edit</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 border border-slate-200 rounded-lg hover:border-[#0EA5E9] transition-colors bg-white">
                                    <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 sm:h-12 sm:w-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                                            <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <div>
                                                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Office Block Painting</h4>
                                                    <p className="text-xs sm:text-sm text-slate-500">Ongoing • Commercial</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className="text-[#0EA5E9] border-blue-200 bg-blue-50 text-xs">Ongoing</Badge>
                                                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm h-8 px-2">Edit</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Bottom Action Bar */}
            <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 mt-6 -mx-4 md:-mx-8 shadow-lg">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 justify-end">
                    {!builderId && (
                        <Button
                            variant="outline"
                            onClick={handleSaveDraft}
                            disabled={isSavingDraft}
                            className="sm:w-auto w-full"
                        >
                            {isSavingDraft ? 'Saving...' : 'Save Draft'}
                        </Button>
                    )}
                    <Button
                        className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white sm:w-auto w-full"
                        onClick={handleSaveClick}
                        disabled={isSaving}
                    >
                        {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                        {isSaving ? 'Saving...' : builderId ? 'Save Changes' : 'Create Profile'}
                    </Button>
                </div>
            </div>

            {/* Confirmation Dialog */}
            {showConfirmDialog && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Save Changes?</h3>
                        <p className="text-slate-600 mb-6">
                            Are you sure you want to save these changes to your profile? This will update your public listing immediately.
                        </p>
                        <div className="flex justify-end gap-3">
                            <Button
                                variant="outline"
                                onClick={() => setShowConfirmDialog(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white"
                                onClick={confirmSave}
                            >
                                <Save className="h-4 w-4 mr-2" />
                                Confirm & Save
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}
