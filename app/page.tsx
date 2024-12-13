import Hero from "@/components/home/hero";
import MeetOurAIEmployees from "@/components/home/meet-our-ai-employees";
import { VideoGeneration } from "@/components/home/video-generation";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <VideoGeneration />
      <MeetOurAIEmployees />
    </div>
  );
}
