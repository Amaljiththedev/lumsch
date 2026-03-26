"use client";
import { IconVolume2, IconVolumeOff } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://luminarylinesadmin.in";

export const VideoComponent3 = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoSrc = "https://vlzqrxxsielfcuq7.public.blob.vercel-storage.com/video.mp4";
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video playback to start
      videoRef.current.muted = !isMuted; // Toggle mute
    }
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="relative flex justify-center items-center w-full h-auto">
      <div className="relative w-full max-w-md">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          webkit-playsinline="true"
          onTouchStart={(e) => e.preventDefault()}
          onClick={(e) => e.preventDefault()}
          className="w-full h-[450px] rounded-xl shadow-xl object-cover"  
        ></video>
        <button
          onClick={handleMuteToggle}
          className="absolute bottom-6 right-6 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-colors duration-200 flex justify-center items-center"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <IconVolumeOff className="h-6 w-6" />
          ) : (
            <IconVolume2 className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

