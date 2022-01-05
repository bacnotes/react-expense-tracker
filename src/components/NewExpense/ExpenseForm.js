import { useState } from 'react';
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      ...userInput,
      date: new Date (userInput.date)
    }
    // to server data
    props.onSaveExpenseData(expenseData);
    // reset form
    setUserInput({
      title: '',
      amount: '',
      date: ''
    })
  }

  return (
    <form onSubmit={onSubmitHandler} action=''>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0'
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
