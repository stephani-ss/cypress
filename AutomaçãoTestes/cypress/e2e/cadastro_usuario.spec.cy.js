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
