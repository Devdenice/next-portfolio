"use client";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section
      className="z-10 grid md:grid-cols-2 my-12  md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80  blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-50">
        <h5 className=" text-xl font-bold text-neutral my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-neutra] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="#">
            <AiFillGithub size={25} />
          </Link>
          <Link href="#">
            <AiFillLinkedin size={25} />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="email"
              className="text-neutral block mb-2  text-sm  font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder:-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
          <div mb-6>
            <label
              htmlFor="email"
              className="text-neutral block mb-2  text-sm  font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder:-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just say Hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-neutral block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder:-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about....."
            />
          </div>
          <button
            type="submit"
            className="bg-primary  text-[#000] font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
