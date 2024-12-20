import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Agent = {
  name: string;
  tagline: string;
  qualities: string[];
  video: string;
};

const agents: Agent[] = [
  {
    name: "Aditiya",
    tagline: "AI Trainer",
    qualities: [
      "Create training videos your team will actually watch",
      "Get instant video answers to questions",
      "Clone team members for AI-powered training",
      "Bring your training content to life",
    ],
    video: "/videos/mike.mp4",
  },
  {
    name: "Jass",
    tagline: "AI Phone Agent",
    qualities: [
      "Create training videos your team will actually watch",
      "Get instant video answers to questions",
      "Clone team members for AI-powered training",
      "Bring your training content to life",
    ],
    video: "/videos/alice.mp4",
  },
];

export default function MeetOurAIEmployees() {
  return (
    <section className="py-24 mx-auto container px-4 bg-background">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">Meet our AI Employees</h2>
        <p className="text-center max-w-2xl">
          Our digital workers don&apos;t just automate tasks – they transform
          your business. With 24/7 operations, multilingual capabilities, and
          human-like intelligence, they&apos;re revolutionizing how work gets
          done.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-24 items-start">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className={cn("flex items-center gap-12 justify-center")}
          >
            <div className={cn("flex")}>
              <div className="w-full h-full overflow-clip ">
                <video key={agent.name} autoPlay loop muted>
                  <source src={agent.video} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className={"flex flex-col gap-4"}>
              <h3 className="text-2xl font-bold">
                {agent.name} - {agent.tagline}
              </h3>
              <ul className="flex flex-col gap-2">
                {agent.qualities.map((quality, index) => (
                  <li key={index}>- {quality}</li>
                ))}
              </ul>
              <Button className="max-w-fit">Try it yourself</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
