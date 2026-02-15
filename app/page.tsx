import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alpha Railings | Custom Staircases & Glass Railings | South Florida',
  description: 'South Florida\'s premier architectural metalwork firm. Custom staircases, glass railings, and structural steel. Designed. Engineered. Installed.',
  keywords: 'custom staircases, glass railings, architectural metalwork, South Florida, luxury railings, structural steel',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Premium Mobile-First */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663313028198/GumLcPZmoAbmIlqE.JPG"
            alt="Modern floating staircase with meadow view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        
        {/* Hero Content - Clean & Minimal */}
        <div className="relative z-10 container-premium text-center">
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Custom Staircases &<br />Glass Railings
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Designed. Engineered. Installed in South Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Request Estimate
            </Link>
            <Link href="/portfolio" className="btn-secondary w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-charcoal backdrop-blur-sm">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS GALLERY - Full Width Images */}
      <section className="section-premium bg-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-4">Featured Work</h2>
            <p className="text-steel text-lg max-w-2xl mx-auto">
              Architectural metalwork for South Florida's finest properties
            </p>
          </div>

          {/* Large Format Gallery - Instagram Luxury Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative h-96 md:h-[500px] overflow-hidden group">
              <Image
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663313028198/jyTWywRrldRWGpEX.JPG"
                alt="Frameless glass railing system"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Glass Railing Systems</h3>
                  <p className="text-white/90">Frameless elegance for waterfront properties</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px] overflow-hidden group">
              <Image
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663313028198/mGSLNJMzqYiFhFCU.JPG"
                alt="Custom ironwork gate"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Custom Ironwork</h3>
                  <p className="text-white/90">Artisan metalwork & decorative elements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO - Simple Icons Grid */}
      <section className="section-premium bg-glass">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-4">What We Do</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Glass Railings', desc: 'Frameless & semi-frameless systems' },
              { name: 'Custom Staircases', desc: 'Floating & traditional designs' },
              { name: 'Structural Steel', desc: 'Heavy-duty fabrication' },
              { name: 'Cable Railings', desc: 'Stainless steel cable systems' },
              { name: 'Custom Ironwork', desc: 'Gates, fences & decorative' },
              { name: 'Aluminum Pergolas', desc: 'Outdoor living solutions' },
            ].map((service) => (
              <div key={service.name} className="bg-white p-6 border border-gray-200 hover:border-charcoal transition-all duration-300">
                <h3 className="text-lg font-bold text-charcoal mb-2">{service.name}</h3>
                <p className="text-sm text-steel">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Trust Building */}
      <section className="section-premium bg-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-4">Why Alpha Railings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-charcoal mb-4">15+</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Years Experience</h3>
              <p className="text-steel">Serving South Florida since 2009</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-charcoal mb-4">500+</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Projects Completed</h3>
              <p className="text-steel">Residential & commercial installations</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-charcoal mb-4">100%</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Licensed & Insured</h3>
              <p className="text-steel">Full liability coverage & warranties</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER - Premium */}
      <section className="section-premium bg-charcoal text-white">
        <div className="container-premium text-center">
          <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our design team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link href="/contact" className="btn-primary bg-white text-charcoal hover:bg-gray-100 w-full sm:w-auto">
              Request Estimate
            </Link>
            <a href="tel:9549530830" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal w-full sm:w-auto">
              (954) 953-0830
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
