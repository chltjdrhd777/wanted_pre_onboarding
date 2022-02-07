import React, { useState, useRef } from "react";
import styled from "styled-components";
import ProfileTab from "component/Setting/Tab_Profile";
import DocsTab from "component/Setting/Tab_Docs";
import AccountTab from "component/Setting/Tab_Account";
import ExtraTab from "component/Setting/Tab_Extra";

function Tab() {
  const [tab, setTab] = useState("profile");
  const tabUlRef = useRef(null);

  function tabActivate({ target, currentTarget }) {
    if (!target.matches("#setting-tabUl > li > span")) {
      // 해당 요소로 판단되지 않으면 이벤트 발생시키지 않는다.
      return;
    }

    setTab(target.parentElement.classList[0]);

    [...tabUlRef.current?.children].forEach((child) => {
      child.classList.toggle("active", child.classList[0] === target.parentElement.classList[0]);
    });
  }

  return (
    <TabBoxMedia>
      <h2 className="title">설정</h2>

      <S.TabUl id="setting-tabUl" ref={tabUlRef} onClick={tabActivate}>
        <li className="profile active">
          <span>프로필</span>
        </li>
        <li className="docs">
          <span>게시글</span>
        </li>
        <li className="account">
          <span>계정관리</span>
        </li>
        <li className="extra">
          <span>기타</span>
        </li>
      </S.TabUl>

      {tab === "profile" && <ProfileTab />}
      {tab === "docs" && <DocsTab />}
      {tab === "account" && <AccountTab />}
      {tab === "extra" && <ExtraTab />}
    </TabBoxMedia>
  );
}

const S = {
  TabBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 70rem;

    & h2[class~="title"] {
      width: 100%;
      border-bottom: 1px solid gray;
      padding-bottom: 1rem;
    }
  `,
  TabUl: styled.ul`
    width: 20rem;
    display: flex;
    justify-content: space-between;

    & li {
      cursor: pointer;

      &.active {
        border-bottom: 2px solid
          ${({ theme }) => (theme.mode === "dark" ? theme.colors.grayOne : theme.colors.pointBlue)};
      }
    }
  `,
};

const TabBoxMedia = styled(S.TabBox)``;

export default Tab;
