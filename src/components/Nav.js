import React from "react";
import styled from "styled-components/macro";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#" id="logo">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 7rem;
    position: relative;
  }

  #logo {
    font-family: "Righteous", cursive;
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

export default Nav;
