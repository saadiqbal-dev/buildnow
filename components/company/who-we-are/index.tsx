import { Rocket, Heart, Lightbulb, Users, Shield } from "lucide-react";
import TeamMember from "./team-member";
import ValueCard from "./value-card";

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Alex Martinez",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Emily Wong",
    role: "Head of AI",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    twitter: "https://twitter.com",
  },
  {
    name: "David Park",
    role: "Head of Product",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
  },
];

const values = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI, always staying ahead of the curve.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer Success",
    description:
      "Your success is our success. We're committed to delivering exceptional value and support.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Continuous Learning",
    description:
      "We embrace change and continuously evolve our technology to serve you better.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Inclusive Design",
    description:
      "We build solutions that work for everyone, regardless of background or ability.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Security",
    description:
      "We prioritize the security and privacy of our users with enterprise-grade protection.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#0e242a] py-16 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-500/10 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full">
            WHO WE ARE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
            Meet the team behind BuildNow
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're a diverse team of engineers, designers, and AI researchers
            united by our mission to revolutionize business communication
            through AI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>

        <div className="bg-[#0e242a] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-200 mb-4">
              Our Values
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto">
              These core values guide everything we do, from product development
              to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
