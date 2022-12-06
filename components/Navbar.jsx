import React, { useEffect } from "react";
import { Container } from "./Container";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import { CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {motion} from 'framer-motion'

export const Navbar = () => {
const[active,setActive]=useState(false)


  const themeActive =
    typeof window !== "undefined" && localStorage.getItem("dark");

    const handleTheme = () => {

      if (themeActive) {
        localStorage.removeItem("dark");
        document.body.classList.remove("active");
      } else {
        localStorage.setItem("dark", "true");
        document.body.classList.add("active");
      }
    };




  useEffect(() => {
    if (themeActive) {
      document.body.classList.add("active");
    }
  }, [themeActive]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <>
    <nav>
      <Container>
        <div className="wrapper  px-3 py-3">
          <div className="nav flex justify-between items-center">
            <p className="font-bold text-[2rem]   flex items-center gap-2  cursor-pointer"><span><CodeBracketIcon className="w-10 h-10 text-[#5750EC] "/></span> Kaushik</p>
            <div className="md:block hidden text-[#626262]">
              <ul className="flex items-center gap-16">
                <li>
                  <a className="text-[1.6rem]" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[1.6rem]" href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-[1.6rem]" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="text-[1.6rem]" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <div
                    className="theme  shadow-categoryShadow bg-white px-5 py-3 rounded-lg grid place-items-center cursor-pointer"
                    onClick={handleTheme}
                  >
                    <MoonIcon className="w-8 h-8 " />
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <a
                href="#contact"
                class="hidden relative md:inline-flex items-center justify-start px-[2rem] py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-indigo-500 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-indigo-500 transition-colors duration-200 ease-in-out group-hover:text-white text-[1.7rem]">
                  Contact
                </span>
                <span class="absolute inset-0 border-2 border-indigo-500 rounded-full"></span>
              </a>

              <Bars3Icon
              onClick={()=>setActive(true)}
               className="md:hidden w-[3.7rem] h-[3.7rem]  cursor-pointer" />
            </div>
          </div>
        </div>
      </Container>
          {active&&
          <div className="absolute mob-menu  md:hidden w-[100vw] min-h-[100vh] bg-white py-[8rem] z-50">
          <motion.ul initial="hidden"
    animate="visible" variants={container} className=" flex flex-col justify-around  items-center gap-11">
           <motion.li variants={item}><a className="hover:underline text-[2.5rem]" href="#hero">Home</a></motion.li>
           <motion.li variants={item}><a className="hover:underline text-[2.5rem]" href="#projects">Projects</a></motion.li>
           <motion.li variants={item}><a className="hover:underline text-[2.5rem]" href="#skills">Skills</a></motion.li>
           <motion.li variants={item}><a className="hover:underline text-[2.5rem]" href="#contact">Contact</a></motion.li>
           <motion.div variants={item}
                    className="theme  shadow-categoryShadow bg-white px-5 py-3 rounded-lg grid place-items-center cursor-pointer"
                    onClick={handleTheme}
                  >
                    <MoonIcon className="w-8 h-8 " />
                  </motion.div>
         
          </motion.ul>
          <XMarkIcon onClick={()=>setActive(false)} className="absolute top-5 right-6 w-[3.5rem] h-[3.5rem] cursor-pointer"/>
                   </div>}
    </nav>
    
    </>
  );
};
