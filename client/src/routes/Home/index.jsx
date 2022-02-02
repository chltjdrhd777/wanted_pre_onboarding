import React from "react";
import styled from "styled-components";

function Index() {
  return <HomeMain className="flex-center-C">hompage</HomeMain>;
}

const HomeMain = styled.main`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export default Index;
