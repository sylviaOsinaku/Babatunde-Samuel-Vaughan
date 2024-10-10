// icon:letter-v | Tabler Icons https://tablericons.com/ | Csaba Kissi
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
function IconLetterV(props) {

  
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
      height="1em"
      width="1em"
      {...props}
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.path d="M6 4l6 16 6-16" />
    </motion.svg>
  );
}

export default IconLetterV;
