import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

export default function RemoveIncomeOrExpense(props) {

    const [transactions, setTransactions]=useContext(TransactionContext)

    function remove(id){
        setTransactions(transactions.filter(transaction=>transaction.id!==id))
    }
    return (
        <button className="delete-btn" onClick={()=>remove(props.id)}>x</button>
    )
}
