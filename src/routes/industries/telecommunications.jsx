import { createFileRoute } from "@tanstack/react-router";
import IndustryTemplate from "../../components/IndustryTemplate";
import telecommunicationsData from "../../data/industries/telecommunications.json";

export const Route = createFileRoute("/industries/telecommunications")({
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryTemplate data={telecommunicationsData} />;
}
