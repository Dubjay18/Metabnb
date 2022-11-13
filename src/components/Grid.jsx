import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
const imgArray = [
  "/card1.png",
  "/card2.png",
  "/card3.png",
  "/cardp1.png",
  "/card4.png",
  "/card5.png",
  "/card6.png",
  "/cardp2.png",
];
const containerVariant = {
  hidden: {
    y: 20, //move out of the site
  },
  visible: {
    y: 0, // bring it back to nrmal
    transition: {
      delay: 1.5,
      //use this instead of delay
      staggerChildren: 0.2, //apply stagger on the parent tag
    },
  },
};

const itemVariant = {
  hidden: {
    y: -110, //move out of the site
    opacity: 0,
  },
  visible: {
    y: 0, // bring it back to nrmal
    opacity: 1,
  },
};
function Grid() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className='font-[700] flex items-center justify-center text-center md:text-[48px] text-[24px] my-10 w-[90%] mx-auto'>
        Inspiration for your next adventure
      </motion.h2>
      <motion.div
        variants={containerVariant}
        initial='hidden'
        animate='visible'
        className='px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-fit mx-auto'>
        {imgArray.map((e, i) => {
          return (
            <motion.div variants={itemVariant} key={i}>
              <Card img={e} alt={e} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Grid;
