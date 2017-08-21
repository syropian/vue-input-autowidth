import babel from "rollup-plugin-babel"
import uglify from 'rollup-plugin-uglify'

export default {
  entry: "./src/index.js",
  plugins: [
    uglify(),
    babel({
      exclude: "node_modules/**"
    })
  ],
  dest: "dist/vue-input-autowidth.js",
  format: "umd",
  moduleName: "VueInputAutowidth"
}
