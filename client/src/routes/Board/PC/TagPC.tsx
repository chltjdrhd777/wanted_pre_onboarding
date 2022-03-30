import React, { useContext, useRef } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { BoardCTX, BoardCTXType } from "../BoardPageCC";

function TagPC() {
  //한 board에 여러개 Tag가 있을 수 있다
  //한 board에 여러개 게시글이 있을 수 있다
  //한 게시글은 하나의 Tag를 가진다

  //tag는 누르면 현재 path에다가 query 추가
  //개념글은 누르면 path
  const { pathname, search } = useLocation();

  const {
    boardState: { tagList },
  } = useContext(BoardCTX) as BoardCTXType;

  const TagRef = useRef(null);

  return (
    <TagMedia
      className="small-link-wrapper"
      onScroll={(e) => {
        console.log(e);
      }}
    >
      {tagList.map((tag) => {
        let to = "";
        if (!search) {
          to = `${pathname}?tag=${tag}`;
        } else {
          const split = decodeURIComponent(search).slice(1).split("&");
          const prevTagIdx = split.findIndex((query) => query.includes("tag"));
          console.log(prevTagIdx);

          if (prevTagIdx !== -1) {
            split[prevTagIdx] = `tag=${tag}`;
          } else {
            split.push(`tag=${tag}`);
          }

          to = `${pathname}?${split.join("&")}`;
          console.log(to);
        }

        return (
          <Link to={to} className="tag-filter-link">
            {tag}
          </Link>
        );
      })}
    </TagMedia>
  );
}

const S = {
  Tag: styled.div`
    display: inline-flex;
    gap: 0.5rem;
    overflow-x: auto;

    & a {
      word-break: keep-all;
    }
  `,
};

const TagMedia = styled(S.Tag)``;
export default TagPC;
