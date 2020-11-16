import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// components

// Style / Animation
import styled from "styled-components";
import { motion } from "framer-motion";

import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //   Getting the data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h1>Home</h1>
    </GameList>
  );
};

const GameList = styled(motion.div)``;

export default Home;
