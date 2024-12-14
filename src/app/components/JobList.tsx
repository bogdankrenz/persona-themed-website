import React from "react";
import SparkasseIcon from "../../../public/images/Sparkasse.svg";
import Image from "next/image";
import HighlightedText from "./HighlightedText";

const HighlightedJob = () => {
  return (
    <div className="my-12 space-x-4">
      <h2 className="inline align-bottom text-2xl">
        <HighlightedText text="Current" /> Position @
      </h2>
      <Image
        className="inline"
        src={SparkasseIcon}
        alt="sparkasse icon"
        height={30}
        width={30}
      />
    </div>
  );
};

const PreviousJob = () => {};

const JobList = () => {
  return (
    <section className="py-16">
      <HighlightedJob />
      <h2 className="text-3xl">
        <HighlightedText text="I had the " />
        honor to work with
      </h2>
    </section>
  );
};

export default JobList;
