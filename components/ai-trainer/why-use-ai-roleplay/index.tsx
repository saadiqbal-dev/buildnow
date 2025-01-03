import BenefitsSection from "./benefits-section";

export default function AITraining() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
                AI FOR TRAINING
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
                Why use role playing AI for training
              </h2>
            </div>

            <BenefitsSection />
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-purple-50 blur-2xl rounded-3xl" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80"
                alt="AI Training Session"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
