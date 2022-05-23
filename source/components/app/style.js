import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
    padding: 0;
  }

  #root {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    align-content: start;
    min-height: 100vh;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeigthDefault};
    font-weight: 400;
    color: ${(props) => props.theme.colors.customBlack};
  }

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`;
