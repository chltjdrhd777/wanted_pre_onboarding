import React from "react";
import styled, { css } from "styled-components";

function HeaderInfoPC({ title }) {
  return (
    <HeaderInfoLayoutMedia>
      <ul className="info-list">
        <section className="board-title flex-center">
          <i className="fa-solid fa-file"></i>
          <h2>{title} 채널</h2>
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
    </HeaderInfoLayoutMedia>
  );
}

const S = {
  HeaderInfoLayout: styled.div`
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
  `,
};

const HeaderInfoLayoutMedia = styled(S.HeaderInfoLayout)``;

export default HeaderInfoPC;
