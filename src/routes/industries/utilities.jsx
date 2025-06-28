import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/utilities")({
  component: RouteComponent,
});

function RouteComponent() {
  const fullText = "Healthcare";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, idx));
      idx++;
      if (idx > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Intro Section */}
      <div className="mb-12 text-center md:text-left">
        <p className="text-sm text-blue-500 mb-3 tracking-wider uppercase font-medium">Industry</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight h-14">
          <span className="inline-block border-r-2 border-gray-900 pr-1 animate-pulse">
            {displayText}
          </span>
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-lg" style={{fontSize:'30px'}}>
          Deliver personalized care and keep operational costs in check with the help of your trusted AI companion.
        </p>
      </div>

      {/* Video Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-5 transition-colors duration-300 hover:text-blue-600">
          How We Help Utilities
        </h2>
        <video
          controls
          width="100%"
          className="rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
          poster="/path-to-poster-image.jpg"
        >
          <source src="/path-to-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Healthcare Section - Side by Side */}
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-lg flex-1 transform transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-5 transition-colors duration-300 hover:text-blue-600">
            Set a new standard for patient experiences
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Support patients and policyholders with immediate, personalized, and secure interactions, when it matters most.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Eligibility and Benefits",
                desc: "Quickly assist members with provider info, dependent enrollment, and coverage queries — making care more accessible and less costly.",
              },
              {
                title: "Billing and Payments",
                desc: "Empower users with clarity on deductibles, balances, and billing updates — without overwhelming your support team.",
              },
              {
                title: "Appointments and Scheduling",
                desc: "Let patients manage appointments with ease — improving satisfaction and overall health outcomes.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-4 h-4 mt-2 rotate-45 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md transition-transform duration-300 group-hover:scale-125"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/path-to-healthcare-image.jpg"
            alt="Healthcare solutions"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Utilities Industry Content */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl mb-12 transform transition-transform duration-300 hover:-translate-y-2">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-blue-600">
          Utilities Industry Solutions
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Provide personalized care while managing costs with your trusted AI agent.
        </p>
      </div>

      {/* Testimonial Section */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-900 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold text-white transition-transform duration-300 hover:scale-110">
                  MM
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600">
                    Maureen Martin
                  </h4>
                  <p className="text-base text-gray-600">VP of Customer Care</p>
                  <p className="text-base text-gray-600 font-medium">WeightWatchers</p>
                </div>
                <blockquote className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                  “I expected quick responses from the AI, but was amazed at how genuine and empathetic they felt.”
                </blockquote>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Full story →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Highlight Section */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-blue-50 to-gray-50 py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6 px-4">
            <h2 className="text-4xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600">
              Set a new standard for patient experiences
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Partner with Sierra to launch a fully compliant AI agent that provides knowledgeable, trustworthy interactions at any scale.
            </p>
            {[
              {
                title: "Resolve issues with speed and discretion",
                desc: "Sierra agents integrate with EHR, PMS, and CRM tools to deliver fast, contextual, and empathetic support across all channels.",
              },
              {
                title: "Scale support operations",
                desc: "Quickly update your agent for new policies, manage demand spikes, and route complex cases to live agents seamlessly.",
              },
              {
                title: "Build with a trusted partner",
                desc: "Enjoy enterprise-grade privacy and compliance, with encrypted data and HIPAA-ready protections built-in.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-4 h-4 mt-2 rotate-45 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md transition-transform duration-300 group-hover:scale-125"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 px-4">
            <img
              src="/path-to-healthcare-image.jpg"
              alt="Healthcare solution"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-5 leading-tight transition-colors duration-300 hover:text-blue-600">
              The results speak for themselves
            </h1>
            <p className="text-xl text-gray-700">
              Industry leaders trust Sierra to build better customer experiences.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 text-lg transition-colors duration-200"
            >
              Our Customers →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="WeightWatchers"
              metrics={[
                { label: "CSAT", value: "4.6", color: "green" },
                { label: "Resolution rate", value: "70% with Sierra", color: "blue" },
              ]}
              link="How WeightWatchers embraces AI to engage members with empathy, at scale, with Sierra."
            />
            <Card
              title="Pendulum"
              metrics={[
                { label: "Cyan", value: "magnified 7.5%", color: "purple" },
                { label: "Grip", value: "magnified 1.5%", color: "yellow" },
              ]}
              link="How Pendulum helps customers get health support with conversational AI."
            />
            <Card
              title="AGI"
              metrics={[
                { label: "Grip scores", value: "99% excellence", color: "red" },
              ]}
              link="How AGI uses AI to empower customers with a daily health ritual."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, metrics, link }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-blue-600">
        {title}
      </h3>
      <ul className="space-y-4 mb-6">
        {metrics.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span
              className={`bg-${item.color}-100 text-${item.color}-800 text-sm font-medium px-3 py-1 rounded mr-3 transition-colors duration-300 hover:bg-${item.color}-200`}
            >
              {item.label}
            </span>
            <span className="text-base font-semibold text-gray-700">{item.value}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-blue-600 font-medium hover:text-blue-800 text-base inline-flex items-center transition-colors duration-200"
      >
        {link}
      </a>
    </div>
  );
}
