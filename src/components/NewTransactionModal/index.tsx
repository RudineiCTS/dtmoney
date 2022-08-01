import Modal from 'react-modal';

interface NewtransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewtransactionModal({isOpen,onRequestClose }:NewtransactionModalProps){
  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h1>Cadastro de transactions</h1>
    </Modal>
  )
}