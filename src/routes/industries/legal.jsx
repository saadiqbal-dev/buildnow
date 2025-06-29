import { createFileRoute } from "@tanstack/react-router";
import IndustryTemplate from "../../components/IndustryTemplate";
import legalData from "../../data/industries/legal.json";

export const Route = createFileRoute("/industries/legal")({
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryTemplate data={legalData} />;
}
