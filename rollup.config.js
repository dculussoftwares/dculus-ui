import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";


const packageJson = require("./package.json");

export default {
  input: "kit/index.ts",
  output: [
    {
      file: packageJson.mainkit,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css', '.scss', '.less'],
      use: ['sass', ['less', { javascriptEnabled: true }]],
  }),
    copy({
      targets: [
        {
          src: "kit/variables.scss",
          dest: "build",
          rename: "variables.scss"
        },
        {
          src: "kit/typography.scss",
          dest: "build",
          rename: "typography.scss"
        }
      ]
    })
  ]
};