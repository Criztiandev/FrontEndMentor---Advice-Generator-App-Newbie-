import React from "react";
import { motion } from "framer-motion";
function Button({ generateNewQuotes, dice }) {
  return (
    <motion.button
      whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px hsl(150, 100%, 66%)" }}
      transition={{ transition: 1.5 }}
      onClick={generateNewQuotes}
      className=" rounded-full bg-primary-Neo-Green"
    >
      <motion.img
        whileHover={{ rotateZ: 360 }}
        transition={{ duration: 0.3 }}
        className="p-4"
        src={dice}
        alt="dice"
      />
    </motion.button>
  );
}

export default Button;
