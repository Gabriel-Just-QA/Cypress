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
    cy.consultorVideo()
    cy.clicarEmLogin()
    cy.fazerLogin(dados.email, dados.senha)
  }) 

  it('Fazer Logout Diretamente', () => {
    cy.consultorVideo()
    cy.clicarEmLogin()
    cy.fazerLogin(dados.email, dados.senha)
    cy.logoutDireto()
    cy.wait(3000)
  });

  it('Fazer Logout pelo Perfil', () => {
    cy.consultorVideo()
    cy.clicarEmLogin()
    cy.fazerLogin(dados.email, dados.senha)
    cy.logoutDoPerfil()
    cy.wait(3000)
  });


it('Mudar Senha', () => {
  cy.gerarSenhaAleatoria().then((senha) => {
  });

  let a = cy.gerarSenhaAleatoria()
cy.log(a)
  
});

})