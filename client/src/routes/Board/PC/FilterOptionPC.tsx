import React from "react";
import styled, { css } from "styled-components";

function FilterOptionPC() {
  return (
    <FilterOptionLayoutMedia className="small-btn-wrapper">
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
          <i className="fa-solid fa-thumbs-up"></i>
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .board-tab {
      display: flex;
      gap: 0.5rem;
    }
  `,
};

const FilterOptionLayoutMedia = styled(S.FilterOptionLayout)``;

export default FilterOptionPC;
