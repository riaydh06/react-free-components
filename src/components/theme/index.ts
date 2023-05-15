import { DefaultTheme } from "styled-components";
import { Colors as themeColor } from "./colors";

const theme = (colors = themeColor, ...props: any): DefaultTheme => ({
  colors,
  ...props,
});

export default theme;
