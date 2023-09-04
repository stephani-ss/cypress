describe('Executar todos os cenários de testes criados', () => {
  describe('Cadastro de Usuário', () => {
    it('Deve realizar o cadastro de um novo usuário', () => {
      cy.visit('https://magento2-demo.magebit.com');  
  
      // Navegar para a página de registro
      cy.contains('Create an Account').click();
  
      // Gerar um endereço de e-mail aleatório
      const randomEmail = `test${Math.floor(Math.random() * 10000)}@gmail.com`;
  
      // Preencher o formulário de registro
      cy.get('#firstname').type('Stephani');
      cy.get('#lastname').type('Soares');
      cy.get('#email_address').type(randomEmail);
      cy.get('#password').type('Stephani123!');
      cy.get('#password-confirmation').type('Stephani123!');
  
      // Enviar o formulário de registro
      cy.get('.action.submit.primary').click();
  
      // // Verificar se o usuário foi registrado/redirecionado para a página correta
      cy.url().should('be.equal', 'https://magento2-demo.magebit.com/customer/account/')
    })
  
    it('Deve exibir erro ao usar um e-mail já registrado', () => {
      cy.visit('https://magento2-demo.magebit.com');  
    
      // Navegar para a página de registro
      cy.contains('Create an Account').click();
    
      // Preencher o formulário de registro com um e-mail já existente
      cy.get('#firstname').type('Stephani');
      cy.get('#lastname').type('Soares');
      cy.get('#email_address').type('roni_cost@example.com'); // Use um e-mail já registrado
      cy.get('#password').type('Senha123!');
      cy.get('#password-confirmation').type('Senha123!');
    
      // Enviar o formulário de registro
      cy.get('.action.submit.primary').click();
    
      // Verificar se uma mensagem de erro é exibida
      cy.contains('There is already an account with this email address.');
    })
  
    it('Deve exibir erro ao usar senhas diferentes nos campos de senha', () => {
      cy.visit('https://magento2-demo.magebit.com');  
    
      // Navegar para a página de registro
      cy.contains('Create an Account').click();
    
      // Gerar um endereço de e-mail aleatório
      const randomEmail = `test${Math.floor(Math.random() * 10000)}@gmail.com`;
  
      // Preencher o formulário de registro com senhas diferentes
      cy.get('#firstname').type('Stephani');
      cy.get('#lastname').type('Soares');
      cy.get('#email_address').type(randomEmail);
      cy.get('#password').type('Senha123!');
      cy.get('#password-confirmation').type('Senha456!'); // Senhas diferentes
    
      // Enviar o formulário de registro
      cy.get('.action.submit.primary').click();
    
      // Verificar se uma mensagem de erro é exibida
      cy.contains('Please enter the same value again.');
    })
  
    it('Deve exibir erro ao deixar campos obrigatórios em branco', () => {
      cy.visit('https://magento2-demo.magebit.com');  
    
      // Navegar para a página de registro
      cy.contains('Create an Account').click();
    
      // Deixar campos obrigatórios em branco
      cy.get('.action.submit.primary').click();
    
      // Verificar se mensagens de erro são exibidas para campos obrigatórios
      cy.contains('This is a required field');
    })
    });
    describe('Fluxo de Login', () => {
      it('Deve realizar o login de um usuário existente', () => {
        cy.visit('https://magento2-demo.magebit.com'); 
    
        // Navegar para a página de login
        cy.contains('Sign In').click();
    
        // Preencher o formulário de login
        cy.get('#email').type('roni_cost@example.com');  
        cy.get('#pass').type('roni_cost3@example.com');  
    
        // Enviar o formulário de login
        cy.get('#send2').click();
        
        // Verificar mensagem de sucesso
        cy.contains('Welcome');
      });
    
      it('Deve exibir uma mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
        cy.visit('https://magento2-demo.magebit.com'); 
    
        // Navegar para a página de login
        cy.contains('Sign In').click();
    
        // Preencher o formulário de login com credenciais inválidas
        cy.get('#email').type('usuario_invalido@example.com');  
        cy.get('#pass').type('senha_invalida');  
    
        // Enviar o formulário de login
        cy.get('#send2').click();
        
        // Verificar se uma mensagem de erro é exibida
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
      });
    });
    describe('Fluxo de Adicionar Produto ao Carrinho', () => {
      it('Deve adicionar um produto ao carrinho pela página do produto', () => {
        cy.visit('https://magento2-demo.magebit.com');  
    
        // Navegar para a página de categoria de produtos ou página do produto
        cy.contains('Radiant Tee').click(); 
    
       // Esperar pelo elemento de swatch do tamanho e clicar
        cy.get('#option-label-size-157-item-170').click();
    
        // Esperar pelo elemento de swatch do color e clicar
        cy.get('#option-label-color-93-item-50').click();
    
        cy.get('#product-addtocart-button').click();
    
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
        cy.get('#product-addtocart-button').click();
    
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
        cy.get('#product-addtocart-button').click();
    
        // Verificar se o produto foi adicionado ao carrinho
        cy.contains('You added');
      });
    });
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
              
});
