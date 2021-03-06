import { css } from "styled-components";

export const colors = {
  //! mode style
  background: "#202020",
  fontColor: "#F7F7F7",
  boxBackground: "#202020",
  boxFontColor: "#F7F7F7",
  borderColor: "",
  boxShadowColor: "rgb(255 255 255 / 10%)",

  //@ common style
  mainColor: "#4e80e1",
  pointBlue: "#555bff",
  pointYello: "#ffc114",
  pointCarrot: "#ff5248",
  pointMint: "#19cdca",
  pointPink: "#E7286A",

  lightblue: "#C5E2EE",
  starColor: "#fd4",
  waringColor: "#FF6363",

  grayOne: "#F7F7F7",
  grayTwo: "#E5E5E5",
  grayThree: "#999999",
  grayFour: "#737373",
  blackZero: "#202020",
  blackOne: "#1c1c1c",
  blackTwo: "#111",
} as const;

const deviceSizeUnits = {
  mobileS: 320,
  mobileM: 450,
  mobileL: 576,
  tablet: 768,
  desktop: 922,
  tabletL: 1024,
  fullScreen: 1980,
} as const;

const modeBoxTheme = css`
  background-color: ${colors.background};
  color: ${colors.fontColor};
  transition: background-color 0.3s ease-in;
` as {};

export const darkTheme = {
  mode: "dark",
  colors,
  deviceSizeUnits,
  modeBoxTheme,
};

export type darkThemeType = typeof darkTheme;
