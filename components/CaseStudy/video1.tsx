"use client";
import { IconVolume2, IconVolumeOff } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://lumschbackend.onrender.com";

export const VideoComponent1 = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Fetch video data from API
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const apiUrl = `${API_URL}/api/tracing-beam-video1s`;
        console.log("Fetching from:", apiUrl); // Debug: Check API URL

        const response = await fetch(apiUrl);
        console.log("Raw Response:", response); // Debug: Check response object

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Parsed Data:", data); // Debug: Check the parsed response JSON

        // Corrected extraction of video URL
        const videoUrl = data?.data?.[0]?.videosrc || null;
        console.log("Extracted Video URL:", videoUrl); // Debug: Check extracted video URL

        setVideoSrc(videoUrl);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, []);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video playback to start
      videoRef.current.muted = !isMuted; // Toggle mute
    }
    setIsMuted((prev) => !prev);
  };

  if (!videoSrc) {
    return <p>Loading video...</p>;
  }

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
