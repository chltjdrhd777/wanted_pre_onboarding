import React from "react";
import styled from "styled-components";
import useMediaQuery from "utils/hooks/useMediaQuery";

//@ presentaional component
import HeaderInfoPC from "./HeadInfoPC";
import FilterOptionPC from "./FilterOptionPC";
import RecentVisitPC from "./RecentVisitPC";
import BannerPC from "./BannerPC";
import TagPC from "./TagPC";

//@layoutPC는 기본 sementic 배치역할
function BoardLayoutPC() {
  const isUnderDesktop = useMediaQuery("(max-width: 1000px)");

  return (
    <BoardLayoutMedia className="flex-center">
      <S.ContentSection>
        <HeaderInfoPC />

        <FilterOptionPC />

        <BannerPC />

        <RecentVisitPC />

        <TagPC />
        <div>이것이 사라집니까?</div>
      </S.ContentSection>

      <S.ContentAside className={isUnderDesktop ? "hide" : ""}>
        <div className="scroll">scrolltest</div>
      </S.ContentAside>
    </BoardLayoutMedia>
  );
}

const S = {
  BoardLayout: styled.div`
    width: 100%;
    padding: 0 10%;
    height: calc(100vh - 12rem);
    transition: background-color 0.3s ease-in;
    background-color: ${({ theme }) => (theme.mode === "dark" ? theme.colors.blackZero : "white")};
  `,
  ContentSection: styled.section`
    height: 100%;
    flex: 0.8;
    min-width: 50rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  `,
  ContentAside: styled.aside`
    height: 100%;
    flex: 0.2;
    min-width: 27%;
    max-width: 300px;
    background-color: red;
    overflow-x: scroll;

    & .scroll {
      background-color: blue;
      width: 5000px;
    }

    &.hide {
      display: none;
    }
  `,
};

const BoardLayoutMedia = styled(S.BoardLayout)`
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
    height: calc(100vh - 6rem);
    ${S.ContentSection} {
      flex: 0.8;
    }

    ${S.ContentAside} {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    ${S.ContentSection} {
      flex: 1;
    }
  }
`;

export default BoardLayoutPC;
