describe('Testes De Login e Perfil', () => {  

    function removeMask(value) {
      return value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    }
    let dados;
    let senhaAtual

      before(() => {
        cy.fixture('dados-usuario').then((data) => {
          dados = data;
          senhaAtual = dados.senha
    
        });
      });
    
    
      beforeEach(() => {  
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false; 
        })
      });
    

it.only('TESTES', () => {
    cy.consultorVideo()
    cy.clicarEmLogin()
    cy.perfumaria()
cy.wait(10000)
});


})