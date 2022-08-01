import { Dashboard } from './components/Dashboard';
import {Header} from './components/Header';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal';


Modal.setAppElement("#root")
function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal]=useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionOpenModal(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionOpenModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal 
      isOpen={isNewTransactionOpenModal}
      onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Cadastro de transactions</h1>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
  