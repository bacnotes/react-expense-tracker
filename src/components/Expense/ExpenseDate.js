import Container from './Container'

const ExpenseDate = (props) => {
   const year = props.date.getFullYear();
   const month = props.date.toLocaleString('en-us', { month: 'long' });
   const day = props.date.toLocaleString('en-us', { day: '2-digit' });
  return (
    <Container className='expense-date'>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </Container>
  );
}

export default ExpenseDate;
