import { Check } from "lucide-react";

interface FeatureListProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
            <Check className="w-3 h-3 text-emerald-600" />
          </div>
          <span className="text-sm text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
