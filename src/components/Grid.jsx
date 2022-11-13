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

function Grid() {
  return (
    <div>
      <h2 className='font-[700] flex items-center justify-center text-center md:text-[48px] text-[24px] my-10 w-[90%] mx-auto'>
        Inspiration for your next adventure
      </h2>
      <div className='px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-fit mx-auto'>
        {imgArray.map((e, i) => {
          return (
            <div key={i}>
              <Card img={e} alt={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
