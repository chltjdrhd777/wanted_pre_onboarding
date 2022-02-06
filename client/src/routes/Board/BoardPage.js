import React from "react";
import styled, { css } from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

function BoardPage() {
  //todo 기본 보드 레이아웃 (스켈레톤)
  //todo react-query로 해당 보드 param의 데이터 받기 (상태 관리 필요없을듯? 어차피 쿼리에 있으니)
  //todo 만약 데이터에 변경이 일어난다면 useMutation으로
  //todo 그럼 그 후에 상태가 변경됬을 때(ex 게시판 내용 추가) 해당 내용이 반영되는걸 queryClient의 invalidation으로
  //todo 게시판에 필요한 내용만 우선 담아두고, 검색하도록
  //todo 검색기능은 tag 테이블로 (미리 태그 데이터를 담아두고, 그냥 제출용 검색만 만들자)

  const client = useQueryClient();
  const params = useParams();

  //   console.log(client, params);

  return <BoardPageContainerMedia>boardPage</BoardPageContainerMedia>;
}

const S = {
  BoardPageContainer: styled.div``,
};

const BoardPageContainerMedia = styled(S.BoardPageContainer)``;

export default BoardPage;
