# Automação Web (Front)

Este repositório contém cenários de teste automatizados para os seguintes fluxos:

1. Cadastro de Usuário 
   - Deve realizar o cadastro de um novo usuário
   - Deve exibir erro ao usar um e-mail já registrado
   - Deve exibir erro ao usar senhas diferentes nos campos de senha
   - Deve exibir erro ao deixar campos obrigatórios em branco
2. Login
   - Deve realizar o login de um usuário existente
   - Deve exibir uma mensagem de erro ao tentar fazer login com credenciais inválidas
4. Adicionar Produto ao Carrinho
   - Deve adicionar um produto ao carrinho pela página do produto → também presente no cenário 4.a
   - (Busca) Pesquisar e adicionar um produto ao carrinho
   - Navegar à página de categoria e adicionar um produto ao carrinho
5. Finalização de Compra
   - Checkout como convidado
   - Deve exibir erro ao deixar campos obrigatórios em branco

Esses testes foram implementados usando o framework de automação de testes Cypress, seguindo as melhores práticas de código, para garantir a qualidade e confiabilidade do aplicativo.

## Documentação
Para obter detalhes sobre os resultados e a execução dos testes automatizados com Cypress, consulte a [Documentação](https://www.notion.so/Automa-o-Web-Front-faa157ba662245d2980b5708f74d214d)

https://github.com/stephani-ss/cypress/assets/73558275/e9f5d5a3-2d72-4345-be10-7c3dac223efc

## Pré-requisitos

Antes de executar os testes, certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Executando os Testes

### Abrir a interface do Cypress
Para abrir a interface do Cypress e executar os testes interativamente, use o seguinte comando:

   ```shell
   npx cypress open
   ```

### Executar os testes em modo de linha de comando
Para executar todos os testes em modo de linha de comando, use o seguinte comando:
   ```shell
   npx cypress run
   ```

