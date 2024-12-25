import {
  Calendar,
  CalendarCheck,
  ChartLine,
  MessageSquare,
  Users,
} from "lucide-react";

const sections = [
  {
    icon: Calendar,
    title: "Around-the-clock",
    description:
      "AI agents are available to handle customers' questions any time of day. Customers can put the conversation on hold if life takes them elsewhere, and your agent can pick up where they left off, later.",
  },
  {
    icon: MessageSquare,
    title: "Connect across channels",
    description:
      "Whether they're at home or on the go, offer your customers the convenience of support through both chat and voice.",
  },
  {
    icon: CalendarCheck,
    title: "Always-ready",
    description:
      "AI agents are easy and low-cost to update, whether there is a new product to highlight, a new promotion to offer, or a new policy to follow.",
  },
  {
    icon: ChartLine,
    title: "Scalable",
    description:
      "When you experience surges in consumer demand, Sierra scales up effortlessly, ensuring a smooth experience with plenty of capacity.",
  },
];

export default function AnytimeAnywhere() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl text-center font-semibold">
          Anytime and anywhere
        </h2>
        <p className="text-center max-w-2xl">
          Your AI agent is up-to-date, delivering customer service anytime and
          anywhere to dramatically lower your response time.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <video className="w-full h-full object-cover rounded-xl">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-2 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <section.icon className="w-6 h-6" />
                <h3 className="font-bold text-lg">{section.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
