import React from 'react';

interface CardProps {
  title: string;
  price: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ }) => {
  return (
    <div className="relative h-[600px] w-[400px] md:h-[600px] md:w-[500px] rounded-2.5xl border border-brand-neutrals-100 p-4 dark:border-brand-neutrals-800 md:rounded-3xl md:p-6">
      {/* Glowing effect */}
      <div className="glowing pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity safari:!hidden style_glowingEffect__yGXeX style_glowActive__3pVbh !hidden" >
        <div className="style_glow__i4Qpo"></div>
      </div>
      <div className="pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity safari:!block border-brand-gray-400 "></div>
      <div className="glowing pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity safari:!hidden style_glowingEffect__yGXeX !hidden" >
        <div className="style_glow__i4Qpo"></div>
      </div>

      {/* Card Content */}
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 border-brand-neutrals-100 bg-transparent p-6 dark:border-brand-neutrals-800 dark:bg-brand-medium-black md:p-8 lg:p-6 xl:p-8">
        
        {/* Background Design */}
        <div className="absolute inset-0">
          <svg className="absolute -left-[72%] bottom-0 overflow-visible aspect-[2/1] w-[250%] translate-y-[calc(50%_-122px_+_25vw)] sm:translate-y-1/2 blur-[calc(12vw)] sm:blur-[56px] saturate-150 transform-[translate3d(0, 0, 0)] transform-gpu [will-change:transform,filter]" fill="none" viewBox="0 0 701 467" xmlns="http://www.w3.org/2000/svg">
            <g className="transform-gpu">
              <path className="will-change-transform" d="M407.64 132.674 511.646 108l81.075 17.082V326.27H419.103l-31.111-98.696 19.648-94.9Z" fill="#007BFF"></path>
              <path className="will-change-transform" d="m357.667 186.498 72.448-19.143 56.475 13.253v156.09H365.651l-21.671-76.572 13.687-73.628Z" fill="#1E90FF"></path>
              <path className="will-change-transform" d="m471.471 217.57 58.714-9.647 45.77 6.679v78.666h-98.013l-17.563-38.591 11.092-37.107Z" fill="#4682B4"></path>
              <path className="will-change-transform" d="m160.042 229.351 80.266-16.432 62.569 11.376v133.988H168.888l-24.009-65.73 15.163-63.202Z" fill="#5F9EA0"></path>
              <path className="will-change-transform" d="m290.066 207.03 73.697-19.143 57.449 13.253v156.091H298.188l-22.044-76.573 13.922-73.628Z" fill="#00BFFF"></path>
              <path className="will-change-transform" d="m136.004 208.083 73.697-19.143 57.449 13.253v156.09H144.127l-22.045-76.572 13.922-73.628Z" fill="#4169E1"></path>
              <path className="will-change-transform" d="m243.752 200.799 86.172-18.321 67.174 12.683v149.388H253.249l-25.776-73.284 16.279-70.466Z" fill="#6495ED"></path>
              <path className="will-change-transform" d="m417.299 212.382 39.278-7.668 30.618 5.309v62.518h-65.567l-11.749-30.669 7.42-29.49Z" fill="#4682B4"></path>
              <path className="will-change-transform" d="m145.653 194.349 93.505-19.143 72.89 13.253v156.09H127.97L100 267.976l17.665-73.627Z" fill="#5F9EA0"></path>
              <path className="will-change-transform" d="m117.665 194.349 93.505-19.143 72.89 13.253v156.09H127.97L100 267.976l17.665-73.627Z" fill="#1E90FF"></path>
            </g>
          </svg>
        </div>

        {/* Card Content */}
        <div className="relative flex flex-col gap-3.5 md:gap-4">
          
          {/* Title */}
          <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-base/[1.25rem] md:text-1.5xl/[1.6875rem] text-blue-50">
      
          </h2>

          {/* New Heading for Investment */}
          <h3 className="font-mono text-xl md:text-2xl text-blue-200 font-semibold">Your Investment</h3>

          {/* Enhanced Price Section */}
          <h1 className="text-5xl md:text-6xl text-blue-50 font-extrabold leading-tight">
            ₹ 54,990
            <span className="text-xl text-blue-100 font-normal ml-2">(Inc. GST)</span>
          </h1>

          {/* Placement Fee */}
          <p className="text-lg md:text-xl text-blue-100 font-normal mt-2">
            <span className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-sm/[1.125rem] md:text-base/[1.375rem] ml-1 font-normal tracking-0 md:ml-2">
              + ₹ 25,000 Placement Fee*
            </span>
          </p>

          {/* Divider Line */}
          <hr className="border-brand-neutrals-100 dark:border-brand-neutrals-800 my-4" />

          {/* Additional Info */}


<div>
  <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold -tracking-4 md:text-2xl/[1.875rem] mb-3.5 md:mb-4 text-blue-100">Everything in the Cohort, plus</h3>
  <ul className="font-mono text-sm/[1.125rem] md:text-base/[1.375rem] flex flex-col gap-1.5 md:gap-2">
    <li className="font-mono text-sm/[1.125rem] md:text-base/[1.375rem] mb-0 flex items-center gap-2 text-brand-light-black dark:text-brand-light-grey-wash">
      <svg className="mb-auto mt-1.5 size-2" fill="none" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8.49816.9754c.30816.20149.39466.61465.19317.92281L4.15799 8.83157a.66669.66669 0 0 1-1.00644.12842L.21822 6.29334c-.27244-.24767-.29251-.66931-.04484-.94174.24767-.27244.6693-.29253.94174-.04485l2.35479 2.14072 4.10547-6.27892C7.77688.86039 8.19.77391 8.49816.9754Z" fill="currentColor"></path>
      </svg>
      <p className="mb-5 max-w-full overflow-hidden text-pretty text-base text-overflow:ellipsis text-blue-100">Unlimited cohort access</p>
    </li>
    <li className="font-mono text-sm/[1.125rem] md:text-base/[1.375rem] mb-0 flex items-center gap-2 text-brand-light-black dark:text-brand-light-grey-wash">
      <svg className="mb-auto mt-1.5 size-2" fill="none" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8.49816.9754c.30816.20149.39466.61465.19317.92281L4.15799 8.83157a.66669.66669 0 0 1-1.00644.12842L.21822 6.29334c-.27244-.24767-.29251-.66931-.04484-.94174.24767-.27244.6693-.29253.94174-.04485l2.35479 2.14072 4.10547-6.27892C7.77688.86039 8.19.77391 8.49816.9754Z" fill="currentColor"></path>
      </svg>
      <p className="mb-5 max-w-full text-blue-100 overflow-hidden text-pretty text-base text-overflow:ellipsis">Priority cohort feedback</p>
    </li>
  </ul>
</div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-4">
          <button className="px-8 py-3 z-50 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
