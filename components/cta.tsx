import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-muted/30 w-full">
      <div className="container mx-auto px-4 flex items-center flex-col gap-6">
        <h2 className="text-4xl font-semibold text-center">
          Hire our Digital Workers
        </h2>
        <div className="flex items-center gap-4 flex-col">
          <p className="text-muted-foreground text-center max-w-3xl">
            Transform your contact center! Digital Workers That Train, Provide
            Video Answers, and Even Make Calls!
          </p>
          <div className="flex items-center gap-3">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
