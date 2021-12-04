import React from "react";
import { createGlobalStyle } from "styled-components";
import Month from "./components/Month";
import Item from "./components/Item";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Month />
    </>
  );
}

export default App;
