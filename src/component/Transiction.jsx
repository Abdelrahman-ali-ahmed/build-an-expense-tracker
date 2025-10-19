import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Transiction = () => {
  const expanse = useSelector(state => state.expense);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculatedTotal = expanse.reduce((sum, transaction) => sum + transaction.amount, 0);
    let positive= calculatedTotal*-1
    setTotalAmount(positive);
  }, [expanse]);

  return (
    <div className='expanseTotal'>
      <h4> Total expense: </h4>
      <h2>- ${totalAmount}</h2> 
    </div>
  );
};

export default Transiction;
