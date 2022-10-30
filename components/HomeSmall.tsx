import { motion } from "framer-motion";
import Image from "next/image";
import closeIcon from "../public/close-button.svg";
import dailyStrike from "../public/daily-strike.svg";
import depositVault from "../public/deposit-vault.svg";
import follow from "../public/follow.svg";
import referral from "../public/referral.svg";
import hatItem from "../public/hat-item.svg";
import pickAxe from "../public/pickaxe.svg"
import money from "../public/money.svg"

export default function HomeSmall({ activeTab, setActiveTab }: any) {
  return (
    <div className="flex flex-col justify-between bg-[#19173D] h-[220px] w-full absolute bottom-0 rounded-3xl">
      <div className="flex justify-center text-center mx-4 mt-5">
        <p className="text-3xl font-bold">Home</p>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        type="button"
        className="absolute top-6 right-6"
        onClick={() => console.log("hello")}
      >
        <Image src={closeIcon} width={28} height={28} alt="next" />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        type="button"
        className="w-fit h-fit mx-6"
        onClick={() => console.log("hello")}
      >
        <Image src={depositVault} width={300} height={100} alt="next" />
      </motion.button>

      <div className="flex justify-around mx-12 py-2 mb-4 rounded-full bg-[#19173D] border-[#383476] border-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          type="button"
          className=""
          onClick={() => setActiveTab(3)}
        >
          <Image src={pickAxe} width={30} height={30} alt="next" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          type="button"
          className=""
          onClick={() => setActiveTab(4)}
        >
          <Image src={money} width={30} height={30} alt="next" />
        </motion.button>

      </div>

    </div>
  );

}