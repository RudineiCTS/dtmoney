import Modal from 'react-modal';
import { Container } from './styles';

interface NewtransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewtransactionModal({isOpen,onRequestClose }:NewtransactionModalProps){
  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
       <h1>Cadastro de transactions</h1>

       <input type="text"
          placeholder="Título"       
       />

       <input type="number"
        placeholder="Valor"
       />

       <input type="text"
        placeholder="Categoria"
       />

       <button type="submit"> Cadastrar </button>
      </Container>
     
    </Modal>
  )
}