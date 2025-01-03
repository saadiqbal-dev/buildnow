interface DeployCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  imageClassName?: string;
}

export default function DeployCard({
  title,
  description,
  image,
  className = "",
  imageClassName = "",
}: DeployCardProps) {
  return (
    <div
      className={`bg-[#0B252A]/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-[#0B252A]/10 transition-all duration-300 ${className}`}
    >
      <h3 className="text-lg font-semibold text-[#0B252A] mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {image && (
        <div className={`rounded-xl overflow-hidden ${imageClassName}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
