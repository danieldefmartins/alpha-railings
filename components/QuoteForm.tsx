"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CrmError, crm, projectTypes, submitLead } from "@/lib/crm";

const inputClass =
  "w-full bg-primary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-colors";
const labelClass = "block text-sm font-medium text-foreground mb-1.5";

/** Maps ?service=<badge> (from service pages) to a project type. */
function matchProjectType(value: string | null) {
  if (!value) return "";
  const v = value.toLowerCase();
  const rules: [string, string][] = [
    ["stair", "Custom Staircase"],
    ["glass rail", "Glass Railings"],
    ["cable", "Cable Railings"],
    ["iron", "Iron Railings & Handrails"],
    ["gate", "Gates & Fences"],
    ["fence", "Gates & Fences"],
    ["shower", "Shower Doors"],
    ["partition", "Glass Partitions"],
    ["commercial", "Commercial Project"],
  ];
  return rules.find(([k]) => v.includes(k))?.[1] ?? "";
}

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "done"; message: string }
  | { kind: "error"; message: string }
  | { kind: "unavailable" };

export function QuoteForm({
  title = "Request Your Quote",
  submitLabel = "Get My Free Quote",
}: {
  title?: string;
  submitLabel?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [source, setSource] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preset = matchProjectType(params.get("service"));
    if (preset) setProjectType(preset);
    const area = params.get("area");
    setSource(window.location.pathname + (area ? ` (area: ${area})` : ""));
  }, []);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneOk = phone.trim().startsWith("+") ? phoneDigits.length >= 8 : phoneDigits.length === 10 || (phoneDigits.length === 11 && phoneDigits.startsWith("1"));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phoneOk) {
      setStatus({ kind: "error", message: "Please enter a valid phone number, e.g. (555) 123-4567." });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const result = await submitLead({
        name,
        phone,
        email,
        location,
        projectType,
        message,
        smsConsent,
        honeypot,
        sourcePage: source || "/quote",
      });
      if (result.redirect) {
        window.location.href = result.redirect;
        return;
      }
      setStatus({ kind: "done", message: result.thankYou || "Thanks — we received your request and will be in touch shortly." });
    } catch (err) {
      if (err instanceof CrmError && err.unavailable) setStatus({ kind: "unavailable" });
      else setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    }
  }

  const mailto = `mailto:${crm.email}?subject=${encodeURIComponent("Quote request" + (projectType ? ` — ${projectType}` : ""))}&body=${encodeURIComponent(
    [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email}`, `Location: ${location}`, `Project type: ${projectType}`, "", message].join("\n"),
  )}`;

  if (status.kind === "done") {
    return (
      <div className="bg-card rounded-2xl border border-accent/20 p-8 sm:p-12 text-center" role="status">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <p className="font-display text-xl font-bold text-foreground mb-2">Request received</p>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">{status.message}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          Need us sooner? Call{" "}
          <a href={crm.phoneHref} className="text-accent font-semibold hover:underline">
            {crm.phone}
          </a>
        </p>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} className="relative bg-card rounded-2xl border border-border p-6 sm:p-8">
      {title && (
        <h3 className="font-display text-lg font-bold text-foreground mb-6">{title}</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="qf-name" className={labelClass}>
            Full name <span className="text-accent">*</span>
          </label>
          <input id="qf-name" className={inputClass} required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" maxLength={120} />
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelClass}>
            Mobile phone <span className="text-accent">*</span>
          </label>
          <input id="qf-phone" className={inputClass} required type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" maxLength={30} />
        </div>
        <div>
          <label htmlFor="qf-email" className={labelClass}>
            Email
          </label>
          <input id="qf-email" className={inputClass} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" maxLength={254} />
        </div>
        <div>
          <label htmlFor="qf-location" className={labelClass}>
            City &amp; state or ZIP <span className="text-accent">*</span>
          </label>
          <input id="qf-location" className={inputClass} required autoComplete="postal-code" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Miami, FL or 33131" maxLength={120} />
        </div>
        <div>
          <label htmlFor="qf-type" className={labelClass}>
            Project type <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select id="qf-type" className={`${inputClass} appearance-none pr-10`} required value={projectType} onChange={(e) => setProjectType(e.target.value)}>
            <option value="" disabled>
              Select a project
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
            <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-message" className={labelClass}>
            Project details
          </label>
          <textarea id="qf-message" className={`${inputClass} min-h-[120px] resize-y`} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your space, approximate length/size, materials you like, and your timeline." maxLength={5000} />
        </div>

        <p className="sm:col-span-2 text-xs text-muted-foreground">
          Have photos? After you send this, text them to{" "}
          <a href={`sms:${crm.phoneHref.replace("tel:", "")}`} className="text-accent hover:underline">
            {crm.phone}
          </a>
          .
        </p>

        {/* Honeypot — hidden from people, bots fill it */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label htmlFor="qf-website">Website</label>
          <input id="qf-website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-sms" className="flex items-start gap-3 cursor-pointer">
            <input id="qf-sms" type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-border bg-primary accent-[#00d4ff]" />
            <span className="text-xs leading-relaxed text-muted-foreground">
              I agree to receive text messages from Alpha Railings about my quote, appointments and project updates. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help. See our{" "}
              <Link href="/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-accent hover:underline">
                Terms
              </Link>
              .
            </span>
          </label>
        </div>
      </div>

      {status.kind === "error" && (
        <p className="mt-5 text-sm text-red-400" role="alert" data-testid="qf-error">
          {status.message}
        </p>
      )}
      {status.kind === "unavailable" && (
        <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm" role="alert" data-testid="qf-unavailable">
          <p className="text-foreground font-medium">Our online form is temporarily unavailable.</p>
          <p className="mt-1 text-muted-foreground">
            Please call{" "}
            <a href={crm.phoneHref} className="text-accent font-semibold hover:underline">
              {crm.phone}
            </a>{" "}
            or{" "}
            <a href={mailto} className="text-accent font-semibold hover:underline">
              email us your request
            </a>{" "}
            — your details are already filled in.
          </p>
        </div>
      )}

      <button type="submit" disabled={sending} className="mt-6 w-full bg-accent hover:bg-accent/90 disabled:opacity-60 text-primary px-8 py-4 rounded-lg font-display font-bold text-base transition-all hover:shadow-lg hover:shadow-accent/25">
        {sending ? "Sending…" : submitLabel}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free, no-obligation. We never sell your information.{" "}
        <Link href="/privacy-policy" className="hover:text-accent underline-offset-2 hover:underline">
          Privacy
        </Link>{" "}
        ·{" "}
        <Link href="/terms" className="hover:text-accent underline-offset-2 hover:underline">
          Terms
        </Link>
      </p>
    </form>
  );
}
