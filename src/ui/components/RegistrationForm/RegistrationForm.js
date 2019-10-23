import React, { useRef } from 'react';
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncActions } from '../../../core/saga/userData/actions/asyncActions';
import Styles from './RegistrationForm.module.scss';

const RegistrationForm = () => {
  const inputPasswordValue = useRef(null);
  const inputNumberValue = useRef(null);

  const isCreateUser = useSelector(state => state.dataUserReducer.get('isCreateUser'));
  const message = useSelector(state => state.dataUserReducer.get('message'));

  const dispatch = useDispatch();

  if (isCreateUser) {
    alert(message);
    return <Redirect to="/login" />;
  }

  const onSubmit = (values) => {
    dispatch(asyncActions.onCreateUserAsync(values));
  };

  const composeValidators = (...validators) => value => validators.reduce((acc, current) => acc || current(value), undefined);

  const required = (value) => {
    if (!value || value === '') {
      return 'field id required';
    }
    return undefined;
  };

  const validCustomer = (value) => {
    if (inputNumberValue.current.value === '1' && value) {
      return 'you can write name_customer if you select value 2 in role input. If not, you have to keep this input an empty';
    }
    return undefined;
  };

  const validEmail = (value) => {
    if (!/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,64}/.test(value)) {
      return 'enter valid value';
    }
    return undefined;
  };

  const validPhone = (value) => {
    if (!/^380\d{9}$/.test(value)) {
      return 'enter valid phone number';
    }
    return undefined;
  };

  const validRole = (value) => {
    if (value !== '1' && value !== '2') {
      return 'enter 1 if you are provider, enter 2 if you are customer';
    }
  };

  const validPasswordConfirm = (value) => {
    if (value !== inputPasswordValue.current.value) {
      return 'confirm your password';
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
          <h2 className={Styles.Title}>Registration</h2>
          <form className={Styles.Form} onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input type="text" className={Styles.Form__Input} {...input} placeholder="Your name" />
                </div>
              )}
            </Field>
            <Field name="surname" validate={required}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input type="text" className={Styles.Form__Input} {...input} placeholder="Your surname" />
                </div>
              )}
            </Field>
            <Field name="name_customer" validate={validCustomer}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input type="text" className={Styles.Form__Input} {...input} placeholder="Enter you name if you are customer" />
                </div>
              )}
            </Field>
            <Field name="email" type="email" validate={composeValidators(required, validEmail)}>
              {({ input, meta }) => (
                <div>
                  { message.email ? <p className={Styles.Form__ErrorMessage}>{message.email[0]}</p>
                    : meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input {...input} className={Styles.Form__Input} placeholder="Email" />
                </div>
              )}
            </Field>
            <Field name="phone" type="number" validate={composeValidators(required, validPhone)}>
              {({ input, meta }) => (
                <div>
                  { message.phone ? <p className={Styles.Form__ErrorMessage}>{message.phone[0]}</p>
                    : meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input {...input} className={Styles.Form__Input} placeholder="380991234567" />
                </div>
              )}
            </Field>
            <Field name="role" type="number" initialValue="1" validate={validRole}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input ref={inputNumberValue} {...input} className={Styles.Form__Input} />
                </div>
              )}
            </Field>
            <Field name="password" type="password" validate={composeValidators(required, validPassword)}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input {...input} className={Styles.Form__Input} ref={inputPasswordValue} />
                </div>
              )}
            </Field>
            <Field name="password_confirmation" type="password" validate={composeValidators(required, validPasswordConfirm)}>
              {({ input, meta }) => (
                <div>
                  {meta.touched && meta.error && <p className={Styles.Form__ErrorMessage}>{meta.error}</p>}
                  <input {...input} className={Styles.Form__Input} />
                </div>
              )}
            </Field>
            <button type="submit" className={Styles.Form__Button} disabled={invalid}>Sing up</button>
          </form>
        </div>
      )}
    />
  );
};

export default RegistrationForm;
