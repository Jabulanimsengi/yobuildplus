import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // We created this manually
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Yobuildplus',
    description: 'Get in touch with the Yobuildplus team. We are here to help with any questions regarding finding builders or listing your business.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Hero */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">get in touch</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Have a question or need assistance? Our team is ready to help you find the right builder or grow your business.
                    </p>
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
                                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0EA5E9] flex-shrink-0">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">Email Us</p>
                                        <p className="text-slate-500 text-sm mb-1">Our friendly team is here to help.</p>
                                        <a href="mailto:info@yobuildplus.co.za" className="text-[#0EA5E9] font-medium hover:underline">info@yobuildplus.co.za</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">Call Us</p>
                                        <p className="text-slate-500 text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+27123456789" className="text-[#0EA5E9] font-medium hover:underline">+27 12 345 6789</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">Visit Us</p>
                                        <p className="text-slate-500 text-sm mb-1">Come say hello at our office.</p>
                                        <p className="text-slate-600 text-sm">123 Construction Ave, Sandton, Johannesburg, 2196</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0EA5E9] p-6 rounded-2xl text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="h-6 w-6" />
                                <h3 className="text-lg font-bold">Live Chat Support</h3>
                            </div>
                            <p className="text-blue-100 mb-6 text-sm">
                                Need immediate assistance? accurate answers in minutes.
                            </p>
                            <Button className="w-full bg-white text-[#0EA5E9] hover:bg-slate-100 font-semibold">
                                Start Chat
                            </Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" placeholder="John" className="bg-slate-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" placeholder="Doe" className="bg-slate-50" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="How can we help?" className="bg-slate-50" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[150px] w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <Button className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] px-8 h-12 text-lg">
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
