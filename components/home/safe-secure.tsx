"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const features = [
  {
    id: "supervision",
    title: "Supervision",
    content:
      "Built-in guardrails keep AI on-topic, while real-time monitoring provides visibility into every interaction.",
    image: "/videos/1.mp4",
  },
  {
    id: "secure",
    title: "Secure Integration",
    content:
      "AI must be adaptable, but security should never be compromised. Built with SOC 2 compliance in mind, all interactions with your systems of record are deterministic and tightly controlled, ensuring adherence to your policies and robust security protocols.",
    image: "/videos/2.mp4",
  },
  {
    id: "observation",
    title: "Observability & Auditing",
    content:
      "Comprehensive quality assurance workflows provide full visibility into AI operations, ensuring your team can trace, understand, and evaluate the reasoning behind every AI decision and interaction.",

    image: "/videos/3.mp4",
  },
  {
    id: "governance",
    title: "Data Governance",
    content:
      "Your data is exclusively used for your organization’s AI solutions. We never use your data to train external models and follow industry-leading best practices to ensure its security and integrity.",

    image: "/videos/4.mp4",
  },
  {
    id: "privacy",
    title: "Privacy - PII Redaction",
    content:
      "Personally identifiable information (PII) is automatically identified, encrypted, and masked, ensuring sensitive data remains protected at every step.",

    image: "/videos/5.mp4",
  },
];

export function SafeSecure() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col gap-4 pb-16">
          <h2 className="text-4xl  font-semibold text-center">
            Enterprise-Grade Security and Trust
          </h2>
          <p className="max-w-2xl text-center">
            Buildnow AI is built with security, compliance, and trust at its
            foundation, ensuring AI systems are transparent and aligned with
            your values.
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
        </div>
      </div>
    </section>
  );
}
