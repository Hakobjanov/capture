import React from "react";
import styled from "styled-components/macro";
import { About, Description, ImageDiv } from "../styles";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Doing work fast and efficient.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Our prices might suprise you.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Our team is the best to do it.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>We are getting better and better.</p>
          </Card>
        </Cards>
      </Description>
      <ImageDiv>
        <img src={home2} alt="pro equipment" />
      </ImageDiv>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background-color: #fff;
      color: #000;
      padding: 1rem;
      border-radius: 2px;
    }
  }
`;

export default ServicesSection;
