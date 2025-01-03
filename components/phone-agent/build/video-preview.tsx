interface VideoPreviewProps {
  videoUrl: string;
  isActive: boolean;
}

export default function VideoPreview({
  videoUrl,
  isActive,
}: VideoPreviewProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
      </div>
    </div>
  );
}
