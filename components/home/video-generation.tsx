"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const features = [
  {
    id: "trainings",
    title: "Bring Your training material to Life",
    content:
      "Access ready-to-use templates for corporate training, customer onboarding, scenario-based learning, and pitch decks. Quickly transform static materials into interactive video experiences.",
    cta: "Explore Templates",
    image: "/videos/1.mp4",
  },
  {
    id: "search",
    title: "Instant Video Search",
    content:
      "Personalize greetings for your customers with welcome messages. Pre-configure FAQs or common questions to guide conversations effectively. Tailor responses to align with your company's tone and messaging.",
    cta: "Create Your Text Agent",
    image: "/videos/2.mp4",
  },
  {
    id: "avatars",
    title: "Diverse AI Avatars",
    content:
      "Customize your AI agent's look by selecting avatars or creating your own. Enable your AI agent to respond intelligently to calls, handle client inquiries, and adapt to business-specific needs.",
    cta: "Set Up Your Phone Agent",
    image: "/videos/3.mp4",
  },
  {
    id: "voices",
    title: "AI Voices",
    content:
      "Personalize greetings for your customers with welcome messages. Pre-configure FAQs or common questions to guide conversations effectively. Tailor responses to align with your company's tone and messaging.",
    cta: "Create Your Text Agent",
    image: "/videos/4.mp4",
  },
  {
    id: "translation",
    title: "Translate Video into Multiple Languages",
    content:
      "Personalize greetings for your customers with welcome messages. Pre-configure FAQs or common questions to guide conversations effectively. Tailor responses to align with your company's tone and messaging.",
    cta: "Create Your Text Agent",
    image: "/videos/5.mp4",
  },
];

export function VideoGeneration() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col gap-4 pb-16">
          <h2 className="text-4xl  font-semibold">Video Generation</h2>
          <p className="max-w-2xl">
            Use our Video Generation Tool to create Training Videos, select an
            avatar and an AI voice that matches your requirement and easy to
            understand for your audience.
          </p>
          <Button variant="outline" className="max-w-fit">
            Try our Platform
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
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
                        <Button className="text-accent-foreground">
                          {feature.cta}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="  rounded-lg justify-self-center overflow-hidden bg-black">
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
