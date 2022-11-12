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
          <p className='font-[400] text-14px'>NFT</p>
          <p className='font-[400] text-14px'>Tokens</p>
          <p className='font-[400] text-14px'>Landlords</p>
          <p className='font-[400] text-14px'>Discord</p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>Places</p>
          <p className='font-[400] text-14px'>Castle</p>
          <p className='font-[400] text-14px'>Farms</p>
          <p className='font-[400] text-14px'>Beach</p>
          <p className='font-[400] text-14px'>Learn more</p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[18px] font-[700]'>About us</p>
          <p className='font-[400] text-14px'>Road map</p>
          <p className='font-[400] text-14px'>Creators</p>
          <p className='font-[400] text-14px'>Careers</p>
          <p className='font-[400] text-14px'>Contact us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
