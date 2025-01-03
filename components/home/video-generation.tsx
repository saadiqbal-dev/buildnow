"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const features = [
  {
    id: "search",
    title: "Instant Video Answers",
    content:
      "Whenever an employee asks a question, they get an instant video answer guiding them in the right direction. No more sifting through manuals or waiting on busy team leads—just instant, on-demand guidance.",

    image: "/videos/video-search.mp4",
  },
  {
    id: "avatars",
    title: "AI Avatars & AI Voices",
    content:
      "Choose from our diverse library of AI avatars and AI voices to personalize your training experience. Create your own AI avatar & clone your own AI voice!",
    image: "/videos/3.mp4",
  },
  {
    id: "translation",
    title: "Translate Trainings into 100+ Languages",
    content:
      "Quickly translate your videos into over 100 languages and select the perfect voice for each locale. Reach your teams all around the world!",
    image: "/videos/5.mp4",
  },
];

export function VideoGeneration() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col gap-4 pb-16">
          <h2 className="text-4xl font-semibold text-center">
            Bring Trainings to Life with Our AI Video Generator
          </h2>
          <p className="max-w-2xl text-center">
            Create training videos your team will actually watch! Use our video
            generation platform to turn text into videos with AI avatars and
            voiceovers in 100+ languages. Say goodbye to dull, text-heavy
            documents once and for all.
          </p>
          <Button className="max-w-fi">Try our Platform</Button>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* Left side - Tabs */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="relative">
                <div
                  onClick={() => setActiveTab(feature.id)}
                  className={cn(
                    "w-full text-left p-6 rounded-lg transition-all",
                    "hover:bg-muted/50 cursor-pointer",
                    activeTab === feature.id ? "bg-muted" : "bg-transparent"
                  )}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <AnimatePresence>
                    {activeTab === feature.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground mb-4">
                          {feature.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="rounded-lg justify-self-center overflow-hidden">
            <AnimatePresence mode="wait">
              {features.map(
                (feature) =>
                  activeTab === feature.id && (
                    <video
                      key={feature.id}
                      autoPlay
                      loop
                      muted
                      className="justify-self-center w-full object-cover z-0"
                    >
                      <source src={feature.image} type="video/mp4" />
                    </video>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
