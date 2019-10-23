import React, { useRef, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Styles from './RenderEditProfileForm.module.scss';
import { asyncActions } from '../../../../core/saga/userData/actions/asyncActions';

const RenderEditProfileEditForm = ({ user }) => {
  const isAuth = useSelector(state => state.dataUserReducer.get('isAuth'));
  const inputNumberValue = useRef(null);
  const dispatch = useDispatch();
  const [termError, setTermError] = useState('');

  if (!isAuth && !sessionStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  const onSubmit = (values) => {
    if ((user.role === 'provider' || user.role === '1') && values.role === '1' && Object.keys(values).length === 1) {
      setTermError('you cant edit profile, fill in the inputs');
    } else {
      dispatch(asyncActions.onEditUserAsync(values));
      setTermError('');
    }
  };

  const validCustomer = (value) => {
    if (inputNumberValue.current.value === '1' && value) {
      return 'you can write name_customer if you select value 2 in role input. If not, you have to keep this input an empty';
    }
    return undefined;
  };

  const validRole = (value) => {
    if (value !== '1' && value !== '2') {
      return 'enter 1 if you are provider, enter 2 if you are customer';
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit} className={Styles.EditForm}>
          <Field name="name">
            {({ input, meta }) => (
              <div>
                {meta.touched && meta.error && <p className={Styles.EditForm__ErrorMessage}>{meta.error}</p>}
                <input type="text" className={Styles.EditForm__Input} {...input} placeholder="Your name" />
              </div>
            )}
          </Field>
          <Field name="surname">
            {({ input, meta }) => (
              <div>
                {meta.touched && meta.error && <p className={Styles.EditForm__ErrorMessage}>{meta.error}</p>}
                <input type="text" className={Styles.EditForm__Input} {...input} placeholder="Your surname" />
              </div>
            )}
          </Field>
          <Field name="name_customer" validate={validCustomer}>
            {({ input, meta }) => (
              <div>
                {meta.touched && meta.error && <p className={Styles.EditForm__ErrorMessage}>{meta.error}</p>}
                <input type="text" className={Styles.EditForm__Input} {...input} placeholder="Enter you name if you are customer" />
              </div>
            )}
          </Field>
          <Field name="role" type="number" initialValue="1" validate={validRole}>
            {({ input, meta }) => (
              <div>
                {meta.touched && meta.error && <p className={Styles.EditForm__ErrorMessage}>{meta.error}</p>}
                <input ref={inputNumberValue} {...input} className={Styles.EditForm__Input} />
              </div>
            )}
          </Field>
          <button type="submit" className={Styles.EditForm__Button} disabled={invalid}>Edit</button>
          <p className={Styles.EditForm__ErrorMessage}>{termError}</p>
        </form>
      )}
    />
  );
};

export default RenderEditProfileEditForm;
