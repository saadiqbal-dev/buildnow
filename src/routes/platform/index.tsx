import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/")({
  component: PlatformIndex,
});

function PlatformIndex() {
  return (
    <div className="text-center py-8">
      <p className="text-lg text-gray-600">
        Select a product above to learn more about our AI-powered solutions.
      </p>
    </div>
  );
}
