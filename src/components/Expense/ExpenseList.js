import ExpenseItem from './ExpenseItem';
import Container from './Container';
import ExpensesFilter from './../ExpensesFilter/ExpensesFilter';
import ExpenseListChart from './../Expense/ExpenseListChart';
import { Toast } from './../../util';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
const ExpenseList = (props) => {
  const [year, setYear] = useState(2022);
  const { t } = useTranslation();

  const filterHandler = (dropdownYear) => {
    setYear(dropdownYear);
  };

  const deleteExpense = (id) => {
    Toast.fire({
      title: t('toast-msg.delete-confirm'),
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#a8c97f',
      cancelButtonColor: '#e47fb2',
      confirmButtonText: t('toast-msg.confirm'),
      cancelButtonText: t('toast-msg.cancel')
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire(t('toast-msg.deleted'), '', 'success');
        props.onDeleteExpense(id);
      }
    });
  };

  const filteredList = props.items.filter(
    (el) => el.date.getFullYear() === Number(year)
  );

  let content = <h2 className='expense-list__notfound'>{t('filter.no-data')}</h2>;

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
