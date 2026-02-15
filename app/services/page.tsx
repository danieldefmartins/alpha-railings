import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Alpha Railings | Ironworks, Railings & Staircases',
  description: 'Comprehensive ironworks, structural steel, glass railings, cable railings, custom staircases, and aluminum pergolas for South Florida. Professional installation and premium quality.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Ironworks',
      description: 'Transform your property with our artistic and functional custom ironwork. We specialize in creating stunning gates, fences, balconies, window guards, and decorative elements that combine security with aesthetic appeal.',
      features: [
        'Custom ornamental gates and fences',
        'Decorative balcony railings',
        'Window guards and security features',
        'Artistic ironwork designs',
        'Powder-coated finishes for durability',
        'Traditional and contemporary styles',
      ],
    },
    {
      title: 'Structural Steel Ironworks',
      description: 'Heavy-duty structural steel fabrication and installation for commercial and residential projects. Our structural steel solutions provide the backbone for your construction needs with precision engineering and quality craftsmanship.',
      features: [
        'Commercial building steel structures',
        'Residential structural support',
        'Steel beam fabrication and installation',
        'Load-bearing structural elements',
        'Code-compliant engineering',
        'On-site welding and assembly',
      ],
    },
    {
      title: 'Glass Railings',
      description: 'Experience unobstructed views and modern elegance with our premium glass railing systems. We offer both frameless and semi-frameless options using tempered safety glass and marine-grade stainless steel hardware.',
      features: [
        'Frameless glass railing systems',
        'Semi-frameless glass panels',
        'Tempered safety glass',
        'Marine-grade stainless steel hardware',
        'Indoor and outdoor applications',
        'Custom heights and configurations',
      ],
    },
    {
      title: 'Cable Railings',
      description: 'Sleek and contemporary cable railing systems that provide safety without compromising your view. Perfect for decks, balconies, and staircases where maintaining sight lines is essential.',
      features: [
        'Stainless steel cable systems',
        '1/8" and 3/16" cable options',
        'Powder-coated or stainless posts',
        'Horizontal or vertical configurations',
        'Code-compliant spacing',
        'Low-maintenance design',
      ],
    },
    {
      title: 'Custom Staircases',
      description: 'Make a statement with a custom-designed staircase that serves as the centerpiece of your space. From floating stairs to spiral designs, we create architectural masterpieces tailored to your vision.',
      features: [
        'Floating staircase designs',
        'Spiral and curved staircases',
        'Modern and traditional styles',
        'Wood, metal, and glass combinations',
        'Custom tread and riser options',
        'Integrated lighting solutions',
      ],
    },
    {
      title: 'Aluminum Custom Pergolas',
      description: 'Enhance your outdoor living space with our durable, low-maintenance aluminum pergolas. Designed to withstand South Florida climate while providing style and shade for years to come.',
      features: [
        'Powder-coated aluminum construction',
        'Weather-resistant and rust-proof',
        'Customizable sizes and styles',
        'Integrated lighting options',
        'Louvered roof systems available',
        'Minimal maintenance required',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-steel-light max-w-3xl mx-auto">
            Comprehensive ironworks, railing, and staircase solutions for South Florida
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div key={service.title} className="bg-gray-50 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-steel-dark mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-charcoal flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm md:text-base text-steel-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block px-6 md:px-8 py-3 md:py-4 bg-charcoal text-white font-bold text-sm md:text-base hover:bg-charcoal-light transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-steel-light max-w-2xl mx-auto mb-8 md:mb-10">
            Contact us today for a free consultation and quote on your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-charcoal font-bold text-base md:text-lg hover:bg-gray-100 transition-all"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:9549530830"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border-2 border-white text-white font-bold text-base md:text-lg hover:bg-white hover:text-charcoal transition-all"
            >
              Call (954) 953-0830
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
