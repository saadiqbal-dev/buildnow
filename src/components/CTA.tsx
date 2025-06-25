import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="flex flex-col min-h-[50vh] items-center justify-center gap-6">
      <h2 className="text-4xl font-light">
        Build Your Team of AI Voice Agents
      </h2>
      <p className="text-base text-gray-700">
        Find out how Buildnow AI can help you transform customer experiences
        with AI
      </p>
      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant={"outline"}>Contact Sales</Button>
      </div>
    </div>
  );
}
