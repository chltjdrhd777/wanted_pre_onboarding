import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterMedia className="flex-center">@copyright (c) 2022 devAnderson</FooterMedia>;
}

const S = {
  Footer: styled.footer`
    height: 10rem;
    ${({ theme }) => theme.modeBoxTheme}
  `,
};

const FooterMedia = styled(S.Footer)``;

export default Footer;
