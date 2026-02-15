import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/images/logos/logo-white.png"
              alt="Alpha Railings"
              width={180}
              height={45}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-steel-light text-sm leading-relaxed mb-6 max-w-md">
              South Florida's premier provider of custom glass railings, cable railings, 
              and staircase solutions. Quality craftsmanship and professional installation 
              for residential and commercial projects.
            </p>
            <div className="flex items-center space-x-2 text-steel-light">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:954-953-0830" className="hover:text-white transition-colors font-mono">
                (954) 953-0830
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-steel-light hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-steel-light hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-steel-light hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-steel-light hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-steel-light hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-steel-light">
              <li>Glass Railings</li>
              <li>Cable Railings</li>
              <li>Custom Staircases</li>
              <li>Shower Doors</li>
              <li>Commercial Projects</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-steel-dark">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-steel-light text-sm">
              © {currentYear} Alpha Railings. All rights reserved.
            </p>
            <p className="text-steel-light text-sm">
              #1 Staircase & Railing Company in Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
