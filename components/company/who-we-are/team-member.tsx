import { type ReactNode } from "react";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamMember({
  name,
  role,
  image,
  linkedin,
  twitter,
}: TeamMemberProps) {
  const SocialLink = ({
    href,
    icon: Icon,
  }: {
    href: string;
    icon: ReactNode;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-600 transition-colors"
    >
      {Icon}
    </a>
  );

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-end gap-3">
              {linkedin && (
                <SocialLink
                  href={linkedin}
                  icon={<LinkedinIcon className="w-5 h-5" />}
                />
              )}
              {twitter && (
                <SocialLink
                  href={twitter}
                  icon={<TwitterIcon className="w-5 h-5" />}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-gray-200">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  );
}
