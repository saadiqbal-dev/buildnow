import React, { useState, useEffect, ReactNode } from 'react';

export interface Card {
  children: ReactNode;
}

export function Card({ children }: Card) {
  return (
    <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 border">
      {children}
    </div>
  );
}

interface CardSwapProps {
  children: ReactNode[];
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
}: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused && pauseOnHover) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % React.Children.count(children));
    }, delay);

    return () => clearInterval(interval);
  }, [children, delay, isPaused, pauseOnHover]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child, index) => {
        const isActive = index === currentIndex;
        const offset = (index - currentIndex) * cardDistance;
        const zIndex = isActive ? 10 : React.Children.count(children) - Math.abs(index - currentIndex);
        
        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(${offset}px) translateY(${!isActive ? verticalDistance : 0}px)`,
              zIndex,
              opacity: isActive ? 1 : 0.7,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}