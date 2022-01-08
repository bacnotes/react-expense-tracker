import { Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import AuthPage from './pages/AuthPage';
import ExpensePage from './pages/ExpensePage';
import Navbar from './layouts/Navbar';
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/react-expense-tracker' exact>
          <ExpensePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
