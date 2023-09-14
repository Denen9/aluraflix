import { styled, createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  font-family: "roboto", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
body{
  background-color: #00040f;
}
`;

export default GlobalStyle;