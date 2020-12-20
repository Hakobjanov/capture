import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="#" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
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
    transition: all 0.3s ease;

    &:hover {
      color: #23d997;
    }
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
