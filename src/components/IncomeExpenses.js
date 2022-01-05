import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function IncomeExpenses() {
  const {transactions} = useContext(TransactionContext);

  let amounts = transactions.map((transaction) => transaction.amount);
  let income = 0;
  let expense = 0;

  
  if (amounts.length !== 0) {
    const incomeAmount = amounts.filter((amount) => amount >= 0);
    const expenseAmount = amounts.filter((amount) => amount < 0);

    if (incomeAmount.length !== 0) {
      income = incomeAmount.reduce(($total, amount) => $total + amount);
    }
    
    if (expenseAmount.length !== 0) {
      expense = expenseAmount.reduce(($total, amount) => $total + amount);
    }
  }
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +$ {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${-expense}
        </p>
      </div>
    </div>
  );
}
