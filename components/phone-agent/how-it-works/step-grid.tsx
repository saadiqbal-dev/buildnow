import StepCard from "./step-card";

const steps = [
  {
    number: "01",
    title: "Build",
    description:
      "Create your voice AI and configure proactive agent settings for natural conversation using AI templates.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Test",
    description:
      "Perform comprehensive agent testing with built-in test suite to ensure seamless handling of conversations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Easily deploy your agents to phone calls with SIP, RTP, and various telephony protocols.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Monitor",
    description:
      "Track success rates, latency, and user satisfaction in real-time through our dashboard. Continuously improve.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
