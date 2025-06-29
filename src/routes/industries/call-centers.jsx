import { createFileRoute } from "@tanstack/react-router";
import IndustryTemplate from "../../components/IndustryTemplate";
import callCentersData from "../../data/industries/call-centers.json";

export const Route = createFileRoute("/industries/call-centers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryTemplate data={callCentersData} />;
}
