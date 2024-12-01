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
    <div className="video-background">
      <video ref={introVideoRef} autoPlay muted playsInline>
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={loopingVideoRef}
        autoPlay
        muted
        loop
        style={{ display: "none" }}
      >
        <source src="/videos/loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
