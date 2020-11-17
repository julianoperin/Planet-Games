import React from "react";

// Style / Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  // Data
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <h3>Platforms</h3>
          <div className="platforms">
            {game.platforms.map((data) => (
              <h3 key={data.platform.id}>{data.platform.name}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
