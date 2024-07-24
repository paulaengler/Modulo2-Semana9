[M2S09] Ex. 1 - Formulários com React Hook Form
Crie um formulário React para cadastro de usuários utilizando React Hook Form. O formulário deve incluir campos para nome, email e senha.

[M2S09] Ex.2 - Contexto de autenticação de usuários
Estado:
Crie um estado para armazenar informações sobre a autenticação do usuário. Inicialize esse estado como null e, quando o usuário fizer login, utilize a seguinte estrutura:

image.png

Ao utilizar a API Dummy para autenticação essa será a estrutura retornada pela API.

Métodos:
1º Método de SignIn:
Implemente um método chamado signIn que receba um objeto contendo as credenciais do usuário { username
: 'string', password: 'string' }.
Simule uma autenticação com uma Promise (usando async/await), utilizando a FAKE API da Dummy.
Se a autenticação for bem-sucedida, persista as informações no localStorage para manter o estado entre as sessões do usuário.
‌

2º Método de SignOut:
Implemente um método chamado signOut que não receba nenhum argumento nem retorna um valor. A função deve ser responsável por limpar todas as informações relacionadas à autenticação, tanto no estado quanto no localStorage. Este método é usado para encerrar a sessão do usuário e garantir que ele não tenha mais acesso às informações de autenticação após o logout.

Checklist
Use o createContext para criar um contexto de autenticação.
Crie um componente de contexto para fornecer o contexto de autenticação ao restante do aplicativo.
Implemente as funções e estado no provider e atribua na propriedade de valor do provider.
Crie no mesmo arquivo um hook para utilização desse contexto

[M2S09] Ex. 3 - Validação de formulário
Crie um formulário em React utilizando React Hook Form para gerenciamento do formulário. O formulário deve conter campos para nome, e-mail e idade.

Garanta que todos os campos sejam preenchidos corretamente e que, a idade mínima para cadastro, seja 18 anos.

[M2S09] Ex. 4 - Rotas privadas e contexto
Com o contexto de autenticação criado no segundo exercício, agora é hora de integrá-lo para tornar sua aplicação funcional. Utilize o provedor do contexto em todo o seu aplicativo React para gerenciar a autenticação do usuário. Dentro do 'template', implemente a validação para páginas privadas, permitindo o acesso apenas a usuários autenticados.

Para definir as rotas, utilize o React Router com estrutura de Nested Routes (rotas aninhadas). A rota inicial deve incluir o template e usar o componente Outlet, para que as rotas filhas herdem a estrutura do template.

Além disso, lembre-se de configurar rotas privadas de maneira que usuários não autenticados sejam redirecionados para a página de login ou uma página de acesso restrito. Isso garantirá a segurança e a funcionalidade correta da sua aplicação.

[M2S09] Ex. 5 - Build e Deploy (Publicação do aplicativo)
Neste exercício, você deve publicar o aplicativo que criou com React. Antes de iniciar, organize seu projeto seguindo a estrutura GitFlow.

Master: Representa o ambiente de produção, a versão estável do projeto.

Develop: Representa o ambiente de testes, onde novas funcionalidades são desenvolvidas e testadas.

Para publicar seu aplicativo, utilize uma plataforma como Netlify ou Vercel. Certifique-se de manter ambientes de produção e de teste separados. Configure as "triggers" para que cada branch gere uma versão do aplicativo:

Ambiente de Produção: Vincule à branch master. Certifique-se de que esta versão do aplicativo é estável antes de publicar.

Ambiente de Testes: Vincule à branch develop. Use este ambiente para testar novas funcionalidades antes de mover para produção.

Este exercício ajudará a entender como organizar um projeto com GitFlow e a configurar deploys automáticos para diferentes ambientes.
