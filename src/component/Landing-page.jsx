import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion'

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className="bg-zinc-300 md:h-screen h-[60vh] pt-[5vw]">
      <div className="md:py-[7vw] lg:py-[4vw] sm:py-[5vw] py-[26vw] pl-[4vw]">
        {["we create", "eye-opening", "presentations"].map((item, index) => {

          return (
            <div className="flex items-center" key={index}>
              {index === 1 && (
                <motion.div initial={{ width: 0 }} animate={{ width: "7.5vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="md:w-[7.5vw] w-[20vw] md:h-[4.5vw]  ">
                  <img src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt="" className="object-fill rounded-xl" />
                </motion.div>)}
              <h1 className="font-mono uppercase font-bold lg:text-[7vw] md:text-[8vw] sm:text-[6vw] text-[12vw] leading-none tracking-tighter w-fit ">
                {item}
              </h1>
            </div>
          );
        })}
      </div>

      <hr className="sm:mt-9  mt-0 border-zinc-600 " />

      <div className="w-full md:flex py-4 pl-[5vw] md:items-center md:flex-row lg:flex-row sm:flex-col">
        <div className="w-full md:w-2/3 flex justify-between">
          <div className="md:flex w-full md:justify-between md:text-[1.3vw] text-[3vw]">
            <h1>For public and private companies</h1>
            <h1>From the first pitch to IPO</h1>
          </div>
        </div>
        <div className="flex w-full md:w-1/3 mt-4 md:mt-0 md:justify-end pr-[4vw] ">
          <button className="md:w-[15vw] text-[1.3vw] justify-center border-[1px] border-zinc-800 rounded-full uppercase px-4">
            Start The Project
          </button>
          <div className="border-[1px] border-zinc-900 ml-1 w-[5vw] h-[5vw] md:w-[2.5vw] md:h-[2.5vw] rounded-[100%] flex justify-center items-center rotate-45">
            <span>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing;
