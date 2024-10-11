describe('Testes De Produtos', () => {  

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
        cy.consultorVideo()
        cy.perfumaria()
      });
    

it('Deve verificar se os nomes dos produtos estão ordenados de A-Z', () => {
    cy.checarOrdenacaoNomes('asc');  // Verifica se está em ordem A-Z
  });

  it('Deve verificar se os nomes dos produtos estão ordenados de Z-A', () => {
    cy.checarOrdenacaoNomes('desc'); // Verifica se está em ordem Z-A
  });

  it('Deve verificar se os preços estão ordenados de menor para maior', () => {
    cy.checarOrdenacaoPrecos('asc');  // Verifica se está em ordem crescente
  });

  it('Deve verificar se os preços estão ordenados de maior para menor', () => {
    cy.checarOrdenacaoPrecos('desc'); // Verifica se está em ordem decrescente
  });

})