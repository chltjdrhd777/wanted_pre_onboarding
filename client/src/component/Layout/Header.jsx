import Modal from "component/Modal";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import SearchForm from "./Header_Search";
import Logo from "assets/imgs/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthModal from "component/Layout/Header_AuthModal";

function Header({ children }) {
  const navigate = useNavigate();

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  function onHandleLoginModalOpen() {
    setLoginModalOpen((prev) => !prev);
  }

  return (
    <>
      <HeaderNavMedia>
        <S.HeaderContainer>
          <S.Headers>
            <div
              className="logo flex-center"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={Logo} alt="logo" />
              <span className="highlight">오늘부터</span>
              <span>우리는</span>
            </div>

            <SearchForm />

            <button className="btn" onClick={onHandleLoginModalOpen}>
              로그인
            </button>
          </S.Headers>

          <S.CategoryUl className="flex-center">
            <li>
              <Link to="/mans">운동</Link>
            </li>
            <li>
              <Link to="/females">음식</Link>
            </li>
            <li>
              <Link to="/females">예술</Link>
            </li>
            <li>
              <Link to="/females">부동산</Link>
            </li>
            <li>
              <Link to="/females">법률</Link>
            </li>
            <li>
              <Link to="/females">애니메이션/만화</Link>
            </li>
            <li>
              <Link to="/females">언어</Link>
            </li>
            <li>
              <Link to="/females">여행</Link>
            </li>
            <li>
              <Link to="/females">동물</Link>
            </li>
          </S.CategoryUl>
        </S.HeaderContainer>
      </HeaderNavMedia>

      {children}
      {loginModalOpen && <AuthModal onClose={onHandleLoginModalOpen} />}
    </>
  );
}

//! styled ///

const S = {
  HeaderNav: styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 90;
    color: ${({ theme }) => theme.colors.boxFontColor};
    background-color: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: 0 1px 8px ${({ theme }) => theme.colors.boxShadowColor};
  `,
  HeaderContainer: styled.div`
    max-width: 80%;
    margin: auto;
    margin-top: 0.5rem;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
  `,
  Headers: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 2rem;
      display: flex;
      cursor: pointer;

      & img {
        width: 6rem;
      }

      & span.highlight {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.pointBlue};
      }

      & span:not(.highlight) {
        margin-left: 0.5rem;
        align-self: baseline;
        font-size: 1.2rem;
      }
    }
  `,
  CategoryUl: styled.ul`
    justify-content: space-between;

    li {
      font-weight: 500;
      position: relative;
      &:hover {
        border-bottom: 1px solid gray;
      }
    }
  `,
};

const HeaderNavMedia = styled(S.HeaderNav)`
  @media screen and (min-width: 1000px) {
    height: 12rem;
  }
`;

export default Header;
