import ExpenseItem from './ExpenseItem';
import Container from './Container';
const ExpenseList = (props) => {
  return (
    <Container className='new-expense'>
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </Container>
  );
};

export default ExpenseList;
