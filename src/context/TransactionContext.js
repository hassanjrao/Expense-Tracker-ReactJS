import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

export const TransactionContext = createContext();

const initialState = {
  transactions: [],
  loading:true
};

export const TransactionProvider = (props) => {


  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  // fetch transaction

  async function getTransactions() {
    let response = await fetch("http://127.0.0.1:8000/api/transactions");
    let data = await response.json();

    // console.log(data);

    dispatch({
      type: "GET_TRANSACTIONS",
      payload: data,
    });
  }

  // delete transaction
  async function deleteTransaction(id) {

    let response= await fetch("http://127.0.0.1:8000/api/transactions/"+id,{
      method: "DELETE"
    })
    let data= await response.json();


    dispatch({
      type: "GET_TRANSACTIONS",
      payload: data,
    });
  }

  // add transaction
  async function addTransaction(transaction) {

    const formData=new FormData();

    formData.append("text", transaction.text);
    formData.append("amount",transaction.amount);

    let resonse= await fetch("http://127.0.0.1:8000/api/transactions/store",{
      method: "POST",
      body:formData
    })

    let data= await resonse.json();


    dispatch({
      type: "GET_TRANSACTIONS",
      payload: data,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
        loading: state.loading
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};
