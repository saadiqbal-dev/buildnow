import InteractiveSection from "../ui/platform-section";

export default function Platform() {
  return (
    <section className="py-24 mx-auto container px-4 bg-background">
      <div className="flex flex-col justify-center items-center gap-4 pb-16">
        <h2 className="text-4xl font-semibold">Platform</h2>
        <p className="text-center max-w-2xl">
          Our platform is designed to be flexible and adaptable to your
          requirements. Whether you need a simple and intuitive interface or a
          powerful and customizable solution, we have got you covered.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <InteractiveSection />
      </div>
    </section>
  );
}
