import React from "react";
import AvatarGrid from "./avatar-grid";

import AvatarFeature from "./avatar-feature";
import { Button } from "../button";

const features = [
  "Create your own custom AI avatar",
  "Select from over 160+ AI avatars",
  "Make videos that embrace diversity and inclusivity",
];

export default function AvatarSection() {
  return (
    <div className=" w-full  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block">
                <span className="bg-blue-500/10 text-black text-sm font-medium px-4 py-1.5 rounded-full">
                  AI AVATARS
                </span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Choose from a wide variety of avatars across ethnicities, ages,
                and styles.
              </h2>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <AvatarFeature key={index} text={feature} />
              ))}
            </div>

            {/* <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-500 px-6 py-3 font-medium text-black transition duration-300 ease-out hover:bg-blue-600">
              <span className="absolute right-0 translate-x-full transition-transform duration-300 ease-out group-hover:-translate-x-4">
                →
              </span>
              <span className="text-sm transition-transform duration-300 ease-out group-hover:-translate-x-4">
                Learn more
              </span>
            </button> */}
            <Button>Learn More</Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="relative">
              <AvatarGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
