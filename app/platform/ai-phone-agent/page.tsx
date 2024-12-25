import CTA from "@/components/cta";
import AlwaysImproving from "@/components/phone-agent/always-improving";
import AnytimeAnywhere from "@/components/phone-agent/anytime-anywhere";
import BeyondQNA from "@/components/phone-agent/beyond-qna";
import Hero from "@/components/phone-agent/hero";
import { IntuitiveConversations } from "@/components/phone-agent/intuitive-covnersationts";
import { SafeAndSecure } from "@/components/phone-agent/safe-and-secure";
import Testimony from "@/components/phone-agent/testimony";

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
