import StepCard from "@/components/phone-agent/how-it-works/step-card";

const steps = [
  {
    number: "01",
    title: "Upload Content",
    description:
      "Upload your existing customer calls, training materials, and brand guidelines to create a customized training foundation.",
    image:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Train on Historical Data",
    description:
      "Our AI analyzes your past customer interactions to identify successful patterns and common scenarios.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Practice Scenarios",
    description:
      "Engage with AI-powered personas that simulate real customer interactions based on your historical data.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Get Real-time Feedback",
    description:
      "Our AI-powered roleplays are designed to help you identify areas for improvement and enhance your customer service skills.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
];

export default function StepsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <StepCard
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          image={step.image}
        />
      ))}
    </div>
  );
}
