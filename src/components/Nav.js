import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import rawg from "../img/rawg.png";

//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <Wrap className="wrap">
      <img className="api" src={rawg} alt="api" />
      <StyledNav>
        <Logo onClick={clearSearched}>
          <img src={logo} alt="logo" />
          <h1 className="logo-title">Planet Games</h1>
        </Logo>
        <form className="search">
          <input
            placeholder="Search for games..."
            value={textInput}
            onChange={inputHandler}
            type="text"
          />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </form>
      </StyledNav>
    </Wrap>
  );
};

const Wrap = styled(motion.div)`
  position: relative;

  .api {
    width: 250px;
    position: absolute;
    right: 3%;
    top: 15%;
  }
`;

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
  color: #fff;
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

  .logo-title {
    font-size: 3rem;
    font-family: "Fondamento", cursive;
    font-style: italic;
    color: #999;
  }
`;

export default Nav;
