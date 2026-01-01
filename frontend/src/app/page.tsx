import Link from 'next/link';
import { Search, ArrowRight, CheckCircle, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CompanyListSection } from '@/components/sections/CompanyListSection';
import { QuotationCounter } from '@/components/ui/QuotationCounter';
import { ConversationalSearch } from '@/components/search/ConversationalSearch';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6">
        <div className="text-white bg-slate-900 rounded-2xl">
          <div className="px-4 py-8 md:py-10 lg:py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight text-white">
                Find Trusted <span className="text-[#F97316]">Contractors</span> in SA
              </h1>
              <p className="text-sm md:text-base mb-5 md:mb-6 max-w-2xl mx-auto text-slate-300">
                Connect with verified professionals across South Africa. From builders to electricians,
                find the right expert for your project.
              </p>

              {/* Conversational Search */}
              <ConversationalSearch className="mb-4" />

              {/* Secondary CTA */}
              <div className="mt-4">
                <Link href="/get-listed">
                  <Button
                    variant="outline"
                    size="default"
                    className="rounded-lg font-medium transition-all bg-white border-2 border-white text-slate-900 hover:bg-slate-100 text-xs md:text-sm"
                  >
                    List Your Business Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-3 md:py-8 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Mobile: Compact inline badges */}
          <div className="flex md:hidden justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0EA5E9]/10 rounded-full text-xs">
              <CheckCircle className="h-3 w-3 text-[#0EA5E9]" />
              <span className="font-semibold text-slate-700">500+ Pros</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#F97316]/10 rounded-full text-xs">
              <Star className="h-3 w-3 text-[#F97316]" />
              <span className="font-semibold text-slate-700">4.8 Rating</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0D9488]/10 rounded-full text-xs">
              <Shield className="h-3 w-3 text-[#0D9488]" />
              <span className="font-semibold text-slate-700">Guaranteed</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0284C7]/10 rounded-full text-xs">
              <Clock className="h-3 w-3 text-[#0284C7]" />
              <span className="font-semibold text-slate-700">24/7</span>
            </span>
          </div>

          {/* Desktop: Full layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-12">
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
            <QuotationCounter />
          </div>
        </div>
      </section>

      {/* Company List Section with Category Filtering */}
      <CompanyListSection />

      {/* Payment Protection Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              Payment Protection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Your Money is Protected
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We hold your payment securely until the job is done. No more worrying about scams or unfinished work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm text-center">
              <div className="h-14 w-14 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Secure Escrow</h3>
              <p className="text-slate-600 text-sm">
                Pay directly to Yobuildplus. We hold your funds safely until project completion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm text-center">
              <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Verified Contractors</h3>
              <p className="text-slate-600 text-sm">
                Only pay for completed work. Contractors are vetted and reviewed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm text-center">
              <div className="h-14 w-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Milestone Payments</h3>
              <p className="text-slate-600 text-sm">
                Release funds in stages as work progresses. Stay in control.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Learn How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Are You a Builder or Contractor?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-600">
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
