const UseCasesData = [
  {
    title: "Receptionist",
    description:
      "Answer calls 24/7, greet callers, route them, and schedule follow-ups if staff are unavailable.",
  },
  {
    title: "Scheduling Appointments",
    description:
      "Instantly trigger calls, qualify leads, and schedule appointments into your CRM and calendar.",
  },
  {
    title: "Lead Qualification",
    description:
      "Screen calls by asking key questions and qualify leads in real-time.",
  },
  {
    title: "Outbound Campaign",
    description:
      "Reach out to existing customers with offers or upgrades to drive repeat business.",
  },
  {
    title: "Surveys",
    description:
      "Conduct post-call surveys to gather insights and customer sentiment.",
  },
  {
    title: "Debt Collection",
    description:
      "Send payment reminders and negotiate terms automatically and respectfully.",
  },
];

export default function UseCases() {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">AI Phone Agent Use Cases</h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Explore how our AI agents streamline workflows and boost efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {UseCasesData.map((useCase, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="bg-gray-200 h-32 w-full rounded-md flex items-center justify-center text-gray-500">
                <p>Image/Video Placeholder</p>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mt-4">
                {useCase.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
