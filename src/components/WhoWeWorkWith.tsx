import React, { useState } from 'react';
import { Building, Briefcase, Landmark, Compass, Home, Store, MapPin, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface WhoWeWorkWithProps {
  onDiscussClick: () => void;
}

export const WhoWeWorkWith: React.FC<WhoWeWorkWithProps> = ({ onDiscussClick }) => {
  const [activeSegment, setActiveSegment] = useState<number | null>(0);

  const segments = [
    {
      title: 'Property Developers',
      category: 'Enterprise / Large Scale',
      icon: Building,
      description: 'Firms managing multi-unit residential towers, gated townships, or phase launches seeking steady qualified enquiries across quarters.',
      valueProp: 'Rapid inventory turnover for ongoing phases without hiring massive internal call centres.',
    },
    {
      title: 'Real Estate Agencies',
      category: 'Brokerages & Channel Partners',
      icon: Briefcase,
      description: 'Established agencies holding mandated exclusive inventory needing reliable inbound buyer flow to keep their deal-makers closing.',
      valueProp: 'Scalable demand engine backing your mandate commitments.',
    },
    {
      title: 'Independent Property Dealers',
      category: 'Local Market Specialists',
      icon: Landmark,
      description: 'High-performing independent brokers with exclusive inventory mandates looking to expand reach beyond their local neighborhood circle.',
      valueProp: 'Digital acquisition scale that levels the playing field with large broker networks.',
    },
    {
      title: 'Builders & Promoters',
      category: 'Mid-Scale Projects',
      icon: Compass,
      description: 'Regional builders completing 10 to 50 unit luxury or mid-range developments who need immediate site visits to hit handover milestones.',
      valueProp: 'Fast-moving 45-day campaigns aimed directly at local upgrade buyers and end-users.',
    },
    {
      title: 'Residential Projects',
      category: 'High-Rises, Duplexes & Villas',
      icon: Home,
      description: 'Ready-to-move-in or near-completion homes where carrying inventory incurs monthly financing costs and maintenance.',
      valueProp: 'Hyper-focused campaigns targeting active homebuyers ready to finalize within 30-60 days.',
    },
    {
      title: 'Commercial Properties',
      category: 'Offices, High-Street Retail & SCOs',
      icon: Store,
      description: 'Office floors, retail showrooms, co-working spaces, and commercial plazas requiring sophisticated investor and corporate outreach.',
      valueProp: 'B2B investor profiling targeting HNWIs, doctors, NRIs, and business owners seeking rental yield.',
    },
    {
      title: 'Plots & Land Projects',
      category: 'Plotted Layouts & Farm Estates',
      icon: MapPin,
      description: 'Gated plotted developments, farmhouse communities, and strategic land parcels needing clear location storytelling and legal confidence.',
      valueProp: 'Targeted reach across long-term wealth creators, second-home seekers, and land investors.',
    },
  ];

  return (
    <section id="who-we-work-with" className="py-24 sm:py-32 border-t border-white/[0.08] bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with FadeIn */}
        <FadeIn>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.24em] text-[#c5a980] font-medium block mb-4">
              Client Compatibility
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f4f3ef] font-normal leading-[1.15] mb-6">
              Built for property businesses that already have something to sell.
            </h2>
            <p className="text-lg text-[#a1a1aa] font-light leading-relaxed">
              We partner with businesses that have clear titles, actual inventory, and an active team on the ground ready to conduct walkthroughs and close deals.
            </p>
          </div>
        </FadeIn>

        {/* 7 Segment Cards Grid with Staggered FadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, idx) => {
            const Icon = segment.icon;
            const isHovered = activeSegment === idx;

            return (
              <FadeIn key={segment.title} delay={idx * 80} className="h-full">
                <div
                  onMouseEnter={() => setActiveSegment(idx)}
                  className={`bg-[#121316] border transition-all duration-300 p-8 flex flex-col justify-between h-full ${
                    isHovered
                      ? 'border-[#c5a980] bg-[#14161c]'
                      : 'border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono tracking-widest text-[#c5a980]">
                        {segment.category}
                      </span>
                      <Icon className="w-5 h-5 text-[#a1a1aa]" />
                    </div>

                    <h3 className="text-xl font-serif text-[#f4f3ef] mb-3">
                      {segment.title}
                    </h3>

                    <p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-6">
                      {segment.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] uppercase tracking-wider text-[#c5a980] block mb-1">
                      Syclo Advantage
                    </span>
                    <p className="text-xs text-[#eae7e1] font-light">
                      {segment.valueProp}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}

          {/* 8th Slot: Fast Consultation Card */}
          <FadeIn delay={segments.length * 80} className="h-full">
            <div className="bg-[#1a1714] border border-[#c5a980]/40 p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#c5a980] block mb-6">
                  HAVE INVENTORY TO MOVE?
                </span>
                <h3 className="text-2xl font-serif text-[#f4f3ef] mb-3">
                  Review your property with our strategy team
                </h3>
                <p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-6">
                  Send us your project details, price ranges, and target timeline. We will review inventory readiness and outline an acquisition strategy.
                </p>
              </div>
              <button
                onClick={onDiscussClick}
                type="button"
                className="inline-flex items-center justify-between px-5 py-3.5 text-xs uppercase tracking-wider font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c5a980] transition-colors cursor-pointer"
              >
                <span>Discuss a Property</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

