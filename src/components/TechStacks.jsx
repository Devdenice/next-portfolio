import Image from "next/image";
import React from "react";
import Bootstrap from "../../public/images/tech/bootstrap.png";
import JS from "../../public/images/tech/js.png";
import html from "../../public/images/tech/html.png";
import css from "../../public/images/tech/css.png";
import react from "../../public/images/tech/react.png";
import nextjs from "../../public/images/tech/nextjs.png";
import materialui from "../../public/images/tech/materialui.png";
import chakraui from "../../public/images/tech/chakraui.png";

const TechStacks = () => {
  const techLogo = [
    {
      image: html,
    },
    {
      image: css,
    },
    {
      image: JS,
    },
    {
      image: react,
    },
    {
      image: nextjs,
    },
    {
      image: Bootstrap,
    },
    {
      image: materialui,
    },
    {
      image: chakraui,
    },
  ];
  return (
    <div className="mt-28 lg:mt-10">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center items-center ">
        <h1 className="text-primary font-bold text-4xl  ">Tech Stack</h1>
        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {techLogo.map((logo, index) => (
            <Image
              className="w-24 sm:w-28  lg:w-32 drop-shadow-lg hover:scale-125 transition-all ease-in-out duration-700"
              key={index}
              src={logo.image}
              alt="Bootstrap Logo"
            />
          ))}
        </div>
      </div>
      {/* <div className="flex w-11/12  mx-auto items-center justify-center py-10">
        <h1 className="text-neutral font-semibold text-2xl mr-8">
          Tech Stacks:
        </h1>
        <div className="flex gap-4">
          {techLogo.map((logo, index) => (
            <Image
              className="w-16 drop-shadow-lg hover:scale-125 transition-all ease-in-out duration-700"
              key={index}
              src={logo.image}
              alt="Bootstrap Logo"
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default TechStacks;
