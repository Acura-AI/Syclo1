import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080a] pt-20 pb-12 text-[#a1a1aa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-[0.2em] font-medium text-[#f4f3ef]">
                SYCLO
              </span>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#c5a980] font-medium mt-0.5">
                Real Estate Services Agency
              </span>
            </div>
            <p className="text-sm font-light text-[#a1a1aa] max-w-sm leading-relaxed pt-2">
              “Helping property businesses generate better buyer enquiries.”
            </p>
            <p className="text-xs text-[#a1a1aa]/60 font-light max-w-md pt-1">
              Performance marketing and qualified enquiry generation designed exclusively for developers, property dealers, and real estate mandates.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#f4f3ef] font-medium block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <a href="#home" className="hover:text-[#c5a980] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#c5a980] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c5a980] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#who-we-work-with" className="hover:text-[#c5a980] transition-colors">
                  For Property Businesses
                </a>
              </li>
              <li>
                <a href="#why-syclo" className="hover:text-[#c5a980] transition-colors">
                  Why Syclo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c5a980] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Agency Positioning & Back To Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#f4f3ef] font-medium block mb-2">
                Agency Desk & Office
              </span>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Monday – Saturday: 09:30 – 19:30 IST<br />
                Campaign desks in Mumbai & NCR.<br />
                Serving primary real estate corridors across India.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/919005195818?text=Hello%20Syclo%20Team%2C%20I%20would%20like%20to%20discuss%20an%20acquisition%20campaign."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#c5a980] hover:text-[#f4f3ef] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp: +91 90051 95818</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#a1a1aa] hover:text-[#f4f3ef] transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Disclaimer */}
        <div className="pt-10 flex flex-col md:flex-row items-baseline justify-between gap-6">
          <p className="text-xs text-[#a1a1aa]/70 font-light leading-relaxed max-w-3xl">
            <span className="text-[#f4f3ef]/80 font-medium">Agency Disclaimer:</span> Syclo provides marketing and lead-generation services. Property transactions, negotiations and closing remain the responsibility of the property owner/developer/authorized sales representative. Syclo does not provide guaranteed buyer claims, financial guarantees, or broker-dealer warranties.
          </p>

          <p className="text-xs text-[#a1a1aa]/50 font-mono tracking-wider shrink-0">
            © {new Date().getFullYear()} SYCLO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
