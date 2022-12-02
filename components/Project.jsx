import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import sanityClient from '@sanity/client';
import { useNextSanityImage } from "next-sanity-image";
import { motion } from "framer-motion";


export const Project = ({project,img}) => {



const configuredSanityClient = sanityClient({
	projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
	dataset:process.env.NEXT_PUBLIC_DATASET,
	useCdn: true
});


	const imageProps = useNextSanityImage(
		configuredSanityClient,
		project.imageUrl
	);




  return (
    <motion.div
    whileInView={{
      x: [0, 0],
      y: [0, 0],
  scale:[.5,1],
      opacity: [0, 1],
    }}
    transition={{ duration: 0.5, type: "spring" }}
     className="">
      <div className="thumbnail w-full ">
        <Image
        {...imageProps} 
          width={0}
          height={0}
          layout="responsive"
          loading="lazy"
          objectFit="cover"
          className="transition-all rounded-lg cursor-pointer hover:scale-[1.1] "
          alt='project thumbnail'
        />
      </div>
      <div className="py-5">
        <p className="font-bold text-[2rem]">{project.title}</p>
        <p className="text-[1.6rem] my-3 text-[#A0A0A0]">
          {project.desc}
        </p>
        <div className="cta flex gap-6">
          <a target='_blank' rel="noreferrer"  className="font-[500] text-[1.4rem] flex items-center gap-1 hover:gap-2 transition-all" href={project.demoLink}>
            Live Demo{" "}
            <span>
              <ArrowRightIcon className="w-7 h-1w-7" />
            </span>
          </a>
          <a target='_blank' rel="noreferrer"   className="font-[500] text-[1.4rem] flex items-center gap-1 text-[#5750EC] hover:gap-2 transition-all" href={project.githubLink}>
            Source Code{" "}
            <span>
              <ArrowRightIcon className="w-7 h-1w-7" />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
