import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



interface transaction  {
  amount: number;
  category: string;
  createdAt: string;
  id: number;
  title: string;
  type: "income" | "outcome" ;
}

export function TransactionsTable(){

  const [transactions, setTransactions] = useState<transaction[]>()
  useEffect(()=>{
    api.get('/transactions')
    .then(response => {
      setTransactions(response.data)
      
    });
    
   
  },[]);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
          transactions === undefined ?
           <></> :   
           transactions.map(item =>{

            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td 
                style={item.type === 'income' ? {color: 'green' } : {color: 'red'}}
                >
                   R$ {item.amount}
                </td>
                <td>{item.category}</td>
                <td>{item.createdAt.substring(0,10)}</td>
            </tr>
            )

          }) 
          }
          
        </tbody>
      </table>
    </Container>
  );
}