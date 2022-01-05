import ExpenseForm from "./ExpenseForm";
import Container from './../Expense/Container'
const NewExpense = () => {
  return (
    <Container className='new-expense'>
      <ExpenseForm />
    </Container>
  );
}

export default NewExpense;
