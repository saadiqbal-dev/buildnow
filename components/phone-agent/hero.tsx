import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-12 py-16 px-4 text-center h-[calc(100vh_-_56px)] w-full">
      <div className="flex items-center flex-col gap-4 z-10 text-white">
        <h2 className="font-bold text-5xl max-w-5xl">No camera?</h2>
        <h2 className="font-semibold text-2xl">Grab an avatar instead.</h2>
        <Button size="lg">Watch Demo</Button>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 w-full h-[calc(100vh_-_56px)] object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
