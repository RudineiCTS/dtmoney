import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type transaction = {
  amount: number;
  category: string;
  createdAt: Date;
  id: number;
  title: string;
  type: "income" | "outcome" ;
}

export function TransactionsTable(){

  const [transactions, setTransactions] = useState<transaction>()
  useEffect(()=>{
    api.get('/transactions')
    .then(response => {
      setTransactions(response.data);
    });
    console.log(transactions)
   
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
          {}
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 1200</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 1200</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}