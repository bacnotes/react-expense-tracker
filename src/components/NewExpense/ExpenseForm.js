import { useState } from 'react';
import { Toast } from './../../util';
import { useTranslation } from 'react-i18next';
const ExpenseForm = (props) => {
  const { t } = useTranslation();
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
        title: t('error-msg.no-title'),
      });
      return
    }
    if (expenseData.title.length > 20) {
      Toast.fire({
        icon: 'warning',
        title: t('error-msg.title-length'),
      });
      return;
    }
    if (!expenseData.amount) {
      Toast.fire({
        icon: 'warning',
        title: t('error-msg.no-amount'),
      });
      return
    }

    if (!expenseData.amount > 10000000) {
      Toast.fire({
        icon: 'warning',
        title: t('error-msg.amount-length'),
      });
      return;
    }

    if (!expenseData.date) {
      console.log(expenseData)
      Toast.fire({
        icon: 'warning',
        title: t('error-msg.no-date'),
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
          <label>{t('expense.title')}</label>
          <input
            focus='true'
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>{t('expense.amount')}</label>
          <input
            type='number'
            min='0'
            max='1000000000'
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>{t('expense.date')}</label>
          <input
            type='date'
            onChange={dateChangeHandler}
            value={userInput.date}
            placeholder='Date'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>{t('expense.add')}</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
