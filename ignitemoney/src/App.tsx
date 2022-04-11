import { GlobalStyle } from "./styles/global";

// exportar desta forma não permite mudar o nome da função na importação
export function App() {
  return (
    <div className="App">
       <h1>Hello World!</h1>
       <GlobalStyle/>
    </div>
  );
} 
