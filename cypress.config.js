const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, // Adicione o timeout aqui
    baseUrl: 'https://sales-mgmt-cb-mfe-composer-akamai.prd.naturacloud.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
