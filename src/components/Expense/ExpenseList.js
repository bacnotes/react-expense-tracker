import ExpenseItem from './ExpenseItem';
import Container from './Container';
import ExpensesFilter from './../ExpensesFilter/ExpensesFilter';
import ExpenseListChart from './../Expense/ExpenseListChart';

import { useState } from 'react';

const ExpenseList = (props) => {
  const [year, setYear] = useState(2022);

  const filterHandler = (dropdownYear) => {
    setYear(dropdownYear);
  };

  const deleteExpense = (id) => {
    props.onDeleteExpense(id);
  }

  const filteredList = props.items.filter(
    (el) => el.date.getFullYear() === Number(year)
  );

  let content = <h2 className='expense-list__notfound'>No expenses found</h2>;

  if (filteredList.length > 0) {
    content = filteredList.map((el) => (
      <ExpenseItem
        key={el.id}
        id={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date}
        onDeleteExpense={deleteExpense}
      />
    ));
  }

  return (
    <ul>
      <Container className='new-expense'>
        <ExpensesFilter selected={year} onChangeFilter={filterHandler} />
        <ExpenseListChart expenseList={filteredList} />
        {content}
      </Container>
    </ul>
  );
};

export default ExpenseList;
