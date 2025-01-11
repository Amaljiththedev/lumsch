import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from './EmblaCarouselSelectedSnapDisplay';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla relative w-full max-w-screen-lg mx-auto">
      {/* Viewport */}
      <div
        className="embla__viewport overflow-hidden w-full"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-4">
          {slides.map((index) => (
            <div
              className="embla__slide flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
              key={index}
            >
              <div className="embla__slide__number rounded-lg p-4 h-40 flex justify-center items-center text-xl font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls flex justify-between items-center mt-4">
        <div className="embla__buttons flex gap-2">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
