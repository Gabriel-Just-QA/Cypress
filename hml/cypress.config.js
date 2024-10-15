const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000, // Timeout padrão para os comandos do Cypress
    baseUrl: 'https://sales-mgmt-cb-mfe-composer-akamai.hml.naturacloud.com/',
      // Importa e ativa o plugin mochawesome para geração de relatórios
  },
});