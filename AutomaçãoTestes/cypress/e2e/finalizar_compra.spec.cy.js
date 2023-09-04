describe('Fluxo de Finalização de Compra', () => {
  it('Checkout como convidado', () => {
    cy.visit('https://magento2-demo.magebit.com');

    // Navegar para a página de categoria de produtos ou página do produto
    cy.contains('Radiant Tee').click();

    // Esperar pelo elemento de swatch do tamanho e clicar
    cy.get('#option-label-size-157-item-170').click();

    // Esperar pelo elemento de swatch do color e clicar
    cy.get('#option-label-color-93-item-50').click();

    // Adicionar produto ao carrinho
    cy.get('#product-addtocart-button').click();

    // Verificar se o produto foi adicionado ao carrinho
    cy.contains('You added Radiant Tee to your shopping cart.');

    // Navegar para o checkout
    cy.get('.showcart').click();
    cy.wait(1500);

    // Preencher os campos necessários no Checkout
    cy.intercept({
      method: 'GET',
      url: '/static/version1597384256/frontend/Magento/luma/en_US/Magento_Weee/template/checkout/summary/item/price/row_excl_tax.html',
    }).as('loadCheckout')

    cy.get('#top-cart-btn-checkout').click();
    cy.wait('@loadCheckout').then((interception) => {
      // Preencher os campos necessários no Checkout
      cy.get('#customer-email').type('stephaniteste@gmail.com');  
      cy.get('input[name="firstname"]').type('Stephani');  
      cy.get('input[name="lastname"]').type('Soares');  
      cy.get('input[name="street[0]"]').type('QA testes');  
      cy.get('select[name="country_id"]').select('BR');
      cy.get('select[name="region_id"]').select('São Paulo');
      cy.get('input[name="city"]').type('São José dos Campos');
      cy.get('input[name="postcode"]').type('12345');  
      cy.get('input[name="telephone"]').type('12981732016'); 
      // Verifica se há um método de entrega e avança 
      cy.get('[type="radio"]').should('be.checked') 
      cy.get('.continue').click();
      cy.get('.checkout').click();
    })
  });

  it('Deve exibir erro ao deixar campos obrigatórios em branco', () => {
    cy.visit('https://magento2-demo.magebit.com');

   // Navegar para a página de categoria de produtos ou página do produto
    cy.contains('Push It Messenger Bag').click();

    // Adicionar produto ao carrinho
    cy.get('#product-addtocart-button').click();

    // Verificar se o produto foi adicionado ao carrinho
    cy.contains('You added Push It Messenger Bag to your shopping cart.');

   // Deixar campos obrigatórios em branco
   cy.get('#product-addtocart-button').click();

    // Navegar para o checkout
    cy.get('.showcart').click();
    cy.wait(1500);

    // Aguardar o carregamento do Checkout 
    cy.intercept({
      method: 'GET',
      url: '/static/version1597384256/frontend/Magento/luma/en_US/Magento_Weee/template/checkout/summary/item/price/row_excl_tax.html',
    }).as('loadCheckout')

    cy.get('#top-cart-btn-checkout').click();
    cy.wait('@loadCheckout').then((interception) => {
      // Preencher os campos necessários no Checkout
      cy.get('input[name="ko_unique_1"]').click();  
      cy.get('.continue').click();
      cy.contains('This is a required field.').should('have.length', 1); 
    })
  })
});
