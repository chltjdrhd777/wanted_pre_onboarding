import React from "react";
import styled from "styled-components";

function Index() {
  return <HomeMain>home</HomeMain>;
}

const HomeMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Index;
