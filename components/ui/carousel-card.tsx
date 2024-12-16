import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import type { CarouselCardProps } from "./types";

export function CarouselCard({ slide, isActive, onClick }: CarouselCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-500 w-[350px]`}
    >
      <Card className="h-full overflow-hidden">
        <div className="aspect-[4/3] relative overflow-hidden">
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ scale: isActive ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <CardContent
          className={`p-6 transition-all duration-500 ${
            isActive ? "opacity-100" : "opacity-70"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {slide.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
