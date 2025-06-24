const steps = [
  {
    step: 1,
    title: "Create Your AI Agent",
    description: "Customize your agent with one of our templates",
    img: "/assets/step-1.png",
  },
  {
    step: 2,
    title: "Test and Deploy",
    description:
      "Perform testing to ensure it can handle edge cases and deploy easily",
    img: "/assets/step-2.png",
  },
  {
    step: 3,
    title: "Monitor",
    description: "See all stats, call history and progress in the dashboard",
    img: "/assets/step-3.png",
  },
  {
    step: 4,
    title: "Grow and Improve",
    description:
      "Generate Leads, improve your agent with AI Video Trainings and more",
    img: "/assets/step-4.png",
  },
];

export default function HowItWorks() {
  return (
    <div className=" py-20 flex flex-col gap-20 bg-[#E3E0DC]">
      <div className="flex flex-col gap-4 items-center justify-center bg-[#E3E0DC]">
        <div className="px-3 py-2 rounded-full bg-[white] text-gray-800 text-sm font-medium inline-block">
          <p>How It Works</p>
        </div>
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-light text-black">
            Build Your Team of AI Phone Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your team of AI Phone Agents is available 24/7 to solve problems,
            provide answers, and take action.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-3 md:px-20">
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
              <img src={step.img} className="w-full h-auto mt-4 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
