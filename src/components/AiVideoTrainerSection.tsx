import { useState } from "react";

const trainingFeatures = [
  {
    id: 1,
    title: "Instant Video Answers",
    description: "Whenever an employee asks a question, they get an instant video answer guiding them in the right direction. No more sifting through manuals or waiting on busy team leads—just instant, on-demand guidance.",
    videoUrl: "/videos/instant-answers.mp4",
  },
  {
    id: 2,
    title: "AI Avatars & AI Voices",
    description: "Choose from our diverse library of AI avatars and AI voices to personalize your training experience. Create your own AI avatar & clone your own AI voice!",
    videoUrl: "/videos/ai-avatars.mp4",
  },
  {
    id: 3,
    title: "Translate Trainings into 100+ Languages",
    description: "Quickly translate your videos into over 100 languages and select the perfect voice for each locale. Reach your teams all around the world!",
    videoUrl: "/videos/translate-training.mp4",
  },
];

export default function AiVideoTrainerSection() {
  const [selectedFeature, setSelectedFeature] = useState(trainingFeatures[0]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="px-3 py-2 rounded-full bg-[#E3E0DC] text-gray-800 text-sm font-medium mb-8 inline-block">
          <p>AI Video Trainer</p>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Bring Trainings to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Create training videos your team will actually watch! Use our video generation platform to turn text into videos with AI avatars and voiceovers in 100+ languages. Say goodbye to dull, text-heavy documents once and for all.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Get Started
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Video Player */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video relative">
              <video
                key={selectedFeature.id}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={selectedFeature.videoUrl} type="video/mp4" />
                {/* Fallback content */}
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-lg font-medium">{selectedFeature.title}</p>
                  </div>
                </div>
              </video>
            </div>
          </div>

          {/* Right Side - Feature List */}
          <div className="space-y-6">
            {trainingFeatures.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  selectedFeature.id === feature.id
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-black hover:border-gray-300"
                }`}
              >
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className={`text-base leading-relaxed ${
                  selectedFeature.id === feature.id 
                    ? "text-gray-200" 
                    : "text-gray-600"
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}