import React, { useState, useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { IconPlayerPlayFilled, IconPlayerPause, IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'; // Importing Tabler Icons
import { API } from '@/config/apiCofig'; // Import API config
import { motion } from 'framer-motion'; // Import Framer Motion

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [slides, setSlides] = useState<{ name: string; thumbnail: string; videoSrc: string }[]>([]);
  const [playing, setPlaying] = useState<boolean[]>([]);
  const [showThumbnail, setShowThumbnail] = useState<boolean[]>([]);
  const [showName, setShowName] = useState<boolean[]>([]);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(`${API.CAROUSEL_SLIDES}`);
        const data = await response.json();

        // Extract the slides data from the response object
        const slidesData = data.data || []; // Safely access the 'data' field

        console.log('Fetched slides:', slidesData);
        setSlides(slidesData);
        setPlaying(new Array(slidesData.length).fill(false));
        setShowThumbnail(new Array(slidesData.length).fill(true));
        setShowName(new Array(slidesData.length).fill(true));
      } catch (error) {
        console.error('Error fetching carousel slides:', error);
      }
    };

    fetchSlides();
  }, []);

  const handlePlayPause = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      videoRefs.current.forEach((otherVideo, otherIndex) => {
        if (otherVideo && otherIndex !== index) {
          otherVideo.pause();
          otherVideo.muted = true;
          setPlaying((prev) => {
            const newPlaying = [...prev];
            newPlaying[otherIndex] = false;
            return newPlaying;
          });
          setShowThumbnail((prev) => {
            const newShowThumbnail = [...prev];
            newShowThumbnail[otherIndex] = true;
            return newShowThumbnail;
          });
          setShowName((prev) => {
            const newShowName = [...prev];
            newShowName[otherIndex] = true;
            return newShowName;
          });
        }
      });

      if (playing[index]) {
        video.pause();
        video.muted = true;
        setShowThumbnail((prev) => {
          const newShowThumbnail = [...prev];
          newShowThumbnail[index] = true;
          return newShowThumbnail;
        });
        setShowName((prev) => {
          const newShowName = [...prev];
          newShowName[index] = true;
          return newShowName;
        });
      } else {
        video.currentTime = 0;
        video.play();
        video.muted = false;
        setShowThumbnail((prev) => {
          const newShowThumbnail = [...prev];
          newShowThumbnail[index] = false;
          return newShowThumbnail;
        });
        setShowName((prev) => {
          const newShowName = [...prev];
          newShowName[index] = false;
          return newShowName;
        });
      }

      setPlaying((prev) => {
        const newPlaying = [...prev];
        newPlaying[index] = !newPlaying[index];
        return newPlaying;
      });
    }

    // Stop auto-scrolling when a card is played
    setIsAnimating(false);
  };

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAnimating || !emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, emblaApi]);

  return (
    <section className="embla relative w-full max-w-screen-sm mx-auto">
      {/* Viewport */}
      <motion.div
        className="embla__viewport overflow-hidden w-full"
        ref={emblaRef}
        animate={isAnimating ? { x: 0 } : {}}
      >
        <div className="embla__container flex gap-1">
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <div className="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/4" key={index}>
                {/* Video Card */}
                <div className="relative overflow-hidden rounded-3xl w-3/4 mx-auto">
                  {/* Video */}
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    className="embla__video w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    onTouchStart={(e) => e.preventDefault()}
                    onClick={(e) => e.preventDefault()}
                  >
                    <source src={slide.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Thumbnail Overlay */}
                  {showThumbnail[index] && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
                      <img
                        src={slide.thumbnail}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover opacity-100 filter grayscale transition-all duration-300"
                      />
                    </div>
                  )}

                  {/* Name Overlay on Thumbnail */}
                  {showName[index] && (
                    <div className="absolute top-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center">
                      <h3 className="text-sm font-semibold">{slide.name}</h3>
                    </div>
                  )}

                  {/* Play Button (Tabler Icon) */}
                  <button
                    onClick={() => handlePlayPause(index)}
                    className="absolute inset-0 flex justify-center items-center text-white p-2"
                  >
                    {playing[index] ? (
                      <IconPlayerPause size={36} color="#003366" />
                    ) : (
                      <IconPlayerPlayFilled size={36} color="#003366" />
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>Loading slides...</div>
          )}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white text-black rounded-full shadow-lg z-20"
      >
        <IconCaretLeftFilled fill="blue" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white text-black rounded-full shadow-lg z-20"
      >
        <IconCaretRightFilled fill="blue" />
      </button>
    </section>
  );
};

export default function Accumulation() {
  return (
    <div className="App">
      <EmblaCarousel options={{ loop: true }} />
    </div>
  );
}
