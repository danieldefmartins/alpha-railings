import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service & SMS Terms | Alpha Railings",
  description:
    "Terms of use for alpharailings.com, quotes and estimates, and the Alpha Railings text messaging (SMS) program.",
  alternates: { canonical: "https://alpharailings.com/terms" },
  openGraph: {
    type: "website",
    siteName: "Alpha Railings",
    title: "Terms of Service & SMS Terms | Alpha Railings",
    description: "Terms of use for alpharailings.com, quotes and estimates, and the Alpha Railings text messaging (SMS) program.",
    url: "https://alpharailings.com/terms",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Alpha Railings custom railings and staircases" }],
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Terms of <span className="text-accent">Service</span>
        </>
      }
      updated="November 3, 2026"
    >
      <div>
        <p>
          These terms govern your use of alpharailings.com and the communications you receive from Alpha
          Railings (&ldquo;Alpha Railings,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). Alpha Railings is
          operated by ALPHA RAILINGS LLC. By using the website
          or submitting a form, you agree to these terms and to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </div>

      <div>
        <h2>Website content</h2>
        <p>
          Content on this website, including photos, descriptions, timelines and price ranges, is for
          general information only. It is not an offer, a guarantee of availability, or a binding price.
          Product photos may show past projects or representative examples.
        </p>
      </div>

      <div>
        <h2>Quotes, estimates &amp; projects</h2>
        <p>
          Requesting a quote is free and creates no obligation for you or for us. Pricing, scope, schedule,
          payment terms and any warranty are set only in a written estimate or contract signed or accepted
          by both parties. If that written agreement conflicts with this page, the written agreement
          controls.
        </p>
      </div>

      <div>
        <h2>Your submissions</h2>
        <p>
          You agree that the information and photos you send us are accurate and that you have the right to
          share them. You allow us to use them to prepare your quote and complete your project.
        </p>
      </div>

      <div id="sms" className="scroll-mt-28">
        <h2>SMS / Text Messaging Terms</h2>
        <h3>Program name</h3>
        <p>Alpha Railings text messages</p>
        <h3>Program description</h3>
        <p>
          If you check the optional text message consent box on our quote form, Alpha Railings will send
          you text messages at the number you provide about:
        </p>
        <ul>
          <li>quote follow-ups;</li>
          <li>appointment scheduling and reminders;</li>
          <li>project updates;</li>
          <li>customer care.</li>
        </ul>
        <p>Consent is not a condition of purchase.</p>
        <h3>Message frequency</h3>
        <p>Message frequency varies.</p>
        <h3>Costs</h3>
        <p>Msg &amp; data rates may apply.</p>
        <h3>Opt out &amp; help</h3>
        <p>
          Reply STOP to cancel, HELP for help. After you reply STOP you will receive one confirmation
          message and no further texts unless you opt in again. For help you can also contact us at{" "}
          <a href="tel:+17543182099">(754) 318-2099</a> or{" "}
          <a href="mailto:support@alpharailings.com">support@alpharailings.com</a>.
        </p>
        <h3>Carriers</h3>
        <p>Carriers are not liable for delayed or undelivered messages.</p>
        <h3>Privacy</h3>
        <p>
          No mobile information will be shared with third parties/affiliates for marketing/promotional
          purposes. See our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <h3>Support</h3>
        <p>
          Alpha Railings (operated by ALPHA RAILINGS LLC) — <a href="tel:+17543182099">(754) 318-2099</a> —{" "}
          <a href="mailto:support@alpharailings.com">support@alpharailings.com</a>
        </p>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <p>
          The website design, text, logos and photos belong to Alpha Railings or its licensors and may not be
          copied or reused without permission.
        </p>
      </div>

      <div>
        <h2>Disclaimers &amp; limitation of liability</h2>
        <p>
          The website is provided &ldquo;as is.&rdquo; To the fullest extent permitted by law, Alpha Railings
          is not liable for indirect, incidental or consequential damages arising from use of the website.
          Nothing in these terms limits rights you have under applicable consumer protection law or under a
          signed contract with us.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. The &ldquo;Last updated&rdquo; date above shows when
          they last changed.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms: <a href="tel:+17543182099">(754) 318-2099</a> or{" "}
          <a href="mailto:support@alpharailings.com">support@alpharailings.com</a>.
        </p>
      </div>
    </LegalPage>
  );
}
