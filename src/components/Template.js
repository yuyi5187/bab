import React from "react";
import styled from "styled-components";
import Month from "./Month";

const TemplateBlock = styled.div``;

function Template({ children }) {
  return (
    <TemplateBlock>
      <Month></Month>
    </TemplateBlock>
  );
}

export default Template;
