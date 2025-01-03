"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Mic, Users, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const features = [
  {
    icon: Globe,
    title: "Translate Effortlessly",
    description:
      "Convert your videos into over 100+ languages in minutes, breaking down language barriers with ease.",
  },
  {
    icon: Mic,
    title: "Localized Voiceovers",
    description:
      "Choose the perfect voice for each region, ensuring cultural relevance and authenticity in your training materials.",
  },
  {
    icon: Users,
    title: "Global Scalability",
    description:
      "Reach employees worldwide without compromising on quality or consistency, scaling your training efforts effortlessly.",
  },
];

export default function AITranslationInteractive() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">
          Break Language Barriers with AI Translation
        </h2>

        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-10"></div>

          <div className="relative z-10 flex gap-9 flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <AnimatePresence mode="wait">
                <div
                  key={activeFeature}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  {React.createElement(features[activeFeature].icon, {
                    className: "w-16 h-16 text-blue-500 mb-4",
                  })}
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-600">
                    {features[activeFeature].description}
                  </p>
                </div>
              </AnimatePresence>
            </div>

            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      index === activeFeature
                        ? "bg-blue-100 text-black"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{feature.title}</span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          index === activeFeature ? "transform rotate-90" : ""
                        }`}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Experience the Power of AI Translation
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Foster inclusivity, save time and costs, and enhance collaboration
            across your global teams. Unlock the potential of borderless
            communication in your training programs.
          </p>
          <Button>Translate Your Trainings Now</Button>
        </motion.div>
      </div>
    </section>
  );
}
