import { createFileRoute } from "@tanstack/react-router";
import IndustryTemplate from "../../components/IndustryTemplate";
import debtCollectionData from "../../data/industries/debt-collection.json";

export const Route = createFileRoute("/industries/debt-collection")({
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryTemplate data={debtCollectionData} />;
}
