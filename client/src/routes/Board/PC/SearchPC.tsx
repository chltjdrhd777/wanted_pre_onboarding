import React from "react";
import styled, { css } from "styled-components";

function SearchPC() {
  return (
    <SearchSectionMedia>
      <S.SearchContainer>
        <S.SearchDropDown>
          <div className="menu-title">전체</div>
          <div className="icon">a</div>
        </S.SearchDropDown>

        <S.SearchInput />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchContainer>
    </SearchSectionMedia>
  );
}

const S = {
  SearchSection: styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.5rem;
  `,
  SearchContainer: styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 0.5rem;
    overflow: hidden;
  `,
  SearchDropDown: styled.div`
    display: flex;
    width: 10rem;
    padding: 0.5rem 1rem;
    & .menu-title {
      flex: 1;
    }
    cursor: pointer;
  `,
  SearchInput: styled.input`
    border: none;
    border-right: 1px solid gray;
    border-left: 1px solid gray;
  `,
  SearchButton: styled.button`
    padding: 0 1rem;
    background-color: transparent;
  `,
};

const SearchSectionMedia = styled(S.SearchSection)``;

export default SearchPC;
