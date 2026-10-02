import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface CtaBannerProps {
  onDiscussClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onDiscussClick }) => {
  return (
    <section className="py-24 sm:py-32 border-t border-white/[0.08] bg-[#08090b] relative overflow-hidden">
      {/* Subtle architectural grid backdrop accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#c5a980_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.28em] text-[#c5a980] font-medium block mb-6">
            Ready For Better Conversations?
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#f4f3ef] font-normal tracking-tight leading-[1.12] mb-6">
            Have a property that needs more attention?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Tell us what you're selling, where it's located and who you're trying to reach. We'll tell you how we'd approach the campaign.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onDiscussClick}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c5a980] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a980]"
            >
              <span>Discuss a Property</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-center gap-3 text-xs text-[#a1a1aa]">
            <span>Strictly confidential property reviews</span>
            <span className="text-white/20">·</span>
            <span>No commitment required</span>
            <span className="text-white/20">·</span>
            <span>Response within 24 business hours</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

