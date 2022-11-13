import React from "react";
function Hero() {
  return (
    <div className='w-[80%] mx-auto lg:gap-5 gap-10 flex lg:flex-nowrap flex-wrap lg:flex-row flex-col items-center justify-evenly mt-20 mb-24'>
      <div className='md:max-w-2xl max-w-[80vw]'>
        <h4 className='md:text-[56px] text-[40px] font-[400] leading-[140%] text-[#434343]'>
          Rent a{" "}
          <span className='text-transparent font-[700] cus-h1'>
            Place
          </span>{" "}
          away from{" "}
          <span className='text-transparent font-[700] cus-h1'>
            Home
          </span>{" "}
          in the{" "}
          <span className='text-transparent font-[700] cus-h1'>
            Metaverse
          </span>
        </h4>
        <p className='font-[400] md:text-[24px] text-[#434343] text-[18px]'>
          we provide you access to luxury and affordable
          houses in the metaverse, get a chance to turn your
          imagination to reality at your comfort zone
        </p>
        <div className='flex items-center mt-10 md:w-[90%] w-[40%]'>
          <input
            type='text'
            placeholder='Search for location'
            className='border-[1px] border-[#A3A3A3] h-[54px] outline-none px-3 md:w-[390px] w-[150px]'
            style={{ borderRadius: "8px 0px 0px 8px" }}
          />
          <button
            style={{
              background:
                "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
              borderRadius: "0px 8px 8px 0px",
            }}
            className='rounded-[10px] text-white text-[16px] px-5 py-3 h-[54px] md:w-[230px] hover:opacity-80 duration-500 transition-all'>
            search
          </button>
        </div>
      </div>
      <div>
        <img src='/Group-hero.png' alt='' />
      </div>
      {/* <img src='/Group-hero.png' width='100vw' alt='' /> */}
    </div>
  );
}

export default Hero;
