import React from 'react';
import NotMatch from './containers/NotMatch';
import Client from './containers/Client';

export default () => [
  {
    path: '/',
    component: Client
  },
  {
    component: NotMatch
  }
]