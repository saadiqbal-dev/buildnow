import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-muted/30 w-full">
      <div className="container mx-auto px-4 flex items-center flex-col gap-6">
        <h2 className="text-4xl font-semibold text-center">
          Get Started Today
        </h2>
        <div className="flex items-center gap-4 flex-col">
          <p className="text-muted-foreground text-center max-w-3xl">
            Ready to revolutionize your contact center? Let Buildnow AI
            transform the way you train, communicate, and manage client
            relationships.
          </p>
          <div className="flex items-center gap-3">
            <Button className="bg-accent">Schedule a Consultation</Button>
            <Button>Request a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
