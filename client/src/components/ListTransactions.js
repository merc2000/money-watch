import React, { useContext ,useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function ListTransactions() {

  const {transactions,deleteTransaction,getTransactions} = useContext(GlobalContext);

  useEffect(()=>{
    getTransactions();
  },[])

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transaction=><Transaction transaction={transaction} deleteTransaction={deleteTransaction} key={transaction._id}/>)}
      </ul>
    </>
  )
}

export default ListTransactions
