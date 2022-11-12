import React from "react";

function Card({ img }) {
  return (
    <div
      className='border-[1px] border-[#D7D7D7] rounded-[15px] px-5 py-7 w-fit text-[12px]'
      style={{
        background:
          "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
      }}>
      <img
        src={img}
        alt=''
        height={"256px"}
        width='260px'
      />
      <div className='flex items-center justify-between my-2'>
        <p>Desert king</p>
        <p className='font-[700]'>1MBT per night</p>
      </div>
      <div className='flex items-center justify-between mb-2'>
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <div className='flex items-center justify-between mb-2'>
        <img src='/stars.png' alt='stars' />
      </div>
    </div>
  );
}

export default Card;
