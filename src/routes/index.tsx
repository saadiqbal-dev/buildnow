import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import UseCasesSection from "@/components/UseCasesSection";
import AiVideoTrainerSection from "@/components/AiVideoTrainerSection";
import IntegrationsSection from "@/components/HowItWorks";
import CTA from "@/components/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="">
      <HeroSection />
      <TrustedBySection />
      <UseCasesSection />
      <IntegrationsSection />
      <AiVideoTrainerSection />
      <CTA />
    </div>
  );
}
