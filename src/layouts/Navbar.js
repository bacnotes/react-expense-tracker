import Container from './../components/Expense/Container';
import { useContext } from 'react';
import AuthContext from './../store/auth-context';

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Container className='navbar'>
      <h1 className='navbar__title'>Expense Tracker</h1>
      <nav>
        <ul>
          {isLoggedIn && (
            <li>
              <button className='navbar__logout' onClick={logoutHandler}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
