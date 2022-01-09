import ExpenseDate from './ExpenseDate';
import Container from './Container';
const ExpenseItem = (props) => {
  const clickHandler = (e) => {
    props.onDeleteExpense(e.target.id)
  }
  return (
    <li className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2 className='expense-item__name'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount.toLocaleString()}</div>
        <i id={props.id}    
          onClick={clickHandler}
          className='expense-item__delete fas fa-times-circle'></i>
      </div>
    </li>
  );
};

export default ExpenseItem;
