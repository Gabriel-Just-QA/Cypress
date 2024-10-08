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
  let consultor = "consultorahmlteste"

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

});


    it('Fazer Login com dados validos', () => {
      cy.selecionarConsultor(consultor)
      cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div > button.jsx-50b7ee36f9fe1d46.btn_container.container__contained').click({ force: true })

      cy.login(dados.email, dados.senha)

    }) 

    it('Testando logout', () => {
      cy.selecionarConsultor(consultor)
      cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div > button.jsx-50b7ee36f9fe1d46.btn_container.container__contained').click({ force: true })

        cy.login(dados.email, dados.senha)
        cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true })    
        cy.wait(2000)
        cy.get(':nth-child(7) > .sidemenu-list-item-btn > #gtmSidemenuListItemText').click()
        
        cy.get('#gtmLogin').should('be.visible')

    });

  it('Mudar a Senha', () => {
  const novaSenha = gerarSenhaAleatoria();
  const fixtureName = 'dados-usuario'; // Nome do arquivo fixture

  cy.selecionarConsultor(consultor)

  
  cy.log(novaSenha)
  cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div > button.jsx-50b7ee36f9fe1d46.btn_container.container__contained').click({ force: true })

  cy.login(dados.email, dados.senha)

  cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div:nth-child(1) > div > span.jsx-1681f388cd853621.modal-login-status-text-content').click({ force: true })    
  cy.wait(2000)
  cy.get(':nth-child(6) > .sidemenu-list-item-btn > #gtmSidemenuListItemText > #gtmSidemenu-list-item-text').click()
  cy.get('#password').should('be.visible').type(dados.senha)
  cy.get('#newPassword').type(novaSenha)
  cy.get('#confirmPassword').type(novaSenha)
  cy.get('.profile-password-form > .jsx-50b7ee36f9fe1d46').click()
    // Atualiza a senha no objeto `dados` e grava no JSON
    cy.updateFixture(fixtureName, novaSenha);

    cy.get('.Toastify__toast-body').should('exist')
  cy.wait(4000)
  cy.get('h3.jsx-e469f5966417f8ce').should('be.visible')

  });

  it('Seguir compra sem estar logado',()=>{

    cy.selecionarConsultor(consultor)

    cy.get('#gtmNavigationItem a[href="/c/perfumaria"]').click()

// espera 3 sec
      cy.wait(3000)

// seleciona o primeiro perfume

      cy.get('.h-categoryResults__results .card').first().click()
   
// espera 3 sec
      cy.wait(3000)

// verifica se a página de detalhes do produto foi carregada

      cy.get('.product-detail-banner-container').should('exist')

// espera 3 sec
      cy.wait(3000)

// adiciona o produto ao carrinho

      cy.get('.jsx-50b7ee36f9fe1d46.btn_container_icon.container__contained').click()
   
  
// verifica se a mensagem de sucesso aparece
cy.wait(1000)

      cy.contains('Produto adicionado a sacola').should('be.visible')
   
    // Clica em Ver minha sacola

    cy.get('#__next > div.jsx-4356fd71142b3e9a > div.jsx-4356fd71142b3e9a.drawer.drawer-right.open > div > div.jsx-4356fd71142b3e9a.drawer-scroll-content.display-scroll-content > div.jsx-44dce6d66b50196f.drawer-footer > button').click()

// Verifica se o botão de compra esta ativo e clica    
cy.get('#gtmbuyNow').should('be.enabled').click();

// espera 10sec
    cy.wait(4000)
    cy.get(':nth-child(1) > .input-common > .jsx-425268b939f6000f').type(dados.email)
    cy.get(':nth-child(2) > .input-common > input.jsx-425268b939f6000f').type(dados.senha)
    cy.get('#gtmLogin').click()
    cy.wait(4000)
    cy.get(':nth-child(1) > .input-common > .jsx-425268b939f6000f').type(dados.email)
    cy.get(':nth-child(2) > .input-common > input.jsx-425268b939f6000f').type(dados.senha)
    cy.get('#gtmLogin').click()
  })
});