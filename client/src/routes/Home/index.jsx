import React from "react";
import styled from "styled-components";
import RenderCheckList from "component/Home/Render";

function HomPage() {
  return (
    <S.HomePageContainer>
      <RenderCheckList />
    </S.HomePageContainer>
  );
}

const S = {
  HomePageContainer: styled.div`
    width: 80%;
    min-height: 70rem;

    background-color: ${({ theme }) => (theme.mode === "dark" ? theme.colors.blackOne : "white")};
    margin: 0 auto;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.fontColor};
    transition: background-color 0.3s ease-in;
  `,
};

export default HomPage;
