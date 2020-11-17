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
    <CardShadow className="card-shadow">
      <Detail className="detail">
        <Stats className="stats">
          <div className="rating">
            <h3 className="title">{game.name}</h3>
            <p>
              Rating: <span className="rate">{game.rating}</span>
            </p>
          </div>
        </Stats>
        <Media className="media">
          <img src={game.background_image} alt={game.name} />
        </Media>
        <Info>
          <h3>Platforms</h3>
          <Platforms>
            {game.platforms.map((data) => (
              <img
                alt={data.platform.name}
                key={data.platform.id}
                src={data.platform.name}
              ></img>
            ))}
          </Platforms>
        </Info>

        <Description className="description">
          <p>{game.description_raw}</p>
        </Description>
        <Gallery className="gallery">
          {screen.results.map((screen) => (
            <img key={screen.id} src={screen.image} alt={screen.image} />
          ))}
        </Gallery>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }

  p {
    font-size: 1.5rem;
  }

  .rate {
    background: #222;
    color: #fff;
    padding: 0.6rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
  .title {
    font-family: "Goldman", cursive;
    font-size: 2.5rem;
  }

  .rating {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
  img {
    border-radius: 1rem;
  }
`;

export default GameDetail;
