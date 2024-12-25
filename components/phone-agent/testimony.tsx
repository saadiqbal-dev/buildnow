import Image from "next/image";
import { Button } from "../ui/button";

export default function Testimony() {
  return (
    <div className="py-24 mx-auto container px-4">
      <div className="grid grid-cols-12 gap-3 items-center">
        <div className="col-span-4 flex flex-col gap-3">
          <Image
            src="/assets/testimony.jpg"
            alt="Testimony"
            width={400}
            height={400}
            className="aspect-square object-cover rounded-xl"
          />
          <div>
            <h4 className="text-2xl font-bold">Dharam Rai</h4>
            <p>VP Customer Experience, Sonos</p>
          </div>
        </div>
        <div className="col-span-8 flex flex-col gap-6">
          <p className="text-3xl font-medium before:content-['“'] relative before:absolute before:-left-4 before:text-primary">
            With Sierra, AI agents engage with empathy, remembering the context
            and relevance of past comments. This has humongous value in terms of
            reducing customer effort and creating a better experience.”
          </p>
          <Button variant="outline" className="max-w-fit">
            Read More →
          </Button>
        </div>
      </div>
    </div>
  );
}
