import ExpenseItem from './ExpenseItem';
import Container from './Container'
const ExpenseList = () => {
  const expenses = [
    {
      id: '1',
      title: '早餐店奶茶',
      amount: 20,
      date: new Date(2022, 1, 4),
    },
    { id: '2', title: '悠遊卡月票', amount: 1280, date: new Date(2022, 1, 4) },
    {
      id: '3',
      title: 'Udemy課程',
      amount: 390,
      date: new Date(2022, 1, 4),
    },
    {
      id: '4',
      title: '漢堡跟可樂',
      amount: 80,
      date: new Date(2022, 1, 4),
    },
  ];

  return (
    <Container className='new-expense'>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Container>
  );
}

export default ExpenseList;
