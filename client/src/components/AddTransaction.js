import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {

  const {addTransaction} = useContext(GlobalContext);

  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);

  const generateId=()=>{
    return(Math.floor(Math.random()*100000))
  }

  const handleSubmit=(e)=>{

    e.preventDefault();
    
    if(text.trim()==='' || amount.trim()==''){
      alert("Please enter valid text and amount");
    }

    else{
      const transaction = {
        id:generateId(),
        text,
        amount: +amount //to convert to number
      }
  
      addTransaction(transaction);
  
      setText('');
      setAmount(0);
    }
    
  }

  return (
    <>
      <h3>Add New Transaction</h3>
        <form id="form">
          <div className="form-control">
            <label >Text</label>
            <input type="text" placeholder="Enter text" id="text" value={text} onChange={(e)=>setText(e.target.value)}/>
          </div>
          <div className="form-control">
            <label >Add Amount<br/>(negative - expense , positive - income)</label>
            <input type="number" id="amount" placeholder="Enter the amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
          </div>
          <div>
            <button className="btn" onClick={handleSubmit}>Add transaction</button>
          </div>
        </form>
    </>
  )
}

export default AddTransaction
