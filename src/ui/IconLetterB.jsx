// icon:letter-b | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";
import { motion } from "framer-motion";

const svgVariant = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
function IconLetterB(props) {
  return (
    <motion.svg
    variants={svgVariant}
    initial="hidden"
    animate="visible"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={3.5}
    viewBox="0 0 24 24"
    height="2em"
    width="2em"
   
      {...props}
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.path d="M7 20V4h6a4 4 0 010 8 4 4 0 010 8H7M7 12h6" />
    </motion.svg>
  );
}

export default IconLetterB;
