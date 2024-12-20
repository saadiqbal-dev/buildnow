import { Book, Star } from "lucide-react";

const sections = [
  {
    icon: Book,
    title: "Knowledge retrieval",
    description:
      "AI agents understand when and where to locate information, from account information to order history, Q&A documents to corporate policies.",
  },
  {
    icon: Star,
    title: "Real-time action",
    description:
      "AI agents can take action on behalf of your customers via secure, real-time integrations to your systems of record.",
  },
];

export default function ConnectAIToBusiness() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">
          Connect AI to your entire business
        </h2>
        <p className="text-center max-w-2xl">
          Agent OS delivers secure, real-time integrations across your systems
          of record, from commerce platforms to CRM, to your homegrown systems.
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
