import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  { body: "Accounting & Bookkeeping" },
  { body: "Financial Planning" },
  { body: "Management Consulting & Analysis" },
  { body: "Personal & Professional Coaching" },
  { body: "Recruiting & Human Resources" },
  { body: "Other - Accounting & Consulting" },
  { body: "Data Entry & Transcription Services" },
  { body: "Market Research & Product Reviews" },
  { body: "Project Management" },
  { body: "Virtual Assistance" },
  { body: "Community Management & Tagging" },
  { body: "Customer Service & Tech Support" },
  { body: "AI & Machine Learning" },
  { body: "Data Analysis & Testing" },
  { body: "Data Extraction/ETL" },
  { body: "Data Mining & Management" },
  { body: "Art & Illustration" },
  { body: "Audio & Music Production" },
  { body: "Branding & Logo Design" },
  { body: "Graphic, Editorial & Presentation Design" },
  { body: "NFT, AR/VR & Game Art" },
  { body: "Performing Arts" },
  { body: "Photography" },
  { body: "Product Design" },
  { body: "Video & Animation" },
  { body: "3D Modeling & CAD" },
  { body: "Building & Landscape Architecture" },
  { body: "Chemical Engineering" },
  { body: "Civil & Structural Engineering" },
  { body: "Contract Manufacturing" },
  { body: "Electrical & Electronic Engineering" },
  { body: "Energy & Mechanical Engineering" },
  { body: "Interior & Trade Show Design" },
  { body: "Physical Sciences" },
  { body: "Database Management & Administration" },
  { body: "DevOps & Solution Architecture" },
  { body: "ERP/CRM Software" },
  { body: "Information Security & Compliance" },
  { body: "Network & System Administration" },
  { body: "Corporate & Contract Law" },
  { body: "Finance & Tax Law" },
  { body: "International & Immigration Law" },
  { body: "Public Law" },
  { body: "Digital Marketing" },
  { body: "Lead Generation & Telemarketing" },
  { body: "Marketing, PR & Brand Strategy" },
  { body: "Language Tutoring & Interpretation" },
  { body: "Translation & Localization Services" },
  { body: "AI Apps & Integration" },
  { body: "Blockchain, NFT & Cryptocurrency" },
  { body: "Desktop Application Development" },
  { body: "Ecommerce Development" },
  { body: "Game Design & Development" },
  { body: "Mobile Development" },
  { body: "Product Management & Scrum" },
  { body: "QA Testing" },
  { body: "Scripts & Utilities" },
  { body: "Web & Mobile Design" },
  { body: "Web Development" },
  { body: "Other - Software Development" },
  { body: "Content Writing" },
  { body: "Editing & Proofreading Services" },
  { body: "Professional & Business Writing" },
  { body: "Sales & Marketing Copywriting" },
  { body: "Food & Beverage" },
  { body: "Dining Facilities" },
  { body: "Retail" },
  { body: "Warehouse Workers" },
  { body: "Stadiums / Conventions / Events" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure
      className={cn(
        "relative flex-shrink-0 p-4 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl border bg-white",
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
