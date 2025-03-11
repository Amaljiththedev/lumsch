import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IconVolume2, IconVolumeOff } from "@tabler/icons-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "hhttps://luminarylinesadmin.in";

// Video Component
const TimelineVideo1 = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/time-line-data1s`);
        const videoData = response.data.data[0];
        setVideoSrc(videoData.videosrc); // Set video source
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };
    fetchVideoData();
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
          muted
          playsInline
          webkit-playsinline="true"
          onTouchStart={(e) => e.preventDefault()}
          onClick={(e) => e.preventDefault()}
          className="w-full h-[450px] rounded-xl shadow-xl object-cover"  
        ></video>

      </div>
    </div>
  );
};

// Title Section Component
const TitleSection = () => {
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/time-line-data1s`);
        const titleData = response.data.data[0];
        setTitle(titleData.title); // Set title
      } catch (error) {
        console.error("Error fetching title:", error);
      }
    };
    fetchData();
  }, []);

  return <>{title}</>
};

// Subheading Section Component
const SubheadingSection = () => {
  const [subheading, setSubheading] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/time-line-data1s`);
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
const ListSection1 = () => {
  const [list1, setList1] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/time-line-data1s`);
        const list1Data = response.data.data[0];
        setList1(list1Data.list1); // Set list1
      } catch (error) {
        console.error("Error fetching list1:", error);
      }
    };
    fetchData();
  }, []);

  return (

      <li>{list1}</li>

  );
};

const ListSection2 = () => {
  const [list2, setList2] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/time-line-data1s`);
        const list2Data = response.data.data[0];
        setList2(list2Data.list2); // Set list2
      } catch (error) {
        console.error("Error fetching list2:", error);
      }
    };
    fetchData();
  }, []);

  return (
      <li>{list2}</li>

  );
};

const ListSection3 = () => {
  const [list3, setList3] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/time-line-data1s`);
        const list3Data = response.data.data[0];
        setList3(list3Data.list3); // Set list3
      } catch (error) {
        console.error("Error fetching list3:", error);
      }
    };
    fetchData();
  }, []);

  return (
      <li>{list3}</li>

  );
};

const Description = () => {
    const [description, setDescription] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}api/time-line-data1s`);
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
export { TimelineVideo1, TitleSection, SubheadingSection, ListSection1, ListSection2, ListSection3 ,Description };
