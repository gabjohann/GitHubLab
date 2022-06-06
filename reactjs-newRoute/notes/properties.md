# Propriedades ReactJS

Propriedades são informações qeu podem ser passadas aos componentes.

exemplo:

```
//arquivo App.jsx

import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="Lucas Johann"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
      <Post
        author="Gabriel Fernandes"
        content="Repellendus ipsa exercitationem sit dolores voluptates minima, error ad quam et."
      />
    </div>
  );
}
```
```
// arquivo Post.jsx

export function Post(props) {
  return (
    <div>
    <strong>{props.author}</strong>
    <p>{props.content}</p>
    <div/>
  );
}