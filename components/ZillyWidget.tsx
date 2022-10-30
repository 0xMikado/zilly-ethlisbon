import Image from "next/image";
import zillywidget from "../public/widget-purple.svg";
import arrowDown from "../public/arrowdown.svg";
import avatar1 from "../public/reddit-avatar1.png";
import coin from "../public/coin.png";
import nextIcon from "../public/next-icon.svg";
import num1 from "../public/num1.svg";
import num2 from "../public/num2.svg";
import num3 from "../public/num3.svg";
import ClaimButton from "../public/ClaimButton.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAccount, useEnsName } from "wagmi";
import usePersistentState from "../hooks/usePersistentState";
import { useRouter } from "next/router";
import Utility from "./Utility";
import Quest from "./Quest";
import HomeSmall from "./HomeSmall";

export default function ZillyWidget({ children }: any) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="min-h-screen relative">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        type="button"
        className="absolute bottom-0 right-0 mb-8 mr-6"
        onClick={() => setOpenModal(!openModal)}
      >
        <Image
          src={openModal ? arrowDown : zillywidget}
          width={60}
          height={60}
          alt="zilly widget"
        />
      </motion.button>
      {openModal && <ZillyPopUp />}
      {children}
    </div>
  );
}

function ZillyPopUp() {
  const { address } = useAccount();
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  const [activeTab, setActiveTab] = usePersistentState<number>(
    0,
    `tab-zilly-widget`
  );

  return (
    <div className="w-[350px] h-[600px] bg-[url('../public/bg-widget.svg')] drop-shadow-[0_0_10px_rgba(100,100,100,1)] bg-cover rounded-3xl absolute bottom-[110px] right-6">
      <p className="text-white/80 font-bold absolute top-5 right-5">
        {data
          ? data
          : `${address?.substring(0, 5)}...${address?.substring(38, 42)}`}
      </p>
      <div className="flex flex-col justify-center items-center mt-8">
        <motion.div whileHover={{ scale: 1.1 }} className="">
          <Image
            src={avatar1}
            width={150}
            height={300}
            alt="avatar"
            className=""
          />
        </motion.div>
        <div className="flex space-x-3 mt-4">
          <p className="text-4xl font-bold text-white/80">120</p>
          <Image src={coin} width={30} height={30} alt="coin" />
        </div>
      </div>
      {activeTab <= 2 && <Welcome activeTab={activeTab} setActiveTab={setActiveTab} />}
      {activeTab === 3 && <Utility activeTab={activeTab} setActiveTab={setActiveTab} />}
      {activeTab === 4 && <Quest activeTab={activeTab} setActiveTab={setActiveTab} />}
      {activeTab === 5 && <HomeSmall activeTab={activeTab} setActiveTab={setActiveTab} />}

    </div>
  );
}

function Welcome({ activeTab, setActiveTab }: any) {
  if (activeTab === 0) {
    return (
      <div className="bg-[#19173D] h-[220px] w-full absolute bottom-0 rounded-3xl">
        <div className="flex justify-center text-center mx-4 mt-6">
          <p className="text-3xl font-bold">
            Welcome to your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64159B] to-[#9C106C]">
              Sommelier
            </span>{" "}
            membership card
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          type="button"
          className="absolute bottom-6 right-6"
          onClick={() => setActiveTab(1)}
        >
          <Image src={nextIcon} width={40} height={40} alt="next" />
        </motion.button>
      </div>
    );
  }

  if (activeTab === 1) {
    return (
      <div className="bg-[#19173D] h-[350px] w-full absolute bottom-0 rounded-3xl">
        <div className="flex flex-col justify-center text-left mx-8 mt-8 space-y-8">
          <div className="flex space-x-8 items-center">
            <Image
              src={num1}
              width={40}
              height={40}
              alt="num1"
              className="shrink-0"
            />
            <p className="flex text-xl font-bold">
              {`You now have 120  `}
              <span className="pl-2">
                <Image src={coin} width={30} height={30} alt="coin" />
              </span>
            </p>
          </div>
          <div className="flex space-x-8 items-center">
            <Image
              src={num2}
              width={40}
              height={40}
              alt="num2"
              className="shrink-0"
            />
            <p className="text-xl font-bold">Complete quests to earn points</p>
          </div>
          <div className="flex space-x-8 items-center">
            <Image
              src={num3}
              width={40}
              height={40}
              alt="num3"
              className="shrink-0"
            />
            <p className="text-xl font-bold">Unlock exclusive benefits</p>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          type="button"
          className="absolute bottom-6 right-6"
          onClick={() => setActiveTab(2)}
        >
          <Image src={nextIcon} width={40} height={40} alt="next" />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="bg-[#19173D] h-[140px] w-full absolute bottom-0 rounded-3xl">
      <div className="flex justify-center mt-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          type="button"
          // className="absolute bottom-6 right-6"
          onClick={() => setActiveTab(3)}
        >
          <Image src={ClaimButton} width={200} height={80} alt="claim" />
        </motion.button>
      </div>
    </div>
  );
}
