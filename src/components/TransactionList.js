import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import RemoveIncomeOrExpense from "./RemoveIncomeOrExpense";

export default function TransactionList(props) {
  const {transactions} = useContext(TransactionContext);

  return (
    <div>
      {transactions.map((transaction, ind) => (
        <li className={transaction.amount > 0 ? "plus" : "minus"} key={ind}>
          {transaction.text}
          <span>{transaction.amount}</span>
          <RemoveIncomeOrExpense id={transaction.id} />
        </li>
      ))}
    </div>
  );
}
