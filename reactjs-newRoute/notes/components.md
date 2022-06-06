# Componentes ReactJS

Componentes são funções que retornam HTML. Todos os componentes React são arquivos JSX (JavaScript + XML). 

O React não permite o uso de vários componentes, um a abaixo do outro sem um elemento que os englobe.

Exemplo:

React apresentaria erro
```
<Component />
<Component />
<Component /> 
<Component />
```

Forma correta
```
<div>
<Component />
<Component />
<Component /> 
<Component />
</div>
```

## Default Exports vs Named Exports

**Default exports** permite a importação com qualquer nome.
```
function Post() {
  return <p>Post</p>
}
export default Post;

# poderia importar a função como batata
```

**Named exports** a importação é feita pelo nome declarado na função
```
export function Post() {
  return <p>Post</p>
}

# só posso importar a função como Post.
```