import React from "react";
import { Play, Pause } from "lucide-react";

interface VideoBackgroundProps {
  videoUrl: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function VideoBackground({
  videoUrl,
  isPlaying,
  onPlayPause,
}: VideoBackgroundProps) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
      <iframe
        src={`${videoUrl}${isPlaying ? "?autoplay=1&muted=1" : "?autoplay=0&muted=1"}`}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      <button
        onClick={onPlayPause}
        className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
