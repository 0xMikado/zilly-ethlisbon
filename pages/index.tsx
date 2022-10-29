import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen bg-[url('../public/sommelier-website.png')] bg-cover">
      <div className="absolute top-6 right-24">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Home;
