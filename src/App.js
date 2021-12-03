import React from 'react';
import { createGlobalStyle } from 'styled-components';
import DayList from './components/DayList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      
      <DayList>오늘의 날짜</DayList>

    </>
  );
}

export default App;


