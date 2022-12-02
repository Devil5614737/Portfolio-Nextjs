import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

import { Hero } from "../components/Hero";
import { HEAD } from "../components/Head";
import { Navbar } from "../components/Navbar";
import { ProjectContainer } from "../components/ProjectContainer";
import { Skills } from "../components/Skills";
import ToTopButton from "../components/ToTopButton";
import { useState } from "react";


export default function Home() {


  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 520) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  return (
    <>
      <HEAD />
      <header className="relative w-[100vw] min-h-[100vh]">
        <Navbar />
        <Hero />
        {show && <ToTopButton />}
      </header>
      <main className="mt-[3rem]">
        <section
         
        >
          <ProjectContainer />
        </section>
        <section className="mt-[3rem]">
          <Skills />
        </section>
        <section className="mt-[3rem]">
          <About />
        </section>
        <section className="mt-[6rem]">
          <Contact />
        </section>
      </main>
    </>
  );
}

