interface StepCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

export default function StepCard({
  number,
  title,
  description,
  image,
}: StepCardProps) {
  return (
    <div className="group">
      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-400 mb-2">{number}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6">{description}</p>
      </div>
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </div>
  );
}
