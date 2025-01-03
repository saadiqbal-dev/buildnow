import Image from "next/image";
import React from "react";

const avatars = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
];

export default function AvatarGrid() {
  return (
    <div className="relative">
      <div className="flex flex-wrap -space-x-4 sm:-space-x-6">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden transform transition-all duration-300 hover:scale-110 hover:z-10 border-4 border-white shadow-lg"
          >
            <Image
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
      <div className="absolute -bottom-3 -right-3 bg-black text-white px-3 py-1 rounded-full text-sm font-medium border-2 border-white shadow-lg">
        160+
      </div>
    </div>
  );
}
