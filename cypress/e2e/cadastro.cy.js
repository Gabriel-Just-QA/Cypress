describe('Teste Completo de Fluxo Site Natura', () => {  
    let dados;
  
    before(() => {
      cy.fixture('dados-usuario').then((data) => {
        dados = data;
      });
    });
  
  beforeEach(() => {  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; 
    })
  });
   
   
   
   
   
   it('Fazer cadastro ', () => {
      cy.visit('https://sales-mgmt-cb-mfe-composer-akamai.prd.naturacloud.com/?consultoria=jhsropero1')
      cy.wait(2000); 
      cy.get('[data-testid="closeButton"] > .jsx-6f3a2d9e2e311ac8').click()


      cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div > button.jsx-50b7ee36f9fe1d46.btn_container.container__outlined').click({ force: true })
      cy.wait(2000); 

      cy.get('#register-name').type(dados.nome);
      cy.get('#register-email').type(dados.email);
      cy.get('#register-cpf').type(dados.cpf);
      cy.get('#register-cellphone').type("99999999999");
      cy.get('#register-birthdate').type("10102000");
      cy.get('#register-password').type(dados.senha);
      cy.get('#register-repeat-password').type(dados.senha)
      cy.get('[style="margin-bottom: 20px;"] > .custom-checkbox-base > .checkmark').click()
      cy.get('#gtmNewAccount').click();
      cy.get('body').should('contain', 'Cadastro realizado com sucesso');
    });

})