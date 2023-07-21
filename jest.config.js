module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "vue"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  transformIgnorePatterns: ["node_modules/(?!(nuxt3|unenv))"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
