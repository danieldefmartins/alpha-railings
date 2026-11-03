import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative bg-primary overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10 text-muted-foreground leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:tracking-tight [&_h2]:mb-4 [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_a]:text-accent [&_a:hover]:underline [&_strong]:text-foreground">
          {children}
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </>
  );
}
