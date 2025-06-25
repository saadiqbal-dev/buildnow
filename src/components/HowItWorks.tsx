const steps = [
  {
    step: 1,
    title: "Build",
    description:
      "Use our agent builder to customize your AI voice agent with your knowledge base, scripts, CRM, and integrations like Zapier and HubSpot.",
    video: "/assets/videos/how-it-works/step-1-video.mp4",
  },
  {
    step: 2,
    title: "Test and Deploy",
    description:
      "Run simulations to test accuracy, compliance, and brand alignment so your agent performs as expected.",
    video: "/assets/videos/how-it-works/step-2-video.mp4",
  },
  {
    step: 3,
    title: "Monitor",
    description:
      "Track call success, sentiment, latency, and transcripts in one dashboard to improve agent performance.",
    video: "/assets/videos/how-it-works/step-3-video.mp4",
  },
  // {
  //   step: 4,
  //   title: "Grow and Improve",
  //   description:
  //     "Generate Leads, improve your agent with AI Video Trainings and more",
  //   img: "/assets/step-4.png",
  // },
];

export default function HowItWorks() {
  return (
    <div className=" py-20 px-3 md:px-0 flex flex-col gap-20 bg-[#E3E0DC]">
      <div className="flex flex-col gap-4 items-center justify-center bg-[#E3E0DC]">
        <div className="px-3 py-2 rounded-full bg-[white] text-gray-800 text-sm font-medium inline-block">
          <p>How It Works</p>
        </div>
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-light text-black">
            Build Your Team of AI Phone Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Buildnow AI’s platform makes it easy for you to build AI voice
            agents that can be personalized for both inbound and outbound calls,
            helping you better serve your customers.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-0 md:px-20">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-start p-8  bg-white rounded-lg"
            >
              <div className="text-black justify-center text-7xl font-light">
                {step.step}
              </div>
              <h3 className="text-2xl font-light">{step.title}</h3>
              <p className="text-gray-600 text-start">{step.description}</p>
              {/* <img src={step.img} className="w-full h-auto mt-4 rounded-lg" /> */}
              <video
                src={step.video}
                className="w-full h-auto mt-4 rounded-lg"
                autoPlay
                muted
                loop
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
