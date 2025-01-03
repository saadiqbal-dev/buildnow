import CTA from "@/components/cta";
import ContactCenters from "@/components/customers/contact-centers";

export default function CustomersPage() {
  return (
    <div className="flex flex-col items-center">
      <ContactCenters />
      <CTA />
    </div>
  );
}
