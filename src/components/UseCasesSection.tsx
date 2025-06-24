import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, File, Calendar } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "Receptionist",
    description: "Law firm receptionist",
    audioUrl: "/audio/receptionist-demo.mp3",
    icon: <File />,
  },
  {
    id: 2,
    title: "Scheduling Appointments",
    description: "Real estate warehouse booking, we saw you expressed interest",
    audioUrl: "/audio/appointment-demo.mp3",
    icon: <Calendar />,
  },
  {
    id: 3,
    title: "Lead Qualification",
    description: "PI Law firm",
    audioUrl: "/audio/lead-qualification-demo.mp3",
    icon: <File />,
  },
  {
    id: 4,
    title: "Outbound Sales",
    description:
      "Hey wanted check if you wanted to upgrade service for another month",
    audioUrl: "/audio/outbound-demo.mp3",
    icon: <File />,
  },
  {
    id: 5,
    title: "Surveys",
    description:
      "Hey how are you liking the service we provided? Would you recommend us to friends",
    audioUrl: "/audio/survey-demo.mp3",
    icon: <File />,
  },
  {
    id: 6,
    title: "Debt Collection",
    description: "Utilities negotiate payment",
    audioUrl: "/audio/debt-collection-demo.mp3",
    icon: <File />,
  },
];

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

function AudioPlayer({ audioUrl, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={togglePlayPause}
          className="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 rounded-full transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Volume2 className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-800 font-medium">
              {title} Demo
            </span>
          </div>

          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div
              className="absolute top-0 left-0 h-2 bg-black rounded-lg pointer-events-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseCasesSection() {
  const [selectedUseCase, setSelectedUseCase] = useState(useCases[0]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 relative">
        <div className="px-3 py-2 rounded-full bg-[#E3E0DC] text-gray-800 text-sm font-medium mb-8 inline-block">
          <p>Use Cases</p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Transform your customer experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your team of AI Phone Agents is available 24/7 to solve problems,
            provide answers, and take action.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
          {/* Left Side - Use Cases Grid */}
          <div className="grid grid-cols-2 gap-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                onClick={() => setSelectedUseCase(useCase)}
                className={`cursor-pointer p-8 flex items-center justify-center rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  selectedUseCase.id === useCase.id
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-black hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col gap-1 items-center">
                  {useCase.icon && (
                    <span className="inline-block mr-2">{useCase.icon}</span>
                  )}
                  <h3 className="text-md font-light text-center px-4">
                    {useCase.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Audio Player */}
          <div className="lg:sticky lg:top-8 h-full">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                {selectedUseCase.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {selectedUseCase.description}
              </p>

              <AudioPlayer
                audioUrl={selectedUseCase.audioUrl}
                title={selectedUseCase.title}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
