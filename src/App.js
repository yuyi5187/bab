import React from "react";
import { createGlobalStyle } from "styled-components";
import Month from "./components/Month";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Month>안녕하세요</Month>
    </>
  );
}

export default App;
