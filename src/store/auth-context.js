import { useState, createContext } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});


const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpiration = new Date(expirationTime).getTime();
  const remainingTime = adjExpiration - currentTime;
  return remainingTime;
};

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token') || null;
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);
    setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
