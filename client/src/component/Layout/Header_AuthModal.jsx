import React, { useState, useContext } from "react";
import Modal from "component/Modal";
import styled, { css } from "styled-components";
import Logo from "assets/imgs/logo/logo.png";
import LoginForm from "./Header_AuthModal_LoginForm";
import RegisterForm from "./Header_AuthModal_RegisterForm";
import { makeClassName } from "utils/helpers/makeClassName";
import { AuthCTX } from "utils/context/AuthContext";
import EmailCodeAuth from "./Header_AuthModal_EmailCode";

function AuthModal({ onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const authCTX = useContext(AuthCTX);

  console.log(authCTX);

  return (
    <Modal onClose={onClose}>
      <LoginModalContainerMedia
        className={makeClassName(["flex-center-C", isRegister && "closeLogin"])}
      >
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="title">
          <h2>
            <span>반갑습니다! </span>로그인을 하실건가요?
          </h2>
        </div>

        <LoginForm />

        <div
          className="register-text"
          onClick={() => {
            setIsRegister(true);
          }}
        >
          <p>앗! 혹시 아직 계정이 없으신가요!</p>
        </div>
      </LoginModalContainerMedia>

      <RegisterModalContainerMedia
        className={makeClassName(["flex-center-C", isRegister && "showRegister"])}
      >
        {authCTX.showMailCodeAuth ? (
          <EmailCodeAuth />
        ) : (
          <S.RegisterContainerLayout className="flex-center-C">
            <RegisterForm isRegister={isRegister} />

            <div
              className="login-text"
              onClick={() => {
                setIsRegister(false);
              }}
            >
              <p>로그인으로 돌아가기</p>
            </div>
          </S.RegisterContainerLayout>
        )}
      </RegisterModalContainerMedia>
    </Modal>
  );
}

const S = {
  LoginModalContainer: styled.div`
    width: 100%;
    height: 100%;
    gap: 2rem;
    transition: transform 0.5s ease-out;
    transform: translateX(0);

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

    .register-text {
      margin-top: 1.5rem;
      font-weight: 500;
      cursor: pointer;

      &:hover p {
        text-decoration: underline;
      }
    }

    &.closeLogin {
      transform: translateX(-110%);
    }
  `,

  RegisterModalContainer: styled.div`
    width: 100%;
    height: 100%;
    gap: 2rem;
    position: absolute;
    transition: transform 0.5s ease-out;
    transform: translateX(110%);

    &.showRegister {
      transform: translateX(0);
    }
  `,
  RegisterContainerLayout: styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem;

    .login-text {
      margin-top: 1.5rem;
      font-weight: 500;
      cursor: pointer;

      &:hover p {
        text-decoration: underline;
      }
    }
  `,
  EmailCodeAuthLayout: styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem;
  `,
};

const LoginModalContainerMedia = styled(S.LoginModalContainer)`
  @media screen and (max-width: 1000px) {
    .title {
      & h2 {
        font-size: 2rem;
        & span {
          font-size: 2.5rem;
        }
      }
    }
  }
`;

const RegisterModalContainerMedia = styled(S.RegisterModalContainer)`
  @media screen and (max-width: 1000px) {
  }
`;

export default AuthModal;
