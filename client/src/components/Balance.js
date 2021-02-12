import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Balance() {

  const {transactions} = useContext(GlobalContext);

  const moneyFormatter=(num)=>{
    let p = num.toFixed(2).split('.');
    return('$'+p[0].split('').reverse().reduce(function(acc,num,i,orig){
      return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
  }

  const amounts = transactions.map(transaction=>transaction.amount);

  const total = amounts.reduce(((acc,item)=>acc+=item),0);
  
  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h1 id='balance'>{moneyFormatter(total)}</h1>
    </>
  )
}
