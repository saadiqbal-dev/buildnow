import { AppWindowMac, Book, CheckCircle, Star, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const sections = [
  {
    icon: AppWindowMac,
    title: "Choose Your Avatar",
    description:
      "Select from our diverse library or create your own AI clone for a personal touch.",
  },
  {
    icon: Star,
    title: "Voice Customization",
    description:
      "Pick voices that resonate with your audience, adapting tone and style to your needs.",
  },
  {
    icon: Users,
    title: "Always Scalable",
    description:
      "Train large, dispersed teams without extra costs or logistical challenges.",
  },
];

export default function BeyondQNA() {
  return (
    <section className="py-24 mx-auto container px-4 bg-[#D7CECC]">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl  text-center font-semibold">
          Personalized Training with AI Avatars & Voices
        </h2>
        <p className="text-center max-w-2xl">
          Make training feel personal and engaging with Buildnow AI&apos;s
          customizable avatars and voiceovers.
        </p>
      </div>
      {/* <div className="grid md:grid-cols-2 gap-6">
        <video className="w-full h-full object-cover rounded-xl">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-2 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <section.icon className="w-6 h-6" />
                <h3 className="font-bold text-lg">{section.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="grid md:grid-cols-3 gap-6 p-6 rounded-xl">
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col rounded-xl shadow-md bg-white border border-muted p-4 gap-2"
          >
            <div className="flex items-center gap-3 bg-white">
              <div className="flex flex-col items-center gap-3">
                <h3 className="font-bold text-lg">{section.title}</h3>
                <p className="text-sm text-center leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Benefits:</h3>
        <ul className="space-y-4">
          {[
            "High Engagement: Interactive content keeps employees attentive.",
            "Brand Consistency: Custom avatars and voices match your company's identity.",
            "Global Reach: Combine AI avatars with multilingual capabilities for a worldwide impact.",
          ].map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
