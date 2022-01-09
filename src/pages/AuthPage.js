import AuthForm from './../components/Auth/AuthForm';
import Cover from './../layouts/Cover';
import Container from './../components/Expense/Container';
const AuthPage = () => {
  return (
    <Container className='auth'>
      <Cover />
      <AuthForm />
    </Container>
  );
};

export default AuthPage;
