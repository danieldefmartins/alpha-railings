import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Alpha Railings | Glass & Cable Railings in Florida',
  description: 'Professional glass railings, cable railings, custom staircases, and shower doors. Premium installation services throughout South Florida.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Glass Railings',
      description: 'Frameless and semi-frameless glass railing systems that provide unobstructed views while maintaining safety and elegance. Perfect for balconies, decks, and interior applications.',
      features: [
        'Frameless glass panels',
        'Semi-frameless systems',
        'Tempered safety glass',
        'Custom heights and lengths',
        'Indoor and outdoor applications',
        'Modern minimalist design',
      ],
      image: '/images/gallery/IMG_0037.JPG',
    },
    {
      title: 'Cable Railings',
      description: 'Sleek stainless steel cable railing systems that offer a contemporary look with maximum visibility. Ideal for modern homes and commercial spaces.',
      features: [
        'Marine-grade stainless steel',
        'Horizontal or vertical cables',
        'Minimal visual obstruction',
        'Weather-resistant',
        'Low maintenance',
        'Code-compliant spacing',
      ],
      image: '/images/gallery/IMG_0038.JPG',
    },
    {
      title: 'Custom Staircases',
      description: 'Architectural staircase design and fabrication tailored to your space. From floating stairs to grand entrances, we create stunning focal points.',
      features: [
        'Floating staircase designs',
        'Glass tread staircases',
        'Metal and wood combinations',
        'Custom handrails',
        'Structural engineering',
        'Unique architectural solutions',
      ],
      image: '/images/gallery/IMG_0039.JPG',
    },
    {
      title: 'Shower Doors',
      description: 'Custom frameless shower enclosures that transform your bathroom into a spa-like retreat. Precision-crafted for perfect fit and function.',
      features: [
        'Frameless glass doors',
        'Semi-frameless options',
        'Custom sizes and shapes',
        'Heavy-duty hardware',
        'Easy-clean glass coating',
        'Professional installation',
      ],
      image: '/images/gallery/IMG_0040.JPG',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-steel-light max-w-3xl mx-auto">
            Comprehensive railing and staircase solutions designed and installed by Florida's leading experts
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative h-96 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h2 className="text-4xl font-bold text-charcoal mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-steel-dark mb-6 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Features & Benefits:
                </h3>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-charcoal mr-3 flex-shrink-0 mt-0.5"
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
                      <span className="text-steel-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-charcoal text-white font-bold hover:bg-charcoal-light transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Our Process
            </h2>
            <p className="text-xl text-steel-dark max-w-2xl mx-auto">
              From consultation to installation, we ensure a seamless experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, take measurements, and provide expert recommendations.',
              },
              {
                step: '02',
                title: 'Design & Quote',
                description: 'Receive a detailed proposal with 3D renderings and transparent pricing.',
              },
              {
                step: '03',
                title: 'Fabrication',
                description: 'Custom fabrication using premium materials and precision engineering.',
              },
              {
                step: '04',
                title: 'Installation',
                description: 'Professional installation by certified technicians with quality guarantee.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-steel-light mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-steel-dark">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-steel-light max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-charcoal font-bold text-lg hover:bg-steel-light transition-all"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:954-953-0830"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-charcoal transition-all"
            >
              Call (954) 953-0830
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
