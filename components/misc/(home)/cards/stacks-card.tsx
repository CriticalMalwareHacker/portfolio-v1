import {
  IconFigma,
  IconGit,
  IconMySQL,
  IconNextJS,
  IconNodeJS,
  IconPostgres,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import type React from "react";

// ... Keep existing MarqueeProps, range function, and Marquee component ...
type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
};

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start);

const Marquee = (props: MarqueeProps) => {
    const {
        children,
        direction = "left",
        pauseOnHover = false,
        reverse = false,
        fade = false,
        className,
      } = props;
    
      const ifToRightOrToBottom = (direction: string) => {
        if (direction === "left") {
          return "to right";
        } else {
          return "to bottom";
        }
      };
    
      return (
        <div
          className={cn(
            "group flex gap-4 overflow-hidden",
            direction === "left" ? "flex-row" : "flex-col",
            className,
          )}
          data-testid="marquee"
          style={{
            maskImage: fade
              ? `linear-gradient(${
                  ifToRightOrToBottom(direction)
                  // direction === "left" ? "to right" : "to bottom"
                }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
              : undefined,
            WebkitMaskImage: fade
              ? `linear-gradient(${
                  ifToRightOrToBottom(direction)
                  // direction === "left" ? "to right" : "to bottom"
                }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
              : undefined,
          }}
        >
          {range(0, 2).map((i) => (
            <div
              key={i}
              className={cn(
                "flex shrink-0 justify-around gap-4 [--gap:1rem]",
                direction === "left"
                  ? "animate-marquee-left flex-row"
                  : "animate-marquee-up flex-col",
                pauseOnHover && "group-hover:[animation-play-state:paused]",
                reverse && "direction-reverse",
              )}
              data-testid={`marquee-child-${i + 1}`}
            >
              {children}
            </div>
          ))}
        </div>
      );
};

export const StacksCard = () => {
  return (
    <div className="p-4 flex h-full flex-col gap-4 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 mt-4 md:mt-0">
       <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 px-2">
         Tech Stack
       </div>
      <Marquee className="py-2" fade pauseOnHover>
        <IconTypescript width="40" height="40" />
        <IconReactJS width="40" height="40" />
        <IconNextJS width="40" height="40" />
        <IconTailwindcss width="40" height="40" />
        <IconPython width="40" height="40" />
      </Marquee>
      <Marquee className="py-2" reverse fade pauseOnHover>
        <IconNodeJS width="40" height="40" />
        <IconMySQL width="40" height="40" />
        <IconPostgres width="40" height="40" />
        <IconFigma width="40" height="40" />
        <IconGit width="40" height="40" />
      </Marquee>
    </div>
  );
};