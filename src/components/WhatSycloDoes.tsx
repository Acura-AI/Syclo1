import React, { useState } from 'react';
import { Target, Users, CheckCircle2, ChevronRight, PhoneCall } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const WhatSycloDoes: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      index: '01',
      title: 'TARGETED CAMPAIGNS',
      tagline: 'Reach relevant audiences based on property type, location and buyer intent.',
      icon: Target,
      summary:
        'We construct hyper-targeted acquisition funnels designed around the specific architectural, commercial, or geographic traits of your inventory.',
      details: [
        'Micro-market & demographic targeting based on property ticket size',
        'Multi-channel deployment across high-intent search, social, and investor networks',
        'Custom asset curation: floor plans, unit showcases, and project narrative',
        'Continuous audience testing to isolate genuine end-users vs speculative clicks',
      ],
    },
    {
      index: '02',
      title: 'LEAD GENERATION',
      tagline: 'Turn attention into enquiries from potential buyers.',
      icon: Users,
      summary:
        'We convert passive interest into direct, structured enquiries with verified contact details and initial property intent.',
      details: [
        'High-converting property intake landing environments and direct WhatsApp prompts',
        'Transparent capture of buyer intent: budget range, timeline, and preferred layout',
        'Zero generic click-bait: prospective buyers know the price band and location upfront',
        'Fast delivery of enquiry data directly into your preferred channel or CRM',
      ],
    },
    {
      index: '03',
      title: 'SALES SUPPORT',
      tagline: 'Organize and qualify incoming enquiries so the property team can focus on conversations and site visits.',
      icon: CheckCircle2,
      summary:
        'We filter, organize, and structure incoming contacts so your closing team receives only high-potential buyer conversations.',
      details: [
        'Enquiry pre-qualification based on verified phone numbers, buying timeline, and budget',
        'Removal of spam, irrelevant solicitations, and unverified contacts',
        'Structured briefs for your sales managers prior to scheduling site visits',
        'Bi-weekly feedback alignment to refine campaign targeting based on ground visits',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-white/[0.08] bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with FadeIn */}
        <FadeIn>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.24em] text-[#c5a980] font-medium block mb-4">
              Our Core Role
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f4f3ef] font-normal leading-[1.15] mb-6">
              We focus on the part before the closing.
            </h2>
            <p className="text-lg text-[#a1a1aa] font-light leading-relaxed">
              Syclo builds targeted campaigns designed to put the right property in front of people who may actually be interested.
            </p>
          </div>
        </FadeIn>

        {/* 3 Core Service Cards with Staggered FadeIn */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = activeService === idx;

            return (
              <FadeIn key={service.index} delay={idx * 120} className="h-full">
                <div
                  onClick={() => setActiveService(idx)}
                  className={`cursor-pointer border transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between h-full ${
                    isSelected
                      ? 'bg-[#15171d] border-[#c5a980] shadow-lg shadow-black/40'
                      : 'bg-[#101115] border-white/[0.08] hover:border-white/20 hover:bg-[#131419]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm font-mono tracking-widest text-[#c5a980]">
                        {service.index}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#c5a980]' : 'text-[#a1a1aa]'}`} />
                    </div>

                    <h3 className="text-xl font-serif text-[#f4f3ef] tracking-wide mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#a1a1aa] font-light leading-relaxed mb-6">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs tracking-wider uppercase">
                    <span className={isSelected ? 'text-[#c5a980] font-medium' : 'text-[#a1a1aa]'}>
                      {isSelected ? 'Viewing Scope Breakdown' : 'Click to inspect scope'}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'rotate-90 text-[#c5a980]' : 'text-[#a1a1aa]'
                      }`}
                    />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Interactive Scope Deep-Dive Panel with FadeIn */}
        <FadeIn delay={200}>
          <div className="border border-white/10 bg-[#121419] p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a980] font-medium block mb-2">
                  Operational Scope Breakdown — Stage {services[activeService].index}
                </span>
                <h4 className="text-2xl font-serif text-[#f4f3ef]">
                  {services[activeService].title}
                </h4>
              </div>
              <p className="text-sm text-[#a1a1aa] max-w-lg font-light">
                {services[activeService].summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {services[activeService].details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a980] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[#eae7e1] font-light leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#a1a1aa]">
              <span>Seamless handover to your on-site property sales executives</span>
              <div className="flex items-center gap-2 text-[#c5a980]">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Direct WhatsApp & Call Routing Ready</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

