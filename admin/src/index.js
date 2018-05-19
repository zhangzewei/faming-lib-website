import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import './normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createRouters from './routers';

const routes = createRouters();

const Root = () => (
  <HashRouter>
    <Switch>
      {routes.map(route => <Route key={route.path || 'notmatch'} {...route} />)}
    </Switch>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();