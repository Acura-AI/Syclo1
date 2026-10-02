import React from 'react';
import { Target, BarChart2, Zap, FileText } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const WhySyclo: React.FC = () => {
  const points = [
    {
      title: 'PROPERTY-FIRST STRATEGY',
      tagline: 'Campaigns are built around the actual property, location and buyer profile.',
      description:
        'We do not reuse generic real-estate copy or stock creatives. We dissect what makes your property compelling — architectural specifications, pricing bracket, micro-neighborhood catalysts, and exact buyer demographics.',
      icon: Target,
    },
    {
      title: 'PERFORMANCE FOCUS',
      tagline: 'We care about enquiries and conversations, not vanity metrics.',
      description:
        'Impressions, video views, and social likes do not pay project carrying costs. We evaluate our work on validated buyer enquiries, direct WhatsApp dialogues, and site visit schedules for your sales desk.',
      icon: BarChart2,
    },
    {
      title: 'LEAN MODEL',
      tagline: "You don't need to build another internal marketing department.",
      description:
        'Avoid the heavy overhead of recruiting in-house media buyers, copywriters, and funnel architects. Syclo plugs in as your dedicated performance marketing arm on an agile, inventory-aligned basis.',
      icon: Zap,
    },
    {
      title: 'TRANSPARENT PROCESS',
      tagline: 'Clear campaign scope, clear expectations and clear commercial terms.',
      description:
        'No ambiguous retainers or hidden fees. We define agreed qualification criteria, daily lead distribution methods, and commercial milestone structures before launching any paid campaign.',
      icon: FileText,
    },
  ];

  return (
    <section id="why-syclo" className="py-24 sm:py-32 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.24em] text-[#c5a980] font-medium block mb-4">
                Agency Principles
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#f4f3ef] font-normal leading-[1.15] mb-6">
                Not another marketing vendor.
              </h2>
              <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
                Most marketing agencies sell creative concepts and impressions. We built Syclo specifically for property developers and dealers who need qualified prospect conversations to move inventory.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <FadeIn key={pt.title} delay={idx * 100} className="h-full">
                  <div className="bg-[#121316] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#c5a980]/40 transition-colors duration-300 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono tracking-widest text-[#c5a980]">
                          0{idx + 1}
                        </span>
                        <Icon className="w-4 h-4 text-[#a1a1aa]" />
                      </div>

                      <h3 className="text-base sm:text-lg font-serif tracking-wider text-[#f4f3ef] mb-2">
                        {pt.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#c5a980] font-medium leading-relaxed mb-4">
                        {pt.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Agency vs Vendor Comparison Bar with FadeIn */}
        <FadeIn delay={150}>
          <div className="border border-white/10 bg-[#0e1014] p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              <div className="space-y-4 md:pr-8">
                <span className="text-xs uppercase tracking-widest text-[#a1a1aa] font-medium">
                  Traditional Marketing Agency
                </span>
                <ul className="space-y-2.5 text-sm text-[#a1a1aa] font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400/80 font-mono text-xs">✕</span>
                    <span>Focuses on brand awareness, clicks, and page likes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400/80 font-mono text-xs">✕</span>
                    <span>Charges high upfront retainers regardless of results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400/80 font-mono text-xs">✕</span>
                    <span>Dumps unverified leads without budget or intent filtering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400/80 font-mono text-xs">✕</span>
                    <span>Treats real estate like any generic consumer e-commerce good</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs uppercase tracking-widest text-[#c5a980] font-medium">
                  The Syclo Performance Standard
                </span>
                <ul className="space-y-2.5 text-sm text-[#f4f3ef] font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c5a980] font-mono text-xs">✓</span>
                    <span>Focuses on verified buyer enquiries and booked site visit opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c5a980] font-mono text-xs">✓</span>
                    <span>Commercial alignment tied to campaign scope & performance milestones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c5a980] font-mono text-xs">✓</span>
                    <span>Pre-qualifies enquiries by timeline, budget, and property specifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c5a980] font-mono text-xs">✓</span>
                    <span>Built exclusively for real estate inventory velocity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

