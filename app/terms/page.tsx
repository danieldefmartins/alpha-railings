import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service & SMS Terms | Alpha Railings",
  description:
    "Terms of use for alpharailings.com, quotes and estimates, and the Alpha Railings text messaging (SMS) program.",
  alternates: { canonical: "https://alpharailings.com/terms" },
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
      updated="October 12, 2026"
    >
      <div>
        <p>
          These terms govern your use of alpharailings.com and the communications you receive from Alpha
          Railings (&ldquo;Alpha Railings,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the website
          or submitting a form, you agree to these terms and to our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
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
        <h3>Program description</h3>
        <p>
          If you check the text message consent box on one of our forms or otherwise give us express
          consent, Alpha Railings will send you text messages about your estimate, appointments and project
          updates (for example quote follow-ups, scheduling and appointment reminders, delivery and
          installation updates, and replies to your questions). Consent is optional and is not a condition
          of any purchase.
        </p>
        <h3>Message frequency</h3>
        <p>Message frequency varies based on your project and requests.</p>
        <h3>Costs</h3>
        <p>
          Message &amp; data rates may apply. Check with your mobile carrier for details about your plan.
        </p>
        <h3>Opt out &amp; help</h3>
        <ul>
          <li>
            Reply <strong>STOP</strong> to any message to opt out. You will receive one confirmation message
            and no further texts unless you opt in again.
          </li>
          <li>
            Reply <strong>HELP</strong> for help, or contact us at{" "}
            <a href="tel:+17543182099">(754) 318-2099</a> or{" "}
            <a href="mailto:support@alpharailings.com">support@alpharailings.com</a>.
          </li>
        </ul>
        <h3>Carriers</h3>
        <p>
          Mobile carriers are not liable for delayed or undelivered messages. Message delivery is not
          guaranteed.
        </p>
        <h3>Privacy</h3>
        <p>
          We do not share your mobile number or SMS consent with third parties or affiliates for marketing
          purposes. See our <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <h3>Support</h3>
        <p>
          Alpha Railings — <a href="tel:+17543182099">(754) 318-2099</a> —{" "}
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
