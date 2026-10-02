import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onDiscussClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDiscussClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'For Property Businesses', href: '#who-we-work-with' },
    { name: 'Why Syclo', href: '#why-syclo' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/[0.08] py-4'
          : 'bg-transparent border-b border-white/[0.04] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a980]"
        >
          <span className="text-xl sm:text-2xl font-serif tracking-[0.2em] font-medium text-[#f4f3ef] transition-colors group-hover:text-[#c5a980]">
            SYCLO
          </span>
          <span className="text-[9px] tracking-[0.24em] uppercase text-[#a1a1aa] font-medium -mt-0.5">
            Real Estate Services Agency
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-[#a1a1aa] hover:text-[#f4f3ef] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a980]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onDiscussClick}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c5a980] hover:text-[#0b0c0e] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a980]"
          >
            <span>Discuss a Property</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="lg:hidden p-2 text-[#f4f3ef] hover:text-[#c5a980] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a980]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Slide-down */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1014] border-b border-white/10 px-6 py-8">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base text-[#a1a1aa] hover:text-[#f4f3ef] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDiscussClick();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c5a980] transition-all"
              >
                <span>Discuss a Property</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
