import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/platform/video-generation")({
  component: VideoGeneration,
});

function VideoGeneration() {
  return <div className="max-w-4xl mx-auto">ai video generation</div>;
}
