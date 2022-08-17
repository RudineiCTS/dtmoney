import { useContext } from "react";

import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
  const { transactions } = useTransactions();
  
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income'){
      acc.income += transaction.amount;
      acc.total += transaction.amount;
    }else{
      console.log(transaction.amount)
      acc.outcome += transaction.amount;
      acc.total -=transaction.amount;
    }
    return acc;
  }, {
    income:0,
    outcome:0,
    total:0
  })

  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency:'BRL'
                    }).format(summary.income)
                    }
          </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- 
        {new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency:'BRL'
                    }).format(summary.outcome)
                    }
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                      style:'currency',
                      currency:'BRL'
                    }).format(summary.total)
                    }
        </strong>
      </div>
    </Container>
  );
}