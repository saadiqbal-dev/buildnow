import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Agent = {
  name: string;
  tagline: string;
  qualities: string[];
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
  },
];

export default function MeetOurAIEmployees() {
  return (
    <section className="py-24 mx-auto container px-4 bg-background">
      <h2 className="text-4xl font-semibold text-center pb-16">
        Meet our AI Employees
      </h2>
      <div className="grid grid-cols-1 gap-24 items-start">
        {agents.map((agent, index) => (
          <div
            key={agent.name}
            className={cn(
              "flex items-start gap-12 justify-center",
              index % 2 === 1 ? "flex-row-reverse" : ""
            )}
          >
            <div
              className={cn(
                "flex",
                index % 2 === 0 ? "justify-end" : "justify-start"
              )}
            >
              <div className="w-64 h-96 border" />
            </div>
            <div className={"flex flex-col gap-4"}>
              <h3 className="text-2xl font-medium">
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
