import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import MainPage from '../../components/MainPage/Main/Main';
import ProfilePage from '../../components/Profile/ProfilePage/ProfilePage';
import { store } from '../../../core/init/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={RegistrationForm} exact />
      <Route path="/login" component={LoginForm} exact />
      <Route path="/main-page" component={MainPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
    </Router>
  </Provider>
);

export default App;
