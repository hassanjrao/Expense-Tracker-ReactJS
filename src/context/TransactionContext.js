import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = (props) => {
  const transactionList = [
    {
      id: 1,
      text: "cash",
      amount: 400,
    },
    {
      id: 2,
      text: "salary",
      amount: 4000,
    },
    {
      id: 3,
      text: "tea",
      amount: -200,
    },
    {
      id: 4,
      text: "shuwarma",
      amount: -700,
    },
  ];

  const [transactions, setTransactions] = useState(transactionList);

  return (
    <TransactionContext.Provider value={[transactions, setTransactions]}>
      {props.children}
    </TransactionContext.Provider>
  );
};
