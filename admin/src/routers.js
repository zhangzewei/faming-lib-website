import React from 'react';
import { Redirect } from 'react-router-dom';
import Admin from './containers/Admin';
import NotMatch from './containers/NotMatch';
import Login from './containers/Login';
import Register from './containers/Login/register';

export default () => [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    component: NotMatch
  }
]