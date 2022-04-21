import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

// acessibilidade
Modal.setAppElement('#root');

// exportar desta forma não permite mudar o nome da função na importação
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
       <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

       <Dashboard/>

       <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal} 
        >
          <h2>Cadastrar Transação</h2>
       </Modal>

       <GlobalStyle/>
    </>
  );
} 
 