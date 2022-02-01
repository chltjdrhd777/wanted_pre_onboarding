import React from "react";
import styled from "styled-components";

function Toggle({ onClick, children }) {
  return (
    <S.ToggleBox onClick={onClick}>
      <S.ToggleContainer className="flex-center">{children}</S.ToggleContainer>
    </S.ToggleBox>
  );
}

const S = {
  ToggleBox: styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: 3rem;
    overflow: hidden;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  `,
  ToggleContainer: styled.div`
    width: 100%;
    height: 100%;
  `,
};

export default Toggle;
