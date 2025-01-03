import IndustryCard from "./industry-card";

const teamAvatars = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
];

const industries = [
  {
    title: "Technology",
    description:
      "From startup to enterprise, scale up your AI with writing and CRM-based customer engagement campaigns.",
    avatars: teamAvatars,
    className: "md:col-span-1 bg-gray-50",
  },
  {
    title: "Financial Services",
    description:
      "Make qualified prospects, streamline applications, collect debt, and handle service inquiries - all in multiple languages.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-2 bg-[#F8F3F1]",
  },
  {
    title: "Consumer",
    description:
      "Drive purchases, inquiries, schedule appointments, and raise satisfaction checks in 25 languages.",
    avatars: teamAvatars,
    className: "md:col-span-1 bg-gray-50",
  },
  {
    title: "Retail",
    description:
      "Handle customer product inquiries and appointments. Makes sales consistently and helps your pipeline full.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-1 bg-[#F8F3F1]",
  },
  {
    title: "Services",
    description:
      "Whether you're screening candidates, running a call center, or managing client relationships, Mike provides optimal coverage.",
    avatars: teamAvatars,
    className: "md:col-span-1 bg-gray-50",
  },
  {
    title: "Real Estate",
    description:
      "Automate property inquiries, schedule viewings, and manage project completions automatically.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-2 bg-[#F8F3F1]",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#F5F1F0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B252A] mb-4">
            Industries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies across various industries to automate
            and enhance their communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              image={industry.image}
              avatars={industry.avatars}
              className={industry.className}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#0B252A] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#163A42] transition-colors duration-300">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
