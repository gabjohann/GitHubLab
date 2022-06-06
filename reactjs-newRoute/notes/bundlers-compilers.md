# Bundlers & Compilers

**Compiladores de código**: 
convertem o código em um determinado formato para outro. Em geral, convertem o código que está em uma sintaxe moderna para uma sintaxe em que os navegadores mais antigos suportam. Exemplo: [Babel](https://babeljs.io)

**Empacotador**: 
empacotam os diversos arquivos de código javascript em um único arquivo. Exemplo: [Webpack](https://webpack.js.org/)


**File serving com compiladores**: 
os navegadores começaram a trazer suporte a ESModules nativamente. Com isso surgiram servidores de arquivos que utilizam ESM nativos, ou seja, dispensam o uso de empacotadores e possuem copiladores próprios. Exemplo: [Vite](https://vitejs.dev/) e [Snowpack](https://www.snowpack.dev)