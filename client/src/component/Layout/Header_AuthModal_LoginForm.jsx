import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useForm from "utils/hooks/useFom";
import { loginLogic } from "utils/hooks/loginLogic";
import { makeClassName } from "utils/helpers/makeClassName";
import { useDispatch } from "react-redux";
import { setLogggedIn } from "redux/slice/userSlice";
import axios from "redux/api/axios";

function LoginForm({ onClose }) {
  const { formState, submitState, onHandleSubmit, onHanldeInput, onResetFormState } = useForm({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  console.log(submitState, formState);

  useEffect(() => {
    if (submitState.status === "ok") {
      dispatch(setLogggedIn());
      onClose();
    }
  }, [submitState.status]);

  return (
    <FormMedia
      className="flex-center-C"
      onSubmit={(e) => {
        onHandleSubmit(e, loginLogic);
      }}
    >
      <div className="email flex-center">
        <label htmlFor="loginEmail">이메일</label>
        <input
          id="loginEmail"
          type="text"
          name="email"
          maxLength={30}
          value={formState.email}
          onChange={(e) => onHanldeInput(e.target.name, e.target.value)}
        />
      </div>

      <div className="password flex-center">
        <label htmlFor="loginPassword">패스워드</label>
        <input
          id="loginPassword"
          type="password"
          name="password"
          maxLength={20}
          autoComplete="on"
          value={formState.password}
          onChange={(e) => onHanldeInput(e.target.name, e.target.value)}
        />
      </div>

      <button
        className={makeClassName(["btn", "login-btn", submitState.status === "reject" && "error"])}
      >
        {submitState.status === "reject" ? submitState.message : "로그인하기"}
      </button>
      <button
        className="btn guest-btn"
        onClick={async () => {
          await axios.get("/auth/guest");
          dispatch(setLogggedIn());
          onClose();
        }}
      >
        게스트로 시작하기
      </button>
    </FormMedia>
  );
}

const S = {
  Form: styled.form`
    width: 100%;
    height: 20%;
    gap: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & .email,
    .password {
      width: 100%;
      height: 100%;

      label {
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.pointBlue};
        width: 20%;
        text-align: center;
      }

      input {
        width: 50%;
        height: 90%;
        min-height: 3.5rem;
        border: 1px solid gray;
        border-radius: 3rem;
        font-size: 1.7rem;
      }
    }

    & .login-btn {
      width: 50%;
      margin-top: 2rem;

      &.error {
        background-color: ${({ theme }) => theme.colors.waringColor};
      }
    }

    & .guest-btn {
      width: 50%;
      background-color: ${({ theme }) => theme.colors.grayFour};
    }
  `,
};

const FormMedia = styled(S.Form)`
  @media screen and (max-width: 1000px) {
    .email,
    .password {
      label {
        font-size: 1.7rem;
      }
    }
  }
`;

export default LoginForm;
