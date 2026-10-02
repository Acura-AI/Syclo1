import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Target } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface HeroProps {
  onDiscussClick: () => void;
  onHowItWorksClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscussClick, onHowItWorksClick }) => {
  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Subtle ambient lighting layer - dark charcoal luxury tone */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,#1f2127,transparent_70%)]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow & Headline with FadeIn */}
          <FadeIn>
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-[13px] tracking-[0.28em] uppercase text-[#c5a980] font-medium mb-6">
              <span>REAL ESTATE</span>
              <span className="text-[#a1a1aa]/40" aria-hidden="true">·</span>
              <span>PERFORMANCE</span>
              <span className="text-[#a1a1aa]/40" aria-hidden="true">·</span>
              <span>SALES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-serif text-[#f4f3ef] font-normal tracking-tight leading-[1.08] mb-8">
              More Enquiries.
              <br />
              More Conversations.
              <br />
              <span className="italic text-[#c5a980] font-serif font-light">More Property Sold.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Syclo helps developers, property dealers and real estate businesses generate qualified buyer enquiries for their available inventory — without adding another full-time sales team.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
              <button
                onClick={onDiscussClick}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c5a980] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a980]"
              >
                <span>Discuss a Property</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onHowItWorksClick}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold border border-white/20 text-[#f4f3ef] hover:border-[#c5a980] hover:text-[#c5a980] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a980]"
              >
                <span>See How It Works</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Hero Visual - High-end modern architectural property imagery with subtle FadeIn */}
        <FadeIn delay={150}>
          <div className="relative mt-4 border border-white/10 bg-[#121316] p-2 sm:p-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#16171c]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Contemporary architectural residential estate showcasing modern design and glass facades"
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
                loading="eager"
              />

              {/* Dark gradient overlay for editorial elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/30 pointer-events-none" />

              {/* Floating subtle data-style markers */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-[#0b0c0e]/85 backdrop-blur-md border border-white/10 px-4 py-3 sm:px-6 sm:py-3.5">
                  <div className="flex items-center gap-2.5">
                    <Target className="w-3.5 h-3.5 text-[#c5a980]" />
                    <span className="text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#f4f3ef] font-medium">
                      Qualified Enquiries
                    </span>
                  </div>
                  <span className="hidden sm:inline text-white/20" aria-hidden="true">|</span>
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-3.5 h-3.5 text-[#c5a980]" />
                    <span className="text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#f4f3ef] font-medium">
                      Property Campaigns
                    </span>
                  </div>
                  <span className="hidden sm:inline text-white/20" aria-hidden="true">|</span>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a980]" />
                    <span className="text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#f4f3ef] font-medium">
                      Performance Focused
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-[11px] text-[#a1a1aa] tracking-widest uppercase bg-[#0b0c0e]/80 border border-white/10 px-4 py-3.5">
                  <span>Inventory Acquisition System</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Core Positioning Callout */}
        <FadeIn delay={220}>
          <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-baseline justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c5a980] font-medium">
              Core Agency Positioning
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-[#f4f3ef] font-normal max-w-3xl">
              “We help property businesses turn available inventory into qualified buyer enquiries.”
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

