import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');
  
  html, body  {
    font-size: 14px;
    font-family: 'Nanum Gothic', sans-serif;
  }
  
  * {margin: 0 auto;}
`;

export default GlobalStyle;