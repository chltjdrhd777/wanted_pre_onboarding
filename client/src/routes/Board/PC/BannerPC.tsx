import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { BoardCTX, BoardCTXType } from "../BoardPageCC";

function AdvertisePC() {
  const {
    boardState: { banner },
  } = useContext(BoardCTX) as BoardCTXType;

  return (
    <BannerMedia className="flex-center">
      <Link to="/" className="adevertise-link">
        {/* <img src="" alt="advertise" /> */}
        <video autoPlay loop muted playsInline src={banner} />
      </Link>
    </BannerMedia>
  );
}

const S = {
  Banner: styled.div`
    width: 100%;
    margin-top: 1rem;

    & .adevertise-link {
      width: 758px;
      height: 90px;

      & img,
      & video {
        width: 100%;
        height: 100%;
      }
    }
  `,
};

const BannerMedia = styled(S.Banner)`
  @media screen and (max-width: 800px) {
    & .adevertise-link {
      width: 100%;
      height: 100%;

      & img,
      & video {
      }
    }
  }
`;

export default AdvertisePC;
