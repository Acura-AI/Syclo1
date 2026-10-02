import React from 'react';
import { Compass, Megaphone, Palette, Filter, UserCheck, TrendingUp } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const FeaturedApproach: React.FC = () => {
  const pillars = [
    {
      title: 'Property Positioning',
      subtitle: 'Finding the exact commercial angle',
      description:
        'We analyze your inventory’s price point, architectural layout, neighborhood infrastructure, and competitive alternatives to frame a compelling proposition for specific buyer brackets.',
      icon: Compass,
    },
    {
      title: 'Paid Acquisition',
      subtitle: 'Targeting active capital',
      description:
        'We orchestrate targeted ad distribution across search intent, premium social channels, and investor feeds, capturing prospects actively searching for properties in your region.',
      icon: Megaphone,
    },
    {
      title: 'Creative Testing',
      subtitle: 'Isolating high-intent visual angles',
      description:
        'We develop and test real photography, drone aerials, floor plans, and walk-through teasers to discover which assets evoke genuine buyer enquiries without misleading gimmicks.',
      icon: Palette,
    },
    {
      title: 'Lead Capture',
      subtitle: 'Frictionless, transparent intake',
      description:
        'Fast-loading property landing environments and instant WhatsApp enquiry flows ensure interested buyers can easily request price sheets, brochures, or a callback.',
      icon: Filter,
    },
    {
      title: 'Enquiry Qualification',
      subtitle: 'Separating buyers from curiosity seekers',
      description:
        'Every incoming enquiry is checked against key criteria: verified phone number, buying timeframe, budget alignment, and property suitability before routing to your sales team.',
      icon: UserCheck,
    },
    {
      title: 'Campaign Optimization',
      subtitle: 'Iterative ground-truth refinement',
      description:
        'We hold regular alignment checkpoints with your ground sales team to evaluate site visit feedback and reallocate ad budgets toward the buyer profiles converting on site.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 sm:py-36 border-t border-white/[0.08] bg-[#090a0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Large Editorial Headline with FadeIn */}
        <FadeIn>
          <div className="max-w-4xl mb-16 sm:mb-24">
            <span className="text-xs uppercase tracking-[0.28em] text-[#c5a980] font-medium block mb-6">
              Featured Strategic Approach
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#f4f3ef] font-normal leading-[1.08] tracking-tight mb-8">
              Your inventory.
              <br />
              <span className="italic text-[#c5a980]">Our acquisition engine.</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#a1a1aa] font-light max-w-2xl leading-relaxed">
              A cohesive real estate performance system designed to eliminate idle listings and supply your sales team with serious buyers.
            </p>
          </div>
        </FadeIn>

        {/* 6 Engine Pillars - Clean 3x2 Grid with Staggered FadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title} delay={index * 80} className="h-full">
                <div className="bg-[#0e0f13] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#13151b] transition-colors duration-200 h-full">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono tracking-widest text-[#c5a980]">
                        PILLAR 0{index + 1}
                      </span>
                      <Icon className="w-5 h-5 text-[#a1a1aa]" />
                    </div>

                    <h3 className="text-xl font-serif text-[#f4f3ef] mb-1.5">
                      {pillar.title}
                    </h3>
                    <span className="text-xs text-[#c5a980] font-light block mb-4">
                      {pillar.subtitle}
                    </span>

                    <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#a1a1aa]/70 font-mono">
                      System Component
                    </span>
                    <span className="text-xs text-[#c5a980]">Active</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Architectural Image Banner with FadeIn */}
        <FadeIn delay={150}>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 bg-[#121317] p-4 sm:p-6">
            <div className="lg:col-span-7 overflow-hidden aspect-[16/9] bg-[#1a1b22]">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
                alt="Modern geometric residential facade reflecting warm evening ambient light"
                className="w-full h-full object-cover filter brightness-90"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-5 p-4 sm:p-6 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a980] font-medium">
                Zero Generic Templates
              </span>
              <h4 className="text-2xl font-serif text-[#f4f3ef]">
                Every campaign is tailored to the physical asset and exact target buyer.
              </h4>
              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                Whether you are offloading the last 8 penthouse units of an ultra-luxury tower or launching a 200-plot layout, the audience targeting, message framing, and enquiry qualification are engineered from scratch for your asset.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

