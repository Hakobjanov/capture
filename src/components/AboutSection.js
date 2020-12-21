import React from "react";
import { motion } from "framer-motion";
import { About, Description, ImageDiv, Hide } from "../styles";
import home1 from "../img/home1.png";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "../components/Wave";

const AboutSection = () => {
  {
    // framer-motion variant
    // const titleAmimation = {
    //   hidden: { opacity: 0 },
    //   show: { opacity: 1, transition: { duration: 3 } },
    // };
    // const containerAnimation = {
    //   hidden: { x: 100 },
    //   show: {
    //     x: 0,
    //     transition: { duration: 1, ease: "easeOut", staggerChildren: 1, /* when: "after" */ },
    //   },
    // };
  }

  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have all the professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <ImageDiv>
        <motion.img
          variants={photoAnimation}
          // initial="hidden"
          // animate="show"
          src={home1}
          alt="Man with the camera"
        />
      </ImageDiv>
      <Wave />
    </About>
  );
};

export default AboutSection;
