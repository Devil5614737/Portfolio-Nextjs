import React from "react";
import { Container } from "./Container";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34bfr0i",
        "template_km9isc6",
        form.current,
        "user_aFdDwylEm3OuZU7xFR8TL"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("submit successfully");
            document.getElementById("myForm").reset();
          }
        },
        (error) => {
          toast.error(error);
        }
      );
  };

  return (
    <Container>
      <div
      
      >
        <motion.div 
         whileInView={{
           x: [-100, 0],
           opacity: [0, 1],
          }}
          transition={{ duration: 0.5, type: "spring" }}
        
        id="contact" className="w-fit m-auto text-center mb-9">
          <h2 className="font-bold text-[2rem] md:text-[2.6rem]">Contact</h2>
          <p className="text-[#5750EC]   text-[1.5rem]">
            Want to hire me? Let's Talk!
          </p>
          <div className="flex items-center gap-7 mt-6">
            <a href="https://github.com/Devil5614737" target='_blank' rel="noreferrer" className="text-[1.5rem]  flex items-center gap-2">
              <Image
              src='/githubIcon.svg'
              width={20}
              height={20}
              objectFit='contain'
              alt='Github Icon'
              />
              Github</a>
            <a href="https://www.linkedin.com/in/kaushik-sheel-691882157/" target='_blank' rel="noreferrer" className="text-[1.5rem]  flex items-center gap-2">
            <Image
              src='/linkedInIcon.svg'
              width={20}
              height={20}
              objectFit='contain'
              alt='Linked -In icon'
              />
              LinkedIn</a>
            <a href="#!" className="text-[1.5rem]  flex items-center gap-2">
            <Image
              src='/call.svg'
              width={20}
              height={20}
              objectFit='contain'
              alt='github icon'
              />
              +918299434789</a>
          </div>
        </motion.div>
        <motion.form
         whileInView={{
          x: [0, 0],
          y: [100, 0],
          opacity: [0, 1],
        }}
          id="myForm"
          onSubmit={sendEmail}
          ref={form}
          className="w-full px-2 md:m-auto md:max-w-[80rem] pb-[2rem]"
        >
          <label htmlFor="name" className="text-[1.5rem]">
            Name
          </label>
          <input
          id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#DBDBDB] h-[5rem] my-5 px-3 text-[1.5rem] focus:outline-none focus:border-2 focus:border-[#5750EC]"
          />
          <label htmlFor="email" className="text-[1.5rem]">
            Email
          </label>
          <input
          name="email"
            id="email"
            type="email"
            required
            className="w-full bg-[#DBDBDB] h-[5rem] my-5 px-3 text-[1.5rem] focus:outline-none focus:border-2 focus:border-[#5750EC]"
          />
          <label htmlFor="message" className="text-[1.5rem]">
            Message
          </label>
          <textarea
          name='message'
            id="message"
            type="text"
            required
            className="w-full bg-[#DBDBDB] h-[14rem] my-5 resize-none p-3 text-[1.5rem] focus:outline-none focus:border-2 focus:border-[#5750EC]"
          />
          <button class="w-full  relative inline-flex items-center justify-start  px-5 py-3 md:py-5 overflow-hidden font-medium transition-all bg-[#5750EC]  hover:bg-white group">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white "></span>
            <span class="text-center relative w-full  text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600 text-[1.8rem]">
              Submit
            </span>
          </button>
        </motion.form>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 1500,
            style:{
              fontSize:14
            }
          }}
        />
      </div>
    </Container>
  );
};
