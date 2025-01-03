import CTA from "@/components/cta";
import AvatarSection from "@/components/ui/avatar-section";
import UpdateSection from "@/components/ui/edit-section";
import LanguageSection from "@/components/ui/language-section";
import AlwaysImproving from "@/components/video-generation/always-improving";
import AnytimeAnywhere from "@/components/video-generation/anytime-anywhere";
import BeyondQNA from "@/components/video-generation/beyond-qna";
import Hero from "@/components/video-generation/hero";
import { IntuitiveConversations } from "@/components/video-generation/intuitive-covnersationts";
import { SafeAndSecure } from "@/components/video-generation/safe-and-secure";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <IntuitiveConversations />
      <AvatarSection />
      <LanguageSection />
      <UpdateSection />
      {/* <BeyondQNA />
      <AnytimeAnywhere /> */}

      <CTA />
    </div>
  );
}
