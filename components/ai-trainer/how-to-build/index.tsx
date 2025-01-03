import StepsGrid from "./steps-grid";

export default function HowToBuild() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
            TRAINING PROCESS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
            How AI Training Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transform your team's capabilities with our comprehensive AI-powered
            training system
          </p>
        </div>
        <StepsGrid />
      </div>
    </section>
  );
}
