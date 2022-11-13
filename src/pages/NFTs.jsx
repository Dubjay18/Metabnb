import { Setting5 } from "iconsax-react";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
const imgArray = [
  "/card1.png",
  "/card2.png",
  "/card3.png",
  "/cardp1.png",
  "/card4.png",
  "/card5.png",
  "/card6.png",
  "/cardp2.png",
  "/cardn1.png",
  "/cardn2.png",
  "/cardn3.png",
  "/cardn4.png",
  "/cardn5.png",
  "/cardn6.png",
  "/cardn7.png",
  "/cardn8.png",
];
function NFTs() {
  return (
    <div>
      <Layout>
        <ul className='no-scrollbar flex w-[80%] mx-auto items-center gap-16 mb-12  mt-20 overflow-scroll'>
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <li className='flex items-center gap-4 px-4 py-3 border-[1px] border-[#B4B4B4] rounded-lg'>
            <span>location</span>
            <Setting5 size='20' />
          </li>
        </ul>
        <div className='px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-fit mx-auto mb-12'>
          {imgArray.map((e, i) => {
            return (
              <div key={i}>
                <Card img={e} alt={e} />
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export default NFTs;
