import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeClassName } from "utils/helpers/makeClassName";
import { BoardCTX, BoardCTXType } from "../BoardPageCC";

function BoardRecentVisit() {
  const {
    boardState: { recentVisit },
  } = useContext(BoardCTX) as BoardCTXType;

  const [showVisitDetail, setShowVisitDetail] = useState(false);

  //@ blur event
  useEffect(() => {
    function detectClickOutside(e: any) {
      if (e.target.closest("#recent-visit-detail") === null) {
        setShowVisitDetail(false);
        document.removeEventListener("click", detectClickOutside);
      }
    }

    if (showVisitDetail) {
      document.addEventListener("click", detectClickOutside);
    }

    return () => document.removeEventListener("click", detectClickOutside);
  }, [showVisitDetail]);

  const VisitList = (from: number, to?: number) =>
    recentVisit.slice(from, to).map((visit) => (
      <li key={visit.title} className="visit-item">
        <span className="channel-name">
          <Link to={`/board/${visit.param}`}>{visit.title}</Link>
        </span>

        <span className="delete">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </li>
    ));

  return (
    <RecentVisitMedia className={makeClassName([!recentVisit.length && "hide"])}>
      <h2 className="visit-title">최근 방문</h2>
      <S.RecentVisitUl>{VisitList(0, 5)}</S.RecentVisitUl>

      <button
        className={makeClassName(["visit-spread-btn", recentVisit.length < 7 && " hide"])}
        onClick={() => setShowVisitDetail((prev) => !prev)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <S.RecentVisitDetail
        id={"recent-visit-detail"}
        className={makeClassName([!showVisitDetail && "hide"])}
      >
        <div className="spread-header">
          <span>최근 방문한 채널</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <S.RecentVisitDetailUl>{VisitList(0)}</S.RecentVisitDetailUl>
      </S.RecentVisitDetail>
    </RecentVisitMedia>
  );
}

const S = {
  RecentVisit: styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 1.5rem 1rem;
    z-index: 1;
    position: relative;
    &.hide {
      display: none;
    }

    ${({ theme }) => theme.modeBoxTheme};

    & a {
    }

    & h2[class~="visit-title"] {
      font-size: 1.7rem;
      font-weight: 500;
    }

    & .visit-spread-btn {
      background-color: transparent;
      font-size: 1.7rem;

      &.hide {
        display: none;
      }
    }
  `,

  RecentVisitUl: styled.ul`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
    flex-wrap: wrap;
    overflow-x: auto;
    ${({ theme }) => theme.modeBoxTheme};

    & li {
      display: flex;
      gap: 0.3rem;
      font-size: 1.3rem;

      & span[class~="channel-name"] {
        height: 100%;
        & a {
          color: inherit;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      & span[class~="delete"] {
        height: 100%;
        cursor: pointer;
      }
    }
  `,
  RecentVisitDetail: styled.div`
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;

    ${({ theme }) => theme.modeBoxTheme};

    & .spread-header {
      display: flex;
      justify-content: space-between;

      & > i {
        cursor: pointer;
        font-size: 1.7rem;
      }
    }

    &.hide {
      display: none;
    }
  `,
  RecentVisitDetailUl: styled.ul`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    ${({ theme }) => theme.modeBoxTheme};

    & li {
      display: flex;
      font-size: 1.3rem;
      gap: 0.3rem;
      flex: 0 0 20%;

      & span[class~="channel-name"] {
        &:hover {
          text-decoration: underline;
        }

        & a {
          color: inherit;
        }
      }

      & span[class~="delete"] {
        cursor: pointer;
      }
    }
  `,
};

const RecentVisitMedia = styled(S.RecentVisit)`
  @media screen and (max-width: 800px) {
    ${S.RecentVisitDetailUl} {
      & li {
        flex: 0 0 50%;
      }
    }
  }
`;

export default BoardRecentVisit;
