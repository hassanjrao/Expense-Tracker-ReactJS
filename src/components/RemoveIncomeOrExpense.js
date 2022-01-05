import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

export default function RemoveIncomeOrExpense(props) {

    const { deleteTransaction}=useContext(TransactionContext)

    
    return (
        <button className="delete-btn" onClick={()=>deleteTransaction(props.id)}>x</button>
    )
}
