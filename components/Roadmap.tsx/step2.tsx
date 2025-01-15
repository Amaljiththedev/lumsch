import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IconVolume2, IconVolumeOff } from "@tabler/icons-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://lumschbackend.onrender.com";

// Video Component
const TimelineVideo2 = () => {
  const [isMuted, setIsMuted] = useState(true); // State for mute toggle
  const [videoSrc, setVideoSrc] = useState<string | null>(null); // State for video source URL
  const videoRef = useRef<HTMLVideoElement | null>(null); // Ref for video element

  // Fetch video data from the API
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/time-line-data2s`); // Replace API_URL with your actual API base URL
        console.log("API Response:", response.data); // Debugging API response
        const videoData = response.data.data[0];
        if (videoData && videoData.videosrc) {
          setVideoSrc(videoData.videosrc); // Set the video source
        } else {
          console.error("Video source not found in API response.");
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideoData();
  }, []);

  // Mute toggle handler
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video playback to the start
      videoRef.current.muted = !isMuted; // Toggle mute
    }
    setIsMuted((prev) => !prev); // Update state
  };

  // Render loading message if video source is not available
  if (!videoSrc) {
    return <p>Loading video...</p>;
  }

  // Render video component
  return (
    <div className="relative flex justify-center items-center w-full h-auto">
      <div className="relative w-full max-w-md">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => console.error("Video loading error:", e)}
          className="w-full h-[450px] rounded-xl shadow-xl object-cover"
        ></video>

      </div>
    </div>
  );
};
// Title Section Component
const TitleSection2 = () => {
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/time-line-data2s`);
        const titleData = response.data.data[0];
        setTitle(titleData.title); // Set title
      } catch (error) {
        console.error("Error fetching title:", error);
      }
    };
    fetchData();
  }, []);

  return <>{title}</>;
};

// Subheading Section Component
const SubheadingSection2 = () => {
  const [subheading, setSubheading] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/time-line-data2s`);
        const subheadingData = response.data.data[0];
        setSubheading(subheadingData.subheading); // Set subheading
      } catch (error) {
        console.error("Error fetching subheading:", error);
      }
    };
    fetchData();
  }, []);

  return <p>{subheading}</p>;
};

// List Sections Components
const ListSection21 = () => {
  const [list1, setList1] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/time-line-data2s`);
        const list1Data = response.data.data[0];
        setList1(list1Data.list1); // Set list1
      } catch (error) {
        console.error("Error fetching list1:", error);
      }
    };
    fetchData();
  }, []);

  return <li>{list1}</li>;
};

const ListSection22 = () => {
  const [list2, setList2] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/time-line-data2s`);
        const list2Data = response.data.data[0];
        setList2(list2Data.list2); // Set list2
      } catch (error) {
        console.error("Error fetching list2:", error);
      }
    };
    fetchData();
  }, []);

  return <li>{list2}</li>;
};

const ListSection23 = () => {
  const [list3, setList3] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/time-line-data2s`);
        const list3Data = response.data.data[0];
        setList3(list3Data.list3); // Set list3
      } catch (error) {
        console.error("Error fetching list3:", error);
      }
    };
    fetchData();
  }, []);

  return <li>{list3}</li>;
};

const Description2 = () => {
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/time-line-data2s`);
        const descriptionData = response.data.data[0];
        setDescription(descriptionData.description); // Set description
      } catch (error) {
        console.error("Error fetching description:", error);
      }
    };
    fetchData();
  }, []);

  return <p>{description}</p>; // Display description
};

// Export all components at once
export { TimelineVideo2, TitleSection2, SubheadingSection2, ListSection21, ListSection22, ListSection23, Description2 };
