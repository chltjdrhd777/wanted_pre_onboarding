import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Tab() {
  //todo 여러개 만들고 내부 "아직 준비중입니다!"
  return (
    <S.TabUl className="flex-center">
      <li>
        <Link to="/mans">남성복</Link>
      </li>
      <li>
        <Link to="/females">여성복</Link>
      </li>
    </S.TabUl>
  );
}

const S = {
  TabUl: styled.ul``,
};

export default Tab;
