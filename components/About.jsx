import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { client } from "../sanity/client";
import { Container } from "./Container";
import sanityClient from "@sanity/client";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const About = () => {
  const [about, setAbout] = useState();

  useEffect(() => {
    const query = '*[_type=="about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);

  const configuredSanityClient = sanityClient({
    projectId: "f201tyh4",
    dataset: "production",
    useCdn: true,
  });

  const imageProps = useNextSanityImage(
    configuredSanityClient,
    about && about[0].imageUrl
  );

  return (
    <>
      <div id="about" className="w-fit m-auto text-center">
        <motion.h2
          whileInView={{
            x: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="font-bold text-[2rem] md:text-[2.6rem]"
        >
          About
        </motion.h2>
      </div>
      <div className="wrapper px-3 mt-[3rem]  bg-[#5750EC] md:px-[4rem] py-[8rem]">
        <Container>
          <div className="flex flex-col md:flex-row  md:grid-cols-2 md:gap-7">
            <motion.div
              whileInView={{
                x: [0, 0],
                y: [0, 0],
                scale: [0.5, 1],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5, type: "spring" }}
              className="my-image mb-4 m-auto md:m-0"
            >
              <Image
                {...imageProps}
                width={500}
                height={600}
                loading="lazy"
                objectFit="cover"
                className="rounded-lg "
                alt="me"
              />
            </motion.div>
            <motion.div
              whileInView={{
                x: [100, 0],
                opacity: [0, 1],
              }}
              className="md:mt-6 md:self-center md:ml-5"
            >
              <p className="md:mb-6 md:text-start text-center md:text-[2rem] text-[1.5rem] text-white md:max-w-[70%] md:leading-[4rem]">
              As a frontend developer, my focus is on creating intuitive and visually stunning user interfaces for web applications and websites, always learning and staying up-to-date with the latest technologies and best practices in the field. . I am a fast learner and thrive in collaborative environments, and am always looking for ways to improve my skills and contribute.
                {/* {about && about[0].desc} */}
              </p>
              <a
                target={"_blank"}
                href={"https://drive.google.com/file/d/10vGV6NMksusdDyibR6IgFT6QANWoDRif/view?usp=sharing"}
                rel="noreferrer"
                className="flex w-fit  text-3xl border-2 border-[#D6D6D6] px-8 py-5 rounded-xl items-center gap-x-6 m-auto md:m-0 md:mt-7 mt-7 text-white"
              >
                <span>
                  <ArrowDownTrayIcon className="w-8 h-8 mt-[-5px]" />
                </span>
                RESUME
              </a>
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
};
