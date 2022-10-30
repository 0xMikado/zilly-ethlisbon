import { motion } from "framer-motion";
import Image from "next/image";
import nextIcon from "../public/next-icon.svg";
import closeIcon from "../public/close-button.svg";
import headItem from "../public/head-item.svg";
import footItem from "../public/foot-item.svg";
import bodyItem from "../public/body-item.svg";
import hoodieItem from "../public/hoodie-item.svg";
import teeShirtItem from "../public/tee-shirt-item.svg";
import hatItem from "../public/hat-item.svg";
import pickAxe from "../public/pickaxe.svg"
import money from "../public/money.svg"

export default function Utility({ activeTab, setActiveTab }: any) {
  return (
    <div className="flex flex-col justify-between bg-[#19173D] h-[520px] w-full absolute bottom-0 rounded-3xl">
      <div className="flex justify-center text-center mx-4 mt-5">
        <p className="text-3xl font-bold">Utility Shop</p>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        type="button"
        className="absolute top-6 right-6"
        onClick={() => setActiveTab(5)}
      >
        <Image src={closeIcon} width={28} height={28} alt="next" />
      </motion.button>
      <div className="h-fit">
        <p className="text-left font-bold ml-4 mb-4">Customize your avatar</p>
        <div className="flex justify-around space-x-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            type="button"
            className="ml-2"
            onClick={() => console.log("hello")}
          >
            <Image src={headItem} width={100} height={100} alt="next" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            type="button"
            className=""
            onClick={() => console.log("hello")}
          >
            <Image src={bodyItem} width={100} height={100} alt="next" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            type="button"
            className=""
            onClick={() => console.log("hello")}
          >
            <Image src={footItem} width={100} height={100} alt="next" />
          </motion.button>
        </div>

      </div>
      <div className="h-fit">
        <p className="text-left font-bold ml-4 mb-4">Buy some merch</p>
        <div className="flex justify-around space-x-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            type="button"
            className="ml-2"
            onClick={() => console.log("hello")}
          >
            <Image src={hatItem} width={100} height={100} alt="next" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            type="button"
            className=""
            onClick={() => console.log("hello")}
          >
            <Image src={hoodieItem} width={100} height={100} alt="next" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            type="button"
            className=""
            onClick={() => console.log("hello")}
          >
            <Image src={teeShirtItem} width={100} height={100} alt="next" />
          </motion.button>
        </div>
      </div>
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