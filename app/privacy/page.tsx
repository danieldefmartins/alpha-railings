import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Alpha Railings",
  description:
    "How Alpha Railings collects, uses and protects your information, including mobile numbers and text message (SMS) consent.",
  alternates: { canonical: "https://alpharailings.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Privacy <span className="text-accent">Policy</span>
        </>
      }
      updated="October 12, 2026"
    >
      <div>
        <p>
          Alpha Railings (&ldquo;Alpha Railings,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
          privacy. This policy explains what information we collect through alpharailings.com, our quote
          and contact forms, our website chat, phone calls, emails and text messages, and how we use and
          protect it.
        </p>
      </div>

      <div>
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Information you give us:</strong> your name, phone number, email address, city/state or
            ZIP code, project type, project details, and any photos you upload when requesting a quote,
            contacting us or chatting with us.
          </li>
          <li>
            <strong>Text message consent:</strong> whether you opted in to receive text messages, along with
            the date and time of that choice.
          </li>
          <li>
            <strong>Automatic information:</strong> basic technical data such as browser type, device type,
            pages visited and an anonymized form of your IP address, used for security, spam prevention and
            to keep the website working.
          </li>
        </ul>
      </div>

      <div>
        <h2>How we use your information</h2>
        <ul>
          <li>To respond to your request and prepare your quote or estimate.</li>
          <li>To schedule measurements, consultations, deliveries and installations.</li>
          <li>To send project updates, and text messages only if you opted in.</li>
          <li>To provide customer support and improve our services and website.</li>
          <li>To prevent fraud and spam and to meet legal obligations.</li>
        </ul>
      </div>

      <div>
        <h2>Mobile numbers &amp; text messaging (SMS)</h2>
        <p>
          <strong>
            We do not sell, rent or share your mobile phone number or your text messaging (SMS) opt-in
            consent with third parties or affiliates for their marketing or promotional purposes.
          </strong>{" "}
          Mobile information and SMS consent data are used only to communicate with you about your
          estimate, appointments and project.
        </p>
        <p>
          Text messaging originator opt-in data and consent will not be shared with any third parties,
          except with service providers (such as our text-messaging and customer-management platforms) that
          deliver messages on our behalf and are not permitted to use your information for any other
          purpose.
        </p>
        <p>
          Giving SMS consent is optional and is never a condition of receiving a quote or purchasing from
          us. You can opt out at any time by replying <strong>STOP</strong>; reply <strong>HELP</strong> for
          help. See our <Link href="/terms#sms">SMS / Text Messaging Terms</Link>.
        </p>
      </div>

      <div>
        <h2>How we share information</h2>
        <p>We do not sell your personal information. We share it only:</p>
        <ul>
          <li>
            With service providers that help us run our business (for example website hosting, our customer
            relationship management system, email and messaging providers), under obligations to protect it;
          </li>
          <li>With the installation and delivery partners working on your project, only as needed to do that work;</li>
          <li>When required by law, or to protect our rights, customers or the public.</li>
        </ul>
        <p>The SMS restrictions above apply in every case.</p>
      </div>

      <div>
        <h2>Cookies &amp; chat</h2>
        <p>
          Our website uses only the cookies and local storage needed to operate the site and, if enabled,
          our website chat. If you start a chat, the name and contact details you enter and your messages
          are stored so our team can reply.
        </p>
      </div>

      <div>
        <h2>Data retention &amp; security</h2>
        <p>
          We keep your information as long as needed to provide our services, maintain project and warranty
          records, and meet legal and accounting requirements. We use reasonable administrative, technical
          and physical safeguards, but no method of transmission or storage is 100% secure.
        </p>
      </div>

      <div>
        <h2>Your choices</h2>
        <ul>
          <li>Reply STOP to any text message to stop receiving texts.</li>
          <li>Ask us to access, correct or delete your information by contacting us below.</li>
          <li>Unsubscribe from emails using the link in the email or by contacting us.</li>
        </ul>
      </div>

      <div>
        <h2>Children&rsquo;s privacy</h2>
        <p>
          Our services are not directed to children under 13, and we do not knowingly collect their
          personal information.
        </p>
      </div>

      <div>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above shows when
          it last changed.
        </p>
      </div>

      <div>
        <h2>Contact us</h2>
        <p>
          Alpha Railings
          <br />
          Phone: <a href="tel:+17543182099">(754) 318-2099</a>
          <br />
          Email: <a href="mailto:support@alpharailings.com">support@alpharailings.com</a>
        </p>
      </div>
    </LegalPage>
  );
}
