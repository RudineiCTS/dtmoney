import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';

interface Transaction  {
  amount: number;
  category: string;
  createdAt: string;
  id: number;
  title: string;
  type: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps{
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[],
  createTransactions: (transactions: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );



export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])
  //buscando e armazenando valores no estado
  useEffect(()=>{
    api.get('/transactions')
    .then(response => {
      setTransactions(response.data.transactions)}) 
  },[]);


  function createTransactions(transactions:TransactionInput){
    api.post('/transactions', transactions);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

