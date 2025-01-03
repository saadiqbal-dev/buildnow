import HowToBuild from "@/components/ai-trainer/how-to-build";
import Roleplay from "@/components/ai-trainer/roleplay";
import AITraining from "@/components/ai-trainer/why-use-ai-roleplay";
import CTA from "@/components/cta";

export default function AiTrainerPage() {
  return (
    <div className="flex flex-col items-center">
      <Roleplay />
      <AITraining />
      <HowToBuild />
      <CTA />
    </div>
  );
}
