'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-steel-light max-w-3xl mx-auto">
            Get in touch for a free consultation and quote. We're here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-steel-dark mb-10 leading-relaxed">
                Ready to transform your space with premium railings and staircases? 
                Contact us today for a free consultation. Our team is standing by to 
                discuss your project and provide expert guidance.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-charcoal text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-charcoal mb-1">Phone</h3>
                    <a href="tel:954-953-0830" className="text-steel-dark hover:text-charcoal font-mono text-lg">
                      (954) 953-0830
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-charcoal text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-charcoal mb-1">Service Area</h3>
                    <p className="text-steel-dark">South Florida</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-charcoal text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-charcoal mb-1">Business Hours</h3>
                    <p className="text-steel-dark">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-steel-dark">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-steel-dark">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 p-6 bg-gray-50">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Why Choose Alpha Railings?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation and quote',
                    '15+ years of experience',
                    'Premium quality materials',
                    'Professional installation',
                    'Competitive pricing',
                    '100% satisfaction guarantee',
                  ].map((item) => (
                    <li key={item} className="flex items-center text-steel-dark">
                      <svg className="w-5 h-5 text-charcoal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Request a Quote
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800">
                  Thank you! We'll contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-steel-light focus:border-charcoal focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-steel-light focus:border-charcoal focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-steel-light focus:border-charcoal focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-charcoal mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-steel-light focus:border-charcoal focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="glass-railings">Glass Railings</option>
                    <option value="cable-railings">Cable Railings</option>
                    <option value="custom-staircases">Custom Staircases</option>
                    <option value="shower-doors">Shower Doors</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-steel-light focus:border-charcoal focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-charcoal text-white font-bold text-lg hover:bg-charcoal-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prefer to Call?
          </h2>
          <p className="text-xl text-steel-light max-w-2xl mx-auto mb-10">
            Speak directly with our team for immediate assistance
          </p>
          <a
            href="tel:954-953-0830"
            className="inline-block px-8 py-4 bg-white text-charcoal font-bold text-lg hover:bg-steel-light transition-all"
          >
            Call (954) 953-0830
          </a>
        </div>
      </section>
    </div>
  );
}
