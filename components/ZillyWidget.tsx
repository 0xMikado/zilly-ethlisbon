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
import Utility from "./Utility";
import Quest from "./Quest";
import HomeSmall from "./HomeSmall";
// import { TatumPolygonSDK } from "@tatumio/polygon";

export default function ZillyWidget({ children }: any) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen relative">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        type="button"
        className="absolute bottom-0 right-0 mb-8 mr-6"
        onClick={() => {
          setOpenModal(!openModal);
        }}
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
    `tabs-zilly-widget`
  );

  return (
    <div className="w-[350px] h-[600px] bg-[url('../public/bg-widget.svg')] drop-shadow-[0_0_10px_rgba(100,100,100,1)] bg-cover rounded-3xl absolute bottom-[110px] right-6">
      <p className="text-white/80 font-bold absolute top-5 right-5">
        {data
          ? data
          : address
          ? `${address?.substring(0, 5)}...${address?.substring(38, 42)}`
          : ""}
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
      {activeTab <= 2 && (
        <Welcome activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === 3 && (
        <Quest activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === 4 && (
        <Utility activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === 5 && (
        <HomeSmall activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}

// async function mint() {
//   const polygonSDK = TatumPolygonSDK({
//     apiKey: "7de131bc-860e-41ad-8eb9-a14919407ee7",
//   });
//   const txData = await polygonSDK.nft.mintNFT({
//     chain: "MATIC",
//     to: "0x5d81AE293cBebdCD0fe57F62068bB763E56581AC",
//     url: "ipfs://QmYzJNNZz2GpUeJdBTN18UT1ZRDJrr6MhcHi3uqDbWSCJS",
//   });
//   return txData;
// }

function Welcome({ activeTab, setActiveTab }: any) {
  const [minting, setMinting] = useState<number>(0);
  const [tx, setTx] = useState<string>("");

  if (activeTab === 0) {
    return (
      <div className="bg-[#19173D] h-[220px] w-full absolute bottom-0 rounded-3xl">
        <div className="flex justify-center text-center text-white mx-4 mt-6">
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
        <div className="flex flex-col justify-center text-white text-left mx-8 mt-8 space-y-8">
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
        {minting !== 2 && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="button"
            className=""
            onClick={() => {
              setMinting(2);
              // mint().then((res: any) => {
              //   console.log("tx data", res);
              //   setTx(res?.txId);
              //   setMinting(2);
              // });
            }}
          >
            {minting === 0 && (
              <Image src={ClaimButton} width={200} height={80} alt="claim" />
            )}
            {minting === 1 && (
              <div className="bg-[url('../public/button.svg')] bg-cover w-[180px] h-[60px] flex justify-center items-center">
                <svg
                  role="status"
                  className={`mt-2 w-[25px] h-[25px] text-gray-200 animate-spin dark:text-gray-600 fill-white`}
                  viewBox="0 0 100 101"
                  fill="none"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </motion.button>
        )}
        {minting === 2 && (
          <>
            <div className="flex flex-col justify-center text-white items-center mx-10 text-center space-y-4">
              <p>Gassless minting paused after the hackathon</p>
              {/* <p>{`Congrats on minting your membership card!`}</p> */}
              <a
                href={`https://mumbai.polygonscan.com/tx/${tx}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Check an example here
              </a>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              type="button"
              className="absolute bottom-6 right-6"
              onClick={() => setActiveTab(3)}
            >
              <Image src={nextIcon} width={40} height={40} alt="next" />
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}
