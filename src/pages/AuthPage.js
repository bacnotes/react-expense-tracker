import AuthForm from './../components/Auth/AuthForm';
import Cover from './../layouts/Cover';
const AuthPage = () => {
  return (
    <div className='auth'>
      <Cover />
      <AuthForm />
    </div>
  );
};

export default AuthPage;
