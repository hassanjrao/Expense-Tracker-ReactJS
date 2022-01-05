import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Balance=()=>{
    const {transactions}=useContext(TransactionContext)

   
    const amounts=transactions.map(transaction=>transaction.amount)
   
    let balance=0;
    if(amounts.length!==0){
     balance=amounts.reduce((total,amount)=>total+amount)
    }
  

    return(
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">
                $ 
                {
                    balance
                }
              
            </h1>
        </div>
    )
}

export default Balance;