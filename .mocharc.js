module.exports = {
  diff: true,
  package: "./package.json",
  require: ["ts-node/register", "mocha"],
  slow: 75,
  timeout: 2000,
  ui: "tdd",
  spec: ["test/**/*.ts"],
  reporter: "./reporters/multi-mocha-reporter.js",
  reporterOptions: {
    mochaFile: "./coverage/test-results.xml"
  }
};
