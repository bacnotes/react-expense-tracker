import ExpenseForm from "./ExpenseForm";
import Container from './../Expense/Container'
import { v4 as uuidv4 } from 'uuid';
import { Toast } from './../../util'
const NewExpense = (props) => {
  // 父層的資料
  const saveExpenseDataHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: uuidv4()
    };

    props.onAddExpense(expenseData);
    Toast.fire({
      icon:'success',
      title: 'Added Successfully'
    })
  }
  return (
    <Container className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Container>
  );
}

export default NewExpense;
