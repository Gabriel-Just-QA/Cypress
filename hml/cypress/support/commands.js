// Gerenciamento de Dados

Cypress.Commands.add('generateRandomName', (length = 5) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
});

Cypress.Commands.add('generateRandomNumber', (n) => {

  const randomNumber = Math.floor(Math.random() * (Math.pow(10, n) - Math.pow(10, n - 1))) + Math.pow(10, n - 1);
  
  return randomNumber.toString();
});

Cypress.Commands.add('generateDate', () => {
  // Gerar dia aleatório entre 01 e 31
  const day = Math.floor(Math.random() * 31) + 1;
  const formattedDay = day < 10 ? '0' + day : day.toString(); // Adiciona '0' se for menor que 10

  // Gerar mês aleatório entre 01 e 12
  const month = Math.floor(Math.random() * 12) + 1;
  const formattedMonth = month < 10 ? '0' + month : month.toString(); // Adiciona '0' se for menor que 10

  // Gerar ano aleatório entre 1980 e 2020
  const year = Math.floor(Math.random() * (2007 - 1980)) + 1980;

  // Combinar o resultado no formato DDMMYYYY
  const generatedDate = `${formattedDay}${formattedMonth}${year}`;
  
  return generatedDate;
});

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

// Funcionalidades Principais
            
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

Cypress.Commands.add('clicarEmMeuPerfil', () => {

            cy.contains('Ver meu perfil').click({ force: true });
          });

          Cypress.Commands.add('clicarEmCadastro', () => {

            cy.contains('Perfil').trigger('mouseover');
            cy.contains('button', 'Cadastrar').click({ force: true });
          });

// clique em seção
Cypress.Commands.add('presentes', () => {
  cy.contains('presentes').click({ force: true })
  cy.url().should('include', '/presentes');
});

Cypress.Commands.add('perfumaria', () => {
  cy.contains('perfumaria').click({ force: true })
  cy.url().should('include', '/perfumaria');
});

Cypress.Commands.add('corpoEBanho', () => {
  cy.contains('corpo e banho').click({ force: true })
  cy.url().should('include', '/corpo-e-banho');
});

Cypress.Commands.add('cabelos', () => {
  cy.contains('cabelos').click({ force: true })
  cy.url().should('include', '/cabelos');
});

Cypress.Commands.add('maquiagem', () => {
  cy.contains('maquiagem').click({ force: true })
  cy.url().should('include', '/maquiagem');
});
// arrumar
Cypress.Commands.add('rosto', () => {
  cy.contains('#gtmNavigationItem', 'rosto').click({ force: true });
  cy.url().should('include', '/rosto');
});
Cypress.Commands.add('infantil', () => {
  cy.contains('infantil').click({ force: true })
  cy.url().should('include', '/infantil');
});
Cypress.Commands.add('homens', () => {
  cy.contains('homens').click({ force: true })
  cy.url().should('include', '/homens');
});
Cypress.Commands.add('marcas', () => {
  cy.contains('marcas').click({ force: true })
  cy.url().should('include', '/marcas');
});



// Login logout

Cypress.Commands.add('fazerLogin', ( email, senha) => {

            cy.get('input[placeholder="insira seu e-mail ou CPF"]').type(email)
            cy.get('input[placeholder="Digite sua senha"]').type(senha)
            cy.contains('button', 'Entrar').click();
            cy.wait(3000)
            cy.contains('perfil').should('exist')
              cy.log("Login Feito com sucesso")
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


// Edição de Dados

Cypress.Commands.add('cadastrarEndereço', (cep,) => {
              cy.get('#cep').type(cep)
            });

Cypress.Commands.add('editarEndereço', (cep,numero, complemento, referencia, apelido, nome, telefone) => {
            cy.get('#cep').click().clear().type(cep);
            cy.get('#address2').click().clear().type(numero);
            cy.get('#address3').click().clear().type(complemento);
            cy.get('#addressReference').click().clear().type(referencia);
            cy.get('#alias').click().clear().type(apelido);
            cy.get('#receiveName').click().clear().type(nome);
            cy.get('#phoneNumber').click().clear().type(telefone);       
            cy.get('#checkMainAddress') // Seleciona o input checkbox
            .then(($checkbox) => {
              if (!$checkbox.is(':checked')) { // Verifica se a checkbox não está marcada
                cy.get('.checkmark').click(); // Clica no elemento span com a classe 'checkmark'
              }
              cy.contains('Salvar endereço').click()
            });
                    });

Cypress.Commands.add('editarDadosPessoais', (nome, data, telefone) => {
            cy.get('#name').click().clear().type(nome)
            cy.get('#birthdate').click().clear().type(data)
            cy.get('#phoneHome').click().clear().type(telefone)
            cy.get('#female').then(($female) => {
              if ($female.is(':checked')) {
                cy.get('#male').click(); // Se "female" estiver selecionado, clica em "male"
              } else {
                cy.get('#female').click(); // Se "female" não estiver selecionado, clica nele
              }
            });   
                    const checkboxIds = [
                      '#newsletter',
                      '#orderCellphoneUpdate',
                      '#optInWP',
                      '#newsletterSMS',
                      '#allowStoreCollectInfo'
                    ];
                    checkboxIds.forEach((id) => {
                      cy.get(id).then(($checkbox) => {
                        if ($checkbox.is(':checked')) {
                          cy.get(id).uncheck({ force: true }); // Desmarca, forçando a ação
                        } else {
                          cy.get(id).check({ force: true }); // Marca, forçando a ação
                        }
                      });
                    });
                    cy.contains('Salvar alterações').click()
            cy.get('.Toastify__toast-body', { timeout: 10000 }).should('be.visible')
            
          })


// Comandos avançados

Cypress.Commands.add('updateFixture', (fixtureName, key, newData) => {
            cy.readFile(`cypress/fixtures/${fixtureName}.json`).then((data) => {
            data[key] = newData;
            cy.writeFile(`cypress/fixtures/${fixtureName}.json`, data);
            });
          });
          
