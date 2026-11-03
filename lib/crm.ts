/**
 * 360 CRM configuration + client for the public website forms API.
 * Contract: 360-crm server/src/modules/website/README.md (routes.ts / model.ts).
 *
 * Flow:
 *   GET  {apiBase}/public/website/forms/{formSlug}  -> { id, config, token, siteKey, brand }
 *   POST {apiBase}/public/website/direct-submit      { token, key, uploadSessionId, answers, smsConsent, ... }
 *   (360 rejects a submit sent less than 2 s after the token was issued, so we wait out the rest.)
 *
 * The 360 workspace is resolved server-side from the (globally unique) form slug,
 * so routing a lead to a location = posting to that location's slug.
 * Form definition to create/publish in 360: docs/360-quote-form.json
 * Nothing here is secret.
 */
export const crm = {
  apiBase: "https://api.get360crm.com",

  /** Default form, created in the Alpha Railings – Miami workspace. */
  formSlug: "alpha-railings-quote",

  /** Alpha Railings 360 workspaces (reference only — the slug decides routing). */
  workspaces: {
    miami: "2fcb5a6f-b759-4833-9b9a-503427358f40",
    boston: "7fdae2c2-60cf-4ca0-bb14-9dc6eee5c031",
    orlando: "24e8361e-fe49-40c0-86c4-148897333ba6",
  },

  /** Field IDs the published 360 form uses (must match docs/360-quote-form.json). */
  fields: {
    firstName: "first_name",
    lastName: "last_name",
    phone: "phone",
    email: "email",
    location: "location",
    projectType: "project_type",
    message: "message",
    source: "source_page",
    photos: ["photo_1", "photo_2", "photo_3"],
  },

  /**
   * 360 webchat installation token (360 CRM > Website & forms > Chat).
   * Empty = the chat widget is not loaded.
   */
  chatWidgetToken: "",
  chatColor: "#00d4ff",

  /** Fallback contact shown when the API / form is unavailable. */
  phone: "(754) 318-2099",
  phoneHref: "tel:+17543182099",
  email: "support@alpharailings.com",
} as const;

/** Project types — mirrors the site's services. Must match the 360 select options exactly. */
export const projectTypes = [
  "Custom Staircase",
  "Glass Railings",
  "Cable Railings",
  "Iron Railings & Handrails",
  "Gates & Fences",
  "Shower Doors",
  "Glass Partitions",
  "Commercial Project",
  "Other / Not sure yet",
] as const;

export const smsConsentText =
  "I agree to receive text messages from Alpha Railings about my quote, appointments and project updates. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help. See our Privacy Policy and Terms.";

export type Lead = {
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  message: string;
  smsConsent: boolean;
  honeypot: string;
  sourcePage: string;
};

type FormDef = {
  token: string;
  config: {
    fields: { id: string; type: string; options?: string[] }[];
    thankYou?: string;
  };
};

/** `unavailable` = API down or form not published -> show call/email fallback. */
export class CrmError extends Error {
  constructor(
    message: string,
    public unavailable = false,
  ) {
    super(message);
  }
}

const api = (path: string) =>
  `${crm.apiBase.replace(/\/$/, "")}/public/website${path}`;

export function toE164(raw: string) {
  const t = raw.trim();
  const digits = t.replace(/\D/g, "");
  if (t.startsWith("+")) return "+" + digits;
  if (digits.length === 10) return "+1" + digits;
  if (digits.length === 11 && digits.startsWith("1")) return "+" + digits;
  return t;
}

async function call<T>(input: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(input, { ...init, referrerPolicy: "no-referrer" });
  } catch {
    throw new CrmError("We couldn't reach our quote system.", true);
  }
  const body = (await res.json().catch(() => ({}))) as {
    error?: { message?: string };
    message?: string;
  };
  if (!res.ok) {
    const msg = body.error?.message || body.message || `Request failed (${res.status})`;
    // 404 = form not created/published; 5xx = service down.
    throw new CrmError(msg, res.status === 404 || res.status >= 500);
  }
  return body as T;
}

function issuedAt(token: string): number | undefined {
  try {
    const part = token.split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
    return (JSON.parse(atob(part.padEnd(Math.ceil(part.length / 4) * 4, "="))) as { issuedAt?: number }).issuedAt;
  } catch {
    return undefined;
  }
}

export async function submitLead(lead: Lead): Promise<{ thankYou: string; redirect?: string }> {
  if (!crm.formSlug) throw new CrmError("Online form is not configured yet.", true);
  const form = await call<FormDef>(api(`/forms/${encodeURIComponent(crm.formSlug)}`));
  const byId = new Map(form.config.fields.map((f) => [f.id, f]));
  const f = crm.fields;
  const key = crypto.randomUUID();
  const answers: Record<string, string> = {};
  const put = (id: string, v: string) => {
    if (v && byId.has(id)) answers[id] = v;
  };

  const [first, ...rest] = lead.name.trim().split(/\s+/);
  put(f.firstName, first ?? "");
  put(f.lastName, rest.join(" "));
  if (!byId.has(f.lastName) && byId.has(f.firstName)) answers[f.firstName] = lead.name.trim();
  put(f.phone, toE164(lead.phone));
  put(f.email, lead.email.trim());
  put(f.location, lead.location.trim());

  // A select only accepts its exact options — otherwise keep the choice in the message.
  let message = lead.message.trim();
  const select = byId.get(f.projectType);
  if (lead.projectType) {
    if (select?.options?.includes(lead.projectType)) answers[f.projectType] = lead.projectType;
    else message = `Project type: ${lead.projectType}${message ? `\n\n${message}` : ""}`;
  }
  put(f.message, message);
  put(f.source, lead.sourcePage);

  const wait = (issuedAt(form.token) ?? Date.now()) + 2500 - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));

  return call(api("/direct-submit"), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      token: form.token,
      key,
      uploadSessionId: crypto.randomUUID(),
      answers,
      attribution: {},
      smsConsent: lead.smsConsent,
      emailConsent: false,
      consent: false,
      website: lead.honeypot,
      turnstileToken: "",
    }),
  });
}
