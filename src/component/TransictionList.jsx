import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handelExpense, handelHistory, handelIncome } from '../redux/action';

const TransactionList = () => {
  const history = useSelector(state => state.history);
  const income = useSelector(state => state.income);
  const expense = useSelector(state => state.expense);
  const dispatch = useDispatch();

  const handle = (id, amount) => {
    const updatedHistory = history.filter(transaction => transaction.id !== id);
    let updatedState;

    dispatch(handelHistory(updatedHistory));
    if (amount < 0) {
      updatedState = expense.filter(transaction => transaction.id !== id);
      dispatch(handelExpense(updatedState));
    } else {
      updatedState = income.filter(transaction => transaction.id !== id);
      dispatch(handelIncome(updatedState));
    }
  };

  return (
    <div className="list">
      <h3>Transaction List</h3>
      <ul>
        {history.map(item => (
          <li key={item.id}>
            {item.text}
            <p style={{ color: item.amount > 0 ? 'green' : 'red' }}>{ item.amount > 0 ? "+": "" } {item.amount} </p>
            <button onClick={() => handle(item.id, item.amount)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
