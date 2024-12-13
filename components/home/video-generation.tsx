"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const features = [
  {
    id: "trainings",
    title: "Bring Your Presentations to Life",
    content:
      "Access ready-to-use templates for corporate training, customer onboarding, scenario-based learning, and pitch decks. Quickly transform static materials into interactive video experiences.",
    cta: "Explore Templates",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    id: "phone-agent",
    title: "Your AI-Powered Call Center Assistant",
    content:
      "Customize your AI agent's look by selecting avatars or creating your own. Enable your AI agent to respond intelligently to calls, handle client inquiries, and adapt to business-specific needs.",
    cta: "Set Up Your Phone Agent",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    id: "text-agent",
    title: "Streamlined Client Communication Made Easy",
    content:
      "Personalize greetings for your customers with welcome messages. Pre-configure FAQs or common questions to guide conversations effectively. Tailor responses to align with your company's tone and messaging.",
    cta: "Create Your Text Agent",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

export function VideoGeneration() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center pb-16">
          Video Generation
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                        <Button
                          variant="secondary"
                          className="bg-accent text-accent-foreground hover:bg-accent/80"
                        >
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
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {features.map(
                (feature) =>
                  activeTab === feature.id && (
                    <motion.img
                      key={feature.id}
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
