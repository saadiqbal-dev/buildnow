import {
  Calendar,
  Phone,
  Users,
  BarChart3,
  RefreshCw,
  Building,
} from "lucide-react";
import UseCaseCard from "./use-case-card";

const useCases = [
  {
    title: "Lead Generation",
    description:
      "Engage prospects and scale outreach while maintaining genuine connection with buyers at every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    icon: <Users className="w-3.5 h-3.5" />,
  },
  {
    title: "Inbound Lead Qualification",
    description:
      "Respond within seconds to inbound leads, qualifying prospects using your exact criteria before routing to your team.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    icon: <Phone className="w-3.5 h-3.5" />,
  },
  {
    title: "Appointment Setting",
    description:
      "Handle scheduling headaches automatically. Run scheduling, confirmation, and reminders while you focus on growth.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    icon: <Calendar className="w-3.5 h-3.5" />,
  },
  {
    title: "Customer Operations",
    description:
      "Streamline customer interactions and support processes with automated responses and intelligent routing.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    icon: <BarChart3 className="w-3.5 h-3.5" />,
  },
  {
    title: "Lead Revival",
    description:
      "Automatically re-engage dormant leads and nurture them back into active prospects with personalized outreach.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: <RefreshCw className="w-3.5 h-3.5" />,
  },
  {
    title: "Account Management",
    description:
      "Maintain strong client relationships with proactive communication and automated check-ins.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
    icon: <Building className="w-3.5 h-3.5" />,
  },
];

export default function UseCases() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            From booking meetings to sending reminders, and even supporting
            retention and upselling, our AI assistant handles it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              image={useCase.image}
              icon={useCase.icon}
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
