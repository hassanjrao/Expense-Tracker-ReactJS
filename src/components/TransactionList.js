import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import RemoveIncomeOrExpense from "./RemoveIncomeOrExpense";
import Loader from "react-loader-spinner";

export default function TransactionList(props) {
  const { transactions, getTransactions, loading } =
    useContext(TransactionContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={loading}
        />
      </div>
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
