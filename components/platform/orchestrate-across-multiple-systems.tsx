export default function OrchestrateAcrossMultipleSystems() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">
          Orchestrate across multiple systems, knowledge sources, and AI models
        </h2>
        <p className="text-center max-w-2xl">
          You define the goal. Agent OS coordinates the resources needed to
          accomplish it.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <video className="w-full h-full object-cover rounded-xl">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          <p>
            Executing complex, multi-step workflows can be beyond the
            capabilities of even the most sophisticated AI models, and often
            requires interacting with multiple systems and sources of knowledge.
            Agent OS orchestrates across all of these seamlessly.
          </p>
          <p>
            Agent OS breaks down high-level goals and processes into smaller
            steps, and coordinates access to resources needed to solve a given
            task. Agents can access knowledge and key systems as needed, and
            draw on a constellation of AI models for planning, decision making,
            response generation, self-evaluation, and more.
          </p>
          <p>
            The result is an AI agent that can make contextual decisions, take
            the appropriate action, and respond with meaningful, helpful
            language.
          </p>
        </div>
      </div>
    </section>
  );
}
