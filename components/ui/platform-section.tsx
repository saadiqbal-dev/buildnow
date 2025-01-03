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
    description:
      "Create training videos your team will actually watch! Use our video generation platform to turn text into videos with AI avatars and voiceovers in 100+ languages.",
    image: "/assets/video-generation.jpg",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Instant Video Answers",
    description:
      "Whenever an employee asks a question, they get an instant video answer guiding them in the right direction.",
    image: "/assets/video-search.jpg",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "AI Trainer",
    description:
      "Coach your workforce using on-demand AI roleplays that replicate client calls.",
    image: "/assets/ai-trainer.jpg",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "AI Phone Agent",
    description:
      "Create custom Voice AI Agents that can handle lead qualification, customer support, and receptionist tasks - all tailored to your unique needs. They learn from every call, adapt to your business, and transform how you deliver customer service.",
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
        p-6 flex items-center rounded-xl cursor-pointer transition-all duration-300
        ${
          isSelected
            ? "bg-muted/50 text-white shadow-lg scale-105"
            : "bg-white hover:bg-gray-50 shadow-md"
        }
      `}
    >
      <div className="flex items-center gap-3 md:mb-3">
        <div
          className={`
          ${isSelected ? "text-black" : "text-blue-500"}
        `}
        >
          {section.icon}
        </div>
        <h3 className="font-bold text-lg text-black">{section.title}</h3>
        <p
          className={`
        text-sm leading-relaxed
        "text-black hidden md:block"
      `}
        >
          {section.description}
        </p>
      </div>
    </div>
  );
}

interface ImageDisplayProps {
  section: SectionData;
}

export function ImageDisplay({ section }: ImageDisplayProps) {
  return (
    <div className="w-full my-4 mt-8 md:mt-0 md:my-0 md:scale-75 overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-in-out">
      <Image
        src={section.image}
        alt={section.title}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        width={2048}
        height={2048}
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
        <p
          className={`
        text-sm leading-relaxed
        "text-black md:hidden text-center"
      `}
        >
          {sections[selectedSection.id - 1].description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-4 gap-6 bg-[#D7CECC] p-6 rounded-3xl">
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
