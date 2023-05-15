import { ColorsType, ShadesType } from "./types";

type ColorsConfig = {
  [color in ColorsType]: {
    [shade in ShadesType]: string;
  };
};

export const Colors: ColorsConfig = {
  green: {
    xlight: "#CAE7CA",
    light: "#97D197",
    midlight: "#7DC67D",
    base: "#75DE73",
    middark: "#4A934A",
    dark: "#3B763B",
    xdark: "#2F5E2F",
  },
  blue: {
    xlight: "#dbd9fd",
    light: "#c9c7fc",
    midlight: "#a5a2fa",
    base: "#6f6af7",
    middark: "#5d57f6",
    dark: "#4C45F6",
    xdark: "#443edd",
  },
  skyBlue: {
    xlight: "#dbf7fd",
    light: "#b8effb",
    midlight: "#a7ebfa",
    base: "#95e7f9",
    middark: "#83e3f8",
    dark: "#72dff7",
    xdark: "#3CD4F5",
  },
  red: {
    xlight: "#FFD0D6",
    light: "#E27A7E",
    midlight: "#EE5C5E",
    base: "#F34D47",
    middark: "#E44545",
    dark: "#D23C3F",
    xdark: "#B52D2D",
  },
  purple: {
    xlight: "#E4CAE4",
    light: "#D5ACD5",
    midlight: "#CA97CA",
    base: "#AD5CAD",
    middark: "#993399",
    dark: "#800080",
    xdark: "#660066",
  },
  gray: {
    xlight: "#ffffff",
    light: "#D9D9D9",
    midlight: "#ABABAB",
    base: "#6A6A6A",
    middark: "#505050",
    dark: "#121212",
    xdark: "#000000",
  },
  yellow: {
    xlight: "#FFF7CD",
    light: "#FFF2B2",
    midlight: "#FFEF9F",
    base: "#FFEB87",
    middark: "#FFE669",
    dark: "#FFE043",
    xdark: "#FFD814",
  },
  orange: {
    xlight: "#FFECCF",
    light: "#FFE1B4",
    midlight: "#FFDAA1",
    base: "#FFD18A",
    middark: "#FFC56D",
    dark: "#FFB649",
    xdark: "#FFA41C",
  },
  teal: {
    xlight: "#B7DCDD",
    light: "#8BC7C8",
    midlight: "#62B0B0",
    base: "#3F8F8C",
    middark: "#3B827F",
    dark: "#32625F",
    xdark: "#2B4643",
  },
};
