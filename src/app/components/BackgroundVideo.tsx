"use client";
import { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const loopingVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const introVideo = introVideoRef.current;
    const loopingVideo = loopingVideoRef.current;

    if (introVideo && loopingVideo) {
      introVideo.onended = () => {
        introVideo.style.display = "none";
        loopingVideo.style.display = "block";
        loopingVideo.play();
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={introVideoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={loopingVideoRef}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover hidden"
      >
        <source src="/videos/loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
