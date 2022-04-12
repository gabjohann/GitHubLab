import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

// exportar desta forma não permite mudar o nome da função na importação
export function App() {
  return (
    <>
       <Header/>
       <GlobalStyle/>
    </>
  );
} 
 