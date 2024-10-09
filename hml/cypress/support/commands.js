  Cypress.Commands.add('elementoVisivel', (seletor) => {
                cy.get(seletor).should('be.visible');
              });
  Cypress.Commands.add('elementoNaoVisivel', (seletor) => {
                cy.get(seletor).should('not.be.visible');
});
  Cypress.Commands.add('elementoExiste', (seletor) => {
                 cy.get(seletor).should('exist');
});
  Cypress.Commands.add('elementoNaoExiste', (seletor) => {
                cy.get(seletor).should('not.exist');
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
            cy.wait(3000)
            cy.contains('perfil').should('exist')
              cy.log("Login Feito com sucesso")
            });

Cypress.Commands.add('clicarEmMeuPerfil', () => {

              cy.contains('Ver meu perfil').click({ force: true });
            });

Cypress.Commands.add('logoutDireto', () => {

              cy.contains('Sair').click({ force: true });
              cy.wait(3000)
              cy.contains('Ver meu perfil').should('not.exist')
            });

Cypress.Commands.add('logoutDoPerfil', () => {

              cy.clicarEmMeuPerfil()
              cy.contains('#gtmSidemenu-list-item-text', 'Sair').click();
              cy.wait(3000)
              cy.get('.profile-data-title').should('not.exist')
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



          // cypress/support/commands.js

Cypress.Commands.add('gerarSenhaAleatoria', () => {
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
});
