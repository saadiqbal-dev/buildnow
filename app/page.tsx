import CTA from "@/components/home/cta";
import CarouselSize from "@/components/home/deep-integration";
import Hero from "@/components/home/hero";
import MeetOurAIEmployees from "@/components/home/meet-our-ai-employees";
import Platform from "@/components/home/platform";
import { SafeSecure } from "@/components/home/safe-secure";
import { VideoGeneration } from "@/components/home/video-generation";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <VideoGeneration />
      <MeetOurAIEmployees />
      <CarouselSize />
      <Platform />
      <SafeSecure />
      <CTA />
    </div>
  );
}
