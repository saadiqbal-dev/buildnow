import { Button } from "@/components/ui/button";
// import Threads from "./ui/threads";
import DashboardImage from "/assets/dashboard.png";

export default function HeroSection() {
  return (
    <section className=" min-h-screen flex flex-col gap-6 items-center justify-center overflow-hidden bg-[#F4F2EC]">
      {/* Threads background animation */}

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto text-center">
        {/* <div className="absolute inset-0 z-0">
          <Threads
            amplitude={1.5}
            distance={0.25}
            enableMouseInteraction={true}
          />
        </div> */}

        <div className="max-w-4xl mx-auto pt-[100px] items-center flex flex-col justify-center text-center">
          {/* Main headline */}
          <h1 className="text-4xl relative z-50 md:text-5xl font-light text-black mb-6 leading-tight">
            Build your Team of
            <span className="text-black">
              <br />
              AI Voice Agents
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl relative z-50 md:text-lg text-black mb-8 px-3 md:px-0 max-w-3xl mx-auto leading-relaxed">
            AI customer service platform to augment your CX teams with AI Voice
            agents & AI Video Trainings. Better customer experiences while
            reducing costs.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 px-4 justify-center items-center">
            <Button className="w-full" size="lg">
              Sign Up
            </Button>
            <Button className="w-full" variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-md mb-8 px-3 md:px-0">
        <img src={DashboardImage} className="w-[1028px] " />
      </div>
    </section>
  );
}
