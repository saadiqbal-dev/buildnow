import { Button } from "../ui/button";
import InteractiveSection from "../ui/platform-section";
import { MarqueeDemo } from "./components/marquee";

export default function Platform() {
  return (
    <section className="py-24 mx-auto container px-4 bg-[#D7CECC]">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h2 className="text-4xl font-semibold text-center">
          24/7 Digital Workforce
        </h2>
        <p className="max-w-2xl text-center">
          Democratize knowledge. Scale Digital workers that train your staff and
          manage Tier 1 and 2 calls—so your team can focus on what matters most.
        </p>
      </div>
      <MarqueeDemo />
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h2 className="text-4xl font-semibold">Buildnow AI Platform</h2>
          <p className="text-center max-w-2xl">
            AI-First Contact Center: Build a Smarter Workforce
          </p>
          <p className="text-center max-w-2xl">
            Resolve issues faster and elevate customer experiences with instant
            video answers, AI trainers, and voice agents.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <InteractiveSection />
        </div>
      </div>
    </section>
  );
}
