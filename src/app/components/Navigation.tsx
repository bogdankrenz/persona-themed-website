import React from "react";
import { DiscordIcon, GithubIcon, LinkdInIcon, TelegramIcon } from "./Icons";

const Navigation = () => {
  return (
    <div className="container relative flex justify-between max-w-full p-8">
      <h2 className="text-5xl font-extrabold text-white mix-blend-difference">
        Bogdan Krenz
      </h2>
      <div className="flex gap-4 hidden">
        <TelegramIcon className="fill-black" />
        <GithubIcon className="fill-black" />
        <LinkdInIcon className="fill-black" />
        <DiscordIcon className="fill-black" />
      </div>
    </div>
  );
};

export default Navigation;
