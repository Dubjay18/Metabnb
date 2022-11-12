import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        x: 0,
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
      className='w-[80%] mx-auto lg:gap-5 gap-10 flex lg:flex-row flex-col items-center justify-between mt-20 mb-24'>
      <div className='md:max-w-2xl max-w-[80vw]'>
        <h4 className='md:text-[56px] text-[40px] font-[400] leading-[140%] text-[#434343]'>
          Rent a{" "}
          <span className='text-transparent font-[700] bg-gradient-to-b from-[#A02279] to-[#FFC08999] bg-clip-text'>
            Place
          </span>{" "}
          away from{" "}
          <span className='text-transparent font-[700] bg-gradient-to-b from-[#A02279] to-[#FFC08999] bg-clip-text'>
            Home
          </span>{" "}
          in the{" "}
          <span className='text-transparent font-[700] bg-gradient-to-b from-[#A02279] to-[#FFC08999] bg-clip-text'>
            Metaverse
          </span>
        </h4>
        <p className='font-[400] md:text-[24px] text-[18px]'>
          we provide you access to luxury and affordable
          houses in the metaverse, get a chance to turn your
          imagination to reality at your comfort zone
        </p>
        <div className='flex items-center mt-10 md:w-[70%] w-[40%]'>
          <input
            type='text'
            placeholder='Search for location'
            className='border-[1px] border-[#A3A3A3] h-[54px] outline-none px-3 w-[50vw]'
            style={{ borderRadius: "8px 0px 0px 8px" }}
          />
          <button
            style={{
              background:
                "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
              borderRadius: "0px 8px 8px 0px",
            }}
            className='rounded-[10px] text-white text-[16px] px-5 py-3 h-[54px] md:w-[230px]'>
            search
          </button>
        </div>
      </div>
      <div>
        <img src='/Group-hero.png' alt='' />
      </div>
      {/* <img src='/Group-hero.png' width='60%' alt='' /> */}
    </motion.div>
  );
}

export default Hero;
