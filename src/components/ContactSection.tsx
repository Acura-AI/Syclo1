import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { PropertyEnquiryForm } from '../types';
import { FadeIn } from './FadeIn';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<PropertyEnquiryForm>({
    name: '',
    company: '',
    phone: '',
    location: '',
    propertyType: 'Residential Apartment / Villa',
    approxValue: '₹1 Cr - ₹3 Cr',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // Updated WhatsApp Contact per user request
  const CONTACT_PHONE_DISPLAY = "+91 90051 95818";
  const CONTACT_PHONE_RAW = "919005195818";
  const CONTACT_EMAIL = "inquiries@syclo.agency";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Realistic client-side processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppMessage = () => {
    const text = `Hello Syclo Team,\n\nI would like to discuss a property acquisition campaign:\n• Name: ${formData.name || 'Not specified'}\n• Company: ${formData.company || 'Not specified'}\n• Phone: ${formData.phone || 'Not specified'}\n• Property Location: ${formData.location || 'Not specified'}\n• Property Type: ${formData.propertyType}\n• Approx Value / Ticket: ${formData.approxValue}\n• Details: ${formData.message || 'Ready for review'}\n\nPlease let me know your availability for a brief call.`;
    return encodeURIComponent(text);
  };

  const handleCopySummary = () => {
    const text = `Property Enquiry for Syclo:\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nType: ${formData.propertyType}\nValue: ${formData.approxValue}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-white/[0.08] bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact Channels */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.28em] text-[#c5a980] font-medium block mb-4">
                Direct Agency Channel
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#f4f3ef] font-normal leading-[1.15] mb-6">
                Let's talk about the property.
              </h2>
              <p className="text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed mb-8">
                Whether you have immediate unsold inventory, an upcoming phase launch, or an exclusive mandate that needs buyer flow, share your project details below.
              </p>
            </FadeIn>

            {/* Direct Contact Info Box */}
            <FadeIn delay={120}>
              <div className="border border-white/10 bg-[#121316] p-6 sm:p-8 space-y-6 mb-8">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#a1a1aa] block mb-2 font-mono">
                    Direct WhatsApp Channel
                  </span>
                  <a
                    href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent('Hello Syclo Team, I would like to discuss an acquisition campaign for our property inventory.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-serif text-[#f4f3ef] hover:text-[#c5a980] transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-[#c5a980]" />
                    <span>{CONTACT_PHONE_DISPLAY}</span>
                  </a>
                  <span className="text-xs text-[#a1a1aa] block mt-1">
                    Instant messaging for developers & property dealers
                  </span>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] uppercase tracking-wider text-[#a1a1aa] block mb-2 font-mono">
                    Email Desk
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Property Campaign Inquiry | Syclo')}`}
                    className="flex items-center gap-3 text-base text-[#f4f3ef] hover:text-[#c5a980] transition-colors font-light"
                  >
                    <Mail className="w-4 h-4 text-[#c5a980]" />
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Engagement Principles Checklist */}
            <FadeIn delay={200}>
              <div className="space-y-3 text-xs text-[#a1a1aa]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a980]" />
                  <span>NDA & Confidentiality honored on all project disclosures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a980]" />
                  <span>Campaign proposal with target buyer profiling in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a980]" />
                  <span>Zero upfront marketing vendor fluff</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Complete Interactive Property Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={150}>
              <div className="bg-[#121316] border border-white/10 p-8 sm:p-10">
                {submitted ? (
                  <div className="py-8 text-center space-y-6">
                    <div className="w-14 h-14 rounded-full bg-[#c5a980]/10 border border-[#c5a980] flex items-center justify-center mx-auto text-[#c5a980]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-[#f4f3ef]">
                        Enquiry Received
                      </h3>
                      <p className="text-sm text-[#a1a1aa] font-light max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#f4f3ef]">{formData.name}</strong>. Our real estate strategy team is reviewing the inventory details for <strong className="text-[#f4f3ef]">{formData.location || 'your property'}</strong>.
                      </p>
                    </div>

                    {/* Submitted Summary Box */}
                    <div className="bg-[#0b0c0e] border border-white/10 p-5 text-left text-xs text-[#a1a1aa] space-y-2 font-mono">
                      <div className="flex justify-between">
                        <span>Company:</span>
                        <span className="text-[#f4f3ef]">{formData.company || 'Direct'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Property:</span>
                        <span className="text-[#f4f3ef]">{formData.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="text-[#f4f3ef]">{formData.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bracket:</span>
                        <span className="text-[#c5a980]">{formData.approxValue}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${getWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold bg-[#25D366] text-black hover:bg-[#20ba59] transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Also Send on WhatsApp</span>
                      </a>

                      <button
                        onClick={handleCopySummary}
                        type="button"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium border border-white/20 text-[#f4f3ef] hover:border-white/40 transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-[#c5a980]" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                      </button>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            company: '',
                            phone: '',
                            location: '',
                            propertyType: 'Residential Apartment / Villa',
                            approxValue: '₹1 Cr - ₹3 Cr',
                            message: '',
                          });
                        }}
                        className="text-xs text-[#a1a1aa] hover:text-[#c5a980] underline underline-offset-4 transition-colors"
                      >
                        Submit another property enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                          Your Name <span className="text-[#c5a980]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Vikram Malhotra"
                          className="w-full bg-[#0b0c0e] border border-white/10 px-4 py-3 text-sm text-[#f4f3ef] placeholder-[#a1a1aa]/40 focus:border-[#c5a980] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Company / Agency */}
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                          Company / Agency <span className="text-[#c5a980]">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Apex Realty Developers"
                          className="w-full bg-[#0b0c0e] border border-white/10 px-4 py-3 text-sm text-[#f4f3ef] placeholder-[#a1a1aa]/40 focus:border-[#c5a980] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone / WhatsApp */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                          Phone / WhatsApp <span className="text-[#c5a980]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 90051 95818"
                          className="w-full bg-[#0b0c0e] border border-white/10 px-4 py-3 text-sm text-[#f4f3ef] placeholder-[#a1a1aa]/40 focus:border-[#c5a980] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Property Location */}
                      <div className="space-y-2">
                        <label htmlFor="location" className="block text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                          Property Location <span className="text-[#c5a980]">*</span>
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="City, micro-market or sector"
                          className="w-full bg-[#0b0c0e] border border-white/10 px-4 py-3 text-sm text-[#f4f3ef] placeholder-[#a1a1aa]/40 focus:border-[#c5a980] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Property Type */}
                      <div className="space-y-2">
                        <label htmlFor="propertyType" className="block text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                          Property Type <span className="text-[#c5a980]">*</span>
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full bg-[#0b0c0e] border border-white/10 px-4 py-3 text-sm text-[#f4f3ef] focus:border-[#c5a980] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Residential Apartment / Villa">Residential Apartment / High-Rise</option>
                          <option value="Luxury Villas & Penthouses">Luxury Villa / Penthouse</option>
                          <option value="Commercial Office / Retail">Commercial Office / High-Street Retail</option>
                          <option value="Plots & Plotted Development">Plotted Land / Gated Community</option>
                          <option value="Builder Floor Units">Independent Builder Floors</option>
                          <option value="Full Project Phase / Inventory Mandate">Full Project Inventory Mandate</option>
                        </select>
                      </div>

                      {/* Approximate Property Value */}
                      <div className="space-y-2">
                        <label htmlFor="approxValue" className="block text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                          Approximate Property Value <span className="text-[#c5a980]">*</span>
                        </label>
                        <select
                          id="approxValue"
                          name="approxValue"
                          value={formData.approxValue}
                          onChange={handleChange}
                          className="w-full bg-[#0b0c0e] border border-white/10 px-4 py-3 text-sm text-[#f4f3ef] focus:border-[#c5a980] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Under ₹1 Crore">Under ₹1 Crore</option>
                          <option value="₹1 Cr - ₹3 Cr">₹1 Crore – ₹3 Crores</option>
                          <option value="₹3 Cr - ₹7 Cr">₹3 Crores – ₹7 Crores</option>
                          <option value="₹7 Cr - ₹15 Cr">₹7 Crores – ₹15 Crores</option>
                          <option value="₹15 Cr+ Ultra Luxury">₹15 Crores+ (Ultra Luxury / Large Commercial)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#a1a1aa] font-medium">
                        Message / Current Inventory Status
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're selling, available unit count, completion stage, or specific buyer profile you are looking to reach..."
                        className="w-full bg-[#0b0c0e] border border-white/10 px-4 py-3 text-sm text-[#f4f3ef] placeholder-[#a1a1aa]/40 focus:border-[#c5a980] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c5a980] transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{loading ? 'Submitting...' : 'Send Enquiry'}</span>
                      </button>

                      <a
                        href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${getWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-wider font-semibold border border-white/20 text-[#f4f3ef] hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>

                    <p className="text-[11px] text-[#a1a1aa]/70 font-light">
                      By submitting, you agree to discuss potential campaign scopes with Syclo. No obligations or guaranteed sales claims are made.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

