import {
  Languages,
  Eye,
  BarChart,
  Users,
  Clock,
  Headphones,
} from "lucide-react";
import StatCard from "./stat-card";

const stats = [
  {
    icon: <Languages className="w-6 h-6 text-emerald-500" />,
    title: "50+ Languages",
    description:
      "Seamlessly translate between languages without missing a beat.",
    className: "bg-emerald-100",
  },
  {
    icon: <Eye className="w-8 h-8 text-indigo-500" />,
    title: "Humans in the loop",
    description:
      "AI-powered automation with human oversight for optimal results.",
    className: "bg-indigo-900 text-white md:col-span-2 [&_p]:text-indigo-200",
  },
  {
    icon: <BarChart className="w-6 h-6 text-purple-500" />,
    title: "20% Cost Savings",
    description: "Reduce CX support costs by 20% or more.",
    className: "bg-purple-50",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "75% Instant Resolution",
    description:
      "Leverage AI to instantly resolve 75% of interactions with unmatched accuracy.",
    className: "bg-blue-50 md:col-span-2",
  },
  {
    icon: <Clock className="w-6 h-6 text-violet-500" />,
    title: "100% VoC",
    description:
      "Stay goodbye to surveys with fully automated quality monitoring.",
    className: "bg-violet-50",
  },
  {
    icon: <Headphones className="w-6 h-6 text-rose-500" />,
    title: "24/7 Support",
    description: "Resolve issues around the clock, faster than any agent.",
    className: "bg-rose-50",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          description={stat.description}
          className={stat.className}
        />
      ))}
    </div>
  );
}
