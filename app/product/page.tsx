import CTA from "@/components/cta";
import AlwaysImproving from "@/components/product/always-improving";
import AnytimeAnywhere from "@/components/product/anytime-anywhere";
import BeyondQNA from "@/components/product/beyond-qna";
import Hero from "@/components/product/hero";
import { IntuitiveConversations } from "@/components/product/intuitive-covnersationts";
import { SafeAndSecure } from "@/components/product/safe-and-secure";
import Testimony from "@/components/product/testimony";

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
