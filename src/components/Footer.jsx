import React from "react";

function Footer() {
  return (
    <div className='bg-[#1D1D1E]'>
      <div className=' text-white p-10 grid gap-10 lg:grid-cols-4 w-[80%] mx-auto'>
        <div>
          <img
            src='/Group-2.svg'
            alt=''
            className='mb-28'
          />
          <div className='flex items-center gap-6'>
            <img src='/fb.png' alt='' />
            <img src='/ig.png' alt='' />
            <img src='/tw.png' alt='' />
          </div>
          <br />
          <small>&#169; 2022 Metabnb</small>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>
            Community
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            NFT
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Tokens
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Landlords
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Discord
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>Places</p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Castle
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Farms
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Beach
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Learn more
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>About us</p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Road map
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Creators
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Careers
          </p>
          <p className='font-[400] text-14px cursor-pointer hover:underline'>
            Contact us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
