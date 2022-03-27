# Ignite - ReactJS

## Módulo 01 - configurando o ambiente

**Aula 01 - Criando a estrutura do projeto**

Instalação das bibliotecas utilizadas:

- Inicialização do repositório: `yarn init -y`

- Instalação do React:  `yarn add react`

- Instalação do React Dom: `yarn add react-dom`

Árvore dde diretórios:
  - src - todo código da aplicação 
  - public - arquivos públicos
<br/>

**Aula 02 - Configurando Babel**

Instalação das bibliotecas utilizadas:

- Instalação do Babel: `yarn add @babel/core @babel/cli @babel/preset-env -D`
- Instalação do preset React para Babel: `yarn add @babel/preset-react -D`
<br/>

**Aula 03 - Configurando Webpack**
- Instalação do Webpack: `yarn add webpack webpack-cli -D`
- Instalação do Babel loader: `yarn add babel-loader -D`
<br/>

**Aula 05 - Servindo HTML estático**
- Instalação do plugin HTML do Webpack: `yarn add html-webpack-plugin -D`
<br />

**Aula 06 - Webpack Dev Server**
- Instalação do Webpack dev server: `yarn add webpack-dev-server -D`
<br/>

**Aula 08 - Ambiente dev e produção**

Configuração do webpack para desenvolvimento vs produção:
- Criação da variável de ambiente para sistemas Unix: `NODE_ENV=production yarn build`

Criação de variáveis ambiente independente do SO:
- Instalação do Cross-env: `yarn add cross-env -D`

- Instalação do loader de estilização: `yarn add style-loader css-loader -D`
<br/>