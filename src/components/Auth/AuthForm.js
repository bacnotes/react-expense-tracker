import { useState, useRef, useContext } from 'react';
import { Toast } from './../../util';
import AuthContext from './../../store/auth-context';
import { useHistory } from 'react-router-dom';
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const authCtx = useContext(AuthContext);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // check data using firebase
    setIsLoading(true);
    let url;
    let successMsg;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtYXP4WgTMIr_5UVQISX57yW6RTJkARHI';
      successMsg = 'Login Success!';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtYXP4WgTMIr_5UVQISX57yW6RTJkARHI';
      successMsg = 'Registration Success!';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application.json',
      },
    })
      .then((response) => {
        setIsLoading(false);
        
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            const message = data.error.message || 'Authentication failed';
            throw new Error(message);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + parseInt(data.expiresIn, 10) * 1000
        );
        authCtx.login(data.idToken, expirationTime);
        Toast.fire({
          icon: 'success',
          title: successMsg,
        });
        history.replace('/');
      })
      .catch((error) => {
        Toast.fire({
          icon: 'warning',
          title: error.message,
        });
      });
  };

  return (
    <section className='auth'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className='auth__control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div className='auth__control'>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            autoComplete='off'
          />
        </div>
        <div className='auth__actions'>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <button disabled>Sending request...</button>}
          <button
            type='button'
            className='auth__actions__toggle'
            onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
