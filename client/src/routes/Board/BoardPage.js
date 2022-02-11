import React from "react";
import styled, { css } from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

function BoardPage() {
  const location = useLocation();

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

        <div className="tab-box">
          <div className="board-tab">
            <button>
              <i className="fa-solid fa-file"></i>
              <span>전체글</span>
            </button>
            <button>개념글</button>
            <button>등록순</button>
            <button>추천컷</button>
          </div>

          <button className="write-btn">
            <i class="fa-solid fa-pen"></i>
            <span>글쓰기</span>
          </button>
        </div>
      </S.BoardContentSection>
      <S.BoardAside>a</S.BoardAside>
    </BoardPageContainerMedia>
  );
}

const S = {
  BoardPageContainer: styled.div`
    width: 85%;
    /* margin: auto; */
    height: 100%;
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
        align-items: flex-end;
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
            }
          }
        }
      }

      & button.subscribe-btn {
        width: 8rem;
        height: 80%;
        border-radius: 7px;
        font-weight: 500;
        padding: 1rem;
        font-size: 1.2rem;
        gap: 0.5rem;
        border: 1px solid gray;
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
          background-color: white;
          & > i {
            margin-right: 0.5rem;
          }
        }
      }

      & .write-btn {
        padding: 0.5rem 1.5rem;
        background-color: inherit;
        color: ${({ theme }) => theme.colors.fontColor};
        border: 1px solid gray;
        & i {
          margin-right: 1rem;
        }
      }
    }
  `,
  BoardAside: styled.aside`
    height: 100%;
    flex: 0.2;
    padding: 1rem;
    background-color: red;
  `,
};

const BoardPageContainerMedia = styled(S.BoardPageContainer)`
  @media screen and (max-width: 1000px) {
    width: 100%;
    ${S.BoardContentSection} {
      flex: 0.8;
    }

    ${S.BoardAside} {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    ${S.BoardContentSection} {
      flex: 1;
    }
  }
`;

export default BoardPage;
