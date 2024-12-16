import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-12 py-16 px-4 text-center h-[calc(100vh_-_56px)] w-full">
      <AnimatedGradientText className="z-10 bg-black/10 text-white">
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Introducing BuildNow v2.0
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>

      <div className="flex items-center flex-col gap-4 z-10 text-white">
        <h1 className="font-bold text-6xl">Buildnow.ai</h1>
        <h2 className="font-semibold text-4xl">
          AI-Ehnanced Workflow for Call Centers
        </h2>
        <p className="font-medium text-muted">
          Digital Workers That Train Your Team, Provide Video Answers, And Make
          Calls!
        </p>
      </div>

      <Button size="lg" className="z-10">
        Get Started
      </Button>
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 w-full h-[calc(100vh_-_56px)] object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
