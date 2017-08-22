var webpackConfig = require('./test/setup/webpack.config.test.js')

module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "chai", "phantomjs-shim"],
    files: [
      "./test/**/*.spec.js"
    ],
    preprocessors: {
      "./src/**/*.js": ["webpack", "sourcemap"],
      "./test/**/*.spec.js": ["webpack", "sourcemap"]
    },
    browsers: ["PhantomJS"],
    reporters: ["spec"],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
}
