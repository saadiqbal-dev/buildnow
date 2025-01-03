import React from "react";

interface LanguageButtonProps {
  language: string;
  code: string;
  isActive: boolean;
  onClick: () => void;
}

export default function LanguageButton({
  language,
  code,
  isActive,
  onClick,
}: LanguageButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        isActive
          ? "bg-[#0B252A] text-white shadow-lg scale-105"
          : "bg-white/90 text-[#0B252A] hover:bg-white hover:scale-105"
      }`}
    >
      <span className="text-lg">{code}</span>
      <span className="font-medium">{language}</span>
    </button>
  );
}
