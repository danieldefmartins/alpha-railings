import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alpha Railings - South Florida\'s Premier Staircase & Ironworks Company',
  description: 'South Florida\'s largest and most trusted provider of custom ironworks, structural steel, glass railings, cable railings, staircases, and aluminum pergolas. Professional installation and craftsmanship.',
  keywords: 'ironworks, structural steel, glass railings, cable railings, custom staircases, aluminum pergola, South Florida, Miami, Fort Lauderdale',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/IMG_0041.JPG"
            alt="Premium custom staircase by Alpha Railings"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1]">
            South Florida's #1<br className="hidden sm:block" />
            <span className="block mt-2">Staircase & Ironworks Company</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Premium ironworks, structural steel, glass railings, cable systems, and custom staircases for South Florida's finest properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-charcoal font-bold text-lg hover:bg-gray-100 transition-all shadow-lg text-center min-w-[200px]"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:9549530830"
              className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-charcoal transition-all text-center min-w-[200px]"
            >
              Call (954) 953-0830
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Why Alpha Railings?
            </h2>
            <p className="text-base md:text-xl text-steel-dark max-w-2xl mx-auto">
              Unmatched quality, precision engineering, and professional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-charcoal text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                #1
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                South Florida's Best
              </h3>
              <p className="text-base text-steel-dark leading-relaxed">
                Recognized as the premier railing and staircase company in South Florida, trusted by homeowners and contractors alike.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-charcoal text-white flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Premium Quality
              </h3>
              <p className="text-base text-steel-dark leading-relaxed">
                We use only the finest materials and cutting-edge techniques to deliver railings that exceed industry standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-charcoal text-white flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Fast Installation
              </h3>
              <p className="text-base text-steel-dark leading-relaxed">
                Professional installation teams ensure your project is completed on time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-base md:text-xl text-steel-dark max-w-2xl mx-auto">
              Comprehensive ironworks and railing solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Ironworks */}
            <div className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Custom Ironworks
              </h3>
              <p className="text-base text-steel-dark mb-6 leading-relaxed">
                Artistic and functional custom ironwork for gates, fences, balconies, and decorative elements
              </p>
              <Link href="/services" className="text-charcoal font-semibold hover:underline inline-flex items-center text-base">
                Learn More →
              </Link>
            </div>

            {/* Structural Steel */}
            <div className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Structural Steel Ironworks
              </h3>
              <p className="text-base text-steel-dark mb-6 leading-relaxed">
                Heavy-duty structural steel fabrication and installation for commercial and residential projects
              </p>
              <Link href="/services" className="text-charcoal font-semibold hover:underline inline-flex items-center text-base">
                Learn More →
              </Link>
            </div>

            {/* Glass Railings */}
            <div className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Glass Railings
              </h3>
              <p className="text-base text-steel-dark mb-6 leading-relaxed">
                Frameless and semi-frameless glass railing systems for modern elegance and unobstructed views
              </p>
              <Link href="/services" className="text-charcoal font-semibold hover:underline inline-flex items-center text-base">
                Learn More →
              </Link>
            </div>

            {/* Cable Railings */}
            <div className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Cable Railings
              </h3>
              <p className="text-base text-steel-dark mb-6 leading-relaxed">
                Sleek stainless steel cable systems perfect for contemporary designs and panoramic views
              </p>
              <Link href="/services" className="text-charcoal font-semibold hover:underline inline-flex items-center text-base">
                Learn More →
              </Link>
            </div>

            {/* Custom Staircases */}
            <div className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7m-18 0V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Custom Staircases
              </h3>
              <p className="text-base text-steel-dark mb-6 leading-relaxed">
                Architectural staircase design and fabrication tailored to your space and style
              </p>
              <Link href="/services" className="text-charcoal font-semibold hover:underline inline-flex items-center text-base">
                Learn More →
              </Link>
            </div>

            {/* Aluminum Pergolas */}
            <div className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Aluminum Custom Pergolas
              </h3>
              <p className="text-base text-steel-dark mb-6 leading-relaxed">
                Durable, low-maintenance aluminum pergolas designed to enhance your outdoor living space
              </p>
              <Link href="/services" className="text-charcoal font-semibold hover:underline inline-flex items-center text-base">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base md:text-xl text-steel-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-charcoal font-bold text-lg hover:bg-gray-100 transition-all text-center min-w-[200px]"
            >
              Request Quote
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-charcoal transition-all text-center min-w-[200px]"
            >
              View Portfolio
            </Link>
          </div>
          <div className="mt-10">
            <a 
              href="tel:9549530830"
              className="text-2xl font-bold hover:text-steel-light transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (954) 953-0830
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
