import Script from "next/script";
import { crm } from "@/lib/crm";

/**
 * 360 CRM webchat bubble. Loads only when crm.chatWidgetToken is set
 * (360 CRM > Website & forms > Chat > installation token).
 */
export function ChatWidget() {
  if (!crm.chatWidgetToken) return null;
  return (
    <Script
      id="crm360-chat"
      src={`${crm.apiBase}/public/website/embed.js`}
      strategy="lazyOnload"
      data-widget={crm.chatWidgetToken}
      data-color={crm.chatColor}
      data-title="Chat with Alpha Railings"
    />
  );
}
