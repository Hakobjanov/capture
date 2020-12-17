import React from "react";
import styled from "styled-components/macro";
import { About, Description, ImageDiv, Hide } from "../styles";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have all the professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <ImageDiv>
        <img src={home1} alt="Man with the camera" />
      </ImageDiv>
    </About>
  );
};

export default AboutSection;
