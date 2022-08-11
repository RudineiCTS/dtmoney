import { useContext } from "react";


import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";





export function TransactionsTable(){
  const transactions = useContext(TransactionsContext)
 

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
            transactions.map(item =>{
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td 
                  style={item.type === 'income' ? {color: 'green' } : {color: 'red'}}
                  >
                    {new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency:'BRL'
                    }).format(item.amount)
                    }
                  </td>
                  <td>{item.category}</td>
                  <td>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(item.createdAt)
                    )}
                  </td>
              </tr>
              )
  
            }) 
          
          }
          
        </tbody>
      </table>
    </Container>
  );
}