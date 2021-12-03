<<<<<<< HEAD
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import DayList from './components/DayList';
=======
import React from "react";
import { createGlobalStyle } from "styled-components";
import Month from "./components/Month";
>>>>>>> 701bdd2dcd4081a4e8c0a04e36b0e0e9fc3ce945

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      
      <DayList>오늘의 날짜</DayList>

=======
      <Month>안녕하세요</Month>
>>>>>>> 701bdd2dcd4081a4e8c0a04e36b0e0e9fc3ce945
    </>
  );
}

export default App;
