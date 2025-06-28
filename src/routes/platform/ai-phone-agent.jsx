import { createFileRoute } from '@tanstack/react-router';
import Hero from "@/components/PhoneAgentComponents/Hero";
import UseCases from "@/components/PhoneAgentComponents/UseCases";

function AiPhoneAgent() {
  return (
    <div>
      <UseCases />
    </div>
  );
}

export const Route = createFileRoute("/platform/ai-phone-agent")({
  component: AiPhoneAgent,
});