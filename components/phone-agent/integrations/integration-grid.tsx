import { Card } from "@/components/ui/card";

interface IntegrationIcon {
  name: string;
  icon: string;
}

const integrations: IntegrationIcon[] = [
  { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { name: "PayPal", icon: "https://cdn.simpleicons.org/paypal/00457C" },
  { name: "Zendesk", icon: "https://cdn.simpleicons.org/zendesk/03363D" },
  { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { name: "Intercom", icon: "https://cdn.simpleicons.org/intercom/6E6E6E" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack/4A154B" },
  { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom/2D8CFF" },
  { name: "Telegram", icon: "https://simpleicons.org/icons/telegram.svg" },
  { name: "Google", icon: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06A6A" },
  { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail/EA4335" },
];

export default function IntegrationGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {integrations.map((integration, index) => (
        <Card
          key={index}
          className="aspect-square p-4 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={integration.icon}
            alt={integration.name}
            className="w-8 h-8 object-contain"
          />
        </Card>
      ))}
    </div>
  );
}
