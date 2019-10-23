import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Redirect, Link } from 'react-router-dom';

import { asyncActions } from '../../../../core/saga/userData/actions/asyncActions';
import Styles from './MainHeader.module.scss';

const MainHeader = () => {
  const [dropdown, setDropdown] = useState(false);
  const isAuth = useSelector(state => state.dataUserReducer.get('isAuth'));
  const message = useSelector(state => state.dataUserReducer.get('message'));

  const dispatch = useDispatch();

  if (message.length > 0) {
    alert(message);
  }

  if (!isAuth && !sessionStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  const nameDropdounClass = cx(Styles.Header__Dropdown, {
    [Styles.Header__DropdownOpen]: dropdown,
  });

  return (
    <header className={Styles.Header}>
      <div className={Styles.Header__Part}>
        <a href="#" className={Styles.Header__Logo}>Exprts</a>
        <input type="text" className={Styles.Header__Search} placeholder="Поиск экспертов, навыки" />
      </div>
      <div className={Styles.Header__Part}>
        <nav className={Styles.Header__Nav}>
          <ul className={Styles.Header__Items}>
            <li className={Styles.Header__Item}>Эксперты</li>
            <li className={Styles.Header__Item}>Вопросы</li>
            <li className={Styles.Header__Item}>О нас</li>
          </ul>
        </nav>
        <button type="button" className={Styles.Header__Button}>Создать проект</button>
        <div className={Styles.Header__Profile}>
          <button className={Styles.Header__UserButton} type="button" onClick={() => setDropdown(!dropdown)}>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <div className={nameDropdounClass}>
            <Link to="/profile" className={Styles.Header__ProfileLink}>Profile</Link>
            <button type="button" className={Styles.Header__Logout} onClick={() => dispatch(asyncActions.onLogoutUserAsync())}>logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
