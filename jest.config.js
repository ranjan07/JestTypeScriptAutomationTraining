const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },

  reporters:[
    "default",
    ["jest-html-reporters",{
      publicpath:"./html-report",
      filename:"report.html",
      expand:true,
      pageTitle:"Test Report"
    }]
  ]
};