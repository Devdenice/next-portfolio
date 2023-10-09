"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="text-neutral md:py-16 py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center lg:justify-items-end items-center ">
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start ">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span>Hello I&apos;m </span>
          </h1>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36D1DC] to-[#5B86E5]">
              <TypeAnimation
                sequence={[
                  "Denice",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-center md:text-left text-base w-full sm:w-10/12 md:text-lg">
            I&apos;m an aspiring Front-End Web Developer with a passion for
            crafting visually appealing and user-friendly websites.
          </p>
          {/* <button className="block sm:w-36 px-1 py-1 rounded font-medium bg-gradient-to-tl from-[#9bf8f4] to-[#6f7bf7]">
            <span className="px-2 py-2 rounded bg-base-100">Download CV</span>
          </button> */}
          <div className="w-full flex justify-center md:justify-normal mt-5 ">
            <button className="w-36 md:w-36 py-2 rounded font-semibold text-sm md:text-base bg-gradient-to-r from-[#9bf8f4] to-[#6f7bf7]">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="bg-[#121212] rounded-full w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] ">
          <Image
            className=""
            src="/images/hero-image.png"
            alt="Hero Image"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-[550px] w-[550px]  blur-3xl absolute -left-[550px] top-[20px]  "></div>
      <div className="z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-[300px] w-[300px]  blur-3xl absolute -right-[270px] top-[400px]  "></div>
    </div>
    // <div className="mt-16 mb-28">
    //   <div className="grid grid-cols-1 sm:grid-cols-12">
    //     <div
    //       initial={{ opacity: 0, scale: 0.5 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.5 }}
    //       className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
    //     >
    //       <motion.h1
    //         initial={{ opacity: 0, scale: 0.5 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.5 }}
    //         className="text-neutral mb-4 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold"
    //       >
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36D1DC] to-[#5B86E5]">
    //           Hello, I&apos;m{""}
    //         </span>
    //         <br />
    //         <TypeAnimation
    //           sequence={[
    //             "Denice",
    //             1000,
    //             "Web Developer",
    //             1000,
    //             "Mobile Developer",
    //             1000,
    //             "UI/UX Designer",
    //             1000,
    //           ]}
    //           wrapper="span"
    //           speed={50}
    //           repeat={Infinity}
    //         />
    //       </motion.h1>
    //       <motion.p
    //         initial={{ opacity: 0, scale: 0.5 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.5, delay: 0.6 }}
    //         className="w-9/12 mx-auto lg:mx-0 text-neutral text-base sm:text-lg mb-6 lg:text-xl"
    //       >
    //         I&apos;m an aspiring Front-End Web Developer with a passion for
    //         crafting visually appealing and user-friendly websites.
    //       </motion.p>
    //       <div>
    //         <motion.button
    //           initial={{ opacity: 0, scale: 0.5 }}
    //           animate={{ opacity: 1, scale: 1 }}
    //           transition={{ duration: 0.5, delay: 0.7 }}
    //           className=" drop-shadow-xl max-w-5/12  text-neutral px-0.5 py-0.5 w-full rounded-md sm:w-fit  mr-4 bg-gradient-to-tl from-[#9bf8f4] to-[#6f7bf7] "
    //         >
    //           <span className="block bg-base-100 text-neutral hover:bg-slate-200 rounded-md px-5 py-2">
    //             Hire Me
    //           </span>
    //         </motion.button>
    //         <motion.button
    //           initial={{ opacity: 0, scale: 0.5 }}
    //           animate={{ opacity: 1, scale: 1 }}
    //           transition={{ duration: 0.5, delay: 0.9 }}
    //           className=" drop-shadow-xl px-0.5 py-0.5 w-full sm:w-fit rounded-md  bg-gradient-to-bl from-[#9bf8f4]  to-[#6f7bf7] mt-3"
    //         >
    //           <span className="block bg-base-100 text-neutral hover:bg-slate-200 rounded-md px-5 py-2">
    //             Download CV
    //           </span>
    //         </motion.button>
    //       </div>
    //     </div>
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.5 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.5, delay: 1.1 }}
    //       className="col-span-4 place-self-center mt-4 lg:mt-0"
    //     >
    //       <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    //         <Image
    //           src="/images/hero-image.png"
    //           alt="Hero Image"
    //           priority={true}
    //           className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           width={300}
    //           height={300}
    //         />
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default HeroSection;
