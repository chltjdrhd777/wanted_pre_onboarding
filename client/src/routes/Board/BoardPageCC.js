import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import useMediaQuery from "utils/hooks/useMediaQuery";
import Banner from "assets/banner/testBanner.mp4";

//@ presentaional component
import HeaderInfoPC from "./PC/HeadInfoPC";
import FilterOptionPC from "./PC/FilterOptionPC";
import RecentVisitPC from "./PC/RecentVisitPC";
import BannerPC from "./PC/BannerPC";
import TagPC from "./PC/TagPC";

//@ context API
export const BoardCTX = createContext({});

function BoardPageCC() {
  const location = useLocation();
  const isUnderDesktop = useMediaQuery("(max-width: 1000px)");

  const [BoardPageState, setBoardPageState] = useState({
    BoardInfo: {
      title: location.state.title,
      subscriberNum: 0,
      owner: "",
      description: "",
    },
    tagList: [],
    pageItems: [],
  });

  const contextValue = {
    BoardPageState,
    filterByTotal() {},
    filterByLike() {
      //todo 이하 메서드들은 모두 기존 url에서 query가 추가되는 형태로 요청이 간다.
      //todo ex) localhost:5050/board/health?mode=like&order=time&cut=20
    },
    filterByTimeOrder() {},
    filterByLikeOrder() {},
  };

  useEffect(() => {
    //todo 초기 접속시 query가 없는 상태로 요청을 보냄.
    //todo user의 interaction에 따라 요청처리가 달라짐.
    //todo 이런 상황이면 contextAPI를 쓰는것이 나아보임.
    //redux로 하지않는 이유 => 모든 앱에서 전반적으로 사용되는 값이 아니기 때문.
    //해당 데이터는 오로지 board page의 자식들에서만 사용될 값임.
  }, []);

  return (
    <BoardCTX.Provider value={contextValue}>
      <BoardPageLayoutMedia className="flex-center">
        <S.BoardContent>
          <HeaderInfoPC title={location.state.title} />

          <FilterOptionPC />

          <BannerPC banner={Banner} />

          <RecentVisitPC />

          <TagPC />
        </S.BoardContent>

        <S.BoardAside className={isUnderDesktop ? "hide" : ""}>a</S.BoardAside>
      </BoardPageLayoutMedia>
    </BoardCTX.Provider>
  );
}

const S = {
  BoardPageLayout: styled.div`
    width: 100%;
    padding: 0 10%;
    height: calc(100vh - 12rem);
    overflow: auto;
    transition: background-color 0.3s ease-in;
    background-color: ${({ theme }) => (theme.mode === "dark" ? theme.colors.blackZero : "white")};
  `,
  BoardContent: styled.section`
    height: 100%;
    flex: 0.8;
    padding: 1rem;
  `,
  BoardAside: styled.aside`
    height: 100%;
    flex: 0.2;
    min-width: 27%;
    max-width: 300px;
    background-color: red;

    &.hide {
      display: none;
    }
  `,
};

const BoardPageLayoutMedia = styled(S.BoardPageLayout)`
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
    height: calc(100vh - 6rem);
    ${S.BoardContent} {
      flex: 0.8;
    }

    ${S.BoardAside} {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    ${S.BoardContent} {
      flex: 1;
    }
  }
`;

export default BoardPageCC;
