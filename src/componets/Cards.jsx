import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{bounceDamping:100,bounceDamping:30}}
      className="flex-shrink-0 w-60 h-72 bg-zinc-800/90  rounded-[45px] text-white px-5 py-10 relative overflow-hidden"
    >
      <FaRegFileAlt />

      <p className="text-l mt-5 font-semibold leading-tight ">{data.desc}</p>
      <div className="footer absolute bottom-0     w-full  left-0">
        <div className="flex items-center py-3  px-8  mb-2 justify-between">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-300 rounded-full flex items-center justify-center">
            {data.close ? (
              <MdOutlineClose color="#000" />
            ) : (
              <FaDownload size=".7em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full h-12 ${
              data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            <h3 className="text-center py-3 text-sm font-semibold ">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
