'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle, Clock, Building } from 'lucide-react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after showing success
        setTimeout(() => {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        if (isSubmitted) setIsSubmitted(false);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Hero */}
            <div className="container mx-auto px-4 pt-8">
                <div className="bg-slate-900 text-white py-16 px-6 md:px-8 rounded-2xl">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Have a question or need assistance? Our team is ready to help you find the right builder or grow your business.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-[#0EA5E9] flex-shrink-0">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Email Us</p>
                                        <p className="text-slate-500 text-sm mb-1">Our friendly team is here to help.</p>
                                        <a href="mailto:info@yobuildplus.co.za" className="text-[#0EA5E9] font-medium hover:underline">info@yobuildplus.co.za</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Call Us</p>
                                        <p className="text-slate-500 text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+27123456789" className="text-[#0EA5E9] font-medium hover:underline">+27 12 345 6789</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Visit Us</p>
                                        <p className="text-slate-500 text-sm mb-1">Come say hello at our office.</p>
                                        <p className="text-slate-600 text-sm">123 Construction Ave, Sandton<br />Johannesburg, 2196</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Business Hours</p>
                                        <p className="text-slate-600 text-sm">Monday - Friday: 8am - 5pm</p>
                                        <p className="text-slate-600 text-sm">Saturday: 9am - 1pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Chat Card */}
                        <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] p-6 rounded-2xl text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="h-6 w-6" />
                                <h3 className="text-lg font-bold">Live Chat Support</h3>
                            </div>
                            <p className="text-blue-100 mb-6 text-sm">
                                Need immediate assistance? Get accurate answers in minutes from our support team.
                            </p>
                            <Button className="w-full bg-white text-[#0EA5E9] hover:bg-slate-100 font-semibold rounded-xl">
                                Start Chat
                            </Button>
                        </div>

                        {/* For Builders Card */}
                        <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] p-6 rounded-2xl text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <Building className="h-6 w-6" />
                                <h3 className="text-lg font-bold">Are You a Builder?</h3>
                            </div>
                            <p className="text-orange-100 mb-6 text-sm">
                                Join our platform and get access to thousands of potential clients looking for your services.
                            </p>
                            <Button asChild className="w-full bg-white text-[#F97316] hover:bg-slate-100 font-semibold rounded-xl">
                                <a href="/get-listed">List Your Business</a>
                            </Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
                            <p className="text-slate-500 mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                            {isSubmitted ? (
                                <div className="py-12 text-center">
                                    <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First name *</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                className="bg-slate-50 h-12 rounded-xl"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last name *</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                className="bg-slate-50 h-12 rounded-xl"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="bg-slate-50 h-12 rounded-xl"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="082 123 4567"
                                                className="bg-slate-50 h-12 rounded-xl"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            placeholder="How can we help?"
                                            className="bg-slate-50 h-12 rounded-xl"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            className="bg-slate-50 min-h-[150px] rounded-xl resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0369A1] px-8 h-12 text-base font-semibold rounded-xl shadow-lg shadow-[#0EA5E9]/25"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-12">
                    <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="bg-slate-100 rounded-xl h-[300px] flex items-center justify-center">
                            <div className="text-center text-slate-400">
                                <MapPin className="h-12 w-12 mx-auto mb-3" />
                                <p className="font-medium">Interactive Map</p>
                                <p className="text-sm">123 Construction Ave, Sandton, Johannesburg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
