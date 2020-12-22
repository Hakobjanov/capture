import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

const Contact = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <motion.h2 variants={titleAnimation}>Get In Touch.</motion.h2>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send An Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: black;
    }
  }
`;

export default Contact;
