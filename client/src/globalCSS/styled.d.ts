import "styled-components";
import { darkThemeType } from "./darkTheme";
import { whiteThemeType } from "./whiteTheme";

declare module "styled-components" {
  export interface DefaultTheme extends darkThemeType, whiteThemeType {}
}
