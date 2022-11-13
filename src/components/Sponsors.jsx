import React from "react";
function Sponsors() {
  return (
    <div
      className='w-full flex items-center md:flex-row flex-col md:gap-0 gap-10 justify-evenly py-2'
      style={{
        background:
          "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      }}>
      <img src='/mbToken.svg' alt='MBtoken' />
      <img src='/metaMask.svg' alt='metamask' />
      <img src='/openSea.svg' alt='opensea' />
    </div>
  );
}

export default Sponsors;
