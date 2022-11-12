import React from "react";

function Section() {
  return (
    <div className='cus-bg py-20 mt-20'>
      <div className='w-[80%] flex items-center md:flex-row flex-col gap-10 mx-auto'>
        <div className='text-white '>
          <h4 className='md:text-[48px] font-[700] leading-[59.95px]'>
            Metabnb NFTs
          </h4>
          <p className='text-[18px] leading-[35px]'>
            Discover our NFT gift cards collection. Loyal
            customers gets amazing gift cards which are
            traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button
            className=' font-[400] h-[48px] w-[156px] rounded-[8px]'
            style={{
              background:
                "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
            }}>
            <span className='cus-text'>Learn more</span>
          </button>
        </div>
        <img
          src='/metapics.png'
          alt='metabnb-nfts'
          width={"50%"}
        />
      </div>
    </div>
  );
}

export default Section;
