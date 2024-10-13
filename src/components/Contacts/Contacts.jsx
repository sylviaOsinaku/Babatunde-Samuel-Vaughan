import React from "react";
import { motion } from "framer-motion";
import classes from "./Contacts.module.css";
import IconScroll from '../../ui/IconScroll';
import { Link, animateScroll as scroll } from "react-scroll";
function Contacts() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>

    <div className={classes["contacts-container"]} id="contact">
      <p className={classes["whats-next"]}>What's Next?</p>
      <h2>Get in touch</h2>
      <p  className={classes["contacts-text-wrapper"]} >
      If you're seeking to develop innovative, impact-driven business models that foster a culture of excellence, I can help. I've successfully designed and managed transformative initiatives, fostering partnerships,
       and scaling impactful projects. Let’s work together to empower your team with forward-thinking strategies that drive consistent value and a competitive edge
      </p>
      <motion.a
        href="mailto:babatunde.vaughan@hotmail.com?subject=my email address"
        whileHover={{
          scale: 1.3,
          textShadow: "0px 0px 20px rgb(221, 195, 239)",
        }}
      >
        Say Hello
      </motion.a>

      <IconScroll className={classes["scroll-wrapper"]} onClick={scrollToTop} />
   
    </div>
    <p className={classes['design-wrapper']}> Designed by:  <a  href="mailto:osinakusylvia@gmail.com?subject=my email address">Osinaku Ugonna Sylvia</a></p>
    </div>
  );
}

export default Contacts;
