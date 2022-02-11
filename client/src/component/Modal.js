import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

function Modal({ children, onClose, className }) {
  const parentNode = document.querySelector("#modal");

  const childNode = (
    <>
      <ContentBoxMedia className={`flex-center ${className ? className : ""}`}>
        <i className="fas fa-times" onClick={onClose}></i>

        {children}
      </ContentBoxMedia>
      <S.BackdropBox className={className} onClick={onClose} />
    </>
  );

  return ReactDom.createPortal(childNode, parentNode);
}

const S = {
  ContentBox: styled.div`
    width: 35%;
    min-width: 50rem;
    height: 70%;
    min-height: 60rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 300;
    border-radius: 15px;
    padding: 3rem;
    overflow: hidden;

    & i[class~="fa-times"] {
      position: absolute;
      top: 3rem;
      right: 3rem;
      font-size: 3rem;
      cursor: pointer;
      z-index: 200;

      &:hover {
        color: ${({ theme }) => theme.colors.pointPink};
      }
    }
  `,

  BackdropBox: styled.div`
    width: 150%;
    height: 150%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.grayOne : theme.colors.blackZero};
    opacity: 0.8;
    z-index: 200;
  `,
};

const ContentBoxMedia = styled(S.ContentBox)`
  @media screen and (max-width: 1000px) {
    min-width: 40rem;
  }
`;

export default Modal;
