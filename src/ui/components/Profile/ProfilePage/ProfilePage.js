import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RenderProfileDetails from '../RenderProfileDetails/RenderProfileDetails';
import RenderEditProfileEditForm from '../RenderEditProfileForm/RenderEditProfileForm';
import Styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const user = useSelector(state => state.dataUserReducer.get('currentUser'));

  console.log(user);

  return (
    <div className={Styles.ProfilePage}>
      <Link className={Styles.ProfilePage__LinkReturn} to="/main-page">return to main page</Link>
      <RenderProfileDetails user={user} />
      <RenderEditProfileEditForm user={user} />
    </div>
  );
};

export default ProfilePage;
