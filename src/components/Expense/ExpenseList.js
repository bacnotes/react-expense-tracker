import ExpenseItem from './ExpenseItem';
import Container from './Container';
import ExpensesFilter from './../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

const ExpenseList = (props) => {
  const [year, setYear] = useState(2022);
  const filterHandler = (dropdownYear) => {
    setYear(dropdownYear);
  };

  const filteredList = props.items.filter(
    (el) => el.date.getFullYear() === Number(year)
  );

  let content = <h2 className ='expense-list__notfound'>No expenses found</h2>;

  if (filteredList.length > 0) {
    content = filteredList.map((el) => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date}
      />
    ));
  }

  return (
    <ul>
      <Container className='new-expense'>
        <ExpensesFilter selected={year} onChangeFilter={filterHandler} />
        {content}
      </Container>
    </ul>
  );
};

export default ExpenseList;