import React from "react";
import styled, { css } from "styled-components";
import useForm from "utils/hooks/useFom";

function LoginForm() {
  const loginState = useForm({
    email: "",
    password: "",
  });

  return (
    <FormMedia
      className="flex-center-C"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="email flex-center">
        <label htmlFor="loginEmail">이메일</label>
        <input id="loginEmail" type="email" name="email" maxLength={25} />
      </div>

      <div className="password flex-center">
        <label htmlFor="loginPassword">패스워드</label>
        <input
          id="loginPassword"
          type="password"
          name="password"
          maxLength={20}
          autoComplete="on"
        />
      </div>

      <button className="btn login-btn">로그인하기</button>
    </FormMedia>
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
