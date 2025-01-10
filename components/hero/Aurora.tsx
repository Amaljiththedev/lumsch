"use client";
import { cn } from "@/lib/utils";
import React   from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,

  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[50vh] items-center justify-center ",
          className
        )}

      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--dark-gradient:repeating-linear-gradient(100deg,var(--blue-900)_0%,var(--blue-800)_7%,var(--blue-700)_10%,var(--blue-600)_12%,var(--blue-500)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-800)_10%,var(--blue-700)_15%,var(--blue-600)_20%,var(--blue-500)_25%,var(--blue-400)_30%)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px]
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)] 
              after:dark:[background-image:var(--aurora)]
              after:[background-size:200%,_100%] 
              after:animate-aurora after:[background-attachment:fixed]
              pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
 
      </div>
    </main>
  );
};
