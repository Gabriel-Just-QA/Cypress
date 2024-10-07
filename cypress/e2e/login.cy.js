describe('Teste Completo de Fluxo Site Natura', () => {  
  let dados;
  let consultor = "juanito"
  let nome = "Gabriel"
  before(() => {
    cy.fixture('dados-usuario').then((data) => {
      dados = data;
    });
  });

beforeEach(() => {

  cy.visit('/');

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; 
  })

  // cy.get('#inputSearchConsultant').type(consultor)
  // cy.get('#consultantSearch').click()
  // cy.get('#consultantContact').click()
  // cy.get('[data-testid="closeButton"]').should('be.visible').click()
  // cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div > button.jsx-50b7ee36f9fe1d46.btn_container.container__contained').click({ force: true })
  //        cy.wait(5000)

});


    it('Fazer Login com dados validos', () => {
      cy.login(consultor, dados.email, dados.senha)

    }) 

    it('Testando logout', () => {
        cy.login(consultor, dados.email, dados.senha)
        cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true })    
        cy.wait(2000)
        cy.get(':nth-child(7) > .sidemenu-list-item-btn > #gtmSidemenuListItemText').click()
        
        cy.get('#gtmLogin').should('be.visible')

    });

// it.only('Mudar a Senha', () => {
//   cy.login(consultor, dados.email, dados.senha)
//   cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true })    
//   cy.wait(2000)
//   cy.get(':nth-child(6) > .sidemenu-list-item-btn > #gtmSidemenuListItemText > #gtmSidemenu-list-item-text').click()
//   cy.get('#password').should('be.visible').type(dados.senha)
//   cy.get('#newPassword').type(dados.senha2)
//   cy.get('#confirmPassword').type(dados.senha2)
//   cy.get('.profile-password-form > .jsx-50b7ee36f9fe1d46').click()
//   cy.get('body').should('include',"Dados atualizados com sucesso")
//   cy.get('h3.jsx-e469f5966417f8ce').should('be.visible')

//   // Volta para a senha antiga

//   cy.login(consultor, dados.email, dados.senha2)
//   cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true })    
//   cy.wait(2000)
//   cy.get(':nth-child(6) > .sidemenu-list-item-btn > #gtmSidemenuListItemText > #gtmSidemenu-list-item-text').click()
//   cy.get('#password').should('be.visible').type(dados.senha2)
//   cy.get('#newPassword').type(dados.senha)
//   cy.get('#confirmPassword').type(dados.senha)
//   cy.get('.profile-password-form > .jsx-50b7ee36f9fe1d46').click()
//   cy.get('body').should('include',"Dados atualizados com sucesso")


// });

it.only('Mudar a Senha', () => {
  // Login com a senha atual
  cy.login(consultor, dados.email, dados.senha);
  
  // Acessa a página de troca de senha
  cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true });    
  cy.wait(2000);
  cy.get(':nth-child(6) > .sidemenu-list-item-btn > #gtmSidemenuListItemText > #gtmSidemenu-list-item-text').click();

  // Trocar de senha atual para senha2
  cy.get('#password').should('be.visible').type(dados.senha);
  cy.get('#newPassword').type(dados.senha2);
  cy.get('#confirmPassword').type(dados.senha2);
  cy.get('.profile-password-form > .jsx-50b7ee36f9fe1d46').click();
  
  // Verifica se a troca de senha foi bem-sucedida
  cy.get('body').should('include', "Dados atualizados com sucesso");
  cy.get('h3.jsx-e469f5966417f8ce').should('be.visible');

  // Trocar de senha2 para senha3
  cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true });
  cy.wait(2000);
  cy.get(':nth-child(6) > .sidemenu-list-item-btn > #gtmSidemenuListItemText > #gtmSidemenu-list-item-text').click();
  
  cy.get('#password').should('be.visible').type(dados.senha2);
  cy.get('#newPassword').type(dados.senha3); // nova senha intermediária
  cy.get('#confirmPassword').type(dados.senha3);
  cy.get('.profile-password-form > .jsx-50b7ee36f9fe1d46').click();
  
  // Verifica se a troca de senha foi bem-sucedida
  cy.get('body').should('include', "Dados atualizados com sucesso");

  // Voltar para a senha original
  cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true });
  cy.wait(2000);
  cy.get(':nth-child(6) > .sidemenu-list-item-btn > #gtmSidemenuListItemText > #gtmSidemenu-list-item-text').click();
  
  cy.get('#password').should('be.visible').type(dados.senha3); // usando a senha intermediária
  cy.get('#newPassword').type(dados.senha);
  cy.get('#confirmPassword').type(dados.senha);
  cy.get('.profile-password-form > .jsx-50b7ee36f9fe1d46').click();
  
  // Verifica se a troca de senha foi bem-sucedida
  cy.get('body').should('include', "Dados atualizados com sucesso");
});


    })