import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  entry: "./src/index.js",
  plugins: [
    uglify(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve({
      module: true,
      jsnext: false,
      main: false
    }),
    commonjs()
  ],
  dest: "dist/vue-input-autowidth.js",
  format: "umd",
  moduleName: "VueInputAutowidth"
};
