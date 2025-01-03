import StepsGrid from "./step-grid";

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
            HOW IT WORKS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
            Simple steps to get started
          </h2>
        </div>
        <StepsGrid />
      </div>
    </section>
  );
}
