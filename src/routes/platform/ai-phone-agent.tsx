import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/PhoneAgentComponents/Hero";
import UseCases from "@/components/PhoneAgentComponents/UseCases";
export const Route = createFileRoute("/platform/ai-phone-agent")({
  component: AiPhoneAgent,
});

function AiPhoneAgent() {
  return (
    <>
      <Hero />
      <UseCases />
    </>
  );
}
