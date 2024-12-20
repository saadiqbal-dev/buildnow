export default function ForwardThinking() {
  return (
    <section className="py-24 mx-auto container px-4">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">
          Forward-thinking and backwards compatible
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <video className="w-full h-full object-cover rounded-xl">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-3">
          <p>
            The Agent OS architecture embraces the latest advancements in
            artificial intelligence, with a strict commitment to backwards
            compatibility. We ensure a seamless transition for all customers and
            guarantee existing functionalities remain fully accessible.
          </p>
        </div>
      </div>
    </section>
  );
}
