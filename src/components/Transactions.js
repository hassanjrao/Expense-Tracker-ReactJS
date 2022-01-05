import React from "react";
import { useState } from "react/cjs/react.development";
import TransactionList from "./TransactionList";

export default function Transactions() {
 

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        
        <TransactionList />

      </ul>
    </div>
  );
}
