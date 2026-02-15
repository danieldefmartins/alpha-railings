import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Alpha Railings | Our Work Gallery',
  description: 'View our portfolio of completed glass railing, cable railing, and custom staircase projects throughout South Florida.',
};

export default function PortfolioPage() {
  // Gallery images from the provided photos
  const galleryImages = [
    '/images/gallery/IMG_0010.JPG',
    '/images/gallery/IMG_0037.JPG',
    '/images/gallery/IMG_0038.JPG',
    '/images/gallery/IMG_0039.JPG',
    '/images/gallery/IMG_0040.JPG',
    '/images/gallery/IMG_0041.JPG',
    '/images/gallery/IMG_0042.JPG',
    '/images/gallery/IMG_0043.JPG',
    '/images/gallery/IMG_0044.JPG',
    '/images/gallery/IMG_0045.JPG',
    '/images/gallery/IMG_0046.JPG',
    '/images/gallery/IMG_0047.JPG',
    '/images/gallery/IMG_0050.JPG',
    '/images/gallery/IMG_0054.JPG',
    '/images/gallery/IMG_0065.JPG',
    '/images/gallery/IMG_0066.JPG',
    '/images/gallery/IMG_0068.JPG',
    '/images/gallery/Alpha Railings 3.JPG',
    '/images/gallery/Alpha Railings 8.JPG',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-steel-light max-w-3xl mx-auto">
            Explore our collection of premium railing and staircase installations across South Florida
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2">
                500+
              </div>
              <div className="text-steel-dark">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2">
                15+
              </div>
              <div className="text-steel-dark">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2">
                100%
              </div>
              <div className="text-steel-dark">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2">
                #1
              </div>
              <div className="text-steel-dark">In Florida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Alpha Railings project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Project Types
            </h2>
            <p className="text-xl text-steel-dark max-w-2xl mx-auto">
              We specialize in a wide range of railing and staircase projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Projects',
                description: 'Custom solutions for homes, condos, and apartments',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: 'Commercial Projects',
                description: 'Professional installations for offices and retail spaces',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: 'Luxury Estates',
                description: 'High-end custom designs for premium properties',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Pool Enclosures',
                description: 'Safe and stylish railings for pool areas',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ),
              },
              {
                title: 'Balconies & Decks',
                description: 'Outdoor railing systems for elevated spaces',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                ),
              },
              {
                title: 'Interior Staircases',
                description: 'Stunning focal points for interior spaces',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                ),
              },
            ].map((type) => (
              <div key={type.title} className="p-6 bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-charcoal text-white flex items-center justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {type.title}
                </h3>
                <p className="text-steel-dark">
                  {type.description}
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
            Start Your Project Today
          </h2>
          <p className="text-xl text-steel-light max-w-2xl mx-auto mb-10">
            Let's create something beautiful together
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-charcoal font-bold text-lg hover:bg-steel-light transition-all"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
