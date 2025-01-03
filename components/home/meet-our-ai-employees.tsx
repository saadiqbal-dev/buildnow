import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Agent = {
  name: string;
  tagline: string;
  qualities: string[];
  video: string;
  cta: string;
};

const agents: Agent[] = [
  {
    name: "Aditya",
    tagline: "AI Phone Agent",
    qualities: [
      "Create custom Voice AI Agents that can handle lead qualification, customer support, and receptionist tasks - all tailored to your unique needs. ",
    ],
    cta: "Hire Aditya Now",
    video: "/videos/mike.mp4",
  },
  {
    name: "Jess",
    tagline: "AI Trainer",
    qualities: [
      "Coach your workforce using on-demand AI roleplays that replicate client calls. Strengthen their skills for complex tasks and ensure every customer conversation ends on a high note.",
    ],
    cta: "Hire Jess Now",
    video: "/videos/alice.mp4",
  },
];

export default function MeetOurAIEmployees() {
  return (
    <section className="py-24 mx-auto container px-4 bg-background">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold text-center">
          Meet Our Digital Workers
        </h2>
        <p className="text-center max-w-2xl">
          Our digital workers are here to help you transform your contact
          center. Available 24/7 to help answer calls, train your team, and
          provide video answers to your team. With multilingual capabilities,
          and human-like intelligence, they are revolutionizing how contact
          centers operate.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="grid md:grid-cols-2 gap-24 items-start">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className={cn("flex flex-col items-center gap-12 justify-center")}
          >
            <div className={cn("flex")}>
              <div className="w-full h-full overflow-clip ">
                <video key={agent.name} autoPlay loop muted>
                  <source src={agent.video} type="video/mp4" />
                </video>
              </div>
            </div>
            <div
              className={
                "flex text-center justify-between items-center flex-col gap-4"
              }
            >
              <h3 className="text-2xl font-bold">
                {agent.name} - {agent.tagline}
              </h3>
              <ul className="flex flex-col max-w-xl gap-2 text-center">
                {agent.qualities.map((quality, index) => (
                  <li key={index}> {quality}</li>
                ))}
              </ul>
              <Button className="max-w-fit">{agent.cta}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
