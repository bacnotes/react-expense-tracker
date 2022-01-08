import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import './scss/main.scss';
import AuthPage from './pages/AuthPage';
import ExpensePage from './pages/ExpensePage';
import Navbar from './layouts/Navbar';
const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  // 首頁為 originUrl/react-expense-tracker
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          {isLoggedIn ? <Redirect to='/react-expense-tracker' /> : <AuthPage />}
        </Route>
        <Route path='/react-expense-tracker'>
          {isLoggedIn ? <ExpensePage /> : <AuthPage />}
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='*'>
          <AuthPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
