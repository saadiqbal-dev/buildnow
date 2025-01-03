interface MetricBadgeProps {
  label: string;
  value: string;
}

export default function MetricBadge({ label, value }: MetricBadgeProps) {
  return (
    <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
}
