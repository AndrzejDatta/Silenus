import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    /* font-size: ; */
  }
  
  body {
    margin: 0;
    padding: 0;
    /* font-size: ; */
  }
  
  h1,h2,h3,h4,h5,h6 {
    /* font-family: ; */
    /* font-weight: ; */
    /* line-height: ; */
  }
  
  p, li, a {
    /* font-family: ; */
    /* font-weight: ; */
    /* line-height: ; */
    /* font-size: ; */
  }
`;
