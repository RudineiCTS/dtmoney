import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';

interface Transaction  {
  amount: number;
  category: string;
  createdAt: string;
  id: number;
  title: string;
  type: "income" | "outcome" ;
}

interface TransactionsProviderProps{
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);


export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(()=>{
    api.get('/transactions')
    .then(response => {
      setTransactions(response.data.transactions)}) 
  },[]);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}