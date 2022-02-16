import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function AdvertisePC({ banner }) {
  return (
    <AdvertiseLayoutMedia className="flex-center">
      <Link to="/" className="adevertise-link">
        {/* <img src="" alt="advertise" /> */}
        <video autoPlay loop muted playsInline src={banner} />
      </Link>
    </AdvertiseLayoutMedia>
  );
}

const S = {
  AdvertiseLayout: styled.div`
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

const AdvertiseLayoutMedia = styled(S.AdvertiseLayout)`
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
