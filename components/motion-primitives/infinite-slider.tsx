"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isHovered && durationOnHover) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: durationOnHover * ((contentSize - Math.abs(translation.get())) / contentSize), // Adjust duration based on remaining distance
        onComplete: () => {
          translation.set(from);
          setKey(prev => prev + 1); // Force re-render to restart animation cleanly
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onUpdate: (latest) => {
          if (latest === to) {
            translation.set(from);
          }
        },
      });
    }

    return controls?.stop;
  }, [key, translation, currentDuration, width, height, gap, isHovered, durationOnHover, direction, reverse]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsHovered(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsHovered(false);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div
      className={cn("overflow-hidden flex", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
      }}
      {...hoverProps}
    >
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}