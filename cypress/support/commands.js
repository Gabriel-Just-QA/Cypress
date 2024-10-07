// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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

Cypress.Commands.add('login', (consultor, email, senha) => {

    cy.selecionarConsultor(consultor)
    
    cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div > button.jsx-50b7ee36f9fe1d46.btn_container.container__contained').click({ force: true })
           cy.wait(5000)
           cy.get(':nth-child(1) > .input-common > .jsx-425268b939f6000f').type(email)
           cy.get(':nth-child(2) > .input-common > input.jsx-425268b939f6000f').type(senha)
           cy.get('#gtmLogin').click()
     
           cy.get('.actions-menu-profile-content > .ActionsMenuListButton', { timeout: 15000 })
           .should('not.contain.text', 'Perfil');
              
    cy.log("Login Feito com sucesso")
  });
  