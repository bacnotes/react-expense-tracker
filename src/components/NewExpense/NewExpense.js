import ExpenseForm from "./ExpenseForm";
import Container from './../Expense/Container'
import { v4 as uuidv4 } from 'uuid';
const NewExpense = (props) => {
  // 父層的資料
  const saveExpenseDataHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: uuidv4()
    };
    props.onAddExpense(expenseData);
  }
  return (
    <Container className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Container>
  );
}

export default NewExpense;
