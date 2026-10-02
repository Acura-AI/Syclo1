import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { WhatSycloDoes } from './components/WhatSycloDoes';
import { HowItWorks } from './components/HowItWorks';
import { WhoWeWorkWith } from './components/WhoWeWorkWith';
import { WhySyclo } from './components/WhySyclo';
import { FeaturedApproach } from './components/FeaturedApproach';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleDiscussClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // Auto-focus name field after scroll
      setTimeout(() => {
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    }
  };

  const handleHowItWorksClick = () => {
    const worksElem = document.getElementById('how-it-works');
    if (worksElem) {
      worksElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4f3ef] font-clean-sans selection:bg-[#c5a980]/20 selection:text-[#f4f3ef]">
      {/* Sticky Top Navigation */}
      <Navbar onDiscussClick={handleDiscussClick} />

      <main>
        {/* Hero Section */}
        <Hero
          onDiscussClick={handleDiscussClick}
          onHowItWorksClick={handleHowItWorksClick}
        />

        {/* Section: The Problem */}
        <TheProblem />

        {/* Section: What Syclo Does */}
        <WhatSycloDoes />

        {/* Section: How It Works */}
        <HowItWorks />

        {/* Section: Who We Work With */}
        <WhoWeWorkWith onDiscussClick={handleDiscussClick} />

        {/* Section: Why Syclo */}
        <WhySyclo />

        {/* Section: Featured Approach */}
        <FeaturedApproach />

        {/* Section: Large CTA Banner */}
        <CtaBanner onDiscussClick={handleDiscussClick} />

        {/* Section: Contact & Property Intake */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
