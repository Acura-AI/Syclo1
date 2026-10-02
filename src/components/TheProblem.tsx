import React from 'react';
import { EyeOff, UserX, Clock } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const TheProblem: React.FC = () => {
  const problems = [
    {
      number: '01',
      title: 'Limited buyer reach',
      icon: EyeOff,
      description:
        'Relying solely on existing network contacts, passive aggregator listings, or traditional signage leaves prime inventory invisible to high-intent active buyers in and outside the immediate micro-market.',
      impact: 'Inventory stays dormant for months, creating carrying costs and lost momentum.',
    },
    {
      number: '02',
      title: 'Unqualified enquiries',
      icon: UserX,
      description:
        'Generic broad-brush marketing floods your phone lines with casual window shoppers, budget-mismatched leads, and non-serious callers who never book a physical site visit.',
      impact: 'Hours spent filtering noise rather than talking to genuine prospects with capital.',
    },
    {
      number: '03',
      title: 'Sales teams chasing weak prospects',
      icon: Clock,
      description:
        'Your most skilled sales managers end up bogged down in endless cold follow-ups and unverified contacts instead of focusing on high-value site walkthroughs, negotiations, and closing deals.',
      impact: 'Fatigued sales reps, delayed transactions, and sub-optimal inventory velocity.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with FadeIn */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.24em] text-[#c5a980] font-medium block mb-4">
                Market Reality
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#f4f3ef] font-normal leading-[1.15]">
                Good properties don't always reach the right buyers.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-white/[0.08] flex items-center">
              <p className="text-lg sm:text-xl text-[#a1a1aa] font-light leading-relaxed">
                Having inventory is one thing. Getting the right people to enquire, visit and seriously consider it is another.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3 Problem Cards - Staggered FadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <FadeIn key={problem.number} delay={idx * 120} className="h-full">
                <div className="bg-[#121316] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between h-full hover:border-[#c5a980]/40 transition-colors duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-2xl sm:text-3xl font-serif text-[#c5a980] font-light">
                        {problem.number}
                      </span>
                      <Icon className="w-5 h-5 text-[#a1a1aa]" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-serif text-[#f4f3ef] font-medium mb-4">
                      {problem.title}
                    </h3>

                    <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 font-light">
                      {problem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-xs text-[#a1a1aa]/80 tracking-wide">
                      <strong className="text-[#f4f3ef] font-medium">The Consequence:</strong>{' '}
                      {problem.impact}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

