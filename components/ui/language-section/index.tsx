"use client";
import React, { useState } from "react";

import LanguageButton from "./language-button";
import VideoBackground from "./video-background";
const languages = [
  {
    code: "🇺🇸",
    language: "English",
    videoUrl: "https://player.vimeo.com/video/123456789",
  },
  {
    code: "🇩🇪",
    language: "German",
    videoUrl: "https://player.vimeo.com/video/123456790",
  },
  {
    code: "🇫🇷",
    language: "French",
    videoUrl: "https://player.vimeo.com/video/123456791",
  },
  {
    code: "🇪🇸",
    language: "Spanish",
    videoUrl: "https://player.vimeo.com/video/123456792",
  },
];

export default function LanguageSection() {
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block">
            <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
              AI VOICEOVERS & TRANSLATIONS
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B252A] leading-tight">
            Turn text into high-quality
            <br />
            voiceovers with one click
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <span className="text-gray-700">
                  Get consistent voiceovers in over 140 languages
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <span className="text-gray-700">
                  Automatically generate closed captions & translations
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <span className="text-gray-700">Clone your own voice</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <LanguageButton
                  key={lang.code}
                  language={lang.language}
                  code={lang.code}
                  isActive={activeLanguage.code === lang.code}
                  onClick={() => setActiveLanguage(lang)}
                />
              ))}
            </div>

            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#0B252A] px-6 py-3 font-medium text-white transition duration-300 ease-out hover:bg-[#163A42]">
              <span className="absolute right-0 translate-x-full transition-transform duration-300 ease-out group-hover:-translate-x-4">
                →
              </span>
              <span className="text-sm transition-transform duration-300 ease-out group-hover:-translate-x-4">
                Test all languages
              </span>
            </button>
          </div>

          <VideoBackground
            videoUrl={activeLanguage.videoUrl}
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
          />
        </div>
      </div>
    </div>
  );
}
