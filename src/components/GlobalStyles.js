// IMPORTED GOOGLE FONTS:

// font-family: 'Fondamento', cursive; number
// font-family: 'Goldman', cursive;
// font-family: 'Spectral', serif;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
  }

  &::-webkit-scrollbar-track {
    background: #000;
  }
  }
    }
    body{
        font-family: 'Spectral', serif;
        width: 100%;
        /* background: #141414; */
        /* background: #F7F3F0; */
        background: #000;
    }
    h2{
        text-align: center;
        font-size: 3rem;
        font-family: 'Goldman', cursive;
        font-weight: lighter;
        color: #333;
    }

    h3{
        font-size: 1.6rem;
        color: #444;
        padding: 1.3rem;
    }

    a{
        text-decoration: none;

    }
    img{display: block;}

    input{
        /* // font-family: 'Spectral', serif; */
    }

`;

export default GlobalStyles;
