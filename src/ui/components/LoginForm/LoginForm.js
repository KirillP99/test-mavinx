import React from 'react';
import { Field, Form } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { asyncActions } from '../../../core/saga/userData/actions/asyncActions';
import Styles from './LoginForm.module.scss';

const LoginForm = () => {
  const isAuth = useSelector(state => state.dataUserReducer.get('isAuth'));
  const message = useSelector(state => state.dataUserReducer.get('message'));

  const dispatch = useDispatch();

  if (isAuth) {
    alert('пользователь успешно авторизовался');
    return <Redirect to="/main-page" />;
  }

  const onSubmit = (values) => {
    dispatch(asyncActions.onLoginUserAsync(values));
  };

  const composeValidators = (...validators) => value => validators.reduce((acc, current) => acc || current(value), undefined);

  const required = (value) => {
    if (!value || value === '') {
      return 'field id required';
    }
    return undefined;
  };

  const validEmail = (value) => {
    if (!/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,64}/.test(value)) {
      return 'enter valid value';
    }
    return undefined;
  };

  const validPassword = (value) => {
    if (value.length < 6) {
      return 'password must be minimum 6 characters';
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <div>
          <h2 className={Styles.Title}>Login</h2>
          <form onSubmit={handleSubmit} className={Styles.LoginForm}>
            <Field name="email" type="email" validate={composeValidators(required, validEmail)}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.LoginForm__ErrorMessage}>{meta.error}</p>}
                  <input {...input} className={Styles.LoginForm__Input} placeholder="Email" />
                </div>
              )}
            </Field>
            <Field name="password" type="password" validate={composeValidators(required, validPassword)}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.LoginForm__ErrorMessage}>{meta.error}</p>}
                  <input {...input} className={Styles.LoginForm__Input} />
                </div>
              )}
            </Field>
            <button type="submit" className={Styles.LoginForm__Button} disabled={invalid}>Sing in</button>
            { message && !/создан/ig.test(message) ? (
              <div className={Styles.LoginForm__Warning}>
                <p className={Styles.LoginForm__ErrorMessage}>{message}, если у вас нет аккаунта, вы можете зарегистироваться </p>
                <Link className={Styles.LoginForm__Link} to="/">Go to registration form</Link>
              </div>
            )
              : null }
          </form>
        </div>
      )}
    />
  );
};

export default LoginForm;
