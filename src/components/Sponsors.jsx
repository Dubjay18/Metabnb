import React from "react";
import { motion } from "framer-motion";
function Sponsors() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      className='w-full flex items-center md:flex-row flex-col md:gap-0 gap-10 justify-evenly py-2'
      style={{
        background:
          "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      }}>
      <img src='/mbToken.svg' alt='MBtoken' />
      <img src='/metaMask.svg' alt='metamask' />
      <img src='/openSea.svg' alt='opensea' />
    </motion.div>
  );
}

export default Sponsors;
