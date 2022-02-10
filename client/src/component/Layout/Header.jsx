import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import SearchForm from "component/AutoComplete";
import Logo from "assets/imgs/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "utils/hooks/useMediaQuery";
import { makeClassName } from "utils/helpers/makeClassName";

import AuthModal from "component/Layout/Header_AuthModal";
import { AuthCTXWrapper } from "utils/context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import UserDropdown from "./Header_UserIcon_Drop";

import axios from "redux/api/axios";
import { useQuery } from "react-query";
import { setLogggedIn } from "redux/slice/userSlice";

function Header({ children }) {
  const dispatch = useDispatch();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isUnderDesktop = useMediaQuery("(max-width: 1000px)");
  const categoryUlRef = useRef(null);
  const { isLogin } = useSelector((state) => state.user);

  //@ 첫 접속때 토큰이 유효하지 않으면 로그인 무효화
  const checkTokens = useQuery(["check-tokens"], () => axios.get("/auth/tokenlife"), {
    retry: false,
    onError: (error) => {
      dispatch(setLogggedIn(false));
    },
  });

  useEffect(() => {
    if (!isUnderDesktop) {
      categoryUlRef.current?.classList.remove("showList");
    }

    if (location.state && location.pathname !== location.state.prevPath) {
      categoryUlRef.current?.classList.remove("showList");
    }
  }, [isUnderDesktop, location.pathname, location.state]);

  function onHandleLoginModalOpen() {
    setLoginModalOpen((prev) => !prev);
  }

  return (
    <>
      <AuthCTXWrapper>
        <HeaderNavMedia>
          <S.HeaderContainer className="flex-center-C">
            <S.Headers className={makeClassName([isUnderDesktop && "underDesktop"])}>
              <div
                className={makeClassName([
                  "logo",
                  "flex-center",
                  isUnderDesktop && " hide-logoText",
                ])}
                onClick={() => {
                  navigate("/", { state: { prevPath: location.pathname } });
                }}
              >
                <img src={Logo} alt="logo" />
                <span className="highlight">오늘부터</span>
                <span>우리는</span>
              </div>

              <SearchForm />

              {isLogin ? (
                <UserDropdown />
              ) : (
                <button className="btn login-btn" onClick={onHandleLoginModalOpen}>
                  로그인
                </button>
              )}

              {isUnderDesktop && (
                <div
                  className="menuOpen-icon"
                  onClick={() => {
                    categoryUlRef.current?.classList.toggle("showList");
                  }}
                >
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              )}
            </S.Headers>

            <S.CategoryUl ref={categoryUlRef}>
              {isUnderDesktop && <img src={Logo} alt="logo" className="sidemenu-logo" />}
              {isUnderDesktop && (
                <i
                  className="fas fa-times close-icon"
                  onClick={() => {
                    categoryUlRef.current?.classList.remove("showList");
                  }}
                ></i>
              )}

              <li>
                <Link to="/board/health" state={{ prevPath: location.pathname }}>
                  운동
                </Link>
              </li>
              <li>
                <Link to="/board/food" state={{ prevPath: location.pathname }}>
                  음식
                </Link>
              </li>
              <li>
                <Link to="/board/art" state={{ prevPath: location.pathname }}>
                  예술
                </Link>
              </li>
              <li>
                <Link to="/board/land" state={{ prevPath: location.pathname }}>
                  부동산
                </Link>
              </li>
              <li>
                <Link to="/board/laws" state={{ prevPath: location.pathname }}>
                  법률
                </Link>
              </li>
              <li>
                <Link to="/board/animation" state={{ prevPath: location.pathname }}>
                  애니메이션/만화
                </Link>
              </li>
              <li>
                <Link to="/board/languages" state={{ prevPath: location.pathname }}>
                  언어
                </Link>
              </li>
              <li>
                <Link to="/board/travel" state={{ prevPath: location.pathname }}>
                  여행
                </Link>
              </li>
              <li>
                <Link to="/board/animals" state={{ prevPath: location.pathname }}>
                  동물
                </Link>
              </li>
            </S.CategoryUl>
          </S.HeaderContainer>
        </HeaderNavMedia>

        <S.ChildMain className="flex-center">{children}</S.ChildMain>

        {loginModalOpen && (
          <AuthCTXWrapper>
            <AuthModal onClose={onHandleLoginModalOpen} />
          </AuthCTXWrapper>
        )}
      </AuthCTXWrapper>
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

    transition: background-color 0.3s ease-in;
  `,
  HeaderContainer: styled.div`
    max-width: 80%;
    margin: auto;
    height: 100%;
    gap: 3rem;
  `,
  Headers: styled.div`
    width: 100%;
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

    .login-btn {
      font-size: 1.2rem;
      padding: 1.2rem;
    }

    .user-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      padding: 1.5rem;
      border: 0.13rem solid ${({ theme }) => theme.colors.fontColor};
      cursor: pointer;
      color: ${({ theme }) => theme.colors.fontColor};
      position: relative;
    }
  `,
  CategoryUl: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
      font-weight: 500;
      position: relative;

      & a {
        color: ${({ theme }) =>
          theme.mode === "dark" ? theme.colors.grayOne : theme.colors.blackZero};
      }

      &:hover {
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0.1rem;
          bottom: -2px;
          left: 0;
          background-color: ${({ theme }) => theme.colors.boxFontColor};
          border-radius: 2rem;
        }
      }
    }
  `,

  ChildMain: styled.main`
    width: 100vw;
    min-height: calc(100vh - 12rem);
    transform: translateY(12rem);
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s ease-in;

    @media screen and (max-width: 1000px) {
      min-height: calc(100vh - 7rem);
      transform: translateY(7rem);
    }
  `,
};

const HeaderNavMedia = styled(S.HeaderNav)`
  height: 12rem;

  @media screen and (max-width: 1000px) {
    height: 7rem;

    ${S.Headers} {
      justify-content: space-evenly;

      .logo {
        span {
          display: none;
        }
      }

      .login-btn {
        font-size: 1.2rem;
        padding: 1rem;
      }

      .menuOpen-icon {
        border: 1px solid gray;
        padding: 0.8rem 1.7rem;
        border-radius: 50%;
        cursor: pointer;
      }
    }

    ${S.CategoryUl} {
      position: absolute;
      flex-direction: column;
      align-items: center;
      top: 0;
      right: 0;
      width: 30%;
      height: 100vh;
      min-height: 70rem;
      justify-content: space-evenly;
      background-color: white;

      .sidemenu-logo {
        width: 5rem;
      }

      .close-icon {
        cursor: pointer;
        position: absolute;
        top: 2rem;
        right: 2rem;
        color: ${({ theme }) => theme.colors.blackZero};
      }

      li > a {
        color: ${({ theme }) => theme.colors.blackZero};
      }

      transition: opacity 0.4s ease-out, transform 0.4s ease-out;
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);

      &.showList {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      }

      ${({ theme }) =>
        theme.mode !== "dark" &&
        css`
          border-left: 1px solid gray;
        `}
    }
  }

  @media screen and (max-width: 600px) {
    ${S.HeaderContainer} {
      max-width: 100%;
    }
  }
`;

export default Header;
