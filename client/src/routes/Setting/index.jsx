import React, { useEffect } from "react";
import styled from "styled-components";
import Tabs from "component/Tab";

function SettingPage() {
  return (
    <S.SettingPageContainer>
      <Tabs />
    </S.SettingPageContainer>
  );
}

const S = {
  SettingPageContainer: styled.div`
    width: 80%;
    height: 90%;

    background-color: ${({ theme }) => (theme.mode === "dark" ? theme.colors.blackOne : "white")};
    margin: 0 auto;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.fontColor};
    transition: background-color 0.3s ease-in;
  `,
};

export default SettingPage;
