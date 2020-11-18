import React from "react";

// Style / Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// router
import { Link } from "react-router-dom";
// resize image
import { smallImage, truncate } from "../util";
const Game = ({ name, released, image, id }) => {
  // load details of each GAME
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame LayoutId={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3 className="card-title">{truncate(name, 5)}</h3>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    pointer-events: none;
  }

  .card-title {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
`;

export default Game;
