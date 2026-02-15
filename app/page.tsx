import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/IMG_0010.JPG"
            alt="Premium glass railing installation"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 animate-fade-up">
            Florida's #1
            <br />
            <span className="text-steel-light">Staircase & Railing</span>
            <br />
            Company
          </h1>
          <p className="text-xl md:text-2xl text-steel-light max-w-2xl mx-auto mb-10 animate-fade-up delay-100">
            Premium glass railings, cable systems, and custom staircases for South Florida's finest properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-charcoal font-bold text-lg hover:bg-steel-light transition-all"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:954-953-0830"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-charcoal transition-all"
            >
              Call (954) 953-0830
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Why Alpha Railings?
            </h2>
            <p className="text-xl text-steel-dark max-w-2xl mx-auto">
              Unmatched quality, precision engineering, and professional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                #1
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Florida's Best
              </h3>
              <p className="text-steel-dark leading-relaxed">
                Recognized as the premier railing and staircase company in Florida, 
                trusted by homeowners and contractors alike.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Premium Quality
              </h3>
              <p className="text-steel-dark leading-relaxed">
                We use only the finest materials and cutting-edge techniques to 
                deliver railings that exceed industry standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Fast Installation
              </h3>
              <p className="text-steel-dark leading-relaxed">
                Professional installation teams ensure your project is completed 
                on time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-xl text-steel-dark max-w-2xl mx-auto">
              Comprehensive railing and staircase solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Glass Railings
              </h3>
              <p className="text-steel-dark text-sm mb-4">
                Frameless and semi-frameless glass railing systems for modern elegance
              </p>
              <Link href="/services" className="text-charcoal font-medium text-sm hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Cable Railings
              </h3>
              <p className="text-steel-dark text-sm mb-4">
                Sleek stainless steel cable systems for unobstructed views
              </p>
              <Link href="/services" className="text-charcoal font-medium text-sm hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Custom Staircases
              </h3>
              <p className="text-steel-dark text-sm mb-4">
                Architectural staircase design and fabrication
              </p>
              <Link href="/services" className="text-charcoal font-medium text-sm hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Shower Doors
              </h3>
              <p className="text-steel-dark text-sm mb-4">
                Custom frameless shower enclosures and glass doors
              </p>
              <Link href="/services" className="text-charcoal font-medium text-sm hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-steel-light max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-charcoal font-bold text-lg hover:bg-steel-light transition-all"
            >
              Request Quote
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-charcoal transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
