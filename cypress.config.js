const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cmqgxp",
  defaultCommandTimeout: 6000,
  experimentalWebKitSupport: true, 
  reporter: 'cypress-mochawesome-reporter',

  // retries: {
  //   runMode: 1,
  //   openMode: 1,
  //   },
  retries: 1,

  reporterOptions: {
    //overwrite: false,
    reportFilename: "[status]_[datetime]-[report]",
    timestamp: "longDate",
    charts: true,
    reportPageTitle: 'Cypress Tutorial',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttemps:true,
    //ignoreVideos: true,
    videoOnFailOnly: true
  },

  screenshotOnRunFailure: true,
  video: true, 
  screenshotsFolder: 'cypress/screenshot_directory',
  videoFolder: 'cypress/video_directory',

  env: {
    username: 'ciuvagaandrei@gmail.com',
    password: 'andreiplaton1@',
    url: 'https://pre-prod.www.letskodeit.com',
    apiUrl: 'https://gorest.co.in/public/v2/users',
    accessToken: 'Bearer 7712b6ebaedda0643bc39d9acbaa043a9d9c64a6d1b0cd89b26c51169ca86bf1'
  },

  e2e: {
    //baseURL: 'https://www.letskodeit.com'
    setupNodeEvents(on, config) {
      const username = process.env.APP_USERNAME
      const password = process.env.PASSWORD
 
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
