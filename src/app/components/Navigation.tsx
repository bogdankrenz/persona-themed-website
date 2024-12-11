import React from "react";
import { DiscordIcon, GithubIcon, LinkdInIcon, TelegramIcon } from "./Icons";

const Navigation = () => {
  return (
    <div className="container relative flex justify-between max-w-full p-8">
      <h2 className="text-5xl text-blue-900 font-extrabold">Bogdan Krenz</h2>
      <div className="flex gap-4">
        <TelegramIcon />
        <GithubIcon />
        <LinkdInIcon />
        <DiscordIcon />
      </div>
    </div>
  );
};

export default Navigation;
