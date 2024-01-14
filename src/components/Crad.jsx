import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
// import { LuDownload } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Crad({ data, refrence }) {
  return (
    <>
      <motion.div
        drag
        dragConstrains={refrence}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
      >
        <FaRegFileLines />
        <p className="text-sm leading--tight mt-5 font-semibold">{data.desc}</p>
        <div className=" footer absolute bottom-0  w-full   left-0 ">
          <div className="flex items-center justify-between px-8 py-3 mb-5 ">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <FiDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tags.isOpen && (
            <div
              className={`tag w-full py-5 ${
                data.tags.tagColor === "pink" ? "bg.green-600" : "bg-blue-600"
              } bg-green-600 flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tags.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Crad;
