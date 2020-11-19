import React from "react";
import { Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const GameDetail = ({ pathId }) => {
  const history = useHistory();

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  console.log(game);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHander}>
          <Detail layoutId={pathId}>
            <MainTitle className="main-title" layoutId={`title ${pathId}`}>
              {game.name}
            </MainTitle>
            <DateRate>
              <div className="rating">
                <p>
                  Rating: <span className="rate-number">{game.rating}</span>
                </p>
              </div>
              <div>
                <p>
                  Released:{" "}
                  <span className="release-date"> {game.released}</span>
                </p>
              </div>
            </DateRate>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Stats>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
            <Sellers>
              <h3>Publisher</h3>
              {game.publishers.map((data) => (
                <p className="company">- {data.name}</p>
              ))}
            </Sellers>
          </Detail>
        </CardShadow>
      )}
    </>
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
    width: 0.7rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
  }

  &::-webkit-scrollbar-track {
    background: #000;
  }
`;

const Detail = styled(motion.div)`
  margin-top: 6rem;
  width: 50%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #111;
  position: absolute;
  left: 25%;
  color: #999;
  z-index: 10;

  img {
    width: 100%;
    border-radius: 1rem;
  }

  .gallery {
    img {
      margin: 2rem 0rem;
      border-radius: 1rem;
    }
  }
`;

const MainTitle = styled(motion.div)`
  font-family: "Goldman", cursive;
  text-align: center;
  font-size: 2.3rem;
`;

const DateRate = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.8rem 0rem;
  font-size: 1.5rem;

  .rate-number {
    margin: 0.7rem;
    padding: 0.5rem 1.3rem;
    border-radius: 50%;
    font-size: 1.5rem;
    background: #999;
    color: #000;
    font-style: bold;
  }

  .release-date {
    margin: 0.7rem;
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    background: #999;
    color: #000;
    font-style: bold;
    border-radius: 2rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  h3 {
    color: #999 !important;
    font-size: 2rem;
    text-align: center;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    margin-left: 2rem;
  }
`;

const Sellers = styled(motion.div)`
  text-align: center;

  h3 {
    color: #999;
  }
  p {
    font-size: 1.2rem;
    opacity: 0.7;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 2rem 0rem 0rem 0rem;
`;

export default GameDetail;
