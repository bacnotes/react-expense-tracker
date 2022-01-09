import { useState } from 'react';

import ExpenseList from './../components/Expense/ExpenseList';
import NewExpense from './../components/NewExpense/NewExpense';

const ExpensePage = () => {
    const dummyExpenseList = [
      {
        id: '1',
        title: 'example for new user',
        amount: 20,
        date: new Date(2022, 2, 4),
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
