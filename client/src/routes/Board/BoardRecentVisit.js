import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function BoardRecentVisit() {
  //todo 해당 정보는 cookie나 token으로 저장해서 사용한다.
  const [recentlyVisited, setRecentlyVisited] = useState([
    { title: "요리", slug: "food" },
    { title: "베스트 라이브", slug: "live" },
    { title: "포켓몬스터", slug: "poketmon" },
  ]);
  return (
    <BoardRecentVisitLayoutMedia>
      <h2 className="visit-title">최근 방문</h2>
      <ul className="visit-list">
        {recentlyVisited.map((visit) => (
          <li key={visit.title} className="visit-item flex-center" data-channel-slug={visit.slug}>
            <span className="channel-name">
              <Link to={`board/${visit.slug}`}>{visit.title}</Link>
            </span>
            <span className="delete">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </li>
        ))}
      </ul>

      <button className="visit-spread">
        <i className="fa-solid fa-bars"></i>
      </button>

      <div className="visit-spread-detail">
        <div className="spread-header">
          <span>최근 방문한 채널</span>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
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
    padding: 1.5rem 0;
    z-index: 1;
    position: relative;

    background-color: ${({ theme }) =>
      theme.theme === "dark" ? theme.colors.grayOne : theme.colors.grayOne};

    & h2[class~="visit-title"] {
      font-size: 1.7rem;
      font-weight: 500;
    }

    & ul[class~="visit-list"] {
      display: flex;
      gap: 1.5rem;
      flex: 1;

      & li {
        gap: 0.7rem;
        font-size: 1.4rem;
        & span[class~="channel-name"] {
          &:hover {
            text-decoration: underline;
          }
        }

        & span[class~="delete"] {
          cursor: pointer;
        }
      }
    }

    & .visit-spread {
      margin-right: 2rem;
    }

    & .visit-spread-detail {
      position: absolute;
      bottom: -40px;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.fontColor};
      width: 100%;
      padding: 1rem;

      & .spread-header {
        display: flex;
        justify-content: space-between;

        & > i {
          cursor: pointer;
        }
      }
    }
  `,
};

const BoardRecentVisitLayoutMedia = styled(S.BoardRecentVisitLayout)``;

export default BoardRecentVisit;
