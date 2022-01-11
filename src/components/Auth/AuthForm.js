import { useState, useRef, useContext } from 'react';
import { Toast } from './../../util';
import AuthContext from './../../store/auth-context';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    let successMsg;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtYXP4WgTMIr_5UVQISX57yW6RTJkARHI';
      successMsg = t('success-msg.login');
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtYXP4WgTMIr_5UVQISX57yW6RTJkARHI';
      successMsg = t('success-msg.register');
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
        if (error.message === 'EMAIL_EXISTS') {
          Toast.fire({
            icon: 'warning',
            title: t('error-msg.registered-email'),
          });
          return;
        }

        if (
          isLogin &&
          (error.message === 'INVALID_PASSWORD' || 'EMAIL_NOT_FOUND')
        ) {
          Toast.fire({
            icon: 'warning',
            title: t('error-msg.wrong-password'),
          });
          return;
        }

        if (isLogin || (password.length < 6 || password.length > 20)) {
          Toast.fire({
            icon: 'warning',
            title: t('error-msg.password-setting'),
          });
          return;
        }

        // 如果還有其他錯誤的話，呈現出錯誤訊息
        Toast.fire({
          icon: 'warning',
          title: error.message,
        });
      });
  };

  return (
    <section className='auth__form'>
      <h1>{isLogin ? t('auth.login') : t('auth.sign-up')}</h1>
      <form onSubmit={submitHandler}>
        <div className='auth__control'>
          <label htmlFor='email'>{t('auth.email')}</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div className='auth__control'>
          <label htmlFor='password'>{t('auth.password')}</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            autoComplete='off'
          />
        </div>
        <div className='auth__actions'>
          {!isLoading && (
            <button>
              {isLogin ? t('auth.login') : t('auth.create-new-account')}
            </button>
          )}
          {isLoading && <button disabled>{t('auth.loading')}</button>}
          <button
            type='button'
            className='auth__actions__toggle'
            onClick={switchAuthModeHandler}>
            {isLogin
              ? t('auth.create-new-account')
              : t('auth.already-have-an-account')}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
