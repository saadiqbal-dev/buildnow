"use client";
import { useState } from "react";
import { Monitor, Palette, Zap, Trophy } from "lucide-react";
import Image from "next/image";

export interface SectionData {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface SectionCardProps {
  section: SectionData;
  isSelected: boolean;
  onClick: () => void;
}

export const sections: SectionData[] = [
  {
    id: 1,
    title: "Video Generation",
    description: "Generate Training Videos with simple steps.",
    image: "/assets/video-generation.jpg",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Video Search",
    description:
      "Implementing innovative solutions to complex problems through creative thinking and cutting-edge technology.",
    image: "/assets/video-search.jpg",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "AI Trainer",
    description:
      "Optimizing performance to deliver lightning-fast experiences that keep users engaged and satisfied.",
    image: "/assets/ai-trainer.jpg",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "AI Phone Agent",
    description:
      "Recognized excellence in delivering outstanding digital experiences that set new industry standards.",
    image: "/assets/phone-agents.png",
    icon: <Trophy className="w-6 h-6" />,
  },
];

export function SectionCard({
  section,
  isSelected,
  onClick,
}: SectionCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        p-6 rounded-xl cursor-pointer transition-all duration-300
        ${
          isSelected
            ? "bg-muted/50 text-white shadow-lg scale-105"
            : "bg-white hover:bg-gray-50 shadow-md"
        }
      `}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`
          ${isSelected ? "text-black" : "text-blue-500"}
        `}
        >
          {section.icon}
        </div>
        <h3 className="font-bold text-lg text-black">{section.title}</h3>
      </div>
      <p
        className={`
        text-sm leading-relaxed
        ${isSelected ? "text-black" : "text-black"}
      `}
      >
        {section.description}
      </p>
    </div>
  );
}

interface ImageDisplayProps {
  section: SectionData;
}

export function ImageDisplay({ section }: ImageDisplayProps) {
  return (
    <div className="w-full scale-75 overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-in-out">
      <Image
        src={section.image}
        alt={section.title}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

export default function InteractiveSection() {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  return (
    <div className=" mx-auto px-4 ">
      <div className="flex flex-col items-center justify-center gap-4 pb-16">
        <ImageDisplay section={selectedSection} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-muted/50 p-6 rounded-xl">
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              isSelected={selectedSection.id === section.id}
              onClick={() => setSelectedSection(section)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
