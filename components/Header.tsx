"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Glass Railings", href: "/services/glass-railings" },
  { name: "Cable Railings", href: "/services/cable-railings" },
  { name: "Iron Railings & Handrails", href: "/services/iron-railings" },
  { name: "Staircases & Spiral Stairs", href: "/services/staircases" },
  { name: "Gates & Fences", href: "/services/gates-fences" },
  { name: "Shower Doors", href: "/services/shower-doors" },
  { name: "Glass Partitions", href: "/services/glass-partitions" },
  { name: "Commercial Railings", href: "/services/commercial-railings" },
];

const navigation = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Areas", href: "/areas" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-white/5 text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+17543182099" className="hover:text-accent transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              (754) 318-2099
            </a>
            <a href="mailto:support@alpharailings.com" className="hover:text-accent transition-colors">
              support@alpharailings.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span>Licensed &amp; Insured — MA, NH, ME, RI &amp; FL</span>
          </div>
        </div>

        <nav className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-header.png"
              alt="Alpha Railings"
              width={280}
              height={74}
              className="h-9 lg:h-[3.5rem] w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors inline-flex items-center gap-1"
              >
                Services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-72 bg-[#111111] rounded-xl border border-white/10 shadow-2xl py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-white/60 hover:text-accent hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className="ml-3 bg-accent hover:bg-accent/90 text-primary px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
            >
              Free Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/5">
            <div className="pt-4 space-y-1">
              <p className="px-3 py-2 text-xs font-bold text-accent uppercase tracking-widest">Services</p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <div className="my-3 border-t border-white/5" />
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <Link
                  href="/quote"
                  className="block bg-accent hover:bg-accent/90 text-primary px-5 py-3 rounded-lg text-base font-bold text-center transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+17543182099"
                  className="block border border-accent/30 text-accent px-5 py-3 rounded-lg text-base font-bold text-center transition-colors hover:bg-accent/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call (754) 318-2099
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
