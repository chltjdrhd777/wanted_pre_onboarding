import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import useMediaQuery from "utils/hooks/useMediaQuery";
import { Link } from "react-router-dom";
import Banner from "assets/banner/testBanner.mp4";
import BoardRecentVisit from "./BoardRecentVisit";

function BoardPage() {
  const location = useLocation();
  const isUnderDesktop = useMediaQuery("(max-width: 1000px)");

  return (
    <BoardPageContainerMedia className="flex-center">
      <S.BoardContentSection>
        <div className="board-info">
          <ul className="info-list">
            <section className="board-title flex-center">
              <i className="fa-solid fa-file"></i>
              <h2>{location.state.title} 채널</h2>
            </section>

            <div className="subscriber">구독자 700명</div>

            <div className="board-owner">
              <span className="owner-name">@devAnderson</span>
              <div className="owner-icon flex-center">
                <i className="fa-solid fa-crown"></i>
              </div>
            </div>

            <div className="board-description">헬창들 여기모여라</div>
          </ul>

          <button className="subscribe-btn flex-center">
            <i className="fa-solid fa-plus"></i>
            구독
          </button>
        </div>
        {/* ////////////////////////////////////////////// */}

        <div className="tab-box">
          <div className="board-tab">
            <button>
              <i className="fa-solid fa-file"></i>
              <span>전체글</span>
            </button>
            <button>
              <i className="fa-solid fa-star"></i>
              <span>개념글</span>{" "}
            </button>
            <button>
              <i className="fa-solid fa-arrow-down-1-9"></i>
              <span>등록순</span>{" "}
            </button>
            <button>
              <i class="fa-solid fa-thumbs-up"></i>
              <span>추천컷</span>
            </button>
          </div>

          <button className="write-btn">
            <i className="fa-solid fa-pen"></i>
            <span>글쓰기</span>
          </button>
        </div>

        {/* ////////////////////////////////////////////// */}

        <div className="advertise flex-center">
          <Link to="/" className="adevertise-link">
            {/* <img src="" alt="advertise" /> */}
            <video autoPlay loop muted playsInline src={Banner} />
          </Link>
        </div>

        {/* ////////////////////////////////////////////// */}
        <BoardRecentVisit />

        {/* ////////////////////////////////////////////// */}
        <div>덮는지 여부 테스트 페이지</div>
      </S.BoardContentSection>

      <S.BoardAside className={isUnderDesktop ? "hide" : ""}>a</S.BoardAside>
    </BoardPageContainerMedia>
  );
}

const S = {
  BoardPageContainer: styled.div`
    width: 100%;
    padding: 0 10%;
    height: calc(100vh - 12rem);
    overflow: auto;
    transition: background-color 0.3s ease-in;
    background-color: ${({ theme }) => (theme.mode === "dark" ? theme.colors.blackZero : "white")};
  `,
  BoardContentSection: styled.section`
    height: 100%;
    flex: 0.8;
    padding: 1rem;

    & .board-info {
      width: 100%;
      max-height: 10rem;
      min-height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;

      & .info-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        color: ${({ theme }) => theme.colors.fontColor};
        flex: 1;

        & .board-title {
          gap: 1rem;

          & h2 {
            font-weight: 400;
            font-size: 2rem;
          }
        }

        & > *:not(:first-child) {
          font-size: 1.4rem;
          display: flex;
          &:before {
            content: "ㅣ";
          }
        }

        & .board-owner {
          align-items: flex-end;

          & .owner-icon {
            background-color: ${({ theme }) => theme.colors.waringColor};
            color: white;
            width: 1.5rem;
            height: 1.5rem;
            padding: 0.8rem;
            border-radius: 50%;
            margin-left: 0.5rem;

            & i {
              font-size: 0.5rem;
              color: ${({ theme }) => theme.colors.starColor};
            }
          }
        }
      }

      & button.subscribe-btn {
        width: 8rem;
        height: 80%;
        border-radius: 7px;
        font-weight: 400;
        padding: 1rem;
        font-size: 1.4rem;
        gap: 0.5rem;
        border: 1px solid gray;
        ${({ theme }) => theme.modeBoxTheme};
      }
    }

    & .tab-box {
      margin-top: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .board-tab {
        margin-top: 1rem;

        & button {
          border: 1px solid gray;
          padding: 0.7rem 1.2rem;
          ${({ theme }) => theme.modeBoxTheme};

          & > i {
            margin-right: 0.5rem;
          }
        }
      }

      & .write-btn {
        padding: 0.5rem 1.5rem;
        border: 1px solid gray;
        ${({ theme }) => theme.modeBoxTheme};

        & i {
          margin-right: 1rem;
        }
      }
    }

    & .advertise {
      width: 100%;
      margin-top: 1rem;

      & .adevertise-link {
        width: 758px;
        height: 90px;

        & img,
        & video {
          width: 100%;
          height: 100%;
        }
      }
    }
  `,
  BoardAside: styled.aside`
    height: 100%;
    flex: 0.2;
    min-width: 27%;
    max-width: 300px;
    background-color: red;

    &.hide {
      display: none;
    }
  `,
};

const BoardPageContainerMedia = styled(S.BoardPageContainer)`
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
    height: calc(100vh - 6rem);
    ${S.BoardContentSection} {
      flex: 0.8;
    }

    ${S.BoardAside} {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    ${S.BoardContentSection} {
      & .advertise {
        & .adevertise-link {
          width: 100%;
          height: 100%;

          & img,
          & video {
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    ${S.BoardContentSection} {
      flex: 1;
    }
  }
`;

export default BoardPage;
