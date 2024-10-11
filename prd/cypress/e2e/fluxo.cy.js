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
      });
    

      it('Ordenação A-Z', () => {
        cy.consultorVideo('juanito') 
        cy.perfumaria()
        cy.ordenarAZ()
      });
      
      it('Ordenação Z-A', () => {
        cy.consultorVideo('juanito') 
        cy.perfumaria()
        cy.ordenarZA()
      });
      
      it('Ordenação 1-2', () => {
        cy.consultorVideo('juanito') 
        cy.perfumaria()
        cy.ordenar12()
      });
      
      it('Ordenação 2-1', () => {
        cy.consultorVideo('juanito') 
        cy.perfumaria()
        cy.ordenar21()
      });
      

})