# Alpha Railings — owner input needed (branch `crm-ready`)

The site design is unchanged. This branch replaces the "form coming soon" placeholders with a native quote form that posts to 360 CRM, and adds SMS consent, /privacy, /terms and an optional 360 chat widget. All 360 settings live in `lib/crm.ts`.

## 1. Before merging: create and publish the 360 form (required)

- In 360 CRM, open the **Alpha Railings – Miami** workspace (`2fcb5a6f-b759-4833-9b9a-503427358f40`) and go to Website & forms. Create a form from `docs/360-quote-form.json` with slug **`alpha-railings-quote`** and set it to **Published**.
- The JSON was validated against 360's `formSchema` in `server/src/modules/website/model.ts`. Field IDs and project-type options must stay exactly as they are, because the site sends those IDs.
- As of 2026-10-12, `GET https://api.get360crm.com/public/website/forms/alpha-railings-quote` returns **404**. Until the form is published, every submission shows a fallback: "Our online form is temporarily unavailable — call (754) 318-2099 or email us". The email link comes pre-filled with what the visitor typed, so no lead is lost. Don't merge before publishing unless that fallback is acceptable.
- In 360, set the thank-you text and decide whether to turn on Turnstile. The site sends `turnstileToken: ""`, so **leave Turnstile off** or the site will need a widget added.
- Point the 360 automations (new-lead notification, auto-reply) at the `lead.received` / `form.submitted` events for this form.

## 2. Routing leads by location (optional, not built)

- In 360, the **slug decides the workspace**. Each published form belongs to one workspace, and slugs are globally unique.
- Today every lead goes to Miami.
- The site has per-state pages (`/areas/massachusetts`, `/new-hampshire`, `/maine`, `/rhode-island`, `/florida`). Their quote buttons now link to `/quote?area=<state>`, and the form saves that in the `source_page` answer, e.g. `/quote (area: massachusetts)`. The Miami team can see where a lead came from.
- To route automatically:
  1. Publish the same form JSON in each workspace under its own slug, e.g. `alpha-railings-quote-boston` (Boston `7fdae2c2-60cf-4ca0-bb14-9dc6eee5c031`) and `alpha-railings-quote-orlando` (Orlando `24e8361e-fe49-40c0-86c4-148897333ba6`).
  2. In `lib/crm.ts`, map area to slug, e.g. `{ massachusetts|new-hampshire|maine|rhode-island: boston, florida: miami }`. Then pick the slug in `submitLead` from the `?area=` param, or from the state/ZIP the visitor typed.
- **Decide:** should Florida leads go to Miami or Orlando? Split by ZIP?
- **Decide:** what happens to out-of-area and nationwide-shipping leads? Today they default to Miami.

## 3. 360 chat widget (optional)

- `lib/crm.ts` → `chatWidgetToken: ""`. While it is empty, **no chat script loads**.
- To turn it on, copy the installation token from 360 CRM > Website & forms > Chat in the workspace that should answer chats. In that widget's settings, add `https://alpharailings.com` (and `https://www.alpharailings.com` if used) to the allowed origins.
- The script is `https://api.get360crm.com/public/website/embed.js` with `data-widget`, loaded lazily. Colour: `chatColor` (site accent `#00d4ff`).
- Note: the 360 bubble is fixed at the bottom right (20px). On phones, the site's sticky "Call Now / Free Quote" bar is also at the bottom, so the bubble will sit on top of the right half of that bar. Check this on a phone after enabling. It may need a 360 option for a bottom offset.

## 4. SMS / A2P registration

- Every form has the optional SMS consent checkbox: unchecked by default, separate from submit, with the exact required text and links to /privacy and /terms.
- The consent is saved in 360 with the submission as text, time and hashed IP.
- **Confirm the legal business name.** The policies say "Alpha Railings". If the registered entity is an LLC (e.g. "Alpha Railings LLC"), it should appear in /privacy, /terms and the A2P brand registration.
- **Confirm a business mailing address.** Carriers and A2P reviewers often expect one on the privacy and terms pages, and there is none on the site today. The schema.org data says only "MA".
- Support contact used everywhere: (754) 318-2099 and support@alpharailings.com. Confirm that this number is monitored and that support@ is a working inbox.
- For A2P: privacy URL `https://alpharailings.com/privacy`, terms URL `https://alpharailings.com/terms#sms`.

## 5. What was there before (nothing GHL was removed)

- There were **no** GHL or LeadConnector scripts, iframes, forms or chat widgets in the code. There were only two placeholder cards:
  - `/quote`: "Quote Form Coming Soon … GHL form will be embedded here"
  - `/contact`: "Contact Form Coming Soon … GHL form integration placeholder"
- Both placeholders were replaced with the native form.
- The `tel:` and `mailto:` links (header, footer, sticky CTA, contact cards) are kept as secondary contact options.
- Only the `schema-org` JSON-LD `<Script>` in `app/layout.tsx` and the FAQ JSON-LD remain, and both are SEO data.

## 6. Honesty check — claims to verify (nothing was changed)

Please confirm each of these, or tell us to soften or remove it:

| Claim | Where |
| --- | --- |
| "Licensed & Insured" / "Fully licensed and insured **across all five states** we serve" | header bar, footer, home, /quote benefits + badges, all area pages |
| "**2,500+** Projects" / "Projects Delivered" | home stats, /about, /quote badges |
| "**15+** Years Experience / of Excellence" | home, /about, /quote, every area page |
| "Most projects completed in **2-4 weeks**" | /quote, /faq, /our-process |
| "**Satisfaction Guaranteed** — not complete until you are 100% satisfied" | /quote, /our-process |
| "We provide a detailed quote **within 24 hours**" / "We respond within 24 hours" | /quote hero, /contact |
| "Comprehensive **warranty** covering materials and workmanship" | /our-process FAQ |
| "**Lifetime** Craftsmanship" | home |
| "**No Subcontractors** — our own **certified** crew handles every installation" | area pages (MA, NH, ME, RI, FL), /our-process, glass railings page |
| "**5 States Served**" vs. "**Ships Nationwide** / all 50 states" | badges and area pages vs. layout metadata and footer (mixed message) |
| "Transparent pricing … **no hidden fees**" and financing "quick approval, low monthly payments" | /quote, /financing. The financing page itself says partnerships are still being finalized. |
| Hours: "Mon–Fri 7 AM–6 PM, Sat by appointment" | header, footer, /contact, /quote. Also set these as office hours on the 360 chat widget. |

## 7. Housekeeping found

- `npm run lint` fails because the repo has no `eslint.config.*`. This was already the case before this branch. `tsc --noEmit` and `npm run build` pass.
- This working copy is a **sparse checkout**: `public/` images are offloaded, see `.git/info/sparse-checkout`. Builds still pass, but the images are missing locally. The screenshots in `docs/screens/crm-ready/` served the images straight from git objects.
