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


  it('Fazer Login com dados validos', () => {
// Verifica se o modal está visível
cy.consultorVideo()
cy.clicarEmLogin()
cy.fazerLogin(dados.email, dados.senha)


  }) 

})