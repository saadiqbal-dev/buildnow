import CTA from "@/components/cta";
import AlwaysImproving from "@/components/video-generation/always-improving";
import AnytimeAnywhere from "@/components/video-generation/anytime-anywhere";
import BeyondQNA from "@/components/video-generation/beyond-qna";
import Hero from "@/components/video-generation/hero";
import { IntuitiveConversations } from "@/components/video-generation/intuitive-covnersationts";
import { SafeAndSecure } from "@/components/video-generation/safe-and-secure";
import Testimony from "@/components/video-generation/testimony";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <IntuitiveConversations />
      <BeyondQNA />
      <AnytimeAnywhere />
      <Testimony />
      <AlwaysImproving />
      <SafeAndSecure />
      <CTA />
    </div>
  );
}
