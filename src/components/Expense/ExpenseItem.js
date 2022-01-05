
const ExpenseItem = (props) => {
  const year = props.date.toLocaleString('en-us', { day: '2-digit' });
  const month = props.date.toLocaleString('en-us',{month:'long'})
  const day = props.date.getFullYear()

  return (
    <div className='expense-item'>
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2 className='expense-item__name'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
