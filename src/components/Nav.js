import React from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1> Planet Games</h1>
      </Logo>
      <div className="search">
        <input type="text" placeholder="Search for games..." />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};
const StyledNav = styled(motion.nav)`
  padding: 0.7rem 1.5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.8rem 1.5rem;
    border: none;
    margin-top: 0.2rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.8rem 2rem;
    cursor: pointer;
    background: #333;
    color: white;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  button:hover {
    transform: scale(1.015);
  }

  button:focus,
  input:focus {
    outline: none;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  }
`;

export default Nav;
