describe('Fluxo de Esqueci minha Senha', () => {
  it('Deve alterar a senha do usuário', () => {
    cy.visit('https://magento2-demo.magebit.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/');

    // Adicionar produto ao carrinho
    cy.get('.secondary').click();

    
  });
});
