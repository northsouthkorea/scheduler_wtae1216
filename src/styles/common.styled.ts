import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');
  
  * {margin: 0;}
  
  html, body  {
    color: #2a2a2a;
    font-size: 14px;
    font-family: 'Nanum Gothic', sans-serif;
  }
  
  body  {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  
`;

export default GlobalStyle;