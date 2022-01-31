import React from "react";
import styled, { css } from "styled-components";
import useForm from "utils/hooks/useFom";

function LoginForm() {
  const loginState = useForm({
    email: "",
    password: "",
  });

  console.log(loginState);

  return (
    <S.Form
      className="flex-center-C"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="email flex-center">
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" name="email" maxLength={25} />
      </div>

      <div className="password flex-center">
        <label htmlFor="password">패스워드</label>
        <input id="password" type="password" name="password" maxLength={20} />
      </div>

      <button className="btn login-btn">로그인하기</button>
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    width: 100%;
    height: 20%;
    gap: 0.5rem;
    margin-top: 2rem;

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
    }
  `,
};

export default LoginForm;
