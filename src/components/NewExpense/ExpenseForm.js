import { useState } from 'react';
import { Toast } from './../../util';
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
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
      amount: + userInput.amount,
      date: new Date (userInput.date)
    }
    // data check
    if (!expenseData.title) {
      Toast.fire({
        icon: 'warning',
        title: 'Oops, there is no Title',
      });
      return
    }
    if (expenseData.title.length > 16) {
      Toast.fire({
        icon: 'warning',
        title: 'Title maximum length is 15',
      });
      return;
    }
    if (!expenseData.amount) {
      Toast.fire({
        icon: 'warning',
        title: 'Oops, there is no Amount',
      });
      return
    }
    if (!expenseData.date) {
      Toast.fire({
        icon: 'warning',
        title: 'Oops, there is no Date',
      });
      return
    }
    // to server data
    props.onSaveExpenseData(expenseData);
    // reset form
    setUserInput({
      title: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
    });
  }

  return (
    <form onSubmit={onSubmitHandler} action=''>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            focus="true"
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
            max='1000000000'
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
            placeholder='Date'
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
