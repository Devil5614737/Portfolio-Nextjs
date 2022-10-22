import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Project } from "./Project";
import { client } from "../sanity/client";
import { motion } from "framer-motion";

export const ProjectContainer = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "All",
      active: true,
    },
    {
      id: 2,
      title: "Web App",
    },
    {
      id: 3,
      title: "Clone",
    },
    {
      id: 4,
      title: "Vanilla Js",
    },
    {
      id: 5,
      title: "Native Apps",
    },
  ]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type=="projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterWork(data)
    });
  }, []);

  const handleFilter = (item) => {
    setCategories(
      categories.map((category) =>
        category.id === item.id
          ? { ...category, active: true }
          : { ...category, active: false }
      )
    );
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setAnimateCard([{ y: 0, opacity: 1 }]);

    if (item.title === "All") {
      setFilterWork(projects);
    } else {
      setFilterWork(projects.filter((work) => work.category === item.title));
    }
  };

  return (
    <Container>
      <div id="projects" className=" px-3">
        <div className="w-fit m-auto text-center">
          <h3 className="font-bold text-[2rem] md:text-[2.6rem]">Projects</h3>
          <p className="text-[#5750EC]   text-[1.5rem]">
            here are some of my projects
          </p>
          <div className="categories mt-8 flex gap-8 flex-wrap  justify-center">
            {categories.map((category) => (
              <div
                onClick={() => handleFilter(category)}
                key={category.id}
                className="bg-white shadow-categoryShadow w-fit px-4 py-3 rounded-lg cursor-pointer transition-all"
                style={{
                  background: category.active ? "#5750EC" : "white",
                  color: category.active ? "white" : "black",
                }}
              >
                <p className="text-[1.2rem] md:text-[1.4rem]">
                  {category.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="projects mt-[5rem] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[4rem]"
          whileInView={{
            x: [0, 0],
            y: [100, 0],
            opacity: [0, 1],
          }}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {filterWork.map((project) => (
            <Project
              key={project._id}
              project={project}
              img={project.imageUrl.asset._ref}
            />
          ))}
        </motion.div>
      </div>
    </Container>
  );
};
