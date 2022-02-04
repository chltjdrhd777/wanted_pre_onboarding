import React, { useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import Logo from "assets/imgs/logo/logo.png";
import useForm from "utils/hooks/useFom";
import { registerLogic } from "utils/hooks/registerLogic";
import { makeClassName } from "utils/helpers/makeClassName";
import { AuthCTX } from "utils/context/AuthContext";

function RegisterForm({ isRegister }) {
  const registerState = useForm({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const authCTX = useContext(AuthCTX);

  useEffect(() => {
    if (!isRegister) {
      registerState.onResetFormState();
    }
  }, [isRegister]);

  useEffect(() => {
    if (registerState.submitState.status === "ok") {
      authCTX.hanldeShowMailCodeAuth();
      authCTX.handleRegisterInfo(registerState.formState);
    }
  }, [registerState.submitState]);

  return (
    <FormMedia
      className="flex-center-C"
      onSubmit={(e) => {
        registerState.onHandleSubmit(e, registerLogic);
      }}
    >
      <div className="logo flex-center">
        <img src={Logo} alt="logo" />
      </div>

      <div className="inputBox email flex-center">
        <label htmlFor="registerNickname">닉네임</label>
        <input
          id="registerNickname"
          type="text"
          name="nickname"
          value={registerState.formState.nickname}
          maxLength={11}
          onChange={(e) => registerState.onHanldeInput(e.target.name, e.target.value)}
        />
      </div>

      <div className="inputBox email flex-center">
        <label htmlFor="registerEmail">이메일</label>
        <input
          id="registerEmail"
          type="text"
          name="email"
          maxLength={30}
          value={registerState.formState.email}
          onChange={(e) => registerState.onHanldeInput(e.target.name, e.target.value)}
        />
      </div>

      <div className="inputBox password flex-center">
        <label htmlFor="registerPassword">패스워드</label>
        <input
          id="registerPassword"
          type="password"
          name="password"
          maxLength={20}
          autoComplete="on"
          value={registerState.formState.password}
          onChange={(e) => registerState.onHanldeInput(e.target.name, e.target.value)}
        />
      </div>

      <div className="inputBox password-confirm flex-center">
        <label htmlFor="confirmPassword">패스워드 확인</label>
        <input
          id="confirmPassword"
          type="password"
          name="passwordConfirm"
          maxLength={20}
          autoComplete="on"
          value={registerState.formState.passwordConfirm}
          onChange={(e) => registerState.onHanldeInput(e.target.name, e.target.value)}
        />
      </div>

      <button
        className={makeClassName([
          "btn",
          "register-btn",
          registerState.submitState.status === "reject" && "rejected",
        ])}
      >
        {registerState.submitState.status === "reject"
          ? registerState.submitState.message
          : "계속하기"}
      </button>
    </FormMedia>
  );
}

const S = {
  Form: styled.form`
    gap: 2rem;

    .logo {
      width: 100%;
      & > img {
        width: 50%;
      }
    }

    .inputBox {
      width: 100%;
      height: 100%;

      & label {
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.pointBlue};
        width: 30%;
        text-align: center;
        &.password-confirm {
          font-size: 1.5rem;
        }
      }

      & input {
        width: 50%;
        height: 90%;
        min-height: 3.5rem;
        border: 1px solid gray;
        border-radius: 3rem;
        font-size: 1.7rem;
      }
    }

    .register-btn {
      width: 50%;
      margin-top: 2rem;
      &.rejected {
        background-color: ${({ theme }) => theme.colors.waringColor};
      }
    }

    .regiter-btn.rejected {
    }
  `,
};

const FormMedia = styled(S.Form)`
  @media screen and (max-width: 1000px) {
    .inputBox {
      & label {
        font-size: 1.7rem;
      }

      &[class~="password-confirm"] label {
        font-size: 1.5rem;
      }
    }
  }
`;

export default RegisterForm;
