import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';

import {useState} from 'react';
import AddTransaction from './components/AddTransaction';
import ListTransactions from './components/ListTransactions';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from './context/GlobalState';

function App() {

  const [transactions,setTransactions] = useState([]);

  const new_transaction = (transaction)=>{
    setTransactions([...transactions,transaction]);
    console.log(transactions);
  }

  const delete_transaction = (id)=>{
    const new_arr = transactions.filter(transaction=>transaction.id !== id);
    setTransactions(new_arr);
  }

  return (
    <GlobalProvider >
      <Header/>
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <ListTransactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
