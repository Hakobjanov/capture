import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
  swoop,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  //PROBLEM
  // i cant use custom useScroll() animation on
  // <Movie ref={element} variants={fade} animate={controls} initial="hidden">...</Movie>
  // as I add this attr's to the Movie tag all the above animations - on Frames and 1st <Movie> -
  // doesnot work. The stay 'hidden'
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <ImageWrapper>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </ImageWrapper>
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-racer">
          <ImageWrapper>
            <img src={theracer} alt="theracer" />
          </ImageWrapper>
        </Link>
      </Movie>

      <Movie>
        <h2>Good Times</h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/good-times">
          <ImageWrapper>
            <img src={goodtimes} alt="good times" />
          </ImageWrapper>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media (max-width: 1300px) {
    padding: 2rem 1.5rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    transition: all 1.5s ease-in-out;
    overflow: hidden;

    &:hover {
      filter: sepia() blur(2px);
    }
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
