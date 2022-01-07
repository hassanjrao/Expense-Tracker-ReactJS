import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const [errors, setError] = useState({});

  const { addTransaction,loading } = useContext(TransactionContext);

  const handleFromSubmit = (e) => {
    e.preventDefault();

    if (text === "" && (amount === "" || amount === 0)) {
      setError({
        text: "Text should not be empty",
        amount: "Amount should not be 0 or empty",
      });
    } else if (text === "") {
      setError({ ...errors, text: "Text should not be empty" });
    } else if (amount === "" || amount === 0) {
      setError({ ...errors, amount: "Amount should not be 0 or empty" });
    } else {

      addTransaction({
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      });

      setText("");
      setAmount(0);
    }
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
              setError({...errors,text:""});
            }}
            id="text"
            placeholder="Enter text..."
          />
          <div className="error">{errors.text}</div>
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
              setError({...errors,amount:""});
            }}
            placeholder="Enter amount..."
          />
          <div className="error">{errors.amount}</div>
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
}
