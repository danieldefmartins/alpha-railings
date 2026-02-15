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
            src="https://private-us-east-1.manuscdn.com/sessionFile/pjGRSmqy5P2kuJJXT7VjSr/sandbox/idjQjpLaPrut8DTim7SKGB-img-1_1771166717000_na1fn_aGVyby1sdXh1cnktc3RhaXJjYXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcGpHUlNtcXk1UDJrdUpKWFQ3VmpTci9zYW5kYm94L2lkalFqcExhUHJ1dDhEVGltN1NLR0ItaW1nLTFfMTc3MTE2NjcxNzAwMF9uYTFmbl9hR1Z5Ynkxc2RYaDFjbmt0YzNSaGFYSmpZWE5sLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qTMDCH~Eme1GLNVNLE-VQLm1U5THYBK5k7ah5uL7UfzG~Hymj1OxDQT1-fHUjwQDndD6VlK7xrfALvqzNyRcA9C5J~ei5h6QV9sxXTv42xuoKOBzHGaRdTFerJX1k92J~n-r2CgUzd6PMcuKG7xQpu48JCl-1w3rmmLXjNiqblM-QI7UllHAoWB7sW-boltvGpeaj~Bvn1lHCiXPGhaJ3tuq-5sejvDa7tN66mcVb8Ocgha5HYJxVij9-IqiBoon2Ga2Fm~SNBDBmMb5vPyGRbFFbl1CjU6KDcyBO1pg8XgNVuVSpbwovfRr5-8oiJO9cDaWoBKUItFFzML61ZoUWA__"
            alt="Luxury custom staircase"
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
                src="https://private-us-east-1.manuscdn.com/sessionFile/pjGRSmqy5P2kuJJXT7VjSr/sandbox/idjQjpLaPrut8DTim7SKGB-img-2_1771166719000_na1fn_aGVyby1nbGFzcy1yYWlsaW5nLW9jZWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcGpHUlNtcXk1UDJrdUpKWFQ3VmpTci9zYW5kYm94L2lkalFqcExhUHJ1dDhEVGltN1NLR0ItaW1nLTJfMTc3MTE2NjcxOTAwMF9uYTFmbl9hR1Z5Ynkxbmj JGRnpjeTF5WVdsc2FXNW5MVzlqWldGdS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aPCbxuKRMhIHwNL-Qch59heA1AAPq73vznXKk6jugawCNvQ83OAnvPe1IORBwD6AqyuDKhiRVhyq8UDc9yVcP41KKEbvDXSIuKy4jW-P8dZm2Tzpnmtrun3v1P8F-3R-FqgRuZCO3oWISM~pSz8SGwdQycEgv3c4cMws0wfH3Gw9Jx~btMdZFofdxvaMzDXFAfQE3FRsRvcLJbl~RrtVmaGmmeqcsEJETwec0AL6fQ3RhalurCWdIhpkHpJn47EkKOQcz0uulxDb3cYEenfiPcd8gzuFawzMP46zNztW7Gl6QBLzlEC5FZBFRfwkGJyZJwL1AY6RxzF2BcNnZCwayA__"
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
                src="https://private-us-east-1.manuscdn.com/sessionFile/pjGRSmqy5P2kuJJXT7VjSr/sandbox/idjQjpLaPrut8DTim7SKGB-img-3_1771166719000_na1fn_aGVyby1jdXN0b20taXJvbndvcms.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcGpHUlNtcXk1UDJrdUpKWFQ3VmpTci9zYW5kYm94L2lkalFqcExhUHJ1dDhEVGltN1NLR0ItaW1nLTNfMTc3MTE2NjcxOTAwMF9uYTFmbl9hR1Z5Ynkxamj RYM3RiMjB0YVhKdmJuZHZjbXMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lrh8bydG4hOxUwfi6-iXk8DwpM267tHlFqWziJUCKVh6j4RnBY4d5lBGX3H1EA1qH6U9BRzL~D7IwRLBRPo6E1LPkYflAjInrkmjR-mtQshe3~aaf8mUTwGAPSZjTf883EVeEqN-f5nStIdQ8VSvR7iK8RamVOfmRKqsWAs6R-cVYLauOQR9ABOL8cfjARevUe3~1a4gZmdGU1u3JMrwRQymis5~AtHTi54v2Fng7Gl1mVLupGtKicZOM6l7dEOgPpn6d-nTi432NimrYpbVAeyyD1upMe910VjHq-eSRnhIMlhzmL4vka7H-oKpr8Alefw7jIHLpFj8JZYGqaIOTQ__"
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Glass Railings', icon: '🪟' },
              { name: 'Custom Staircases', icon: '🪜' },
              { name: 'Structural Steel', icon: '🏗️' },
              { name: 'Cable Systems', icon: '🔗' },
              { name: 'Custom Ironwork', icon: '⚒️' },
              { name: 'Aluminum Pergolas', icon: '🏛️' },
            ].map((service) => (
              <div key={service.name} className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <p className="text-sm font-semibold text-charcoal">{service.name}</p>
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
