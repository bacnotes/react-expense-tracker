import Container from './../components/Expense/Container';
import { useContext } from 'react';
import AuthContext from './../store/auth-context';

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn
  return (
    <Container className='navbar'>
      <h1 className='navbar__title'>Expense Tracker</h1>
      <nav>
        <ul>
          {isLoggedIn && (
            <li>
              <button className='navbar__logout'>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
