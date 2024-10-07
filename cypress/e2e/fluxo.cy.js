describe('Teste Completo de Fluxo Site Natura', () => {
 
  it.only('Fluxo Completo', () => {

// Ignora erros não capturados
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });


// visita o site
    cy.visit('https://sales-mgmt-cb-mfe-composer-akamai.prd.naturacloud.com/?consultoria=jhsropero1')
 

// espera o botão de fechar o anúncio aparecer e clica
    cy.get('[data-testid="closeButton"]').should('be.visible').click()


// clica no botão de login

    cy.get('#gtmActionsMenuList > div > div > div.jsx-1681f388cd853621.modal-login-status-content > div > button.jsx-50b7ee36f9fe1d46.btn_container.container__contained').click({ force: true })
 
// espera o carregamento
  cy.wait(5000)

// preenche os dados de login

    cy.get(':nth-child(1) > .input-common > .jsx-425268b939f6000f').type("teste1212212@teste.com")
    cy.get(':nth-child(2) > .input-common > input.jsx-425268b939f6000f').type("Senha@123")

// clica no botão de submit
    cy.get('#gtmLogin').click()


// espera o carregamento
    cy.wait(10000)

// Verifica se esta logado
    cy.get('.actions-menu-profile-content > .ActionsMenuListButton', { timeout: 10000 }).should('not.contain', 'perfil');
 
// clica Na aba de perfumaria

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

    cy.contains('Produto adicionado a sacola').should('be.visible')
 
  // Clica em Ver minha sacola

  cy.get('button.jsx-50b7ee36f9fe1d46.btn_container.container__contained').click()

// espera 2 sec
  cy.wait(2000)

// Verifica se esta na pagina "Resumo da compra"
  cy.contains('Resumo da compra').should('be.visible')

// Verifica se o botão de compra esta ativo e clica    
  cy.get('#gtmbuyNow').should('be.enabled').click();

// espera 10sec
  cy.wait(10000)

// Clica primeiro endereço
  cy.get('.custom-label-class > .jsx-aa00803ad60405d3').click()

// Seleciona PIX
  cy.get('.checkout-payment-options > :nth-child(1)').click()

// Clica no botão de compra
  cy.get(':nth-child(2) > .jsx-a8bf507af4e32f0c > .jsx-50b7ee36f9fe1d46').click()

// espera 12 segundo
  cy.wait(12000)

// Verifica se o pedido foi concluido
  cy.get('.checkout-confirmation-detail-info-main > span.jsx-1adb685dc96abbac').should('exist')
     });
 
});