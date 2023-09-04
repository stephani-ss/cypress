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
