import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Alpha Railings | Florida\'s Premier Railing Company',
  description: 'Learn about Alpha Railings, South Florida\'s leading provider of glass railings, cable railings, and custom staircases. 15+ years of excellence.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Alpha Railings
          </h1>
          <p className="text-xl text-steel-light max-w-3xl mx-auto">
            Florida's #1 staircase and railing company, dedicated to excellence in craftsmanship and customer service
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-steel-dark leading-relaxed">
                <p>
                  Alpha Railings was founded with a simple mission: to provide South Florida 
                  with the highest quality railing and staircase solutions backed by exceptional 
                  service and craftsmanship.
                </p>
                <p>
                  With over 15 years of experience in the industry, we've grown from a small 
                  local operation to become Florida's premier railing company. Our success is 
                  built on a foundation of quality materials, precision engineering, and an 
                  unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we're proud to serve homeowners, contractors, architects, and developers 
                  throughout South Florida, delivering custom solutions that combine safety, 
                  functionality, and stunning aesthetics.
                </p>
              </div>
            </div>

            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="/images/gallery/IMG_0041.JPG"
                alt="Alpha Railings craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-steel-dark max-w-2xl mx-auto">
              What sets Alpha Railings apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Craftsmanship',
                description: 'Our team of skilled professionals brings decades of combined experience to every project, ensuring precision and quality in every detail.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: 'Premium Materials',
                description: 'We source only the finest materials from trusted suppliers, including tempered glass, marine-grade stainless steel, and premium hardware.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Custom Solutions',
                description: 'Every project is unique. We work closely with you to design and fabricate custom solutions that perfectly match your vision and space.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
              },
              {
                title: 'Professional Installation',
                description: 'Our certified installation teams ensure your project is completed safely, efficiently, and to the highest standards of quality.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Competitive Pricing',
                description: 'We offer transparent, competitive pricing without compromising on quality. Get the best value for your investment.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Customer Satisfaction',
                description: 'Our 100% satisfaction guarantee and countless five-star reviews speak to our commitment to exceeding customer expectations.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-charcoal text-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-steel-dark leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">15+</div>
              <div className="text-steel-light text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-steel-light text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
              <div className="text-steel-light text-lg">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">#1</div>
              <div className="text-steel-light text-lg">In Florida</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-steel-dark max-w-2xl mx-auto mb-10">
            Experience the Alpha Railings difference. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-charcoal text-white font-bold text-lg hover:bg-charcoal-light transition-all"
            >
              Get Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-charcoal text-charcoal font-bold text-lg hover:bg-charcoal hover:text-white transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
