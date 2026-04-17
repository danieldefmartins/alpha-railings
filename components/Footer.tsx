import Link from "next/link";

const serviceLinks = [
  { name: "Glass Railings", href: "/services/glass-railings" },
  { name: "Cable Railings", href: "/services/cable-railings" },
  { name: "Iron Railings", href: "/services/iron-railings" },
  { name: "Staircases", href: "/services/staircases" },
  { name: "Gates & Fences", href: "/services/gates-fences" },
  { name: "Shower Doors", href: "/services/shower-doors" },
  { name: "Glass Partitions", href: "/services/glass-partitions" },
  { name: "Commercial Railings", href: "/services/commercial-railings" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Process", href: "/our-process" },
  { name: "Material Guide", href: "/materials" },
  { name: "Financing", href: "/financing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const areaLinks = [
  { name: "Massachusetts", href: "/areas/massachusetts" },
  { name: "New Hampshire", href: "/areas/new-hampshire" },
  { name: "Maine", href: "/areas/maine" },
  { name: "Rhode Island", href: "/areas/rhode-island" },
  { name: "Florida", href: "/areas/florida" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display text-sm font-bold text-primary">A</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white tracking-tight">Alpha</span>
                <span className="font-display text-lg font-bold text-accent tracking-tight ml-1">Railings</span>
              </div>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
              Premium glass, cable &amp; iron railings. Custom fabrication and
              professional installation serving Massachusetts, New Hampshire,
              Maine, Rhode Island &amp; Florida.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="tel:+17543182099" className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-accent text-sm font-semibold hover:bg-accent/20 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (754) 318-2099
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-accent mt-6 mb-3">
              Hours
            </h3>
            <p className="text-sm text-muted-foreground">Mon - Fri: 7:00 AM - 6:00 PM</p>
            <p className="text-sm text-muted-foreground">Sat: By Appointment</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Alpha Railings. All rights reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Licensed &amp; Insured | MA, NH, ME, RI &amp; FL
          </p>
        </div>
      </div>
    </footer>
  );
}
