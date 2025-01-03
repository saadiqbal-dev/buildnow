import { ArrowRight } from "lucide-react";
import MetricBadge from "./metric-badge";
import FeatureList from "./feature-list";

interface CenterCardProps {
  title: string;
  description: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
  features: string[];
}

export default function CenterCard({
  title,
  description,
  image,
  metrics,
  features,
}: CenterCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-3">
              {metrics.map((metric, index) => (
                <MetricBadge key={index} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <FeatureList features={features} />

        <button className="mt-8 w-full bg-[#0B252A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#163A42] transition-colors group">
          <span className="flex items-center justify-center gap-2">
            Learn more
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
}
