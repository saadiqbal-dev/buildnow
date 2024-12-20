export default function BuildYourOwnAgent() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">Build your own agent</h2>
        <p className="text-center max-w-2xl">
          Today&apos;s consumers expect to have engaging, personalized
          conversations. Agent OS makes it easy and fast to build an AI agent
          that engages customers on behalf of your business.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <video className="w-full h-full object-cover rounded-xl">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          <p>
            Agents are software systems that use AI for reasoning, decision
            making, and dialogue, enabling interactions that are creative and
            intelligent. With Agent OS, your business can leverage the latest
            research on autonomous agents in addition to unique capabilities
            that make AI safe for business.
          </p>
          <p>Agents built on Agent OS are:</p>
          <ul className="flex flex-col gap-2">
            <li>- Grounded with your brand, knowledge and processes</li>
            <li>- Capable of sophisticated, multi-step workflows</li>
            <li>
              - Able to securely access external systems to gather data and take
              action
            </li>
            <li>- Self-supervising and able to stay on-brand and on-topic</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
