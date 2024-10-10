import "./App.css";
import React, { useState, useEffect } from "react";
import MainNav from "./components/Navigation/MainNav";
import { motion } from "framer-motion";
import Intro from "./components/intro/Intro";
import ImageGallery from "./components/imageGallery/ImageGallery";
import About from "./components/About/About";
import Experience from "./components/portfolio/Experience";
import Recommendations from "./components/Article/Recommendations";
import Contacts from "./components/Contacts/Contacts";
import loadingLogo from "./assests/images/babaTlogo.png"; // Check for typo in the path

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with actual loading logic if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
         <div className="loading-screen">
         <img src={loadingLogo} alt="Loading..." className="loading-logo" />
         <div className="loading-box"></div>
       </div>
      ) : (
        <>
          <MainNav />
          <motion.main
            className="container"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <Intro />
            <ImageGallery />
            <About />
            <Experience />
            <Recommendations />
            <Contacts />
          </motion.main>
        </>
      )}
    </>
  );
}

export default App;
