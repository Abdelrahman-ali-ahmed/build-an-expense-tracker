import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handelAddTransiction, handelBalance, handelExpense, handelHistory, handelIncome } from '../redux/action';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(0);
  const history = useSelector((state) => state.history);
  const income=useSelector(state=>state.income);
  const expense=useSelector(state=>state.expense);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validation
    if (!text.trim()) {
      alert('Please enter a valid description');
      return;
    }
  
    if (!amount) {
      alert('Please enter a valid amount');
      return;
    }
  
    // Create the new transaction
    const newTransaction = {
      id: id,
      text: text.trim(),
      amount: +amount,
    };
  
    
  
    // Increment the id for the next transaction
    setId(id + 1);
  
    // Dispatch the new transaction to Redux
    dispatch(handelAddTransiction(newTransaction));
    dispatch(handelHistory([...history, newTransaction])); // Consider whether this is needed.
  
    // Update balance based on the transaction type
   
if(newTransaction.amount<0){
  
dispatch(handelExpense([...expense,newTransaction]));
}
else{
  dispatch(handelIncome([...income,newTransaction]))
}

    
    setText('');
    setAmount(0);
  };
  

  return (
    <div className='tranisctionAdd'>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
            step="0.01"
          />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
