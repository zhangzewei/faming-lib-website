import React from 'react';
import { Redirect } from 'react-router-dom';
import Admin from './containers/Admin';
import Login from './containers/Login';
import Register from './containers/Login/register';
import NotMatch from './containers/NotMatch';
import Client from './containers/Client';

export default () => [
  {
    path: '/',
    exact: true,
    component: Client
  },
  {
    path: '/admin/login',
    exact: true,
    component: Login
  },
  {
    path: '/admin/register',
    exact: true,
    component: Register
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    component: NotMatch,
  }
]