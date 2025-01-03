"use client";

import { useState } from "react";
import { Database, Phone, Calendar, Navigation } from "lucide-react";
import FeatureCard from "./feature-card";
import VideoPreview from "./video-preview";

const features = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "Auto-Sync Knowledge Base",
    description:
      "Your AI agents stay up-to-date effortlessly by syncing directly with your company's knowledge base. No manual updates required.",
    videoUrl: "https://example.com/videos/sync.mp4",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Powerful Call Transfer Feature",
    description:
      "Seamlessly transfer calls to the right department or agent when needed, ensuring optimal customer service.",
    videoUrl: "https://example.com/videos/transfer.mp4",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Easy Appointment Booking",
    description:
      "Let your AI handle scheduling, confirmations, and reminders automatically.",
    videoUrl: "https://example.com/videos/booking.mp4",
  },
  {
    icon: <Navigation className="w-5 h-5" />,
    title: "Navigate IVR",
    description:
      "Intelligent voice response system that understands and routes customer calls efficiently.",
    videoUrl: "https://example.com/videos/ivr.mp4",
  },
];

export default function Build() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
            BUILD
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B252A] leading-tight">
            Powerful AI Agent Creation Features
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>

          <div className="relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
            {features.map((feature, index) => (
              <VideoPreview
                key={index}
                videoUrl={feature.videoUrl}
                isActive={activeFeature === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
