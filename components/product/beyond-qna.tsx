import { AppWindowMac, Book, Star, Users } from "lucide-react";

const sections = [
  {
    icon: AppWindowMac,
    title: "Use your expertise",
    description:
      "Your agent is informed by your knowledge base, and guided by your company's policies and brand guidelines, enabling it to make informed decisions.",
  },
  {
    icon: Star,
    title: "Take action, instantly",
    description:
      "Your agent is connected to your systems of record - from your order management system to your CRM - so it can take action on your customer's behalf, from processing an exchange, scheduling a delivery, updating a subscription, or changing a reservation.",
  },
  {
    icon: Users,
    title: "Empower your teams",
    description:
      "When your agent can't solve your customer's problem, it collects critical information and delivers a detailed summary to your customer service teams, preparing them to effectively manage escalations.",
  },
];

export default function BeyondQNA() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">Beyond Q&apos;A</h2>
        <p className="text-center max-w-2xl">
          Conversational AI isn’t just about answering questions. With Sierra,
          your AI agent takes action to solve your customers’ problems,
          improving self-service resolution rate and average handle time.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
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
