import React, { useState } from "react";
import styled from "styled-components";
import { mailTest } from "redux/api/mailCode";

function EmailCode() {
  const [codeInput, setCodeInput] = useState("");
  function onHandleCodeSubmit() {
    mailTest();
  }

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
      <button className="btn code-btn" onClick={onHandleCodeSubmit}>
        보내기
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
  }
`;

export default EmailCode;
