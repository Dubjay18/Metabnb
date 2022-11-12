import React from "react";
import Card from "./Card";

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
      delay: 0.5,
      when: "beforeChildren", //use this instead of delay
      staggerChildren: 0.2, //apply stagger on the parent tag
    },
  },
};

const itemVariant = {
  hidden: {
    y: 10, //move out of the site
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
      <h2 className='font-[700] flex items-center justify-center md:text-[48px] my-10'>
        Inspiration for your next adventure
      </h2>
      <div className='px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-fit mx-auto'>
        {imgArray.map((e, i) => {
          return <Card img={e} key={i} alt={e} />;
        })}
      </div>
    </div>
  );
}

export default Grid;
