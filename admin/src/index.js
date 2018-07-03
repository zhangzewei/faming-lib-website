import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers'
import 'antd/dist/antd.css';
import './normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createRouters from './routers';

const routes = createRouters();

const store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);


const Root = () => (
  <HashRouter>
    <Switch>
      {routes.map(route => <Route key={route.path || 'notmatch'} {...route} />)}
    </Switch>
  </HashRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();