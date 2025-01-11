import { cn } from "@/lib/utils";
import { AuroraBackground } from "../hero/Aurora";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-6 bg-transparent border-transparent border flex flex-col items-center justify-between space-y-6 text-center flex-1",
        className
      )}
    >
      {header}
      <div className="flex flex-col items-start w-full">
        {icon}

        <div className="font-sans font-bold text-white text-sm md:text-base lg:text-lg mt-4">{title}</div>
        <div className="font-sans font-normal text-white text-xs md:text-sm lg:text-base mt-2">{description}</div>
      </div>
    </div>
  );
};
