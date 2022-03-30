import React from "react";
import styled from "styled-components";

function Toggle({ onClick, children }) {
  return (
    <ToggleBoxMedia onClick={onClick}>
      <S.ToggleContainer className="flex-center">{children}</S.ToggleContainer>
    </ToggleBoxMedia>
  );
}

const S = {
  ToggleBox: styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.pointBlue};
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

const ToggleBoxMedia = styled(S.ToggleBox)`
  @media screen and (max-width: 1000px) {
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
  }
`;

export default Toggle;
