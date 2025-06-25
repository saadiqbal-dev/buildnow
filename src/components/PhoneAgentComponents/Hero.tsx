import AITrainerImage from "../../../public/assets/ai-agent-dashboard.png";
export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex pt-12 flex-col gap-4 min-h-screen">
        <h1 className="text-5xl font-light text-center">
          Elevate your customer experience with conversational AI
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Delight your customers while dramatically improving business outcomes.
        </p>
        <div className="relative mt-4">
          <img src={AITrainerImage} className="w-full h-auto rounded-lg" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent rounded-b-lg"></div>
        </div>
      </div>
    </div>
  );
}
