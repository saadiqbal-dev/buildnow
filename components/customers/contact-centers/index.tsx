import CenterCard from "./center-card";

export default function ContactCenters() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
            CONTACT CENTERS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Serving Contact Centers Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your contact center operations with AI-powered solutions
            that enhance efficiency and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CenterCard
            title="Enterprise Contact Center"
            description="Streamline operations and enhance customer experience with AI-powered automation."
            image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
            metrics={[
              { label: "Efficiency Gain", value: "40%" },
              { label: "Cost Reduction", value: "25%" },
              { label: "CSAT Score", value: "95%" },
            ]}
            features={[
              "24/7 automated customer support",
              "Multilingual capabilities",
              "Real-time analytics dashboard",
              "Seamless CRM integration",
              "Custom workflow automation",
            ]}
          />

          <CenterCard
            title="Mid-Size Contact Center"
            description="Optimize your growing contact center with scalable AI solutions and intelligent routing."
            image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
            metrics={[
              { label: "Agent Productivity", value: "35%" },
              { label: "Response Time", value: "-60%" },
              { label: "Customer Retention", value: "85%" },
            ]}
            features={[
              "Smart call routing",
              "Performance analytics",
              "Quality monitoring",
              "Training assistance",
              "Complaint resolution system",
            ]}
          />

          <CenterCard
            title="Small Business Center"
            description="Empower your small business with affordable AI solutions that deliver enterprise-level service."
            image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
            metrics={[
              { label: "Cost Savings", value: "30%" },
              { label: "First Response", value: "< 1min" },
              { label: "Resolution Rate", value: "90%" },
            ]}
            features={[
              "Virtual assistant integration",
              "Basic analytics",
              "Email support automation",
              "Chat support",
              "Knowledge base management",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
