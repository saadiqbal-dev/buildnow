import { Card } from "@/components/ui/card";

interface IndustryCardProps {
  title: string;
  description: string;
  image?: string;
  avatars?: string[];
  className?: string;
}

export default function IndustryCard({
  title,
  description,
  image,
  avatars,
  className = "",
}: IndustryCardProps) {
  return (
    <Card className={`group overflow-hidden ${className}`}>
      <div className="p-6 h-full flex flex-col">
        {avatars && (
          <div className="flex -space-x-2 mb-4">
            {avatars.map((avatar, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={avatar}
                alt={`Team member ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        )}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        {image && (
          <div className="mt-auto -mb-6 -mx-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    </Card>
  );
}
