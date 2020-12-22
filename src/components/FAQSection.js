import React from "react";
import styled from "styled-components/macro";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FAQSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <AnimateSharedLayout>
        <h2>
          Any questions <span>FAQ</span>
        </h2>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              magnam!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              magnam!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              magnam!
            </p>
          </div>
        </Toggle>
        <Toggle title="What product do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              magnam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    cursor: pointer;

    h4 {
      transition: all 0.5s ease-in-out;
    }

    &:hover h4 {
      color: #23d997;
    }
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FAQSection;
