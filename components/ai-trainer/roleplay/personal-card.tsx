interface PersonaCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  callType: string;
  style: string;
  bookRate: string;
}

export default function PersonaCard({
  name,
  role,
  company,
  avatar,
  callType,
  style,
  bookRate,
}: PersonaCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-1">Call Type</div>
          <div className="font-medium">{callType}</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-1">Style</div>
          <div className="font-medium">{style}</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-1">Book Rate</div>
          <div className="font-medium">{bookRate}</div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-medium px-6 py-3 rounded-lg hover:from-teal-500 hover:to-emerald-600 transition-all duration-300">
        Start Call
      </button>
    </div>
  );
}
