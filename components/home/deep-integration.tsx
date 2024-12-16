"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CarouselCard } from "@/components/ui/carousel-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarouselSlide } from "@/components/ui/types";

export default function DeepIntegration() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNavigation = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
      return (prev + 1) % slides.length;
    });
  };

  // Calculate indices for visible slides
  const getVisibleSlides = () => {
    const slideIndices = [];
    for (let i = -1; i <= 1; i++) {
      slideIndices.push((currentIndex + i + slides.length) % slides.length);
    }
    return slideIndices;
  };

  return (
    <section className="py-24 bg-muted/30 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center pb-16">
          Deep Integration
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => handleNavigation("prev")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => handleNavigation("next")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex justify-center items-center gap-6"
              initial={false}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {getVisibleSlides().map((slideIndex) => (
                  <motion.div
                    key={slideIndex}
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: slideIndex === currentIndex ? 1 : 0.8,
                      opacity: slideIndex === currentIndex ? 1 : 0.5,
                    }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <CarouselCard
                      slide={slides[slideIndex]}
                      isActive={slideIndex === currentIndex}
                      onClick={() => {
                        setCurrentIndex(slideIndex);
                        setIsAutoPlaying(false);
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const slides: CarouselSlide[] = [
  {
    title: "Customised to you",
    description:
      "Build a lasting and contextual memory, transforming past insights into future performance.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Deeply integrated",
    description:
      "Orchestrate seamless interactions across your entire tech ecosystem",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Autonomous Intelligence",
    description:
      "Independent, proactive, and able to execute complex tasks without supervision to drive results and mission.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Enterprise-ready",
    description:
      "All apps follow standard SOC 2 compliance and enterprise-grade security protocols.",
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800&h=600",
  },
];
