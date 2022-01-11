import Container from './../components/Expense/Container';
import { useContext } from 'react';
import AuthContext from './../store/auth-context';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Container className='navbar'>
      <h1 className='navbar__title'>{t('website.title')}</h1>
      <nav>
        <ul className='navbar__lang'>
          <li>
            <button onClick={() => changeLanguage('zh-tw')}>CH</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('ja-JP')}>JP</button>
          </li>
          {isLoggedIn && (
            <li>
              <button className='navbar__logout' onClick={logoutHandler}>
                {t('auth.logout')}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
