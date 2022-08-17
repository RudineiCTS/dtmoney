import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { Container,TransactionTypeContainer, RadioBox  } from './styles';


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';

interface NewtransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewtransactionModal({isOpen,onRequestClose }:NewtransactionModalProps){
  const { createTransactions } = useTransactions();

  const [title, setTitle] =useState('')
  const [value, setValue] =useState(0)
  const [category, setCategory] =useState('')
  const [type, setType] = useState('income');

  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();
      
    await createTransactions({
      title,
      amount: value,
      category,
      type
    })

    setTitle('');
    setCategory('');
    setType('income');
    setValue(0);
    onRequestClose();
  }

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
       <h1>Cadastro de transactions</h1>

       <input type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}       
       />

       <input type="number"
        placeholder="Valor"
        value={value}
        onChange={e => setValue(Number(e.target.value))}   
       />

      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={()=> {setType('income')}}
          isActive={type ==='income'}
          activeColor='green'
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={()=> {setType('outcome')}}
          isActive={type === 'outcome'}
          activeColor='red'
        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

       <input type="text"
        placeholder="Categoria"
        value={category}
        onChange={e => setCategory(e.target.value)}   
       />

       <button type="submit"> Cadastrar </button>
      </Container>
     
    </Modal>
  )
}