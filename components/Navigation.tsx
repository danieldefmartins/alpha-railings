'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <Image
                src="/images/logos/logo-horizontal.png"
                alt="Alpha Railings"
                width={180}
                height={45}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    pathname === link.href
                      ? 'text-charcoal'
                      : 'text-steel-dark hover:text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9549530830"
                className="px-6 py-3 bg-charcoal text-white text-sm font-bold tracking-wide hover:bg-charcoal-light transition-colors"
              >
                (954) 953-0830
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col pt-24 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-4 text-lg font-bold border-b border-gray-200 transition-colors ${
                pathname === link.href
                  ? 'text-charcoal'
                  : 'text-steel-dark hover:text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Call Button in Menu */}
          <a
            href="tel:9549530830"
            className="mt-8 px-6 py-4 bg-charcoal text-white text-center font-bold text-lg hover:bg-charcoal-light transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (954) 953-0830
          </a>
          
          {/* Quote Button in Menu */}
          <Link
            href="/contact"
            className="mt-4 px-6 py-4 border-2 border-charcoal text-charcoal text-center font-bold text-lg hover:bg-charcoal hover:text-white transition-colors"
          >
            Get Free Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
