import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto md:px-0", // Adjusting grid to be more responsive
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
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none bg-transparent border-transparent border flex flex-col items-center justify-between space-y-6 text-start flex-1", // Set items-start here
        className
      )}
    >
      {header}
      <div className="flex flex-col items-start w-full"> {/* This container is now left-aligned */}
        {icon}

        <div className="font-medium text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4">{title}</div> {/* Title */}
        <div className="font-normal text-white text-xs sm:text-sm md:text-base lg:text-lg mt-2">{description}</div> {/* Description */}
      </div>
    </div>
  );
};

