import { Button } from "@/components/ui/button";
import Threads from "./ui/threads";
import DashboardImage from "@/assets/dashboard.png";

export default function HeroSection() {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Threads background animation */}

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto text-center">
        <div className="absolute inset-0 z-0">
          <Threads
            amplitude={1.5}
            distance={0.25}
            enableMouseInteraction={true}
          />
        </div>

        <div className="max-w-4xl mx-auto min-h-screen items-center flex flex-col justify-center text-center">
          {/* Main headline */}
          <h1 className="text-5xl relative z-50 md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-black">Buildnow AI</span>
            <br />
            <span className="text-black">
              Help you Build your Team of{" "}
              <span className="text-black">AI Voice Agents</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl relative z-50 md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
            AI customer service platform to augment your CX teams with AI Voice
            agents & AI Video Trainings. Better customer experiences while
            reducing costs.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg">Start Building Your AI Team</Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-md mb-8">
        <img src={DashboardImage} className="w-[1028px] " />
      </div>
    </section>
  );
}
