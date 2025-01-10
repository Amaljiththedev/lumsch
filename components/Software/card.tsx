"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro, SiBlender,SiOpenai } from "react-icons/si";
// CardDemo Component
export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton1 />
      </CardSkeletonContainer>
      <CardTitle>Damn good card</CardTitle>
      <CardDescription>
        A card that showcases a set of tools that you use to create your
        product.
      </CardDescription>
    </Card>
  );
}

// Skeleton1 Component
export const Skeleton1 = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-16 w-16 circle-1">
          <ClaudeLogo className="h-12 w-12 text-blue-500" /> {/* Increased size and color */}
        </Container>
        <Container className="h-16 w-16 circle-2">
          <SiOpenai 
          className="h-12 w-12 text-white-500" /> {/* Increased size and color */}
        </Container>
        <Container className="h-16 w-16 circle-3">
          <OpenAILogo className="h-12 w-12 text-red-500" /> {/* Increased size and color */}
        </Container>
        <Container className="h-16 w-16 circle-4">
          <MetaIconOutline className="h-12 w-12 text-yellow-500" /> {/* Increased size and color */}
        </Container>
        <Container className="h-16 w-16 circle-5">
          <GeminiLogo className="h-12 w-12 text-purple-500" /> {/* Increased size and color */}
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

// Sparkles Component
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

// Card Component
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,249,249,0.1)] bg-[rgba(255,255,255,0.7)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

// CardTitle Component
export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

// CardDescription Component
export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-lg font-normal text-white max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// CardSkeletonContainer Component
export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

// Container Component
const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

// Logo Components (Updated with Colorful & Bigger Sizes)
export const ClaudeLogo = ({  }: { className?: string }) => {
  return <SiBlender className="h-12 w-12 text-gray-400" />; // Bigger size and blue color
};

export const OpenAILogo = ({ }: { className?: string }) => {
  return <SiAdobeaftereffects  className="h-12 w-12 text-gray-499" />; // Bigger size and red color
};

export const GeminiLogo = ({  }: { className?: string }) => {
  return <SiAdobepremierepro className="h-12 w-12 text-gray-400" />; // Bigger size and purple color
};

export const MetaIconOutline = ({  }: { className?: string }) => {
  return <SiAdobephotoshop className="h-12 w-12 text-gray-400" />; // Bigger size and yellow color
};
