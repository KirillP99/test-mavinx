import { constants } from './constant';

export const api = {
  registration: data => fetch(`${constants.apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  login: data => fetch(`${constants.apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  logout: () => fetch(`${constants.apiUrl}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('token'),
    },
  }),
  editUser: data => fetch(`${constants.apiUrl}/edit-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  }),
};
