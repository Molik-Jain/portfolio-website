"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Welcome to my digital space! I'm [Molik Jain], a [Web Developer] enthusiast. Here, you'll find a snapshot of my creative journey—innovative projects, design flair, and a commitment to excellence. Let's connect and explore the possibilities. Ready to turn ideas into reality!",
    image: "/images/projects/1-2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "To Do Website",
    description: "Your ultimate task companion! Simplify your day with our intuitive To-Do web app. Effortlessly organize, prioritize, and conquer your tasks. Boost productivity, stay focused, and make every day a success. Start achieving your goals now!",
    image: "/images/projects/2-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Molik-Jain/react_todo_app",
    previewUrl: "https://react-todo-app-eight-phi.vercel.app/",
  },
  {
    id: 3,
    title: "Inotes",
    description: 
    "Meet iNotes – your digital notepad on the web. Capture ideas, jot down thoughts, and stay organized effortlessly. With iNotes, simplicity meets productivity. Access your notes anytime, anywhere. Elevate your note-taking experience today!",
    image: "/images/projects/3-2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Molik-Jain/Inotes",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "HomeMed",
    description: "Homemed is a straightforward medical application aimed at offering prescriptions for treatable illnesses that individuals can manage conveniently from their homes.",
    image: "/images/projects/4-2.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/Molik-Jain/HomeMed",
    previewUrl: "/",
  },{
    id: 5,
    title: "Online Library Management System",
    description: "An online library management system is a digital platform that automates library tasks, facilitating efficient organization of resources, user registration, circulation management, and providing features like online catalogs for improved accessibility and organization.",
    image: "/images/projects/5-2.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/Molik-Jain/Library_Management",
    previewUrl: "https://librarymanagementsmjvvadodara.000webhostapp.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
