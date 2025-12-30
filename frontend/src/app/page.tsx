import Link from 'next/link';
import { Search, ArrowRight, CheckCircle, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CompanyListSection } from '@/components/sections/CompanyListSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)`
        }}
      >
        {/* Background Pattern - Subtle blurs */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F97316] rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2 opacity-30" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white">
              Find Trusted <span className="text-[#F97316]">Builders</span> & Contractors
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-white/90">
              Connect with verified professionals across South Africa. From builders to electricians,
              find the right expert for your project.
            </p>

            {/* Search Bar */}
            <form
              action="/builders"
              method="get"
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-xl mx-auto mb-6"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="search"
                  name="search"
                  placeholder="What do you need? e.g., plumber, roof repair..."
                  className="pl-12 h-12 md:h-14 text-slate-800 text-sm md:text-base rounded-lg shadow-lg border-2 border-white/20 bg-white focus:border-white"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 md:h-14 px-6 md:px-8 rounded-lg shadow-lg font-semibold bg-[#F97316] hover:bg-[#EA580C] text-white text-sm md:text-base"
              >
                Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* Secondary CTA */}
            <div className="mb-4 md:mb-6">
              <Link href="/list-business">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg font-medium transition-all bg-white/95 border-2 border-white text-[#0369A1] hover:bg-white hover:text-[#0284C7] text-sm md:text-base"
                >
                  List Your Business
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-3 text-sm text-white/80">
              <span>Popular:</span>
              <Link href="/category/electricians" className="hover:text-white transition-colors">Electricians</Link>
              <span className="text-white/40">•</span>
              <Link href="/category/plumbing" className="hover:text-white transition-colors">Plumbers</Link>
              <span className="text-white/40">•</span>
              <Link href="/category/roofing" className="hover:text-white transition-colors">Roofing</Link>
              <span className="text-white/40">•</span>
              <Link href="/category/solar-inverter" className="hover:text-white transition-colors">Solar</Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45.7C120 41 240 33 360 35.3C480 38 600 52 720 55.3C840 58 960 52 1080 45.7C1200 40 1320 33 1380 30L1440 27V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Verified Professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-[#F97316]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-[#0D9488]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#0284C7]/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#0284C7]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Emergency Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company List Section with Category Filtering */}
      <CompanyListSection />

      {/* CTA Section */}
      <section
        className="py-20 text-white"
        style={{
          background: `linear-gradient(135deg, #0369A1 0%, #0284C7 50%, #0EA5E9 100%)`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Are You a Builder or Contractor?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Join Yobuildplus and connect with thousands of potential customers looking for your services.
          </p>
          <Button
            size="lg"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg font-semibold shadow-lg"
          >
            List Your Business Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
