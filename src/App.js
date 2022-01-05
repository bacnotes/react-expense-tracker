import React from 'react';
import './scss/main.scss';
import ExpenseList from './components/Expense/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react'
const App = () => {
  const dummyExpenseList = [
    {
      id: '1',
      title: '早餐店奶茶',
      amount: 20,
      date: new Date(2022, 1, 4),
    },
    { id: '2', title: '悠遊卡月票', amount: 1280, date: new Date(2022, 1, 4) },
    {
      id: '3',
      title: 'Udemy課程',
      amount: 390,
      date: new Date(2022, 1, 4),
    },
    {
      id: '4',
      title: '漢堡跟可樂',
      amount: 80,
      date: new Date(2022, 1, 4),
    },
  ];

  const [expenseList, setExpenseList] = useState(dummyExpenseList);

  const addExpenseHandler = (formData) => {
    setExpenseList((prev) => {
      return [formData, ...prev];
    });
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenseList} />
    </div>
  );
}

export default App;
