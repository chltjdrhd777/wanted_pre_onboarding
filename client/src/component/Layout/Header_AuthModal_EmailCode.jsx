import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthCTX } from "utils/context/AuthContext";
import axios from "redux/api/axios";
import { useQuery, useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setLogggedIn } from "redux/slice/userSlice";
import { makeClassName } from "utils/helpers/makeClassName";

function EmailCode({ onModalClose }) {
  const { registerInfo } = useContext(AuthCTX);
  const [codeInput, setCodeInput] = useState("");
  const [errorMeesage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const emailCodeQuery = useQuery("emailCode", () => axios.post("/auth/signup", registerInfo));
  const emailCodeConfirmMutation = useMutation((data) => axios.post("/auth/mailcode", data), {
    onError: (err) => {
      setErrorMessage(err.response.data.message);

      setTimeout(() => {
        setErrorMessage("");
      }, 1500);
    },

    onSuccess: (data) => {
      console.log(data);
      dispatch(setLogggedIn(true));
      onModalClose();
    },
  });

  function onHandleCodeSubmit() {
    if (!!errorMeesage) {
      return;
    }

    emailCodeConfirmMutation.mutate({ email: registerInfo.email, codeInput });
  }

  console.log(emailCodeQuery, emailCodeConfirmMutation, errorMeesage);

  return (
    <EmailCodeContainer className="flex-center-C">
      <h2>이메일이 발송되었습니다</h2>
      <p>가입완료를 위해 이메일로 보내진 코드를 입력해주세요</p>

      <div className="codeInput flex-center">
        <label htmlFor="code">Code</label>
        <input
          id="code"
          type="text"
          value={codeInput}
          maxLength={15}
          onChange={(e) => {
            setCodeInput(e.target.value);
          }}
        />
      </div>
      <button
        className={makeClassName(["btn", "code-btn", errorMeesage && "onError"])}
        onClick={onHandleCodeSubmit}
      >
        {!!errorMeesage ? errorMeesage : "보내기"}
      </button>
    </EmailCodeContainer>
  );
}

const EmailCodeContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 2rem;

  .codeInput {
    height: 5rem;
    & label {
      margin-right: 1rem;
      font-size: 2rem;
      font-weight: bolde;
    }

    & input {
      width: 100%;
      height: 70%;
      font-size: 2rem;
      text-align: center;
    }
  }

  .code-btn {
    width: 50%;

    &.onError {
      background-color: ${({ theme }) => theme.colors.waringColor};
    }
  }
`;

export default EmailCode;
