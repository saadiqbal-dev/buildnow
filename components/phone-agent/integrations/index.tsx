import IntegrationGrid from "./integration-grid";

export default function Integrations() {
  return (
    <section className="bg-[#F5F1F0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
                  INTEGRATIONS
                </span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0B252A] leading-tight">
                Mike integrates with your entire stack.
              </h2>
            </div>

            <p className="text-gray-600">
              Automate your entire call operations, from converting inbound
              prospects into meetings, qualifying leads or customer care
              automation. Mike seamlessly embeds in your current workflows.
            </p>

            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#0B252A] px-6 py-3 font-medium text-white transition duration-300 ease-out hover:bg-[#163A42]">
              <span className="absolute right-0 translate-x-full transition-transform duration-300 ease-out group-hover:-translate-x-4">
                →
              </span>
              <span className="text-sm transition-transform duration-300 ease-out group-hover:-translate-x-4">
                Get started
              </span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full"></div>
            <div className="relative">
              <IntegrationGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
