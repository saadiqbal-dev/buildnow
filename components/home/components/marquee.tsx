import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  { body: "Increase Profitability" },
  { body: "Save Costs" },
  { body: "Operational Efficiency" },
  { body: "Scalable Workforce Training" },
  { body: "Reduce Call Wait Times" },
  { body: "Human in Loop" },
  { body: "Save Time" },
  { body: "Faster Resolutions" },
  { body: "Instant Video" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure
      className={cn(
        "relative flex-shrink-0 p-4 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl border bg-white"
      )}
    >
      <blockquote className="flex-shrink-0">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative mt-4 mb-24 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#d7cecc]">
      <div>
        <Marquee pauseOnHover className="[--duration:80s] flex-shrink-0">
          {firstRow.map((review) => (
            <ReviewCard key={`${review.body}-${Math.random()}`} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:80s] flex-shrink-0"
        >
          {secondRow.map((review) => (
            <ReviewCard key={`${review.body}-${Math.random()}`} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:80s] flex-shrink-0">
          {thirdRow.map((review) => (
            <ReviewCard key={`${review.body}-${Math.random()}`} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#d7cecc]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#d7cecc]"></div>
    </div>
  );
}
