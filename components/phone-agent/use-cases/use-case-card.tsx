import { Card } from "@/components/ui/card";

interface UseCaseCardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

export default function UseCaseCard({
  title,
  description,
  image,
  icon,
}: UseCaseCardProps) {
  return (
    <Card className="bg-white rounded-lg p-4 transition-all duration-300 hover:shadow-lg group">
      <div className="aspect-[4/3] w-full max-w-[240px] mx-auto mb-4 relative overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {icon && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="bg-[#0B252A] text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
              {icon}
              <span>{title}</span>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold mb-1.5">{title}</h3>
      <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
    </Card>
  );
}
