import React , {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpense() {

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

  const income = transactions.filter(transaction=>transaction.amount>0).reduce((acc,transaction)=>acc+=transaction.amount,0);

  const expenses = transactions.filter(transaction=>transaction.amount<0).reduce((acc,transaction)=>acc+=transaction.amount,0)*-1;

  return (
    <>
      <div className="res-container ">
          <div >
            <h4>INCOME</h4>
            <p id='income' className='plus money'>{moneyFormatter(income)}</p>
          </div>
          <div >
            <h4>EXPENSE</h4>
            <p id='expense' className='minus money'>{moneyFormatter(expenses)}</p>
          </div>
        </div>
    </>
  )
}

export default IncomeExpense
