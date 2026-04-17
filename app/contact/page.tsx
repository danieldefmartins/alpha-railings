import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Alpha Railings - Get in Touch Today",
  description:
    "Contact Alpha Railings for premium glass, cable, and iron railing installation. Serving MA, NH, ME, RI & FL. Call (754) 318-2099 or email support@alpharailings.com.",
  openGraph: {
    title: "Contact Us | Alpha Railings",
    description:
      "Get in touch with Alpha Railings. Premium railing fabrication and installation across 5 states.",
    url: "https://alpharailings.com/contact",
  },
};

const contactCards = [
  {
    title: "Phone",
    value: "(754) 318-2099",
    href: "tel:+17543182099",
    description: "Call us for immediate assistance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "support@alpharailings.com",
    href: "mailto:support@alpharailings.com",
    description: "We respond within 24 hours",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Business Hours",
    value: "Mon - Fri: 7:00 AM - 6:00 PM",
    href: undefined,
    description: "Saturday by appointment",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

const serviceAreas = [
  { state: "Massachusetts", abbr: "MA", href: "/areas/massachusetts" },
  { state: "New Hampshire", abbr: "NH", href: "/areas/new-hampshire" },
  { state: "Maine", abbr: "ME", href: "/areas/maine" },
  { state: "Rhode Island", abbr: "RI", href: "/areas/rhode-island" },
  { state: "Florida", abbr: "FL", href: "/areas/florida" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Contact <span className="text-accent">Alpha Railings</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your project? Reach out to us by
            phone, email, or request a free quote online.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => {
              const content = (
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/20 transition-colors text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
                    {card.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-accent font-semibold text-base mb-1">
                    {card.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>
                </div>
              );
              return card.href ? (
                <a key={card.title} href={card.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={card.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Placeholder + Service Areas */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Placeholder */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
                Send Us a Message
              </h2>
              <div className="bg-card rounded-2xl border border-border border-dashed p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <p className="font-display text-lg font-bold text-foreground mb-2">
                  Contact Form Coming Soon
                </p>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                  Our contact form is being integrated with our scheduling
                  system. In the meantime, please call or email us directly.
                </p>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  GHL form integration placeholder
                </p>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
                Service Areas
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Alpha Railings proudly serves residential and commercial clients
                across five states on the East Coast.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.state}
                    href={area.href}
                    className="bg-card rounded-xl p-4 border border-border hover:border-accent/30 transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-display font-bold text-sm flex-shrink-0">
                      {area.abbr}
                    </span>
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {area.state}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Ready to Start?
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Request a Free Quote Online
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out our online quote form and we will get back to you within 24
            hours with a detailed estimate for your project.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold text-base transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17543182099"
              className="border border-border hover:border-accent/30 text-foreground px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors hover:text-accent"
            >
              Call (754) 318-2099
            </a>
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </>
  );
}
