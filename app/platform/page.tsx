import CTA from "@/components/cta";
import BuildYourOwnAgent from "@/components/platform/build-your-own-agent";
import ConnectAIToBusiness from "@/components/platform/connnect-ai-to-business";
import DataGovernance from "@/components/platform/data-governance";
import DefineYourBrand from "@/components/platform/define-your-brand";
import EmpowerDevelopers from "@/components/platform/empower-developers";
import ForwardThinking from "@/components/platform/forward-thinking";
import Hero from "@/components/platform/hero";
import OrchestrateAcrossMultipleSystems from "@/components/platform/orchestrate-across-multiple-systems";
import { SupervisionSecurity } from "@/components/platform/supervision-security";

export default function PlatformPage() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <BuildYourOwnAgent />
      <DefineYourBrand />
      <EmpowerDevelopers />
      <ConnectAIToBusiness />
      <OrchestrateAcrossMultipleSystems />
      <SupervisionSecurity />
      <DataGovernance />
      <ForwardThinking />
      <CTA />
    </div>
  );
}
