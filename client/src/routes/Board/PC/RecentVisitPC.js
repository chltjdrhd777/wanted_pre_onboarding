import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { makeClassName } from "utils/helpers/makeClassName";

function BoardRecentVisit() {
  //todo 해당 정보는 cookie나 token으로 저장해서 사용한다.
  const [recentlyVisited, setRecentlyVisited] = useState([
    { title: "요리", slug: "food" },
    { title: "베스트 라이브", slug: "live" },
    { title: "포켓몬스터", slug: "poketmon" },
    { title: "법률", slug: "law" },
    { title: "애니메이션/만화", slug: "cartoon" },
    { title: "애니메이션/만화", slug: "cartoon" },
    { title: "애니메이션/만화", slug: "cartoon" },
    { title: "애니메이션/만화", slug: "cartoon" },
    { title: "애니메이션/만화", slug: "cartoon" },
    { title: "애니메이션/만화", slug: "cartoon" },
    { title: "애니메이션/만화", slug: "cartoon" },
  ]);

  const [showVisitDetail, setShowVisitDetail] = useState(false);
  console.log(showVisitDetail);

  useEffect(() => {
    function detectClickOutside(e) {
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

  const VisitList = (from, to) =>
    recentlyVisited.slice(from, to).map((visit) => (
      <li key={visit.title} className="visit-item" data-channel-slug={visit.slug}>
        <span className="channel-name">
          <Link to={`board/${visit.slug}`}>{visit.title}</Link>
        </span>

        <span className="delete">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </li>
    ));

  return (
    <BoardRecentVisitLayoutMedia>
      <h2 className="visit-title">최근 방문</h2>
      <S.RecentVisitUl>{VisitList(0, 5)}</S.RecentVisitUl>

      <button
        className={makeClassName(["visit-spread-btn", recentlyVisited.length < 7 && " hide"])}
        onClick={() => setShowVisitDetail((prev) => !prev)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <S.RecentVisitDetailBox
        id={"recent-visit-detail"}
        className={makeClassName([!showVisitDetail && "hide"])}
      >
        <div className="spread-header">
          <span>최근 방문한 채널</span>
          <i className="fa-solid fa-trash"></i>
        </div>

        <S.RecentVisitDetailUl>{VisitList(0)}</S.RecentVisitDetailUl>
      </S.RecentVisitDetailBox>
    </BoardRecentVisitLayoutMedia>
  );
}

const S = {
  BoardRecentVisitLayout: styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 1.5rem 1rem;
    z-index: 1;
    position: relative;

    ${({ theme }) => theme.modeBoxTheme};

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
  RecentVisitDetailBox: styled.div`
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;

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

    & li {
      display: flex;
      font-size: 1.3rem;
      gap: 0.3rem;
      flex: 0 0 20%;

      & span[class~="channel-name"] {
        &:hover {
          text-decoration: underline;
        }
      }

      & span[class~="delete"] {
        cursor: pointer;
      }
    }
  `,
};

const BoardRecentVisitLayoutMedia = styled(S.BoardRecentVisitLayout)`
  @media screen and (max-width: 800px) {
    ${S.RecentVisitDetailUl} {
      & li {
        flex: 0 0 50%;
      }
    }
  }
`;

export default BoardRecentVisit;
