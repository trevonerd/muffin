import multiEntry from "rollup-plugin-multi-entry";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

module.exports = [
  {
    input: "src/**/*.js",
    output: {
      file: "dist/themes.js",
      format: "cjs"
    },
    plugins: [
      multiEntry(),
      babel(),
      resolve(),
      commonjs({
        include: /node_modules/,
        namedExports: {
          "react-is": ["ForwardRef"],
          "prop-types": ["elementType"]
        }
      })
    ],
    external: ["react", "react-dom"]
  }
];
