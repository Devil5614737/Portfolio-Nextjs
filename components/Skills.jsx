import Image from "next/image";
import React from "react";
import { Container } from "./Container";
import { Skill } from "./Skill";
import {motion} from 'framer-motion';

export const Skills = () => {
  return (
    <Container>
    <motion.div
      whileInView={{
        x: [0, 0],
        y: [100, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5, type: "spring" }}
    >
    <div id='skills' className="wrapper w-fit m-auto text-center">
        <h2 className="font-bold text-[2rem] md:text-[2.6rem]">Skills</h2>
        <p className="text-[#5750EC]   text-[1.5rem]">tools and techs i know</p>
      </div>
      <div className="mt-[3rem] skills grid  grid-cols-3 md:grid-cols-5 place-items-center">
        <Skill title="Html" icon="/htmlIcon.svg" color="#FEDFD7" />
        <Skill title="Css" icon="/cssIcon.svg" color="#D3DCFB" />
        <Skill title="Javascript" icon="/jsIcon.svg" color="#FFF8C9" />
        <Skill title="React.js" icon="/reactIcon.svg" color="#E8FEFB" />
        <Skill title="Next.js" icon="/nextIcon.svg" color="#E4E4E4" />
        <Skill title="Typescript" icon="/typescript.svg" color="#C0E0FF" />
        <Skill title="Redux" icon="/reduxIcon.svg" color="#EDC8FF" />
        <Skill title="Node.js" icon="/nodeIcon.svg" color="#DAFFD2" />
        <Skill title="MongoDb" icon="/mongoIcon.svg" color="#D7FFD3" />
        <Skill title="Tailwind" icon="/tailwindIcon.svg" color="#EDEDED" />
        <Skill title="Sass" icon="/sassIcon.svg" color="#FFD9EC" />
      </div>

    </motion.div>
    </Container>
  );
};
