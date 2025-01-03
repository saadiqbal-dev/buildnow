import { Star } from "lucide-react";

interface RatingProps {
  score: number;
  total: number;
  count: number;
}

export default function Rating({ score, total, count }: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < Math.floor(score) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <span className="text-lg font-semibold">{score}</span>
      <span className="text-gray-600">out of {total}</span>
      <span className="text-gray-600">{count} Rating</span>
    </div>
  );
}
