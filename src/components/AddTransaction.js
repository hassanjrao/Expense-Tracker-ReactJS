import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionContext);

  const handleFromSubmit = (e) => {
    e.preventDefault();
    
    addTransaction({
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    });

    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleFromSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
}
