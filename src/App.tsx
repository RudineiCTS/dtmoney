import { Dashboard } from './components/Dashboard';
import {Header} from './components/Header';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewtransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';
import {  TransactionsProvider } from './hooks/useTransactions';


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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>
      <NewtransactionModal
        isOpen={isNewTransactionOpenModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
  