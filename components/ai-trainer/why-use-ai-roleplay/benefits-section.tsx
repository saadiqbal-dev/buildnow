import { Clock, Shield, TrendingUp, DollarSign } from "lucide-react";
import BenefitCard from "./benefit-card";

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On-demand AI practice",
    description:
      "Practice makes perfect. On-demand AI practice supports continuous improvement and training support when your employees need it.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Remain on-brand",
    description:
      "Consistent messaging is key. Ensure your customer service and sales reps know how to answer objections or respond to complaints.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Improve performance",
    description:
      "Get insights into your customer service and sales reps' performance – and help them improve for better results.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Save time – and costs",
    description:
      "Inworld provides cost-efficient AI characters and highly customizable character profiles to meet all your training needs – while saving staff time.",
  },
];

export default function BenefitsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {benefits.map((benefit) => (
        <BenefitCard
          key={benefit.title}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
}
