import React, { useState, useEffect, createContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import useMediaQuery from "utils/hooks/useMediaQuery";
import Banner from "assets/banner/testBanner.mp4";

//@ presentaional component
import BoardLayoutPC from "./PC/BoardLayoutPC";

//@ context API
export const BoardCTX = createContext<BoardCTXType | null>(null);

function BoardPageCC() {
  const [boardState, setBoardPageState] = useState({
    boardInfo: {
      title: "",
      subscriberNum: 0,
      owner: "",
      description: "",
    },
    banner: "",
    recentVisit: [] as { title: string; param: string }[],
    tagList: [] as string[],
    pageItems: [] as any[],
  });

  useEffect(() => {
    //첫 board 접속시 받아온 데이터로 업데이트
    setBoardPageState({
      boardInfo: {
        title: "운동",
        subscriberNum: 700,
        owner: "@devAnderson",
        description: "헬창들아 모여라!",
      },
      banner: Banner,
      recentVisit: [
        { title: "요리", param: "food" },
        { title: "베스트 라이브", param: "live" },
        { title: "포켓몬스터", param: "poketmon" },
        { title: "법률", param: "law" },
        { title: "애니메이션/만화", param: "cartoon" },
        { title: "여행", param: "travel" },
        { title: "언어", param: "language" },
      ],
      tagList: [
        "잡담",
        "보충제",
        "일상",
        "추천운동",
        "체육관",
        "잡담",
        "보충제",
        "일상",
        "추천운동",
        "체육관",
        "잡담",
        "보충제",
        "일상",
        "추천운동",
        "체육관",
      ],
      pageItems: [
        {
          id: 1,
          title: "야 이거 좀 괜찮아?",
          tag: "보충제",
          writer: "헬창1",
          createdAt: "2022.02.18",
          viewCount: 500,
          like: 30,
        },
        {
          id: 1,
          title: "야 이거 좀 괜찮아?",
          tag: "보충제",
          writer: "헬창2",
          createdAt: "2022.02.18",
          viewCount: 500,
          like: 30,
        },
        {
          id: 1,
          title: "오늘 운동 잘된듯",
          tag: "잡담",
          writer: "헬창3",
          createdAt: "2022.02.18",
          viewCount: 500,
          like: 30,
        },
        {
          id: 1,
          title: "신세계다 너희들도 앞으로 이런거 해라. 진짜 운동 잘된다.",
          tag: "잡담",
          writer: "헬창4",
          createdAt: "2022.02.18",
          viewCount: 500,
          like: 30,
        },
        {
          id: 1,
          title: "오늘 3시에 만나서 운동하실 분 있습니까?",
          tag: "일상",
          writer: "헬창5",
          createdAt: "2022.02.18",
          viewCount: 500,
          like: 30,
        },
      ],
    });
  }, []);

  const contextValue = {
    boardState,
    filterByTotal() {
      setBoardPageState((prev) => {
        prev.pageItems = ["ok", "yes"];
        return prev;
      });
    },
    filterByLike() {
      //todo 이하 메서드들은 모두 기존 url에서 query가 추가되는 형태로 요청이 간다.
      //todo ex) localhost:5050/board/health?mode=like&order=time&cut=20
    },
    filterByTimeOrder() {},
    filterByLikeOrder() {},
  };

  return (
    <BoardCTX.Provider value={contextValue}>
      <BoardLayoutPC />
    </BoardCTX.Provider>
  );
}

//# type
export interface BoardCTXType {
  boardState: {
    boardInfo: {
      title: string;
      subscriberNum: number;
      owner: string;
      description: string;
    };
    banner: string;
    recentVisit: { title: string; param: string }[];
    tagList: string[];
    pageItems: any[];
  };
  filterByTotal?: () => void;
  filterByLike?: () => void;
  filterByTimeOrder?: () => void;
  filterByLikeOrder?: () => void;
}

export default BoardPageCC;
