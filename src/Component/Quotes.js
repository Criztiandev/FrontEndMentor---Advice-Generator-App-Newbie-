import React from "react";
import { motion } from "framer-motion";
function Quotes({ textVariant, advice }) {
  const { start, end, transition } = textVariant;
  return (
    <motion.q
      variants={textVariant}
      initial={start}
      animate={end}
      transition={transition}
      className=" text-quote text-primary-Light-cyan"
    >
      {advice}
    </motion.q>
  );
}

export default Quotes;
