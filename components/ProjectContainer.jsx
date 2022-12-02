import { Container } from "../components/Container";
import { Project } from "./Project";
import { motion } from "framer-motion";
import {data} from '../helpers/data'

export const ProjectContainer = () => {

  return (
    <Container>
      <div id="projects" className=" px-3 ">
        <motion.div
        whileInView={{ 
          x: [-100, 0],
          opacity: [0, 1],
         }}
         transition={{ duration: 0.5, type: "spring" }}
        className="w-fit m-auto text-center">
          <h2 className="font-bold text-[2rem] md:text-[2.6rem]">Projects</h2>
          <p className="text-[#5750EC]   text-[1.5rem]">
            here are some of my projects
          </p>
          
        </motion.div>
        <motion.div
          className="projects mt-[5rem] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[4rem]"
          whileInView={{
            x: [0, 0],
            y: [100, 0],
            opacity: [0, 1],
          }}
        >
          {data.map((project) => (
            <Project
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </Container>
  );
};
