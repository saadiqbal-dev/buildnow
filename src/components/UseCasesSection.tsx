import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2 } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "Receptionist",
    description:
      "Professional phone answering service that handles calls 24/7, routes inquiries, and manages basic customer interactions.",
    audioUrl: "/audio/receptionist-demo.mp3",
  },
  {
    id: 2,
    title: "Appointment Setter",
    description:
      "Automated booking system that schedules appointments, manages calendars, and sends confirmations to customers.",
    audioUrl: "/audio/appointment-demo.mp3",
  },
  {
    id: 3,
    title: "Lead Qualification",
    description:
      "Intelligent screening system that qualifies prospects, gathers information, and routes high-quality leads to your sales team.",
    audioUrl: "/audio/lead-qualification-demo.mp3",
  },
  {
    id: 4,
    title: "Survey",
    description:
      "Interactive survey conductor that collects feedback, conducts market research, and gathers valuable customer insights.",
    audioUrl: "/audio/survey-demo.mp3",
  },
  {
    id: 5,
    title: "Customer Service",
    description:
      "Comprehensive support agent that handles inquiries, resolves issues, and provides instant assistance to customers.",
    audioUrl: "/audio/customer-service-demo.mp3",
  },
  {
    id: 6,
    title: "Debt Collection",
    description:
      "Professional collection agent that handles payment reminders, negotiates payment plans, and maintains compliance.",
    audioUrl: "/audio/debt-collection-demo.mp3",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}

      <div className=" mx-auto flex flex-col items-center px-4 relative">
        <div className="px-3 py-2 rounded-full bg-[#E3E0DC] text-gray-800 text-sm font-medium mb-8 inline-block">
          <p>Use Cases</p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Transform your customer experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your team of AI Phone Agents is available 24/7 to solve problems,
            provide answers, and take action.{" "}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {useCases.map((useCase) => (
                <div key={useCase.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-lg transform transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div className="text-black">
                        <div className="flex items-center gap-4 mb-6">
                          <h3 className="text-3xl font-bold">
                            {useCase.title}
                          </h3>
                        </div>
                        <p className="text-lg leading-relaxed mb-6 text-gray-700">
                          {useCase.description}
                        </p>

                        {/* Features list */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <span className="text-sm text-gray-800">
                              24/7 Availability
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <span className="text-sm text-gray-800">
                              Natural Conversations
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <span className="text-sm text-gray-800">
                              Instant Response
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Audio Player */}
                      <div className="bg-gray-100 border border-gray-300 rounded-xl p-6">
                        <h4 className="text-black font-semibold mb-4 text-center">
                          Listen to a Live Demo
                        </h4>
                        <AudioPlayer
                          audioUrl={useCase.audioUrl}
                          title={useCase.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-white/90" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-white/90" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        {/* <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-600 hover:text-black text-sm transition-colors"
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </div> */}
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
