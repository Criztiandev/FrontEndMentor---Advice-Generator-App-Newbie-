import React from "react";
import { motion } from "framer-motion";

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
};

export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-Dark-Blue">
      <div className="relative box-border h-[3rem] w-[3rem]">
        <motion.span
          animate={{ rotate: 360 }}
          transition={spinTransition}
          className=" absolute top-0 left-0 box-border block h-[3rem] w-[3rem] rounded-[50%] border-[0.5rem] border-t-[0.5rem] border-neutral-Grayish-blue border-t-primary-Neo-Green "
        />
      </div>
    </div>
  );
}
