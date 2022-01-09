import { useState } from 'react';

import ExpenseList from './../components/Expense/ExpenseList';
import NewExpense from './../components/NewExpense/NewExpense';

const ExpensePage = () => {
    const dummyExpenseList = [
      {
        id: '1',
        title: 'Breakfast',
        amount: 20,
        date: new Date(2022, 0, 4),
      },
      {
        id: '2',
        title: 'traffic card',
        amount: 1280,
        date: new Date(2022, 0, 4),
      },
      {
        id: '3',
        title: 'Udemy course',
        amount: 390,
        date: new Date(2022, 0, 4),
      },
      {
        id: '4',
        title: 'Lunch',
        amount: 80,
        date: new Date(2022, 0, 4),
      },
      {
        id: '5',
        title: 'Mizuno run shoes',
        amount: 1800,
        date: new Date(2021, 11, 24),
      },
      {
        id: '6',
        title: 'ETF',
        amount: 10000,
        date: new Date(2021, 10, 30),
      },
      {
        id: '7',
        title: 'Cat cans',
        amount: 500,
        date: new Date(2021, 9, 10),
      },
      {
        id: '8',
        title: 'Laptop',
        amount: 20000,
        date: new Date(2021, 8, 1),
      },
      {
        id: '9',
        title: 'Stocks',
        amount: 3000,
        date: new Date(2021, 7, 1),
      },
    ];
    let localExpenseList = JSON.parse(localStorage.getItem('expenses')) || dummyExpenseList;
    localExpenseList = localExpenseList.map((expense) => ({
      ...expense,
      date: new Date(expense.date),
    }));
    const [expenseList, setExpenseList] = useState(localExpenseList);
    localStorage.setItem('expenses', JSON.stringify(expenseList));

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
}

export default ExpensePage;
