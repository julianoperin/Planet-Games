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
  box-shadow: 0 -2px 10px rgba(50, 120, 150, 1);
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform ease 0.4s;

  :hover {
    transform: scale(1.03);
  }
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    pointer-events: none;
  }

  .card-title {
    font-size: 1.2rem;
    padding: 0.8rem;
    color: #fff;
    opacity: 0.7;
  }
`;

export default Game;
