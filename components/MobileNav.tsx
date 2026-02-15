'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`py-4 text-lg font-semibold border-b border-gray-200 transition-colors ${
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
            className="mt-6 px-6 py-4 bg-charcoal text-white text-center font-bold rounded hover:bg-charcoal-light transition-colors"
            onClick={closeMenu}
          >
            Call (954) 953-0830
          </a>
          
          {/* Quote Button in Menu */}
          <Link
            href="/contact"
            className="mt-3 px-6 py-4 border-2 border-charcoal text-charcoal text-center font-bold rounded hover:bg-charcoal hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Get Free Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
