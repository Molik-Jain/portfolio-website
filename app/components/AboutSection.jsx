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
        <hr/>
        <li className="font-bold">Languages : </li>
        <p>	HTML, CSS, JavaScript, NodeJs, ReactJs, PHP, Python, C++, R</p>
        <hr/>
        <li className="font-bold">FrameWorks : </li>
        <p>NextJs, tailwindcss, bootstrap,Scikit, TensorFlow, Tkinter</p>
        <hr/>
        <li className="font-bold">Tools & DB : </li>
        <p>MySQL, MongoDB, GIT</p>
        <hr/>
        <li className="font-bold">Soft Skills : </li>
        <p>Problem-Solving, Time Management, Leadership, Communication</p>
        <hr/>
        </ul>
  

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Photon School of Vadodara, India</li>
        <p> GSEB (Class XII) </p>
        <hr/>
        <li>ITM SLS BARODA UNIVERSITY, India</li>
        <p> B.Tech CSE</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5 & CSS3</li>
        <li>Blockchain Basics</li>
        <li>Introduction to Big Data</li>
        <li>Cloud Computing Fundamentals</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500}  alt ="about image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Sql, MongoDB,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
