
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://www.cotswoldoutdoor.com/",
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    supportFile: "cypress/support/e2e.js",
    excludeSpecPattern: ["*.js", "*.md"],
    chromeWebSecurity: false,
    requestTimeout: 30000,
    numTestsKeptInMemory: 0,
    responseTimeout: 50000,
    pageLoadTimeout: 100000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    includeShadowDom: true,
  },
});