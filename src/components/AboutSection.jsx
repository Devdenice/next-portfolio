"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handletabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="z-10 lg:py-10" id="about">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="z-50"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  text-primary mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-base text-neutral lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and reponsive web application. I ahve experience working
            with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequilize, HTML, CSS, and Git. I am a quick learner and I cna always
            looking to expand my knowledge and skill set. I am team player and I
            am excited to worok with others to create amaizing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handletabChange("skills")}
              active={tab === "skills"}
              className="text-neutral"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handletabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handletabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8 text-neutral">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <div className="z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-[380px] w-[380px] blur-3xl   absolute -left-[300px] top-[1000px]  "></div>
      <div className="z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-[200px] w-[200px] blur-3xl   absolute -right-[200px] top-[1500px]  "></div>
    </section>
  );
};

export default AboutSection;
