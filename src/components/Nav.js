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
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  }
`;

export default Nav;
