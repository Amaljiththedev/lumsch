import React, { useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { IconPlayerPlayFilled, IconPlayerPause, IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'; // Importing Tabler Icons

type PropType = {
  slides: { name: string; thumbnail: string; videoSrc: string }[]; // Each slide has a name, a thumbnail, and a video source
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // State to manage whether the video is playing or paused
  const [playing, setPlaying] = useState<boolean[]>(new Array(slides.length).fill(false));
  const [showThumbnail, setShowThumbnail] = useState<boolean[]>(new Array(slides.length).fill(true)); // State to control thumbnail visibility
  const [showName, setShowName] = useState<boolean[]>(new Array(slides.length).fill(true)); // State to control name visibility

  const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(slides.length).fill(null));

  const handlePlayPause = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      // Check if any video is playing and mute all other videos
      videoRefs.current.forEach((otherVideo, otherIndex) => {
        if (otherVideo && otherIndex !== index) {
          otherVideo.pause(); // Pause other videos
          otherVideo.muted = true; // Mute other videos
          setPlaying((prev) => {
            const newPlaying = [...prev];
            newPlaying[otherIndex] = false; // Set other videos to paused
            return newPlaying;
          });
          setShowThumbnail((prev) => {
            const newShowThumbnail = [...prev];
            newShowThumbnail[otherIndex] = true; // Show thumbnail for other videos
            return newShowThumbnail;
          });
          setShowName((prev) => {
            const newShowName = [...prev];
            newShowName[otherIndex] = true; // Show name again for other videos
            return newShowName;
          });
        }
      });

      if (playing[index]) {
        video.pause(); // Pause the current video
        video.muted = true; // Mute it
        setShowThumbnail((prev) => {
          const newShowThumbnail = [...prev];
          newShowThumbnail[index] = true; // Show thumbnail again
          return newShowThumbnail;
        });
        setShowName((prev) => {
          const newShowName = [...prev];
          newShowName[index] = true; // Show name again
          return newShowName;
        });
      } else {
        video.currentTime = 0; // Reset the video to the start
        video.play(); // Play the current video
        video.muted = false; // Unmute the current video
        setShowThumbnail((prev) => {
          const newShowThumbnail = [...prev];
          newShowThumbnail[index] = false; // Hide thumbnail when video is playing
          return newShowThumbnail;
        });
        setShowName((prev) => {
          const newShowName = [...prev];
          newShowName[index] = false; // Hide name when video is playing
          return newShowName;
        });
      }

      // Update the state for the current video's play/pause status
      setPlaying((prev) => {
        const newPlaying = [...prev];
        newPlaying[index] = !newPlaying[index]; // Toggle play/pause state
        return newPlaying;
      });
    }
  };

  // Handlers for previous and next buttons
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="embla relative w-full max-w-screen-sm mx-auto">
      {/* Viewport */}
      <div
        className="embla__viewport overflow-hidden w-full"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-1">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/4" // Adjusted width of the slide
              key={index}
            >
              {/* Video Card */}
              <div className="relative overflow-hidden rounded-3xl w-3/4 mx-auto">
                {/* Video */}
                <video
                ref={(el) => { videoRefs.current[index] = el; }}
                className="embla__video w-full h-full object-cover"
                loop
                muted
                playsInline // For modern browsers
                webkit-playsinline="true" // For older iOS devices
                onTouchStart={(e) => e.preventDefault()} // Prevent default touch behavior
                onClick={(e) => e.preventDefault()} // Prevent default click behavior
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
                      className="w-full h-full object-cover opacity-100 filter grayscale transition-all duration-300" // Apply grayscale
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
          ))}
        </div>
      </div>

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
<IconCaretRightFilled fill='blue'/>
</button>
    </section>
  );
};

// Sample slides data
const slides = [
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  {
    name: "Michael Jordan",
    thumbnail: "/m.jpg",
    videoSrc: "/video.mp4",
  },
  // Add more slides as needed
];

export default function Accumulation() {
  return (
    <div className="App">
      <EmblaCarousel slides={slides} options={{ loop: true }} />
    </div>
  );
}
