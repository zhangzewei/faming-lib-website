import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, HashRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createRouters from './routers';

const routes = createRouters();

const Root = () => (
  <Switch>
    {routes.map(route => <Route key={route.path || 'notmatch'} {...route} />)}
  </Switch>
);

ReactDOM.render(
  <HashRouter>
   <Root />
  </HashRouter>, document.getElementById('root'));
registerServiceWorker();
