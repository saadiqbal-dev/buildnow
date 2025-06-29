import { createFileRoute } from "@tanstack/react-router";
import IndustryTemplate from "../../components/IndustryTemplate";
import retailData from "../../data/industries/retail.json";

export const Route = createFileRoute("/industries/retail")({
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryTemplate data={retailData} />;
}
