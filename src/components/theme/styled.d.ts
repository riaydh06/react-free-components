import "styled-components";
import { Colors } from "./type";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsConfig;
  }
}
