interface StatCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function StatCard({
  icon,
  title,
  description,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      <div className="flex flex-col h-full">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
