import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import React from "react";

const ToTopButton = () => {
  return (
    <a
      href="#hero"
      className="fixed bottom-10 right-10
    w-fit
    h-fit
    p-5
    bg-[#5750EC]
    text-white
    z-50
    rounded-full
    shadow-lg
    "
    >
      <ArrowSmallUpIcon className="w-[2rem] h-[2rem]" />
    </a>
  );
};

export default ToTopButton;
