import React from 'react';
import { useState } from 'react';
import './scss/main.scss';
import ExpenseList from './components/Expense/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const dummyExpenseList = [
    {
      id: '1',
      title: '早餐店奶茶',
      amount: 20,
      date: new Date(2022, 0, 4),
    },
    { id: '2', title: '悠遊卡月票', amount: 1280, date: new Date(2022, 0, 4) },
    {
      id: '3',
      title: 'Udemy課程',
      amount: 390,
      date: new Date(2022, 0, 4),
    },
    {
      id: '4',
      title: '漢堡跟可樂',
      amount: 80,
      date: new Date(2022, 0, 4),
    },
    {
      id: '5',
      title: 'Mizuno跑鞋',
      amount: 1800,
      date: new Date(2021, 11, 24),
    },
    {
      id: '6',
      title: '定存ETF',
      amount: 10000,
      date: new Date(2021, 10, 30),
    },
    {
      id: '7',
      title: '貓罐罐組合',
      amount: 500,
      date: new Date(2021, 9, 10),
    },
    {
      id: '8',
      title: '電腦',
      amount: 20000,
      date: new Date(2021, 8, 1),
    },
    {
      id: '9',
      title: '定存ETF',
      amount: 3000,
      date: new Date(2021, 7, 1),
    },
  ];

  const [expenseList, setExpenseList] = useState(dummyExpenseList);

  const addExpenseHandler = (formData) => {
    setExpenseList((prev) => {
      return [formData, ...prev];
    });
  };

  const deleteExpenseHandler = (id) => {
    setExpenseList((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList onDeleteExpense={deleteExpenseHandler} items={expenseList} />
    </div>
  );
};

export default App;
