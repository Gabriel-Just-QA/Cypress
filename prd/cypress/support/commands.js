Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).should('be.visible');
  });
  
  Cypress.Commands.add('selecionarConsultor', (consultor = "juanito") => {
    cy.visit('/');
    cy.get('#inputSearchConsultant').type(consultor)
    cy.get('#consultantSearch').click()
    cy.get('#consultantContact').click()
    cy.get('[data-testid="closeButton"]').should('be.visible').click()
    cy.log("Cosultor selecionado")

})

Cypress.Commands.add('login', ( email, senha) => {
    
           cy.get(':nth-child(1) > .input-common > .jsx-425268b939f6000f').type(email)
           cy.get(':nth-child(2) > .input-common > input.jsx-425268b939f6000f').type(senha)
           cy.get('#gtmLogin').click()
           cy.get('.actions-menu-profile-content > .ActionsMenuListButton', { timeout: 15000 }).should('not.contain.text', 'Perfil');
              
    cy.log("Login Feito com sucesso")
  });
  
  // cypress/support/commands.js

Cypress.Commands.add('updateFixture', (fixtureName, newData) => {
  cy.fixture(fixtureName).then((data) => {
    // Atualize a senha com a nova
    data.senha = newData; // Supondo que a chave da senha seja 'senha'
    
    // Escreva os dados atualizados de volta no arquivo JSON
    cy.writeFile(`cypress/fixtures/${fixtureName}.json`, data);
  });
});
