"use client";

import React from "react";
import { BiCalendar, BiUser } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import Modal from "../Helper/Modal";

export default function Hero() {
  const [showModal, setShowModal] = React.useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  return (
    <div className="relative h-[88vh] bg-[url('/images/banner1.jpg')] bg-cover bg-center">
      {/* modal */}
      {showModal && <Modal hideModal={closeModalHandler} />}
      {/* dark overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.68)]"></div>
      <div className="relative z-[10] flex items-center h-[100%] text-white">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
          {/* text content */}
          <div>
            <p className="sm:px-8 px-4 py-1 mb-[1rem] text-[12px] sm:text-[16px] bg-red-600 text-white w-fit uppercase rounded">
              Football
            </p>
            <h1 className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[45px] text-white leading-[2rem] md:leading-[3.5rem] font-medium uppercase">
              The world cup 2026 what are the exciting news for us
            </h1>
            <div className="flex items-center space-x-14">
              <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
                <BiCalendar className="w-[1rem] h-[1rem] text-white" />
                <p className="text-[11px] sm:text-[16px] text-white uppercase">
                  March 20, 2024
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
                <BiUser className="w-[1rem] h-[1rem] text-white" />
                <p className="text-[11px] sm:text-[16px] text-white uppercase">
                  By webdev warriors
                </p>
              </div>
            </div>
            <div className="mt-[2.4rem] flex items-center space-x-6">
              <button className="sm:px-8 px-4 py-2 sm:py-2.5 transition-all duration-200 hover:bg-red-800 bg-red-600 text-white font-semibold sm:text-[17px] text-[13px] rounded">
                Watch highlights
              </button>
              <button className="sm:px-8 px-4 py-2 sm:py-2.5 transition-all duration-200 hover:bg-gray-300 bg-white text-black font-semibold sm:text-[17px] text-[13px] rounded">
                Learn more
              </button>
            </div>
          </div>
          {/* play button */}
          <div>
            <div className="w-[10rem] h-[10rem] lg:ml-auto rounded-full bg-red-600 hover:bg-black transition-all duration-200 cursor-pointer sm:flex flex-col items-center justify-center hidden">
              <FaPlay className="w-[3rem] h-[3rem] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
