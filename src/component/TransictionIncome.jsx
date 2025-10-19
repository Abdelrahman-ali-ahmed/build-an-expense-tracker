import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TransictionIncome = () => {
  const income = useSelector((state) => state.income);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const calculatedIncome = income.reduce((sum, transaction) => sum + transaction.amount, 0);
    setTotalIncome(calculatedIncome);
  }, [income]);

  return (
    <div className='incomeTotal'>
      <h4> Total Income: </h4>
      <h2>+ ${totalIncome}</h2>
    </div>
  );
};

export default TransictionIncome;
