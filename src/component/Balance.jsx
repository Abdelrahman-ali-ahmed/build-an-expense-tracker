import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handelBalance } from '../redux/action';

const Balance = () => {
  const balance=useSelector(state=>state.balance);
  const history =useSelector(state=>state.history);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalAmount = history.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
    dispatch(handelBalance(totalAmount));
  }, [history, dispatch]);
  return (
    <div className='balance'>
      
      <h4> Balance: </h4>
      <h1> ${balance}</h1>
      
       </div>
  )
}

export default Balance