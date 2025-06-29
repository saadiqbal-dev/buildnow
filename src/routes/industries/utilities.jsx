import { createFileRoute } from "@tanstack/react-router";
import IndustryTemplate from "../../components/IndustryTemplate";
import utilitiesData from "../../data/industries/utilities.json";

export const Route = createFileRoute("/industries/utilities")({
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryTemplate data={utilitiesData} />;
}
