import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/ai-trainer")({
  component: AiTrainer,
});

function AiTrainer() {
  return <div className="max-w-4xl mx-auto">ai Trainer</div>;
}
