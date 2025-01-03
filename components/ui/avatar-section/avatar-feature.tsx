import React from "react";
import { Check } from "lucide-react";

interface FeatureProps {
  text: string;
}

export default function AvatarFeature({ text }: FeatureProps) {
  return (
    <div className="flex items-center space-x-3 text-black">
      <div className="flex-shrink-0">
        <Check className="w-5 h-5 text-blue-400" />
      </div>
      <span className="text-sm sm:text-base">{text}</span>
    </div>
  );
}
