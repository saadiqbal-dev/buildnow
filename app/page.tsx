import CTA from "@/components/home/cta";
import DeepIntegration from "@/components/home/deep-integration";
import Hero from "@/components/home/hero";
import MeetOurAIEmployees from "@/components/home/meet-our-ai-employees";
import { VideoGeneration } from "@/components/home/video-generation";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <VideoGeneration />
      <MeetOurAIEmployees />
      <DeepIntegration />
      <CTA />
    </div>
  );
}
