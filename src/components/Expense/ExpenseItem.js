import ExpenseDate from './ExpenseDate'
import Container from './Container';
const ExpenseItem = (props) => {

  return (
    <Container className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2 className='expense-item__name'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Container>
  );
};

export default ExpenseItem;
