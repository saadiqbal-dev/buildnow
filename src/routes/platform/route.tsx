import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/platform")({
  component: Platform,
});

function Platform() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Outlet />
    </div>
  );
}
