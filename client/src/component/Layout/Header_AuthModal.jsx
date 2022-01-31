import React, { useState } from "react";
import Modal from "component/Modal";
import styled, { css } from "styled-components";
import Logo from "assets/imgs/logo/logo.png";
import LoginForm from "./Header_AuthModal_LoginForm";

function AuthModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <S.LoginModalContainer className="flex-center-C">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="title">
          <h2>
            <span>반갑습니다! </span>로그인을 하실건가요?
          </h2>
        </div>

        <LoginForm />

        <div className="register">
          <p>앗! 혹시 아직 계정이 없으신가요!</p>
        </div>
      </S.LoginModalContainer>
    </Modal>
  );
}

const S = {
  LoginModalContainer: styled.div`
    width: 100%;
    height: 100%;

    gap: 2rem;

    .logo {
      img {
        width: 30rem;
      }
    }

    .title {
      & h2 > span {
        font-size: 3rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.mainColor};
      }
    }

    .register {
      margin-top: 1.5rem;
      font-weight: 500;
      cursor: pointer;

      &:hover p {
        text-decoration: underline;
      }
    }
  `,
};

export default AuthModal;
