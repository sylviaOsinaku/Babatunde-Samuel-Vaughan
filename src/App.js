import "./App.css";
import React from "react";
import MainNav from "./components/Navigation/MainNav";
import { motion } from "framer-motion";
import Intro from "./components/intro/Intro";
import ImageGallery from "./components/imageGallery/ImageGallery";
import About from "./components/About/About";
import Experience from "./components/portfolio/Experience";
import TestimonialSlider from "./components/projects/TestimonialSlider";
import Recommendations from "./components/Article/Recommendations";
import Contacts from './components/Contacts/Contacts'
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1.5,
      duration: 1.5,
      opacity: { ease: "linear" },
    },
  },
};
function App() {
  return (
    <>
      <MainNav />
      <motion.main
        className="container"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      ></motion.main>
      <Intro />
      <ImageGallery />
      <About />
      <Experience />
      <Recommendations/>
  <Contacts/>
    </>
  );
}

export default App;
