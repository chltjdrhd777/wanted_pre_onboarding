import React from "react";
import styled, { css } from "styled-components";

function FilterOptionPC() {
  return (
    <FilterOptionLayoutMedia>
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
    </FilterOptionLayoutMedia>
  );
}

const S = {
  FilterOptionLayout: styled.div`
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
  `,
};

const FilterOptionLayoutMedia = styled(S.FilterOptionLayout)``;

export default FilterOptionPC;
