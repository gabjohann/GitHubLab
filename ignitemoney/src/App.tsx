import styled from 'styled-components';


const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`

// exportar desta forma não permite mudar o nome da função na importação
export function App() {
  return (
    <div className="App">
       <Title>Hello World!</Title>
    </div>
  );
} 
