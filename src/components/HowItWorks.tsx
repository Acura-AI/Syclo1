import React, { useState } from 'react';
import { Building2, Layers, MessageSquare, Handshake, Info } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'PROPERTY',
      description: 'You give us the property or inventory you want to move.',
      deliverable: 'Inventory brief, target price points, floor plans & location USPs.',
      icon: Building2,
    },
    {
      number: '02',
      title: 'CAMPAIGN',
      description: 'We build and launch a targeted acquisition campaign.',
      deliverable: 'Audience modeling, custom creative angles, landing funnels & ads.',
      icon: Layers,
    },
    {
      number: '03',
      title: 'ENQUIRIES',
      description: 'Potential buyers enquire about the property.',
      deliverable: 'Validated contact numbers, intent checks, buyer timeline & preferences.',
      icon: MessageSquare,
    },
    {
      number: '04',
      title: 'CLOSING',
      description: 'Your team handles visits, negotiations and the final sale.',
      deliverable: 'Your site sales managers conduct walkthroughs and close contracts.',
      icon: Handshake,
    },
  ];

  // Interactive Model Simulation for inventory types
  const [selectedInventoryType, setSelectedInventoryType] = useState<string>('Luxury Apartments');

  const inventoryOptions = [
    {
      id: 'Luxury Apartments',
      label: 'Residential / Apartments',
      typicalFocus: 'End-users, upgrade buyers, NRIs & high-net-worth families looking for prime locations.',
      campaignWindow: '30 - 60 day active cycle',
      milestoneFocus: 'Verified phone/WhatsApp enquiries + scheduled site visit handovers',
    },
    {
      id: 'Villas & Penthouses',
      label: 'Villas & Penthouses',
      typicalFocus: 'Affluent homeowners, entrepreneurs, and senior executives seeking exclusivity.',
      campaignWindow: '45 - 90 day targeted private preview',
      milestoneFocus: 'Pre-vetted private site visits and qualified direct introductions',
    },
    {
      id: 'Commercial Properties',
      label: 'Commercial & Retail',
      typicalFocus: 'Yield investors, corporate tenants, retail franchises, and medical/office suites.',
      campaignWindow: '30 - 60 day B2B acquisition cycle',
      milestoneFocus: 'Corporate buyer / investor enquiries with documented capital capacity',
    },
    {
      id: 'Plots & Land',
      label: 'Plots & Land Developments',
      typicalFocus: 'Long-term capital appreciation investors, holiday home builders, and land buyers.',
      campaignWindow: '30 - 60 day launch/phase campaign',
      milestoneFocus: 'Location-grounded enquiries seeking masterplan and plot demarcations',
    },
  ];

  const currentOption = inventoryOptions.find((o) => o.id === selectedInventoryType) || inventoryOptions[0];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with FadeIn */}
        <FadeIn>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.24em] text-[#c5a980] font-medium block mb-4">
              Workflow Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f4f3ef] font-normal leading-[1.15] mb-6">
              A simple performance-first model.
            </h2>
            <p className="text-lg text-[#a1a1aa] font-light leading-relaxed">
              A clean, four-stage division of responsibility that keeps incentives aligned and execution fast.
            </p>
          </div>
        </FadeIn>

        {/* Horizontal 4-step Process Cards with Staggered FadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={idx * 100} className="h-full">
                <div className="bg-[#121316] border border-white/[0.08] p-8 flex flex-col justify-between relative group hover:border-[#c5a980]/50 transition-all duration-300 h-full">
                  {/* Step Connector Line on Desktop */}
                  {idx < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-10 -right-3 w-6 h-[1px] bg-white/20 z-20 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono tracking-widest text-[#c5a980]">
                        STEP {step.number}
                      </span>
                      <Icon className="w-4 h-4 text-[#a1a1aa]" />
                    </div>

                    <h3 className="text-xl font-serif tracking-wider text-[#f4f3ef] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#f4f3ef]/90 font-light leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] uppercase tracking-wider text-[#a1a1aa] block mb-1">
                      Key Activity
                    </span>
                    <p className="text-xs text-[#a1a1aa]/80 font-light">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Small Note: Commercial Terms Callout */}
        <FadeIn delay={150}>
          <div className="bg-[#101114] border border-white/[0.08] p-6 sm:p-8 flex items-start gap-4 mb-16">
            <Info className="w-5 h-5 text-[#c5a980] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm sm:text-base text-[#f4f3ef] font-light leading-relaxed">
                <span className="font-medium text-[#c5a980]">Performance Note:</span> Commercial terms are agreed before a campaign begins and may be structured around the campaign scope or agreed performance milestones.
              </p>
              <p className="text-xs text-[#a1a1aa] mt-2 font-light">
                We align our commercial interests directly with campaign momentum and qualified buyer volume.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Interactive Model Preview by Inventory Type with FadeIn */}
        <FadeIn delay={200}>
          <div className="border border-white/10 bg-[#0f1115] p-8 sm:p-10">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a980] font-medium block mb-1">
                  Campaign Structuring Preview
                </span>
                <h4 className="text-xl font-serif text-[#f4f3ef]">
                  How we tailor the model to your specific asset class
                </h4>
              </div>
              <div className="text-xs text-[#a1a1aa]">Select your inventory type:</div>
            </div>

            {/* Interactive filter tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
              {inventoryOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedInventoryType(opt.id)}
                  className={`px-4 py-3 text-xs tracking-wider font-medium text-left transition-all border ${
                    selectedInventoryType === opt.id
                      ? 'bg-[#1a1d24] border-[#c5a980] text-[#f4f3ef]'
                      : 'bg-[#121418] border-white/[0.06] text-[#a1a1aa] hover:text-[#f4f3ef] hover:border-white/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">Target Audience Profile</span>
                <p className="text-sm text-[#f4f3ef] font-light leading-relaxed">
                  {currentOption.typicalFocus}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">Campaign Window</span>
                <p className="text-sm text-[#f4f3ef] font-light leading-relaxed">
                  {currentOption.campaignWindow}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">Milestone Focus</span>
                <p className="text-sm text-[#c5a980] font-light leading-relaxed">
                  {currentOption.milestoneFocus}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

