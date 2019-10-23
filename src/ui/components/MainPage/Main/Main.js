import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainContentList from '../MainContent/MainContent';
import Styles from './Main.module.scss';

const MainPage = () => (
  <div>
    <MainHeader />
    <main className={Styles.Content}>
      <MainContentList />
    </main>
  </div>
);


export default MainPage;
