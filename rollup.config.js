import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import replace from "@rollup/plugin-replace";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        "process.env.REACT_APP_SC_ATTR": JSON.stringify("production"),
        "process.env.SC_ATTR": JSON.stringify("production"),
        "process.env.SC_DISABLE_SPEEDY": JSON.stringify("production"),
        "process.env.REACT_APP_SC_DISABLE_SPEEDY": JSON.stringify("production"),
        "process.env": JSON.stringify("production"),
      }),
    ],
    external: ["styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
