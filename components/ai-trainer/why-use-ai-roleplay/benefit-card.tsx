import { type ReactNode } from "react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function BenefitCard({
  title,
  description,
  icon,
}: BenefitCardProps) {
  return (
    <div className="flex gap-4">
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
