describe('Fluxo de Adicionar Produto ao Carrinho', () => {
  it('Deve adicionar um produto ao carrinho pela página do produto', () => {
    cy.visit('https://magento2-demo.magebit.com');  

    // Navegar para a página de categoria de produtos ou página do produto
    cy.contains('Radiant Tee').click(); 

   // Esperar pelo elemento de swatch do tamanho e clicar
    cy.get('#option-label-size-157-item-170').click();

    // Esperar pelo elemento de swatch do color e clicar
    cy.get('#option-label-color-93-item-50').click();

    cy.contains('Add to Cart').click();

    // Verificar se o produto foi adicionado ao carrinho
    cy.contains('You added Radiant Tee to your shopping cart.');
  });

  it('Pesquisar e adicionar um produto ao carrinho', () => {
    cy.visit('https://magento2-demo.magebit.com');

    // Realizar uma pesquisa por um produto
    cy.get('#search').type('bag').type('{enter}');

    // Clicar no primeiro resultado da pesquisa para ir à PDP
    cy.get('.product-item').first().click();

    // Adicionar produto ao carrinho
    cy.contains('Add to Cart').click();

    // Verificar se o produto foi adicionado ao carrinho
    cy.contains('You added');
  });

  it('Navegar à página de categoria e adicionar um produto ao carrinho', () => {
    cy.visit('https://magento2-demo.magebit.com');

    // Navegar para a página de categoria de produtos
    cy.contains('Women').click();

    // Clicar em um produto na página de categoria para ir à PDP
    cy.contains('Radiant Tee').click(); 

    // Esperar pelo elemento de swatch do tamanho e clicar
    cy.get('#option-label-size-157-item-170').click();

    // Esperar pelo elemento de swatch do color e clicar
    cy.get('#option-label-color-93-item-50').click();

    // Adicionar produto ao carrinho
    cy.contains('Add to Cart').click();

    // Verificar se o produto foi adicionado ao carrinho
    cy.contains('You added');
  });
});
