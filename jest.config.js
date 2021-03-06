const { jest: jestConfig } = require("kcd-scripts/config");

const config = Object.assign(jestConfig, {
  roots: ["."],
  transform: {
    ...jestConfig.transform,
    "^.+\\.svelte$": "jest-transform-svelte"
  },
  transformIgnorePatterns: [
    ...jestConfig.transformIgnorePatterns,
    "/node_modules/(?!svelte).+\\.js$"
  ],
  moduleFileExtensions: [...jestConfig.moduleFileExtensions, "svelte"]
});
module.exports = config;
