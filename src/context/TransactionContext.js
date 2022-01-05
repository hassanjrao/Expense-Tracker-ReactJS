import React, { createContext, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";

export const TransactionContext = createContext();

const initialState = {
  transactions: [
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
  ],
};

export const TransactionProvider = (props) => {
  // const [transactions, setTransactions] = useState(transactionList);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload:  transaction ,
    });
  }

  return (
    <TransactionContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};
