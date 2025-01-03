"use client";
import React from "react";
import { Check } from "lucide-react";
import EditorPreview from "./editor-preview";
const features = [
  "Quickly prototype your video and collaborate with your team",
  "Gather feedback and edit your video all in one convenient location",
  "Effortlessly update your videos with just a single click",
];

export default function UpdateSection() {
  return (
    <div className="bg-[#D7CECC] w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
                  EASY UPDATES
                </span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B252A] leading-tight">
                Refresh your video library seamlessly no re-shoots required
              </h2>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="p-1 rounded-full bg-blue-500/10">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#0B252A] px-6 py-3 font-medium text-white transition duration-300 ease-out hover:bg-[#163A42]">
              <span className="absolute right-0 translate-x-full transition-transform duration-300 ease-out group-hover:-translate-x-4">
                →
              </span>
              <span className="text-sm transition-transform duration-300 ease-out group-hover:-translate-x-4">
                Learn more
              </span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
            <div className="relative">
              <EditorPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
