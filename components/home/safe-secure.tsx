"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const features = [
  {
    id: "supervision",
    title: "Supervision",
    content:
      "Guardrails ensure your agent stays on-topic, and real-time monitoring tracks live interactions.",
    image: "/videos/1.mp4",
  },
  {
    id: "secure",
    title: "Secure Integration",
    content:
      "AI may be flexible, but security standards should not be. When AI accesses your systems of record, those interactions are deterministic and controlled to ensure your AI always follows your policies and security procedures.",
    image: "/videos/2.mp4",
  },
  {
    id: "auditing",
    title: "Auditing",
    content:
      "Built-in quality assurance workflows ensure your customer experience team can understand the reasoning behind every AI interaction.",

    image: "/videos/3.mp4",
  },
  {
    id: "governance",
    title: "Data Governance",
    content:
      "Your data is only used for your company’s agent. We don’t use your data to train models, and we use industry standard best practices to ensure your data is secure.",

    image: "/videos/4.mp4",
  },
  {
    id: "privacy",
    title: "Privacy",
    content:
      "Personally identifiable information is automatically encrypted and masked.",

    image: "/videos/5.mp4",
  },
];

export function SafeSecure() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col gap-4 pb-16">
          <h2 className="text-4xl  font-semibold">Safe & Secure</h2>
          <p className="max-w-2xl text-center">
            BuildNow is designed with the highest commitment to trust, security,
            and compliance. Your AI agent won't pretend to be something it’s
            not, and it will be honest about its limitations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
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
        </div>
      </div>
    </section>
  );
}
