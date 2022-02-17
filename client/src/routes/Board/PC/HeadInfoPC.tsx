import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { BoardCTX, BoardCTXType } from "../BoardPageCC";
import { Link, useLocation } from "react-router-dom";

function HeaderInfoPC() {
  const {
    boardState: { boardInfo },
  } = useContext(BoardCTX) as BoardCTXType;

  const { pathname } = useLocation();

  return (
    <HeaderInfoMedia className="small-btn-wrapper">
      <ul className="info-list">
        <Link to={pathname} className="board-title flex-center">
          <i className="fa-solid fa-file"></i>
          <h2>{boardInfo.title} 채널</h2>
        </Link>

        <div className="subscriber">구독자 {boardInfo.subscriberNum}명</div>

        <div className="board-owner">
          <span className="owner-name">{boardInfo.owner}</span>
          <div className="owner-icon flex-center">
            <i className="fa-solid fa-crown"></i>
          </div>
        </div>

        <div className="board-description">{boardInfo.description}</div>
      </ul>

      <button>
        <i className="fa-solid fa-plus"></i>
        구독
      </button>
    </HeaderInfoMedia>
  );
}

const S = {
  HeaderInfo: styled.div`
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
      flex: 1;
      height: 100%;
      color: ${({ theme }) => theme.colors.fontColor};

      & a {
        color: inherit;
      }

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
  `,
};

const HeaderInfoMedia = styled(S.HeaderInfo)``;

export default HeaderInfoPC;
