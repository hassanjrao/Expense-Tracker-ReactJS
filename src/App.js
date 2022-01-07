import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import React from "react";
import { TransactionProvider } from "./context/TransactionContext";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <TransactionProvider>
          <Balance />
          <IncomeExpenses />
          <Transactions />
          <AddTransaction />
        </TransactionProvider>
      </div>
    </div>
  );
}

export default App;
