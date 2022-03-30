import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function ContentList() {
  return (
    <ListSectionMedia>
      <S.ListHeader>
        <div className="number">번호</div>
        <div className="title">제목</div>
        <div className="writer">작성자</div>
        <div className="createdAt">작성일</div>
        <div className="viewCount">조회수</div>
        <div className="likeCount">추천</div>
      </S.ListHeader>

      <S.ListContentUl>
        <div className="notice">
          <Link to="/">
            <div className="number">공지</div>
            <div className="title">채널 주소 변경 이벤트 사전 접수 안내</div>
            <div className="writer">helther</div>
            <div className="createdAt">2022.02.11</div>
            <div className="viewCount">500</div>
            <div className="likeCount"></div>
          </Link>

          <Link to="/">
            <div className="number">공지</div>
            <div className="title">채널 주소 변경 이벤트 사전 접수 안내</div>
            <div className="writer">helther</div>
            <div className="createdAt">2022.02.11</div>
            <div className="viewCount">500</div>
            <div className="likeCount"></div>
          </Link>

          <Link to="/">
            <div className="number">공지</div>
            <div className="title">채널 주소 변경 이벤트 사전 접수 안내</div>
            <div className="writer">helther</div>
            <div className="createdAt">2022.02.11</div>
            <div className="viewCount">500</div>
            <div className="likeCount"></div>
          </Link>

          <div className="spread">숨겨진 공지사항 펼치기(n개)</div>
        </div>

        <Link to="/">
          <div className="number">1</div>
          <div className="title">요즘 운동 루틴이 너무 식상해져서 그런데</div>
          <div className="writer">helchang1</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">2</div>
          <div className="title">요즘 운동 루틴이 너무 식상해져서 그런데</div>
          <div className="writer">helchang1</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">3</div>
          <div className="title">요즘 운동 루틴이 너무 식상해져서 그런데</div>
          <div className="writer">helchang1</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">4</div>
          <div className="title">요즘 운동 루틴이 너무 식상해져서 그런데</div>
          <div className="writer">helchang1</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>

        <Link to="/">
          <div className="number">5</div>
          <div className="title">
            이것은 매우 긴 텍스트입니다 매우 긴텍스트입니다 매우긴텍스트입니다
          </div>
          <div className="writer">helchang2</div>
          <div className="createdAt">2022.02.11</div>
          <div className="viewCount">600</div>
          <div className="likeCount">30</div>
        </Link>
      </S.ListContentUl>
    </ListSectionMedia>
  );
}

const ListFrame = css`
  width: 100%;
  display: flex;
  padding: 0.6rem 0.7rem;

  & > * {
    width: 7rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:not(.title) {
      text-align: center;
    }
  }

  & .number {
    width: 9rem;
  }

  & .title {
    flex: 1;
  }

  & .createdAt {
    width: 9rem;
  }
`;

const S = {
  ListSection: styled.section`
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.modeBoxTheme};
  `,
  ListHeader: styled.ul`
    ${ListFrame};
    font-weight: 600;
    border-top: 1px solid gray;
  `,
  ListContentUl: styled.ul`
    min-height: 80rem;
    border-bottom: 1px solid gray;

    & .notice {
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;

      & a {
        ${ListFrame};

        background-color: ${({ theme }) => theme.colors.pointBlue};
        color: ${({ theme }) => theme.colors.grayOne};
        border-top: 1px solid black;
      }

      .spread {
        padding: 1rem;
        text-align: center;
        cursor: pointer;
        border-top: 1px solid black;
      }
    }

    & > a {
      ${ListFrame};
      ${({ theme }) => theme.modeBoxTheme}
      border-bottom: 1px solid ${({ theme }) => theme.colors.grayTwo};
    }
  `,
};

const ListSectionMedia = styled(S.ListSection)``;

export default ContentList;
