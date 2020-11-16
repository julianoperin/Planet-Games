import React from "react";

// Style / Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
// import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  // load
  const dispatch = useDispatch();

  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    pointer-events: none;
  }
`;

export default Game;
