import { useState, useRef } from 'react';
import { Toast } from './../../util';
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // check data
    if (!email) {
      Toast.fire({
        icon: 'warning',
        title: 'Oops, there is no email',
      });
    }

    if (!password) {
      Toast.fire({
        icon: 'warning',
        title: 'Oops, there is no password',
      });
    }

    if (password.length < 6) {
      Toast.fire({
        icon: 'warning',
        title: 'Oops, minimum password length is 6',
      });
    }

    if (isLogin) {
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtYXP4WgTMIr_5UVQISX57yW6RTJkARHI',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecurityToken: true,
          }),
          headers: {
            'Content-Type': 'application.json',
          },
        }
      ).then((response) => {
        if (response.ok) {
          // ...
          console.log(response)
        } else {
          return response.json().then((data) => {
            const message = data.error.message || 'Authentication failed'
            Toast.fire({
              icon:'warning',
              title: message
            })
          });
        }
      });
    }
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
          <input type='password' id='password' ref={passwordInputRef} />
        </div>
        <div className='auth__actions'>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
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
