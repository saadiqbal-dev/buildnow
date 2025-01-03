import CTA from "@/components/cta";
import Build from "@/components/phone-agent/build";
import Deploy from "@/components/phone-agent/deploy";
import Hero from "@/components/phone-agent/hero";
import HowItWorks from "@/components/phone-agent/how-it-works";
import Industries from "@/components/phone-agent/industries";
import Integrations from "@/components/phone-agent/integrations";
import Stats from "@/components/phone-agent/stats";
import UseCases from "@/components/phone-agent/use-cases";
export default function ProductPage() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <UseCases />
      <HowItWorks />
      <Build />
      <Deploy />
      <Stats />
      <Industries />
      <Integrations />
      <CTA />
    </div>
  );
}
