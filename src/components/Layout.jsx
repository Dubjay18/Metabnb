import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          y: -40,
          x: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className='flex items-center my-10 justify-between md:w-[80%] w-[95%] mx-auto md:gap-0 gap-5'>
        <img src='/Group.png' alt='' />
        <ul className='lg:flex hidden items-center gap-10'>
          <Link
            to='/'
            className='cursor-pointer hover:underline'>
            Home
          </Link>
          <Link
            to={"/placeToStay"}
            className='cursor-pointer hover:underline'>
            Place to stay
          </Link>
          <li className='cursor-pointer hover:underline'>
            NFTs
          </li>
          <li className='cursor-pointer hover:underline'>
            Community
          </li>
        </ul>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background:
              "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
          }}
          className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px] lg:block hidden text-white md:text-[16px] md:px-5 md:py-3 py-1 px-2 text-[14px] '>
          Connect Wallet
        </button>
        {/* <HambergerMenu
          size='28'
          className='lg:hidden flex cus-text'
          color='#B840AE'
        /> */}
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div
            className={`
              ${
                isNavOpen ? "showMenuNav " : "hideMenuNav "
              } transition-all duration-500`}>
            <div
              className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
              <Link
                onClick={() => setIsNavOpen(false)}
                to='/'
                className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                Home
              </Link>
              <Link
                to='/placeToStay'
                onClick={() => setIsNavOpen(false)}
                className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                Place to stay
              </Link>
              <li className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                NFTs
              </li>
              <li
                onClick={() => setIsNavOpen(false)}
                className='cursor-pointer hover:underline border-gray-400 my-8 uppercase border-b'>
                Community
              </li>
              <li>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setIsNavOpen(false);
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                  }}
                  className='hover:opacity-75 transition-all duration-500 hover:scale-95 rounded-[10px]  text-white md:text-[16px] md:px-5 md:py-3 py-1 px-2 text-[14px] '>
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
        </section>
      </motion.nav>
      {children}
      <Footer />
      <style>{`
      .hideMenuNav {
        top: -1000px;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100vh;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      <CustomModal
        onClose={() => setShowModal(false)}
        visible={showModal}>
        <div className='bg-white rounded-[16px] pt-7 md:w-[600px] w-[80%] h-[366px]'>
          <div className='flex items-center justify-between w-[90%] mx-auto'>
            <h2 className='font-[700] text-[24px]'>
              Connect Wallet
            </h2>
            <button onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
          <br />
          <hr className='w-full ' />
          <br />
          <small className='mb-2 flex items-center w-[90%] mx-auto'>
            Choose your preferred wallet:
          </small>

          <div className='flex items-center justify-between border-[1px] hover:bg-[#CFD8DC] cursor-pointer rounded-[12px] border-[#CFD8DC] py-4 px-3 w-[90%] mx-auto'>
            <div className='flex items-center gap-5'>
              <img src='/metafox.png' alt='metamask' />{" "}
              <p>Metamask</p>
            </div>
            <code>{">"}</code>
          </div>
          <br />
          <div className='flex items-center justify-between border-[1px] hover:bg-[#CFD8DC] cursor-pointer  rounded-[12px] border-[#CFD8DC] py-4 px-3 w-[90%] mx-auto'>
            <div className='flex items-center gap-5'>
              <img src='/opensea.png' alt='metamask' />{" "}
              <p>WalletConnect</p>
            </div>
            <code>{">"}</code>
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default Layout;
