describe('Teste Completo de Fluxo Site Natura', () => {  

  function gerarSenhaAleatoria() {
    const caracteres = {
      maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      minusculas: 'abcdefghijklmnopqrstuvwxyz',
      numeros: '0123456789',
      especiais: '@#!%&*'
    };
    let senha = [
      caracteres.maiusculas[Math.floor(Math.random() * caracteres.maiusculas.length)],
      caracteres.minusculas[Math.floor(Math.random() * caracteres.minusculas.length)],
      caracteres.numeros[Math.floor(Math.random() * caracteres.numeros.length)],
      caracteres.especiais[Math.floor(Math.random() * caracteres.especiais.length)]
    ];
    const todos = caracteres.maiusculas + caracteres.minusculas + caracteres.numeros + caracteres.especiais;
    while (senha.length < 15) {
      senha.push(todos[Math.floor(Math.random() * todos.length)]);
    }
    return senha.sort(() => Math.random() - 0.5).join('');
  }
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


it.only('Mudar Senha', () => {
  cy.gerarSenhaAleatoria().then((senha) => {
  });

  let a = cy.gerarSenhaAleatoria()
cy.log(a)
  
});

})