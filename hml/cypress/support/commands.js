
Cypress.Commands.add('isVisible', (selector) => {

              cy.get(selector).should('be.visible');
            });
    
            
  Cypress.Commands.add('selecionarConsultor', (consultor = "consultorahmlteste") => {

              cy.visit('/');
              cy.get('#inputSearchConsultant').type(consultor)
              cy.get('#consultantSearch').click()
              cy.get('#consultantContact').click()
              cy.log("Cosultor selecionado")
          })


Cypress.Commands.add('fecharVideo', () => {

          cy.get('.modal-video').then(($modal) => {
            if ($modal.is(':visible')) {
              // Se o modal estiver visível, clica no botão de fechar
              cy.get('button[data-testid="closeButton"]').click();
            }
          });
          })


Cypress.Commands.add('consultorVideo', (consultor) => {

            cy.selecionarConsultor(consultor)
            cy.fecharVideo()
          })


Cypress.Commands.add('clicarEmLogin', () => {

            cy.contains('Perfil').trigger('mouseover');
            cy.contains('button', 'Fazer login').click({ force: true });
          });


Cypress.Commands.add('fazerLogin', ( email, senha) => {


            cy.get('input[placeholder="insira seu e-mail ou CPF"]').type(email)
            cy.get('input[placeholder="Digite sua senha"]').type(senha)
            cy.contains('button', 'Entrar').click();

              cy.log("Login Feito com sucesso")
            });

            
Cypress.Commands.add('clicarEmCadastro', () => {

            cy.contains('Perfil').trigger('mouseover');
            cy.contains('button', 'Cadastrar').click({ force: true });
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
