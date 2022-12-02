import React from "react";

export const Hero = () => {
  return (
    <div id="hero" className="grid place-items-center mt-[8rem]">
      <h1 className="text-center text-[4rem] md:text-[8rem]  font-bold leading-snug md:leading-[8rem]">
        Front-End
        <br />
        <span className="text-[#5750EC] hover:underline">Web Developer</span>
      </h1>
      <p className="text-[#6B7280] text-center md:max-w-[50rem] max-w-[30rem] md:text-[1.8rem] text-[1.4rem] leading-loose mb-5 mt-4">
      Hello, I'm a Frontend Web Developer I strives to build immersiveand beautiful web applications through carefully crafted code anduser-centric design.
      </p>
      <a
        href="#projects"
        class=" relative inline-flex items-center justify-start md:px-[3rem] md:py-4 py-3 px-8 overflow-hidden font-bold rounded-full group"
      >
        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-indigo-500 opacity-100 group-hover:-translate-x-8"></span>
        <span class="relative w-full text-left text-indigo-500 transition-colors duration-200 ease-in-out group-hover:text-white text-[1.5rem] md:text-[1.7rem]">
          Projects
        </span>
        <span class="absolute inset-0 border-2 border-indigo-500 rounded-full"></span>
      </a>
    </div>
  );
};
