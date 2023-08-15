<<<<<<< HEAD
# Avaliação

Versão do Angular: v15.2.6. Versão indicada do node: v14.20.1.

## Requisitos da aplicação

Utilizando a API: https://dummyapi.io/data/v1/, seguindo a documentação: https://dummyapi.io/docs (Endpoints de usuários: https://dummyapi.io/docs/user ).

##### Criar as seguintes paginas:
- Exibição de lista de usuários
- Exibição de usuário único
- Criação de usuários
- Atualização de dados de usuário. 

###### Outras informações:
Todas as paginas precisam estar integradas com a API. 
A API necessita de autenticação via header conforme documentação. 
O "Token" se encontra no e-mail onde essa avaliação foi enviada.
Opcional: bibliotecas de componentes como Angular Material ou Bootstrap.

### Requisito das paginas

**Exibição de lista de usuários:**
Botão de redirecionamento para pagina de criação de usuário.
Lista de usuários com Botão para deletar o usuário, botões para redirecionamento para as paginas de exibição de usuário único e atualização de dados do usuário.

**Exibição de usuário único:**
Exibição do usuário e botão voltar.

**Criação de usuários:**
Formulário de criação de usuário.

**Atualização de dados de usuário:**
Formulário de atualização de dados do usuário pelo ID disponibilizado na lista.
Toda vez que editar os inputs, salvar o formulário, se preocupar com quantidade de requisições para evitar sobre carga do servidor.
=======

# AvaliacaoSantander

## Angular User Management App

Este é um aplicativo Angular para gerenciar informações de usuários usando a API DummyAPI.

## Funcionalidades

- Lista todos os usuários
- Detalhes de um usuário específico, incluindo a opção de exclusão
- Edição de informações de um usuário
- Criação de novos usuários

## Telas

### Lista de Usuários

Nesta tela, você verá a lista de todos os usuários obtidos da API. Cada usuário na lista exibe o nome e o sobrenome.

### Detalhes do Usuário

Ao clicar no nome de um usuário na lista, você será redirecionado para os detalhes completos desse usuário. Além de ver informações detalhadas, você pode editar ou excluir o usuário.

### Edição de Usuário

Ao acessar a página de detalhes do usuário, você pode escolher editar as informações desse usuário. As alterações feitas serão atualizadas na API.

### Criação de Novo Usuário

Você também tem a opção de criar um novo usuário. Preencha os detalhes necessários e clique em "Salvar" para criar um novo usuário.

## Tecnologias Usadas

- Angular
- HTML
- CSS
- HttpClient para chamadas à API

## Instruções de Instalação

1. Clone este repositório para o seu ambiente local.
2. Certifique-se de ter o Angular CLI instalado globalmente (`npm install -g @angular/cli`).
3. Navegue até a pasta do projeto no terminal.
4. Execute `npm install` para instalar as dependências.
5. Execute `ng serve` para iniciar o servidor de desenvolvimento.
6. Acesse `http://localhost:4200` no seu navegador para visualizar o aplicativo.

## Notas Adicionais

- Este aplicativo faz chamadas à API DummyAPI para obter e atualizar informações de usuário. Certifique-se de estar conectado à internet para usar todas as funcionalidades.
- Este aplicativo foi desenvolvido como parte de um projeto de avaliação, utilizando as melhores práticas do Angular.

## Autor

Caique Renan Alves
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> 84cffb6d30734a091707465eedf1d0263404b9e6
