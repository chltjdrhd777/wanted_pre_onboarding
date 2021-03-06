import { css } from "styled-components";

export const colors = {
  //! mode style
  background: "white",
  fontColor: "#202020",
  boxBackground: "white",
  boxFontColor: "#202020",
  borderColor: "#808080",
  boxShadowColor: "rgb(0 0 0 / 10%)",

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

export const whiteTheme = {
  mode: "white",
  colors,
  deviceSizeUnits,
  modeBoxTheme,
} as const;

export type whiteThemeType = typeof whiteTheme;
