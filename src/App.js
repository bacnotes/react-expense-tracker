import React from 'react';
import './scss/main.scss';
import ExpenseList from './components/Expense/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  return (
    <div>
      <NewExpense/>
      <ExpenseList />
    </div>
  );
}

export default App;
