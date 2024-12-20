import { desc } from "framer-motion/client";
import { Fingerprint, ListCheck, Sparkle } from "lucide-react";

const sections = [
  {
    icon: Fingerprint,
    title: "Your company’s voice and tone",
    description:
      "From tailored greetings to predefined behaviors, agents personalize every interaction while reinforcing your brand.",
  },
  {
    icon: Sparkle,
    title: "Your knowledge and expertise",
    description:
      "Ground your agent with your knowledge and processes, enabling it to understand the context of every conversation and respond instantly and creatively.",
  },
  {
    icon: ListCheck,
    title: "Your goals and guardrails",
    description:
      "Assign goals and objectives to your agent, and encourage it to drive to specific options. Define boundaries to ensure your agent stays on-topic and makes appropriate decisions.",
  },
];

export default function DefineYourBrand() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">
          Define your brand, knowledge and goals
        </h2>
        <p className="text-center max-w-2xl">
          Your AI agent acts as an extension of your company, enabling you to
          deliver authentic, engaging customer experiences.
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
