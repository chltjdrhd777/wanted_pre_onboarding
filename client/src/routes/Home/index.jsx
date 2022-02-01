import React from "react";
import styled from "styled-components";
import Redner from "component/Home/Render";

function Index() {
  return <HomeMain className="flex-center-C">hompage</HomeMain>;
}

const HomeMain = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
`;

export default Index;
