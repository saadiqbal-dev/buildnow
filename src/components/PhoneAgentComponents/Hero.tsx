
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Elevate your customer experience with conversational AI";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex flex-col gap-6 text-center">
        <p className="text-sm text-blue-500 tracking-wider uppercase font-medium">Platform</p>

        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight h-24">
          <span className="inline-block border-r-2 border-neutral-600 pr-1 animate-pulse">
            {displayText}
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Delight your customers while dramatically improving business outcomes.
        </p>

        <div className="relative mt-10 group">
          <img
          src="/assets/ai-agent-dashboard.png"  
          className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-xl transform transition duration-500 group-hover:scale-105 group-hover:rotate-1"
          alt="AI Agent Dashboard"
        />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent rounded-b-xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
