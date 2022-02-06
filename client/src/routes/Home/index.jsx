import React from "react";
import styled from "styled-components";

function HomPage() {
  return <S.HomePageContainer className="flex-center-C">hompage</S.HomePageContainer>;
}

const S = {
  HomePageContainer: styled.main`
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.fontColor};
  `,
};

export default HomPage;
