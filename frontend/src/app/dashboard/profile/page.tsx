'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
    Save, Building2, Phone, Mail, Globe, MapPin,
    X, ImageIcon, Banknote, Plus, Briefcase, Trash2, Loader2, CheckCircle2
} from 'lucide-react';
import { buildersApi } from '@/lib/api';
import CloudinaryUploadWidget from '@/components/ui/cloudinary-upload-widget';

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
}

export default function ProfileEditorPage() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [builderId, setBuilderId] = useState<string | null>(null);

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
    });

    const [newService, setNewService] = useState('');
    const [newArea, setNewArea] = useState('');

    // Fetch builder data on mount
    useEffect(() => {
        async function fetchBuilderData() {
            try {
                setIsLoading(true);
                // For demo, we'll use the first builder from the list
                // In production, this would come from the session
                const builders = await buildersApi.getAll();
                if (builders.length > 0) {
                    const builder = builders[0]; // Use first builder for demo
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
                        serviceAttributes: builder.serviceAttributes || [],
                        logo: builder.logo || null,
                        coverImage: builder.coverImage || null,
                        photos: builder.photos || [],
                    });
                }
            } catch (error) {
                console.error('Failed to fetch builder data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBuilderData();
    }, []);

    // Handle save
    const handleSave = async () => {
        if (!builderId) return;

        try {
            setIsSaving(true);
            setSaveSuccess(false);

            await buildersApi.updateProfile(builderId, {
                name: formData.name,
                description: formData.description,
                phone: formData.phone,
                email: formData.email,
                website: formData.website,
                address: formData.address,
                logo: formData.logo || undefined,
                coverImage: formData.coverImage || undefined,
                photos: formData.photos,
                callOutFee: formData.callOutFee,
                hourlyRate: formData.hourlyRate,
                serviceAreas: formData.serviceAreas,
                serviceAttributes: formData.serviceAttributes,
            });

            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (error) {
            console.error('Failed to save profile:', error);
            alert('Failed to save profile. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    // Handlers
    const handleAddService = (e: React.FormEvent) => {
        e.preventDefault();
        if (newService && !formData.serviceAttributes.includes(newService)) {
            setFormData({ ...formData, serviceAttributes: [...formData.serviceAttributes, newService] });
            setNewService('');
        }
    };

    const removeService = (item: string) => {
        setFormData({ ...formData, serviceAttributes: formData.serviceAttributes.filter(s => s !== item) });
    };

    const handleAddArea = (e: React.FormEvent) => {
        e.preventDefault();
        if (newArea && !formData.serviceAreas.includes(newArea)) {
            setFormData({ ...formData, serviceAreas: [...formData.serviceAreas, newArea] });
            setNewArea('');
        }
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
                    <h1 className="text-3xl font-bold text-slate-900">Edit Profile</h1>
                    <p className="text-slate-500">Manage your complete public listing information.</p>
                </div>
                <div className="flex gap-3 items-center">
                    {saveSuccess && (
                        <span className="flex items-center text-green-600 text-sm">
                            <CheckCircle2 className="h-4 w-4 mr-1" /> Saved!
                        </span>
                    )}
                    <Button variant="outline" onClick={() => window.open(`/builders/${formData.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}>
                        View Public Profile
                    </Button>
                    <Button
                        className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white"
                        onClick={handleSave}
                        disabled={isSaving}
                    >
                        {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4 lg:w-[600px] mb-8">
                    <TabsTrigger value="general">Details</TabsTrigger>
                    <TabsTrigger value="rates">Services & Rates</TabsTrigger>
                    <TabsTrigger value="media">Media & Portfolio</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Year Established</label>
                                    <Input
                                        value={formData.yearStarted}
                                        onChange={(e) => setFormData({ ...formData, yearStarted: parseInt(e.target.value) || 2020 })}
                                        type="number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                <textarea
                                    className="w-full min-h-[120px] px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:border-[#0EA5E9] text-sm"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                                <p className="text-xs text-slate-500 mt-1">Tell customers what makes you unique. Min 100 characters.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Team Size</label>
                                    <Input
                                        value={formData.teamSize}
                                        onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) || 1 })}
                                        type="number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Projects Completed</label>
                                    <Input
                                        value={formData.projectsCompleted}
                                        onChange={(e) => setFormData({ ...formData, projectsCompleted: parseInt(e.target.value) || 0 })}
                                        type="number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Reg No.</label>
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Physical Address / Headquarters</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <Input
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="pl-10"
                                        />
                                    </div>
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Call Out Fee (R)</label>
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
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Standard Hourly Rate (R)</label>
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
                                <label className="block text-sm font-medium text-slate-700 mb-3">Skills & Services</label>
                                <div className="flex flex-wrap gap-2 mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    {formData.serviceAttributes.map(service => (
                                        <Badge key={service} variant="secondary" className="gap-1 pl-3 pr-2 py-1.5 text-sm bg-white border-slate-200">
                                            {service}
                                            <button onClick={() => removeService(service)} className="hover:text-red-500 text-slate-400 ml-1">
                                                <X className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                    {formData.serviceAttributes.length === 0 && <span className="text-slate-400 text-sm italic">No services added yet.</span>}
                                </div>
                                <form onSubmit={handleAddService} className="flex gap-2 max-w-md">
                                    <Input
                                        placeholder="Add service (e.g. Waterproofing)"
                                        value={newService}
                                        onChange={(e) => setNewService(e.target.value)}
                                    />
                                    <Button type="submit" variant="outline" disabled={!newService}><Plus className="h-4 w-4" /></Button>
                                </form>
                            </div>

                            {/* Service Areas */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-3">Service Areas (Suburbs/Cities)</label>
                                <div className="flex flex-wrap gap-2 mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    {formData.serviceAreas.map(area => (
                                        <Badge key={area} variant="secondary" className="gap-1 pl-3 pr-2 py-1.5 text-sm bg-white border-slate-200">
                                            <MapPin className="h-3 w-3 text-slate-400" />
                                            {area}
                                            <button onClick={() => removeArea(area)} className="hover:text-red-500 text-slate-400 ml-1">
                                                <X className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                    {formData.serviceAreas.length === 0 && <span className="text-slate-400 text-sm italic">No areas added yet.</span>}
                                </div>
                                <form onSubmit={handleAddArea} className="flex gap-2 max-w-md">
                                    <Input
                                        placeholder="Add area (e.g. Midrand)"
                                        value={newArea}
                                        onChange={(e) => setNewArea(e.target.value)}
                                    />
                                    <Button type="submit" variant="outline" disabled={!newArea}><Plus className="h-4 w-4" /></Button>
                                </form>
                            </div>
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
                                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-[#0EA5E9] transition-colors bg-white">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-slate-100 rounded flex items-center justify-center">
                                            <Briefcase className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800">Kitchen Renovation - Sandton</h4>
                                            <p className="text-sm text-slate-500">Completed Mar 2024 • Residential</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Completed</Badge>
                                        <Button variant="ghost" size="sm">Edit</Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-[#0EA5E9] transition-colors bg-white">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-slate-100 rounded flex items-center justify-center">
                                            <Briefcase className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800">Office Block Painting</h4>
                                            <p className="text-sm text-slate-500">Ongoing • Commercial</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-[#0EA5E9] border-blue-200 bg-blue-50">Ongoing</Badge>
                                        <Button variant="ghost" size="sm">Edit</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
