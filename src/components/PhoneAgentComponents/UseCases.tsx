const UseCasesData = [
  {
    title: "Receptionist",
    description:
      "Answer calls 24/7, greet callers, route them to the right person when possible, and schedule follow-ups if staff are unavailable.",
  },
  {
    title: "Scheduling Appointments",
    description:
      "Instantly trigger calls when a lead expresses interest, qualify the lead, and schedule appointments directly into your CRM and calendar.",
  },
  {
    title: "Lead Qualification",
    description:
      "Screen incoming calls by asking essential questions and qualifying leads in real time to streamline your intake process.",
  },
  {
    title: "Outbound Campaign",
    description:
      "Proactively reach out to existing customers with special offers or service upgrades to drive repeat business.",
  },
  {
    title: "Surveys",
    description:
      "Run post-interaction surveys to measure customer sentiment and identify areas for improvement.",
  },
  {
    title: "Debt Collection",
    description:
      "Call customers with automated payment reminders and even negotiate payment terms to help resolve outstanding balances.",
  },
];

export default function UseCases() {
  return (
    <div className="py-16 bg-gray-50">
      <div>
        <h1>Use Cases</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {UseCasesData.map((useCase, index) => (
          <div
            key={index}
            className="p-6 bg-white aspect-square items-center flex flex-col gap-2 justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className=" bg-gray-400 w-full h-full rounded-md">
              <p>image/video placeholder</p>
            </div>

            <h3 className="text-xl font-semibold ">{useCase.title}</h3>
            <p className="text-gray-700 text-sm text-center">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
